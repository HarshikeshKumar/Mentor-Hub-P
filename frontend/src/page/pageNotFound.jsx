import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-[#F5EEE9] to-[#ede9fe]">
        <div className="w-full max-w-md p-6 text-center bg-white shadow-xl rounded-3xl sm:p-8">
          {/* 404 */}
          <h1 className="text-5xl font-extrabold text-purple-700 sm:text-6xl md:text-7xl">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
            Oops! Page not found
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, you can go back to the homepage.
          </p>

          {/* Button */}
          <button
            onClick={goHome}
            className="px-6 py-3 mt-6 text-sm font-semibold text-white transition duration-300 bg-purple-700 rounded-xl shadow-md sm:text-base hover:bg-purple-800 hover:-translate-y-1"
          >
            Back to Home
          </button>

          {/* Optional small text */}
          <p className="mt-6 text-xs text-gray-400 sm:text-sm">
            Error code: 404 | Page not found
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
