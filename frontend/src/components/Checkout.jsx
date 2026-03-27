import { RAZORPAY_KEY_ID } from "../const/env.const";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async (orderId, handler, onFailure) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const paymentObject = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    order_id: orderId,

    handler: function (response) {
      console.log("Payment Success:", response);
      handler?.(response); //  success callback
    },

    modal: {
      ondismiss: function () {
        console.log("Payment popup closed");
        onFailure?.(); //  optional fail callback
      },
    },

    theme: {
      color: "#2563eb",
    },
  });

  paymentObject.open();
};

export default handlePayment;
