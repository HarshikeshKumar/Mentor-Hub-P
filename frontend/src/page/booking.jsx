// import React, { useEffect, useState } from "react";
// import { Card, Button, Spin } from "antd";
// import { FaClock } from "react-icons/fa";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { useNavigate, useParams } from "react-router-dom";
// import service from "../apiManger/service";
// import availability from "../apiManger/availability";
// import moment from "moment";
// import booking from "../apiManger/booking";
// import handlePayment from "../components/Checkout";
// import Layout from "../components/Layout";

// const Booking = () => {
//   const navigate = useNavigate();
//   const { username, id } = useParams();
//   const [serviceData, setServiceData] = useState(null);
//   const [mentorAvailability, setMentorAvailability] = useState([]); // null ke jagah initial val-->[]
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [loadingService, setLoadingService] = useState(false);
//   const [loadingAvailability, setLoadingAvailability] = useState(false);

//   const getServiceData = async () => {
//     setLoadingService(true);
//     const res = await service.getServiceById(id);
//     setServiceData(res?.data?.service);
//     getMentorAvailability(
//       res?.data?.service?.mentor,
//       res?.data?.service?.duration,
//     );
//     setLoadingService(false);
//   };

//   const getMentorAvailability = async (id, duration) => {
//     setLoadingAvailability(true);
//     const res = await availability.getMentorAvailability(id, duration);
//     // console.log("Mentor Availability:", res?.data?.availability); // Add.....................
//     setMentorAvailability(res?.data?.availability);
//     setLoadingAvailability(false);
//   };

//   useEffect(() => {
//     getServiceData();
//   }, [id]);

//   const onBookServiceClick = async () => {
//     try {
//       const res = await booking.bookService({
//         serviceId: id,
//         dateAndTime: selectedSlot,
//       });

//       const bookingId = res?.data?.booking?._id;
//       const orderId = res?.data?.order?.id;

//       handlePayment(orderId, async (response) => {
//         await booking.confirmBooking({
//           bookingId,
//           paymentId: response.razorpay_payment_id,
//           orderId: response.razorpay_order_id,
//         });

//         navigate("/success");
//       });
//     } catch (error) {
//       console.error("Booking failed:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container flex flex-col p-4 mx-auto md:flex-row md:space-x-4">
//         <div className=" md:w-1/3">
//           <Card className="text-white bg-blue-600">
//             <div className="flex items-center mb-4">
//               <AiOutlineArrowLeft className="mr-2 text-xl" />
//               <h2 className="text-2xl font-bold">{serviceData?.name}</h2>
//             </div>
//             <div className="flex items-center mb-2">
//               <MdOutlineCurrencyRupee className="mr-2 text-xl " />
//               <span>{serviceData?.price}</span>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaClock className="mr-2" />
//               <span>{serviceData?.duration} mins meeting</span>
//             </div>
//             <p>{serviceData?.description}</p>
//           </Card>
//         </div>
//         <div className="md:w-2/3">
//           <Card className="p-4">
//             <h3 className="mb-2 text-lg font-semibold">Select Date</h3>
//             {loadingAvailability ? (
//               <div className="flex items-center justify-center h-full">
//                 <Spin size="large" />
//               </div>
//             ) : (
//               <div className="flex gap-2 my-6">
//                 {Array.isArray(mentorAvailability) &&
//                   mentorAvailability?.map((item, index) => (
//                     <div
//                       onClick={() => {
//                         setActiveIndex(index);
//                         setSelectedSlot(null);
//                       }}
//                       key={item.id}
//                       className={`p-2 rounded-md cursor-pointer ${
//                         activeIndex === index ? "bg-blue-600" : ""
//                       }`}
//                     >
//                       {moment(item.date).format("DD MMM")}
//                     </div>
//                   ))}
//               </div>
//             )}

//             {activeIndex !== null && (
//               <>
//                 <h3 className="mb-2 text-lg font-semibold">Select Time Slot</h3>
//                 <div className="flex gap-2 my-6 overflow-x-auto">
//                   {mentorAvailability[activeIndex]?.slots?.map((slot) => (
//                     <div
//                       onClick={() => setSelectedSlot(slot.fullStart)}
//                       key={slot.id}
//                       className={`p-2 rounded-md cursor-pointer ${
//                         selectedSlot === slot.fullStart ? "bg-blue-600" : ""
//                       }`}
//                     >
//                       {slot.startTime}
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}

//             <Button
//               disabled={selectedSlot === null}
//               type="primary"
//               block
//               size="large"
//               onClick={onBookServiceClick}
//             >
//               Book Session
//             </Button>
//           </Card>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Booking;

import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { FaClock } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import service from "../apiManger/service";
import availability from "../apiManger/availability";
import moment from "moment";
import booking from "../apiManger/booking";
import handlePayment from "../components/Checkout";
import Layout from "../components/Layout";

const Booking = () => {
  const navigate = useNavigate();
  const { username, id } = useParams();

  const [serviceData, setServiceData] = useState(null);
  const [mentorAvailability, setMentorAvailability] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loadingService, setLoadingService] = useState(false);
  const [loadingAvailability, setLoadingAvailability] = useState(false);

  const getServiceData = async () => {
    try {
      setLoadingService(true);
      const res = await service.getServiceById(id);
      const fetchedService = res?.data?.service;
      setServiceData(fetchedService);

      if (fetchedService?.mentor && fetchedService?.duration) {
        getMentorAvailability(fetchedService.mentor, fetchedService.duration);
      }
    } catch (error) {
      console.error("Failed to fetch service:", error);
    } finally {
      setLoadingService(false);
    }
  };

  const getMentorAvailability = async (mentorId, duration) => {
    try {
      setLoadingAvailability(true);
      const res = await availability.getMentorAvailability(mentorId, duration);
      setMentorAvailability(res?.data?.availability || []);
    } catch (error) {
      console.error("Failed to fetch availability:", error);
    } finally {
      setLoadingAvailability(false);
    }
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  const onBookServiceClick = async () => {
    try {
      const res = await booking.bookService({
        serviceId: id,
        dateAndTime: selectedSlot,
      });

      const bookingId = res?.data?.booking?._id;
      const orderId = res?.data?.order?.id;

      handlePayment(orderId, async (response) => {
        await booking.confirmBooking({
          bookingId,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
        });

        navigate("/success");
      });
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <Layout>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:gap-6 lg:px-8">
        {/* Left Card */}
        <div className="w-full lg:w-1/3">
          <Card className="rounded-xl !bg-blue-600 text-white shadow-md">
            {loadingService ? (
              <div className="flex justify-center py-10">
                <Spin size="large" />
              </div>
            ) : (
              <>
                <div className="mb-4 flex items-center">
                  <button
                    onClick={() => navigate(-1)}
                    className="mr-2 rounded p-1 hover:bg-white/10"
                  >
                    <AiOutlineArrowLeft className="text-xl" />
                  </button>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {serviceData?.name}
                  </h2>
                </div>

                <div className="mb-2 flex items-center text-sm sm:text-base">
                  <MdOutlineCurrencyRupee className="mr-2 text-xl" />
                  <span>{serviceData?.price}</span>
                </div>

                <div className="mb-4 flex items-center text-sm sm:text-base">
                  <FaClock className="mr-2" />
                  <span>{serviceData?.duration} mins meeting</span>
                </div>

                <p className="text-sm leading-6 sm:text-base">
                  {serviceData?.description}
                </p>
              </>
            )}
          </Card>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-2/3">
          <Card className="rounded-xl p-2 shadow-md sm:p-4">
            <h3 className="mb-3 text-lg font-semibold text-gray-800 sm:text-xl">
              Select Date
            </h3>

            {loadingAvailability ? (
              <div className="flex min-h-[150px] items-center justify-center">
                <Spin size="large" />
              </div>
            ) : (
              <div className="my-4 flex gap-2 overflow-x-auto pb-2">
                {Array.isArray(mentorAvailability) &&
                  mentorAvailability.map((item, index) => (
                    <div
                      key={item.id || index}
                      onClick={() => {
                        setActiveIndex(index);
                        setSelectedSlot(null);
                      }}
                      className={`min-w-fit cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition ${
                        activeIndex === index
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {moment(item.date).format("DD MMM")}
                    </div>
                  ))}
              </div>
            )}

            {activeIndex !== null && (
              <>
                <h3 className="mb-3 mt-6 text-lg font-semibold text-gray-800 sm:text-xl">
                  Select Time Slot
                </h3>

                <div className="my-4 flex gap-2 overflow-x-auto pb-2">
                  {mentorAvailability[activeIndex]?.slots?.map(
                    (slot, index) => (
                      <div
                        key={slot.id || index}
                        onClick={() => setSelectedSlot(slot.fullStart)}
                        className={`min-w-fit cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition ${
                          selectedSlot === slot.fullStart
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {slot.startTime}
                      </div>
                    ),
                  )}
                </div>
              </>
            )}

            <div className="mt-6">
              <Button
                disabled={selectedSlot === null}
                type="primary"
                block
                size="large"
                onClick={onBookServiceClick}
              >
                Book Session
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
