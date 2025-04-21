const express = require("express");
const router = express.Router();
const webhookController = require("../../controllers/webhook.controller");
const asyncHandler = require("../../helper/asyncHandler");
router.post("/razorpay", asyncHandler(webhookController.handleRazorpayWebhook));
// router.post(
//   "/razorpay",
//   express.raw({ type: "application/json" }), // 👈 Razorpay webhook fix
//   asyncHandler(webhookController.handleRazorpayWebhook)
// );

module.exports = router;
