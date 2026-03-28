import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCardUserSide = ({ service, username }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/mentor/${username}/${service?._id}`);
  };

  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer rounded-2xl bg-gray-100 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-5"
    >
      <div className="pb-4 text-xl font-bold text-gray-800 sm:text-2xl lg:pb-10">
        {service?.name}
      </div>

      <div className="rounded-2xl bg-gray-200 p-3 transition-colors duration-300 group-hover:bg-gray-300 sm:p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="m-2 h-7 w-7 shrink-0 sm:h-8 sm:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <div className="ml-2 flex flex-col">
              <div className="text-sm font-bold text-gray-800 sm:text-base">
                {service?.duration} mins
              </div>
              <div className="text-xs text-gray-600 sm:text-sm">
                Video Meeting
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex w-fit items-center self-start rounded-full border border-gray-600 transition-all duration-300 group-hover:bg-black group-hover:text-white sm:self-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="m-2 h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div className="text-sm font-bold sm:text-base">
              ₹{service?.price}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="m-2 h-4 w-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardUserSide;
