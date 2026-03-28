// import React from "react";
// import { FaUniversity } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const MentorCard = ({ mentor }) => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Function to handle card click
//   const onCardClick = () => {
//     // Navigate to MentorDetails page, passing the username
//     navigate(`/mentor/${mentor?.username}`);
//   };

//   return (
//     <div
//       onClick={onCardClick} // Trigger navigation on click
//       className="transition bg-white border rounded-lg shadow-md cursor-pointer hover:shadow-lg"
//     >
//       <div className="relative group">
//         <img
//           src={
//             mentor?.photoUrl ||
//             `https://ui-avatars.com/api?name=${mentor?.name}`
//           }
//           alt={`${mentor?.name}'s avatar`}
//           className="object-cover w-full h-64 rounded-t-lg "
//         />
//         <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-70"></div>
//         <div className="absolute bottom-0 left-0 w-full p-2 text-center text-white">
//           <h4 className="text-lg font-bold">
//             {mentor?.profile?.title || "Title"}
//           </h4>
//         </div>
//       </div>
//       <div className="p-4 ">
//         <div className="m4 ">
//           <h3 className="py-2 text-xl font-bold">{mentor?.name || "Name"}</h3>
//           <div className="flex gap-x-2">
//             <FaUniversity />
//             <p className="text-sm text-gray-500">
//               {mentor?.profile?.college || "College"}
//             </p>
//           </div>
//         </div>
//         <div className="flex mt-2 space-x-2">
//           {mentor?.profile?.tags.map((tag, index) => {
//             return (
//               <span
//                 key={index}
//                 className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full"
//               >
//                 {tag || "Tag"}
//               </span>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorCard;

// import React from "react";
// import { FaUniversity } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const MentorCard = ({ mentor }) => {
//   const navigate = useNavigate();

//   const onCardClick = () => {
//     navigate(`/mentor/${mentor?.username}`);
//   };

//   return (
//     <div
//       onClick={onCardClick}
//       className="cursor-pointer overflow-hidden rounded-lg border bg-white shadow-md transition hover:shadow-lg"
//     >
//       {/* Image Section */}
//       <div className="relative group">
//         <img
//           src={
//             mentor?.photoUrl ||
//             `https://ui-avatars.com/api?name=${mentor?.name}`
//           }
//           alt={`${mentor?.name}'s avatar`}
//           className="h-48 w-full object-cover sm:h-56 md:h-60 lg:h-64"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition group-hover:opacity-60"></div>

//         <div className="absolute bottom-0 left-0 w-full p-2 text-center text-white">
//           <h4 className="text-sm font-semibold sm:text-base md:text-lg">
//             {mentor?.profile?.title || "Title"}
//           </h4>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-3 sm:p-4">
//         <h3 className="text-base font-bold sm:text-lg md:text-xl">
//           {mentor?.name || "Name"}
//         </h3>

//         <div className="mt-1 flex items-center gap-x-2 text-gray-500">
//           <FaUniversity className="text-sm" />
//           <p className="text-xs sm:text-sm">
//             {mentor?.profile?.college || "College"}
//           </p>
//         </div>

//         {/* Tags */}
//         <div className="mt-2 flex flex-wrap gap-2">
//           {mentor?.profile?.tags?.map((tag, index) => (
//             <span
//               key={index}
//               className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-700 sm:text-xs"
//             >
//               {tag || "Tag"}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorCard;

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
