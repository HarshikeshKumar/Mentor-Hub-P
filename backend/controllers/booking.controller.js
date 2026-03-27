const Razorpay = require("razorpay");
const bookingService = require("../services/booking.service");
const httpStatus = require("../util/httpStatus");
const serviceService = require("../services/service.service");
const config = require("../config");
const emailService = require("../services/email.service");
const zoomService = require("../services/zoom.service");

const initiateBookingAndPayment = async (req, res, next) => {
  const { dateAndTime, serviceId } = req.body;

  const service = await serviceService.getServiceById(serviceId);

  const newBooking = await bookingService.createBooking({
    user: req.user._id,
    mentor: service.mentor,
    dateAndTime,
    service: serviceId,
    price: service.price,
  });

  const razorpay = new Razorpay(config.razorpay);

  const options = {
    amount: service.price * 100,
    currency: "INR",
    receipt: `receipt_order_${newBooking._id}`,
    payment_capture: 1,
    notes: {
      bookingId: newBooking._id,
    },
  };

  const order = await razorpay.orders.create(options);

  res.status(httpStatus.created).json({
    booking: newBooking,
    order,
  });
};

const confirmBooking = async (req, res, next) => {
  try {
    const { bookingId, paymentId, orderId } = req.body;

    const booking = await bookingService.getBookingById(bookingId);

    if (!booking) {
      return res.status(httpStatus.notFound).json({
        success: false,
        message: "Booking not found",
      });
    }

    const zoomMeeting = await zoomService.createMeeting({
      topic: `Mentor Hub Session - ${booking.service.name}`,
      startTime: new Date(booking.dateAndTime).toISOString(),
      duration: booking.service.duration,
    });

    const updatedBooking = await bookingService.updateBookingById(bookingId, {
      status: "confirmed",
      paymentId,
      orderId,
      meetingLink: zoomMeeting.join_url,
    });

    const date = new Date(booking.dateAndTime).toLocaleDateString("en-IN");
    const time = new Date(booking.dateAndTime).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    try {
      await emailService.sendStudentConfirmationMail(
        booking.user.email,
        booking.user.name,
        zoomMeeting.join_url,
        date,
        time,
      );

      await emailService.sendMentorNotificationMail(
        booking.mentor.email,
        booking.mentor.name,
        booking.user.name,
        zoomMeeting.join_url,
        date,
        time,
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(httpStatus.ok).json({
      success: true,
      message: "Booking confirmed successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error confirming booking:", error);
    return res.status(httpStatus.internalServerError).json({
      success: false,
      message: "Something went wrong while confirming booking",
    });
  }
};

const getBookings = async (req, res, next) => {
  const bookings = await bookingService.getUsersBooking(req.user._id);
  res.status(httpStatus.ok).json({ success: true, bookings });
};

const getMentorBookings = async (req, res, next) => {
  const bookings = await bookingService.getMentorBookings(req.user._id);
  res.status(httpStatus.ok).json({ success: true, bookings });
};

module.exports = {
  initiateBookingAndPayment,
  confirmBooking,
  getBookings,
  getMentorBookings,
};
