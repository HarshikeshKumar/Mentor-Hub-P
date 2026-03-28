import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const SuccessPage = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="w-full max-w-md p-6 text-center bg-white shadow-xl rounded-3xl sm:p-8">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
            <span className="text-3xl text-green-600">✓</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-green-600 sm:text-3xl">
            Thank You!
          </h1>

          {/* Message */}
          <p className="mt-3 text-sm text-gray-700 sm:text-base">
            Your booking has been confirmed successfully.
          </p>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            The meeting link will be shared on your registered email.
          </p>

          {/* Countdown */}
          <div className="mt-6">
            <p className="text-base font-semibold text-blue-500 sm:text-lg">
              Redirecting in {countdown}s...
            </p>

            {/* Loader */}
            <div className="flex justify-center mt-4">
              <div className="w-12 h-12 border-4 border-blue-200 rounded-full border-t-blue-500 animate-spin"></div>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 mt-6 text-sm font-semibold text-white transition duration-300 bg-blue-500 rounded-xl hover:bg-blue-600 hover:-translate-y-1 sm:text-base"
          >
            Back to Home
          </button>

          {/* Extra text */}
          <p className="mt-4 text-xs text-gray-400 sm:text-sm">
            You will be redirected automatically
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
