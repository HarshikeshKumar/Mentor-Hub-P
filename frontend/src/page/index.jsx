import React, { useState } from "react";
import heroVideo from "../assets/hero.mp4";
import star from "../assets/star.png";
import trophy from "../assets/trophy.png";
import diamond from "../assets/diamond.png";
import computerchip from "../assets/computer-chip.png";
import graduated from "../assets/graduated.png";
import coding from "../assets/coding.png";
import TopMentors from "../components/TopMentors";
import { Nav } from "../components/Nav";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleFAQ = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <Nav />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative text-center bg-black">
          <img
            className="hidden md:block absolute top-10 left-[15%] w-10 lg:w-14"
            src={star}
            alt=""
          />
          <img
            className="hidden md:block absolute top-[20%] left-20 lg:left-48 w-10 lg:w-14"
            src={graduated}
            alt=""
          />
          <img
            className="hidden md:block absolute top-16 right-[15%] w-12 lg:w-20"
            src={diamond}
            alt=""
          />

          <div className="relative px-4 py-12 sm:px-6 md:py-20">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Welcome to{" "}
              <span className="text-4xl border-b-4 md:border-b-8 md:text-6xl lg:text-7xl">
                MentorHub
              </span>
            </h1>

            <p className="my-6 text-sm text-gray-200 sm:text-base md:my-10 md:text-xl lg:text-2xl">
              Unlock your potential with the guidance of expert mentors.
            </p>

            <NavLink to="/mentors">
              <button className="px-6 py-3 text-sm text-white transition bg-purple-600 rounded-lg hover:bg-purple-800 sm:text-base md:px-8">
                Find Your Mentor
              </button>
            </NavLink>

            <img
              className="absolute hidden md:block w-10 lg:w-14 left-1/3"
              src={computerchip}
              alt=""
            />
          </div>

          <div className="relative px-3 pb-8 sm:px-6 md:px-0 md:pb-12">
            <img
              className="absolute hidden md:block w-10 lg:w-14 top-40 lg:top-56 left-10 lg:left-28"
              src={coding}
              alt=""
            />
            <img
              className="absolute hidden md:block w-10 lg:w-14 top-3 right-10 lg:right-28"
              src={trophy}
              alt=""
            />

            <video
              autoPlay
              loop
              muted
              className="object-cover w-full max-w-5xl mx-auto rounded-lg md:rounded-xl shadow-lg"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <img
              className="absolute hidden md:block w-10 lg:w-14 bottom-40 lg:bottom-96 right-10 lg:right-28"
              src={star}
              alt=""
            />
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#F5EEE9]">
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:px-6 md:px-12 lg:px-8 lg:py-16">
            <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border rounded-xl shadow-sm lg:flex-row sm:mx-auto">
              <div className="relative lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                  className="object-cover w-full h-64 sm:h-72 lg:absolute lg:h-full"
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                </svg>
              </div>

              <div className="p-6 bg-white sm:p-8 lg:p-12 lg:pl-10 lg:w-1/2">
                <h5 className="mb-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                  What is MentorHub?
                </h5>
                <p className="mb-5 text-sm leading-7 text-gray-800 sm:text-base">
                  <span className="font-bold">MentorHub</span> is a platform
                  designed to connect students and professionals with mentors
                  who can guide them through their personal and professional
                  development. Whether you're looking to master a new skill or
                  get career advice, we have the right mentor for you.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-white transition duration-200 bg-purple-600 rounded shadow-md hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </button>

                  <a
                    href="/"
                    className="inline-flex items-center font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800"
                  >
                    Learn More
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-12 bg-white sm:px-6 md:px-8 md:py-16 lg:py-20">
          <div className="px-0 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>
                "Empowering You with Tailored Mentorship"
              </h2>

              <p className="text-sm leading-7 text-gray-700 sm:text-base md:text-lg">
                At MentorHub, we connect you with expert mentors who understand
                your unique needs and learning goals. Whether you're looking to
                advance in your career, gain a new skill, or find direction, our
                platform provides personalized guidance to help you succeed.
                Explore our features designed to make mentorship accessible,
                flexible, and impactful.
              </p>
            </div>

            <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Expert Mentorship",
                  text: "Get one-on-one guidance from professionals who have years of experience in their fields. They are here to help you navigate your career with personalized advice.",
                },
                {
                  title: "Tailored Learning Paths",
                  text: "Choose from a variety of mentors that specialize in what you need. Your learning goals and challenges will be the priority in a mentorship plan designed just for you.",
                },
                {
                  title: "Flexible Scheduling",
                  text: "Set your sessions based on your availability. Our mentors offer flexible timings so you can fit learning into your schedule without hassle.",
                },
                {
                  title: "Goal-Oriented Sessions",
                  text: "Our mentors are dedicated to helping you achieve tangible results. Whether you're aiming to learn a new skill, get career advice, or grow professionally, your success is our goal.",
                },
                {
                  title: "Mentor Reviews & Ratings",
                  text: "Browse verified reviews and ratings from other students to find the mentor that matches your learning style and expectations.",
                },
                {
                  title: "Seamless Onboarding",
                  text: "Easily create an account, browse mentors, and schedule your first session in just a few clicks. Start your learning journey in no time.",
                },
              ].map((item, index) => (
                <div key={index} className="max-w-md sm:mx-auto sm:text-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-20 sm:h-20">
                    <svg
                      className="w-10 h-10 text-purple-600 sm:w-12 sm:h-12"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-3 text-lg font-bold leading-5 sm:text-xl">
                    {item.title}
                  </h6>
                  <p className="mb-3 text-sm leading-6 text-gray-900">
                    {item.text}
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-800"
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-12 text-center bg-gray-50 sm:px-6 md:px-8 md:py-16 lg:py-20">
          <div className="px-0 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>
                "Your Path to Success, Step by Step"
              </h2>

              <p className="text-sm leading-7 text-gray-700 sm:text-base md:text-lg">
                MentorHub makes finding and connecting with the right mentor
                simple and effective. Follow these easy steps to start your
                personalized mentorship journey today, and unlock the guidance
                and expertise you need to achieve your goals.
              </p>
            </div>

            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
              <div className="lg:py-6 lg:pr-10">
                {[
                  ["Sign Up", "Start the journey by creating a profile."],
                  [
                    "Browse Mentors",
                    "Search and explore mentors based on your specific needs.",
                  ],
                  [
                    "Select Your Mentor",
                    "Check mentor profiles and reviews to find the perfect fit.",
                  ],
                  [
                    "Book a Session",
                    "Schedule sessions at a time that works for you.",
                  ],
                  [
                    "Start Learning",
                    "Begin your customized mentorship journey and achieve your goals.",
                  ],
                ].map(([title, text], index) => (
                  <div className="flex" key={index}>
                    <div className="flex flex-col items-center mr-4">
                      <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                          <svg
                            className="w-4 text-gray-600"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <line x1="12" y1="2" x2="12" y2="22" />
                            <polyline points="19,15 12,22 5,15" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-px h-full bg-gray-300" />
                    </div>

                    <div className="pt-1 pb-8 text-left">
                      <p className="mb-2 text-base font-bold sm:text-lg">
                        {title}
                      </p>
                      <p className="text-sm text-gray-700 sm:text-base">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-6 text-gray-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1 text-left">
                    <p className="mb-2 text-base font-bold sm:text-lg">
                      Success
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  className="object-cover object-bottom w-full rounded shadow-lg h-64 sm:h-80 md:h-96 lg:absolute lg:h-full"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Categories Section */}
        <section className="px-4 py-12 bg-white sm:px-6 md:px-8 md:py-16 lg:py-20">
          <div>
            <div className="flex flex-col px-0 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8 lg:flex-row">
              <div className="mb-8 lg:w-1/3 lg:mb-0 lg:mr-16">
                <h2 className="relative mb-4 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl sm:leading-none">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>
                  Find the Perfect Mentor for Your Journey
                </h2>

                <p className="mb-4 text-sm leading-7 text-gray-900 lg:mb-6 sm:text-base">
                  Explore a wide range of mentor categories to find the perfect
                  match for your personal or professional growth. Our mentors
                  are ready to guide you in mastering new skills, overcoming
                  challenges, and achieving your goals.
                </p>

                <a
                  href="/"
                  className="inline-flex items-center font-semibold text-purple-400 transition-colors duration-200 hover:text-purple-800"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>

              <div className="flex-grow pt-1">
                <div className="flex items-center mb-4">
                  <span className="font-bold tracking-wide text-gray-900">
                    Categories
                  </span>
                  <span className="ml-1">
                    <svg
                      className="w-5 h-5 mt-px text-purple-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Career Growth Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Skill Development Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Entrepreneurship Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Freelancing & Gig Economy Mentors
                      </a>
                    </li>
                  </ul>

                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Tech & Engineering Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Creative Arts Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Marketing & Sales Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Finance & Investment Mentors
                      </a>
                    </li>
                  </ul>

                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Health & Wellness Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Education & Teaching Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Personal Development Mentors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-purple-400 transition-colors duration-300 hover:text-purple-700 hover:underline"
                      >
                        Social Impact Mentors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative mt-10">
              <img
                className="object-cover w-full h-56 sm:h-72 md:h-96"
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900/50" />
            </div>
          </div>
        </section>

        <section>
          <TopMentors />
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-12 text-center bg-white sm:px-6 md:px-8 md:py-16 lg:py-20">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Affordable Pricing
          </h2>
          <p className="max-w-4xl mx-auto mb-6 text-sm leading-7 text-gray-700 sm:text-base md:text-lg lg:text-xl">
            We offer affordable plans for both students and mentors. Get started
            with a free account and explore paid mentorship options that fit
            your needs.
          </p>
          <button className="px-6 py-3 text-white transition bg-purple-600 rounded-lg hover:bg-purple-800">
            Learn More About Pricing
          </button>
        </section>

        {/* FAQs Section */}
        <section className="px-4 py-12 bg-white sm:px-6 md:px-8 md:py-16">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="mb-10 text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  question: "What is MentorHub?",
                  answer:
                    "MentorHub is an online platform connecting mentees with experienced mentors across various fields like technology, business, health, and more, to help them grow and achieve their goals.",
                },
                {
                  id: 2,
                  question: "How do I sign up as a mentor?",
                  answer:
                    'Signing up as a mentor is simple! Just click on the "Become a Mentor" button, fill in your details, and select your areas of expertise. Once approved, you\'ll be able to start mentoring students.',
                },
                {
                  id: 3,
                  question: "Can I choose my mentor?",
                  answer:
                    "Yes! You can browse through available mentors, check their expertise, and select the one that fits your goals and preferences.",
                },
                {
                  id: 4,
                  question: "What are the costs involved?",
                  answer:
                    "MentorHub offers both free and paid mentorship options. The pricing varies depending on the mentor's experience and session length, which will be displayed upfront.",
                },
                {
                  id: 5,
                  question: "How does the mentoring process work?",
                  answer:
                    "Once you select a mentor, you can schedule sessions directly through the platform. Mentoring can be conducted via video calls, messages, or email, based on your mutual preferences.",
                },
                {
                  id: 6,
                  question: "Is there a support system if I face issues?",
                  answer:
                    "Yes! MentorHub has a dedicated support team to help you with any issues you may face, whether it's regarding finding a mentor, payment issues, or platform queries.",
                },
              ].map((faq) => (
                <div key={faq.id} className="pb-4 border-b border-gray-300">
                  <button
                    className="flex items-center justify-between w-full text-left text-base font-medium text-gray-900 transition-colors sm:text-lg hover:text-purple-600"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-4 transition-transform duration-300 ${
                        isOpen[faq.id] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`mt-2 text-sm text-gray-700 leading-7 transition-all duration-300 ease-in-out ${
                      isOpen[faq.id]
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-12 text-center text-white bg-purple-600 sm:px-6 md:px-8 md:py-16 lg:py-20">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Find Your Mentor?
          </h2>
          <p className="mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
            Join MentorHub today and connect with experienced professionals who
            can guide you through your journey!
          </p>
          <button className="px-6 py-3 font-semibold text-purple-600 transition bg-white rounded-lg hover:bg-gray-200 sm:px-8">
            Get Started Now
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
