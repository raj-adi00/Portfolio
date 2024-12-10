import axios from "axios";

const ENDPOINT = "https://leetcode-stats-api.herokuapp.com/";

export const getStats = async (username) => {
  try {
    const response = await axios.get(`${ENDPOINT}/${username}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch {
    const errMsg = "Could not reach backend, try again later.";
    return { status: "error", message: errMsg };
  }
};
