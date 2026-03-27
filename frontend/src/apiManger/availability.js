import AxiosInstances from ".";

const getMentorAvailability = async (mentorId, duration) => {
  return await AxiosInstances.get(
    `availability/${mentorId}?durationInMinutes=${duration}`,
  );
};

export default { getMentorAvailability };
