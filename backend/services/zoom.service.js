const axios = require("axios");
const config = require("../config");

async function getZoomAuthToken() {
  const auth = Buffer.from(
    `${config.zoom.clientId}:${config.zoom.clientSecret}`,
  ).toString("base64");

  try {
    const response = await axios.post(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${config.zoom.accountId}`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    );

    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error getting Zoom token:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
}

const createMeeting = async ({ topic, startTime, duration }) => {
  try {
    const accessToken = await getZoomAuthToken();

    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic: topic || "Scheduled Meeting",
        type: 2,
        start_time: startTime,
        duration: duration,
        timezone: "Asia/Kolkata",
        agenda: "This is a scheduled meeting.",
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
          mute_upon_entry: true,
          enforce_login: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return {
      join_url: response.data.join_url,
      start_url: response.data.start_url,
      meeting_id: response.data.id,
    };
  } catch (error) {
    console.error(
      "Error creating Zoom meeting:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

module.exports = {
  createMeeting,
};
