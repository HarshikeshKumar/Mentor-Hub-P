// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import mentorAPI from "../apiManger/mentor";
// import { Spin } from "antd";
// import {
//   AiFillFacebook,
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
// } from "react-icons/ai";
// import ServiceCardUserSide from "../components/ServiceCardUserSide";
// import Layout from "../components/Layout";
// import { BiErrorAlt } from "react-icons/bi";

// const MentorDetails = () => {
//   const { username } = useParams();
//   const [mentor, setMentor] = useState();
//   const [services, setServices] = useState();
//   const [mentorLoading, setMentorLoading] = useState(true);
//   const [servicesLoading, setServicesLoading] = useState(true);

//   useEffect(() => {
//     const fetchMentorDetails = async () => {
//       try {
//         setMentorLoading(true);
//         const response = await mentorAPI.getMentorByUsername(username);
//         setMentor(response?.data?.mentor);
//         setMentorLoading(false);
//         setServices(response?.data?.services);
//         setServicesLoading(false);
//       } catch (error) {
//         console.error("Error fetching mentor details:", error);
//         setMentorLoading(false);
//         setServicesLoading(false);
//       }
//     };

//     fetchMentorDetails();
//   }, [username]);

//   return (
//     <Layout>
//       <div className="h-screen mx-auto">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//           {/* Mentor's Profile */}
//           <div className="col-span-1 p-6">
//             {mentorLoading ? (
//               <div className="flex items-center justify-center h-full">
//                 <Spin size="large" />
//               </div>
//             ) : mentor ? (
//               <>
//                 <img
//                   src={
//                     mentor?.photoUrl ||
//                     `https://ui-avatars.com/api?name=${mentor?.name}`
//                   }
//                   alt={`${mentor?.name}'s avatar`}
//                   className="w-48 h-48 mx-auto border rounded-full"
//                 />
//                 <h2 className="mt-4 text-3xl font-bold text-center">
//                   {mentor?.name}
//                 </h2>
//                 <p className="mt-2 text-center text-gray-600">
//                   {mentor?.profile?.title}
//                 </p>
//                 <div className="flex justify-center mt-4">
//                   {mentor?.profile?.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 mx-1 text-xs bg-gray-100 rounded-full"
//                     >
//                       {tag || "Tags"}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="mt-4 text-center text-gray-500">
//                   {mentor?.profile?.bio || "Mentor bio"}
//                 </p>
//                 <h3 className="mt-8 text-lg font-semibold text-center">
//                   Connect with me
//                 </h3>
//                 <div className="flex justify-center mt-4 space-x-4">
//                   <a
//                     href={
//                       mentor?.profile?.social?.linkedin?.startsWith("http")
//                         ? mentor.profile.social.linkedin
//                         : `https://${mentor?.profile?.social?.linkedin}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <AiFillLinkedin className="text-3xl text-blue-600" />
//                   </a>
//                   <a
//                     href={
//                       mentor?.profile?.social?.github?.startsWith("http")
//                         ? mentor.profile.social.github
//                         : `https://${mentor?.profile?.social?.github}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <AiFillGithub className="text-3xl text-gray-800" />
//                   </a>
//                   <a
//                     href={
//                       mentor?.profile?.social?.twitter?.startsWith("http")
//                         ? mentor.profile.social.twitter
//                         : `https://${mentor?.profile?.social?.twitter}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <AiFillTwitterCircle className="text-3xl text-blue-400" />
//                   </a>
//                   <a
//                     href={
//                       mentor?.profile?.social?.facebook?.startsWith("http")
//                         ? mentor.profile.social.facebook
//                         : `https://${mentor?.profile?.social?.facebook}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <AiFillFacebook className="text-3xl text-blue-700" />
//                   </a>
//                   <a
//                     href={
//                       mentor?.profile?.social?.instagram?.startsWith("http")
//                         ? mentor.profile.social.instagram
//                         : `https://${mentor?.profile?.social?.instagram}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <AiFillInstagram className="text-3xl text-pink-500" />
//                   </a>
//                 </div>
//               </>
//             ) : (
//               <p>Mentor not found.</p>
//             )}
//           </div>

//           {/* Mentor's Services */}
//           <div className="col-span-2 p-6 h-screen bg-[#F5F5F5]">
//             <h3 className="mb-4 text-2xl font-bold">Book a Session</h3>

//             {servicesLoading ? (
//               <div className="flex items-center justify-center h-full">
//                 <Spin size="large" />
//               </div>
//             ) : services && services.length > 0 ? (
//               <div className="grid grid-cols-2 gap-4">
//                 {services.map((service) => (
//                   <ServiceCardUserSide
//                     username={mentor?.username}
//                     service={service}
//                     key={service?._id}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full text-gray-700">
//                 <BiErrorAlt className="w-24 h-24 mb-4 text-blue-500" />
//                 <h3 className="mb-2 text-xl font-semibold">
//                   Oops! No Services Available
//                 </h3>
//                 <p className="mb-6 text-lg text-gray-500">
//                   It seems like there are no services available at the moment.
//                   Please check back later!
//                 </p>
//                 <button
//                   className="px-6 py-3 text-white transition-colors bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
//                   onClick={() => window.location.reload()}
//                 >
//                   Refresh
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default MentorDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mentorAPI from "../apiManger/mentor";
import { Spin } from "antd";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import ServiceCardUserSide from "../components/ServiceCardUserSide";
import Layout from "../components/Layout";
import { BiErrorAlt } from "react-icons/bi";

const MentorDetails = () => {
  const { username } = useParams();
  const [mentor, setMentor] = useState();
  const [services, setServices] = useState();
  const [mentorLoading, setMentorLoading] = useState(true);
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        setMentorLoading(true);
        const response = await mentorAPI.getMentorByUsername(username);
        setMentor(response?.data?.mentor);
        setServices(response?.data?.services);
      } catch (error) {
        console.error("Error fetching mentor details:", error);
      } finally {
        setMentorLoading(false);
        setServicesLoading(false);
      }
    };

    fetchMentorDetails();
  }, [username]);

  const socialLinks = [
    {
      link: mentor?.profile?.social?.linkedin,
      icon: <AiFillLinkedin className="text-3xl text-blue-600" />,
    },
    {
      link: mentor?.profile?.social?.github,
      icon: <AiFillGithub className="text-3xl text-gray-800" />,
    },
    {
      link: mentor?.profile?.social?.twitter,
      icon: <AiFillTwitterCircle className="text-3xl text-sky-500" />,
    },
    {
      link: mentor?.profile?.social?.facebook,
      icon: <AiFillFacebook className="text-3xl text-blue-700" />,
    },
    {
      link: mentor?.profile?.social?.instagram,
      icon: <AiFillInstagram className="text-3xl text-pink-500" />,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl lg:grid-cols-3">
          {/* Left Side - Mentor Profile */}
          <div className="lg:col-span-1">
            <div className="sticky p-5 bg-white border shadow-xl rounded-3xl border-white/40 sm:p-6 top-24">
              {mentorLoading ? (
                <div className="flex items-center justify-center min-h-[350px]">
                  <Spin size="large" />
                </div>
              ) : mentor ? (
                <>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={
                        mentor?.photoUrl ||
                        `https://ui-avatars.com/api?name=${mentor?.name}`
                      }
                      alt={`${mentor?.name}'s avatar`}
                      className="object-cover w-28 h-28 border-4 border-purple-100 rounded-full shadow-md sm:w-36 sm:h-36 md:w-40 md:h-40"
                    />

                    <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      {mentor?.name}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-purple-600 sm:text-base">
                      {mentor?.profile?.title || "Professional Mentor"}
                    </p>

                    <p className="max-w-md mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                      {mentor?.profile?.bio ||
                        "An experienced mentor ready to guide you in your journey."}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-3 text-sm font-semibold tracking-wide text-center text-gray-800 uppercase">
                      Skills & Tags
                    </h3>

                    <div className="flex flex-wrap justify-center gap-2">
                      {mentor?.profile?.tags?.length > 0 ? (
                        mentor.profile.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-purple-700 border border-purple-200 rounded-full bg-purple-50 sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full sm:text-sm">
                          No tags available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-center text-gray-800 uppercase">
                      Connect with me
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">
                      {socialLinks.map((item, index) =>
                        item.link ? (
                          <a
                            key={index}
                            href={
                              item.link.startsWith("http")
                                ? item.link
                                : `https://${item.link}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 transition duration-300 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1"
                          >
                            {item.icon}
                          </a>
                        ) : null,
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center min-h-[300px]">
                  <p className="text-center text-gray-600">Mentor not found.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="lg:col-span-2">
            <div className="p-5 bg-white border shadow-xl rounded-3xl border-white/40 sm:p-6">
              <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Book a Session
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 sm:text-base">
                    Choose a service and start your mentorship journey.
                  </p>
                </div>
              </div>

              {servicesLoading ? (
                <div className="flex items-center justify-center min-h-[350px]">
                  <Spin size="large" />
                </div>
              ) : services && services.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {services.map((service) => (
                    <div
                      key={service?._id}
                      className="transition duration-300 hover:-translate-y-1"
                    >
                      <ServiceCardUserSide
                        username={mentor?.username}
                        service={service}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[350px] px-4 text-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-blue-50">
                    <BiErrorAlt className="w-10 h-10 text-blue-500" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl">
                    Oops! No Services Available
                  </h3>

                  <p className="max-w-md mb-6 text-sm leading-6 text-gray-500 sm:text-base">
                    It seems like there are no services available at the moment.
                    Please check back later.
                  </p>

                  <button
                    className="px-6 py-3 font-medium text-white transition duration-300 bg-blue-500 rounded-xl shadow-md hover:bg-blue-600"
                    onClick={() => window.location.reload()}
                  >
                    Refresh
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorDetails;
