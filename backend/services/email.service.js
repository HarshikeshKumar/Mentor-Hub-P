const path = require("path");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const config = require("../config");

const transport = nodemailer.createTransport({
  host: config.email.host,
  port: Number(config.email.port),
  secure: false,
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass,
  },
});

transport.verify((err, success) => {
  if (err) {
    console.error("Email server error:", err);
  } else {
    console.log("Connected to email server");
  }
});

const sendEmail = async (to, subject, html) => {
  try {
    await transport.sendMail({
      from: config.email.from,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Email send failed:", error);
  }
};

// STUDENT MAIL
const sendStudentConfirmationMail = async (
  to,
  name,
  meetingLink,
  date,
  time,
) => {
  const subject = "Booking Confirmed 🎉";

  const html = `
    <div style="font-family: Arial;">
      <h2 style="background: green; color: white; padding: 10px;">
        Payment Successful!
      </h2>

      <p>Hi ${name},</p>

      <p>Your booking is confirmed.</p>

      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>

      <p>
        <a href="${meetingLink}" style="color: blue;">
          Join Meeting
        </a>
      </p>

      <p>Thanks,<br/>MentorHub</p>
    </div>
  `;

  return sendEmail(to, subject, html);
};

// MENTOR MAIL
const sendMentorNotificationMail = async (
  to,
  mentorName,
  studentName,
  meetingLink,
  date,
  time,
) => {
  const subject = "New Booking Received 📅";

  const html = `
    <div style="font-family: Arial;">
      <h2 style="background: #2563eb; color: white; padding: 10px;">
        New Booking
      </h2>

      <p>Hi ${mentorName},</p>

      <p>You got a new booking from <b>${studentName}</b>.</p>

      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>

      <p>
        <a href="${meetingLink}" style="color: blue;">
          Join Meeting
        </a>
      </p>

      <p>Be ready on time 👍</p>

      <p>MentorHub Team</p>
    </div>
  `;

  return sendEmail(to, subject, html);
};

module.exports = {
  sendStudentConfirmationMail,
  sendMentorNotificationMail,
};
