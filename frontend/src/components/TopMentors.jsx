import React, { useEffect, useState } from "react";
import MentorCard from "./MentorCard";
import mentorAPI from "../apiManger/mentor";
import useMentorStore from "../store/mentors";
import { NavLink } from "react-router-dom";
import { Button, Spin } from "antd";

const TopMentors = () => {
  const { setMentorsData } = useMentorStore();
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectTopMentors = (mentors) => {
    const selected = [];
    const totalMentors = mentors.length;

    while (selected.length < 4 && selected.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors);
      const randomMentor = mentors[randomIndex];

      if (!selected.includes(randomMentor)) {
        selected.push(randomMentor);
      }
    }

    return selected;
  };

  const fetchAllMentors = async () => {
    setLoading(true);
    try {
      const response = await mentorAPI.getAllMentors();
      const allMentors = response?.data?.mentors || [];

      setMentorsData(allMentors);
      setTopMentors(selectTopMentors(allMentors));
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);

  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-4 sm:my-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
        Top Mentors
      </h2>

      {loading ? (
        <div className="my-10 flex justify-center">
          <Spin size="large" />
        </div>
      ) : topMentors.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {topMentors.map((mentor) => (
            <MentorCard mentor={mentor} key={mentor?._id} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-6 text-center text-gray-500 shadow-sm">
          No mentors available right now.
        </div>
      )}

      <div className="mt-8 text-center">
        <NavLink to="/mentors">
          <Button
            type="default"
            className="h-10 rounded-md px-6 text-blue-500 hover:text-blue-700"
          >
            View All
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default TopMentors;
