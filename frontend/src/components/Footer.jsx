// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="px-8 py-10 text-white bg-gray-900">
//         <div className="max-w-6xl mx-auto text-center">
//           <p>Follow us on social media for updates and mentorship tips!</p>
//           <p className="mt-4">
//             <a
//               href="https://www.facebook.com/gaurav.singh.763646"
//               className="hover:text-[#00DFBD]"
//             >
//               Facebook
//             </a>{" "}
//             |{" "}
//             <a
//               href="https://x.com/HARSHIKESHKUM19"
//               className="hover:text-[#00DFBD]"
//             >
//               Twitter
//             </a>{" "}
//             |{" "}
//             <a
//               href="https://www.linkedin.com/in/harshikesh-kumar/"
//               className="hover:text-[#00DFBD]"
//             >
//               LinkedIn
//             </a>{" "}
//             |{" "}
//             <a
//               href="https://github.com/HarshikeshKumar"
//               className="hover:text-[#00DFBD]"
//             >
//               GitHub
//             </a>{" "}
//             |{" "}
//             <a
//               href="https://www.instagram.com/_gaurav_singh1725/"
//               className="hover:text-[#00DFBD]"
//             >
//               Instagram
//             </a>
//           </p>
//           <p className="mt-4">
//             <a href="#" className="hover:text-[#00DFBD]">
//               harshikeshkoili214@gmail.com
//             </a>{" "}
//             |{" "}
//             <a href="#" className="hover:text-[#00DFBD]">
//               7970785645
//             </a>
//           </p>
//           <p className="mt-4">© 2025 MentorHub. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-8 text-white sm:px-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm leading-6 sm:text-base">
          Follow us on social media for updates and mentorship tips!
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base">
          <a
            href="https://www.facebook.com/gaurav.singh.763646"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00DFBD]"
          >
            Facebook
          </a>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://x.com/HARSHIKESHKUM19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00DFBD]"
          >
            Twitter
          </a>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://www.linkedin.com/in/harshikesh-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00DFBD]"
          >
            LinkedIn
          </a>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://github.com/HarshikeshKumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00DFBD]"
          >
            GitHub
          </a>

          <span className="hidden sm:inline">|</span>

          <a
            href="https://www.instagram.com/_gaurav_singh1725/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00DFBD]"
          >
            Instagram
          </a>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm sm:text-base md:flex-row md:gap-3">
          <a
            href="mailto:harshikeshkoili214@gmail.com"
            className="break-all hover:text-[#00DFBD]"
          >
            harshikeshkoili214@gmail.com
          </a>

          <span className="hidden md:inline">|</span>

          <a href="tel:7970785645" className="hover:text-[#00DFBD]">
            7970785645
          </a>
        </div>

        <p className="mt-4 text-sm sm:text-base">
          © 2025 MentorHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
