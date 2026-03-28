// import React, { useEffect, useState } from "react";
// import { Spin } from "antd"; // Import the Spin component from antd
// import useMentorStore from "../store/mentors";
// import MentorCard from "../components/MentorCard";
// import mentorAPI from "../apiManger/mentor";
// import DashboardNavbar from "../components/DashboardNavbar";
// import Layout from "../components/Layout";

// const AllMentors = () => {
//   const { mentorsData, setMentorsData } = useMentorStore();
//   const [loading, setLoading] = useState(false); // State for tracking loading status

//   // Fetch mentors when the component mounts if mentorsData is empty
//   useEffect(() => {
//     const fetchAllMentors = async () => {
//       setLoading(true); // Start loading
//       try {
//         const response = await mentorAPI.getAllMentors();
//         const allMentors = response?.data?.mentors || [];
//         setMentorsData(allMentors); // Store all mentors in the Zustand store
//       } catch (error) {
//         console.error("Error fetching mentors:", error);
//       } finally {
//         setLoading(false); // Stop loading once the request completes
//       }
//     };

//     if (mentorsData.length === 0) {
//       fetchAllMentors();
//     }
//   }, [mentorsData, setMentorsData]);

//   return (
//     <Layout>
//       <div className="container mx-auto my-10">
//         <h2 className="mb-8 text-3xl font-bold text-center">
//           Book Your Session Now
//         </h2>

//         <div className="flex justify-center mb-20">
//           <input
//             className="w-1/2 p-2 border border-gray-400 rounded outline-none"
//             type="text"
//             placeholder="Search here..."
//           />
//         </div>

//         {/* Loading Indicator */}
//         {loading ? (
//           <div className="flex justify-center my-10">
//             <Spin size="large" />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
//             {mentorsData.length > 0 ? (
//               mentorsData.map((mentor) => (
//                 <MentorCard key={mentor?._id} mentor={mentor} />
//               ))
//             ) : (
//               <p className="col-span-4 text-center">No mentors available.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default AllMentors;

import React, { useEffect, useMemo, useState } from "react";
import { Spin } from "antd";
import useMentorStore from "../store/mentors";
import MentorCard from "../components/MentorCard";
import mentorAPI from "../apiManger/mentor";
import Layout from "../components/Layout";

const AllMentors = () => {
  const { mentorsData, setMentorsData } = useMentorStore();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAllMentors = async () => {
      setLoading(true);
      try {
        const response = await mentorAPI.getAllMentors();
        const allMentors = response?.data?.mentors || [];
        setMentorsData(allMentors);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false);
      }
    };

    if (mentorsData.length === 0) {
      fetchAllMentors();
    }
  }, [mentorsData, setMentorsData]);

  const filteredMentors = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) return mentorsData;

    return mentorsData.filter((mentor) => {
      const name = mentor?.name?.toLowerCase() || "";
      const title = mentor?.profile?.title?.toLowerCase() || "";
      const college = mentor?.profile?.college?.toLowerCase() || "";
      const tags = mentor?.profile?.tags?.join(" ").toLowerCase() || "";

      return (
        name.includes(term) ||
        title.includes(term) ||
        college.includes(term) ||
        tags.includes(term)
      );
    });
  }, [mentorsData, searchTerm]);

  return (
    <Layout>
      <div className="mx-auto my-8 w-full max-w-7xl px-4 sm:my-10 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl md:text-4xl">
          Book Your Session Now
        </h2>

        <div className="mb-10 flex justify-center sm:mb-14 md:mb-20">
          <input
            className="w-full rounded border border-gray-400 p-3 outline-none focus:border-purple-500 sm:w-3/4 md:w-2/3 lg:w-1/2"
            type="text"
            placeholder="Search by name, title, college, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="my-10 flex justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <MentorCard key={mentor?._id} mentor={mentor} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No mentors found.
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllMentors;
