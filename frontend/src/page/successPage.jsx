// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";

// const SuccessPage = () => {
//   const [countdown, setCountdown] = useState(10); // Initialize the countdown at 10 seconds
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Set up the countdown timer
//     const timer = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//     }, 1000);

//     // If the countdown reaches 0, navigate to the home page (or any other route)
//     if (countdown === 0) {
//       navigate("/");
//     }

//     // Clear the interval when the component unmounts
//     return () => clearInterval(timer);
//   }, [countdown, navigate]);

//   return (
//     <Layout>
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="p-10 text-center bg-white rounded shadow-lg">
//           <h1 className="text-3xl font-bold text-green-500">Thank You!</h1>
//           <p className="mt-4 text-lg">Your booking has been confirmed.</p>
//           <p className="mt-2 text-gray-600">
//             The meeting link will be shared over your registered email.
//           </p>

//           {/* Animation and Countdown */}
//           <div className="mt-8">
//             <div className="text-2xl font-semibold text-blue-500">
//               Redirecting in {countdown} seconds...
//             </div>

//             {/* Example of a simple animated circle */}
//             <div className="relative w-16 h-16 mt-4 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
//           </div>

//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-400"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SuccessPage;

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
