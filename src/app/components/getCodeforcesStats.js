import axios from "axios";

const USER_INFO_ENDPOINT = "https://codeforces.com/api/user.info?handles=";
const USER_STATUS_ENDPOINT = "https://codeforces.com/api/user.status?handle=";

export const getCodeforcesStats = async (username) => {
  try {
    // Fetch user info from Codeforces API
    const userInfoResponse = await axios.get(`${USER_INFO_ENDPOINT}${username}`);
    
    // Check for errors in the response
    if (userInfoResponse.data.status !== 'OK') {
      throw new Error(`Error fetching user info: ${userInfoResponse.data.comment}`);
    }
    
    const userInfo = userInfoResponse.data.result[0];

    // Fetch user submission history to calculate the number of problems solved
    const userStatusResponse = await axios.get(`${USER_STATUS_ENDPOINT}${username}`);
    
    if (userStatusResponse.data.status !== 'OK') {
      throw new Error(`Error fetching user status: ${userStatusResponse.data.comment}`);
    }

    const submissions = userStatusResponse.data.result;

    // Calculate the number of unique problems solved based on contest ID and problem index
    const solvedProblems = new Set(
      submissions
        .filter((submission) => submission.verdict === "OK")
        .map((submission) => `${submission.problem.contestId}-${submission.problem.index}`)
    );

    return {
      handle: userInfo.handle,
      avatar: userInfo.avatar,
      country: userInfo.country || "N/A",
      rating: userInfo.rating || "N/A",
      rank: userInfo.rank || "N/A",  // Adding rank
      maxRank: userInfo.maxRank || "N/A", // Adding max rank
      maxRating: userInfo.maxRating || "N/A",
      problemsSolved: solvedProblems.size,  // Number of problems solved
      contribution: userInfo.contribution || 0,
      friendOfCount: userInfo.friendOfCount || 0,
    };
  } catch (error) {
    console.error("Error fetching Codeforces data:", error.message);
    return { error: true, message: error.message };
  }
};
