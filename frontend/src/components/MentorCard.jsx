import React from "react";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    if (mentor?.username) {
      navigate(`/mentor/${mentor.username}`);
    }
  };

  return (
    <div
      onClick={onCardClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={
            mentor?.photoUrl ||
            `https://ui-avatars.com/api?name=${mentor?.name || "Mentor"}&background=0D8ABC&color=fff`
          }
          alt={`${mentor?.name || "Mentor"}'s avatar`}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56 md:h-60 lg:h-64"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80"></div>

        <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-white">
          <h4 className="text-sm font-semibold sm:text-base md:text-lg">
            {mentor?.profile?.title || "Mentor"}
          </h4>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5">
        <h3 className="line-clamp-1 text-lg font-bold text-gray-800 sm:text-xl">
          {mentor?.name || "Name"}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <FaUniversity className="shrink-0 text-sm sm:text-base" />
          <p className="line-clamp-1 text-xs sm:text-sm">
            {mentor?.profile?.college || "College"}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {mentor?.profile?.tags?.length > 0 ? (
            mentor.profile.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700 transition hover:bg-gray-300 sm:text-xs"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-500 sm:text-xs">
              No tags available
            </span>
          )}
        </div>

        {/* Button Look Section */}
        <div className="mt-5">
          <button
            type="button"
            className="w-full rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-purple-700"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
