import React, { useState, useEffect } from "react";
import { getCodeforcesStats } from "./getCodeforcesStats";

const CodeforcesCard = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      setError(false);
      const data = await getCodeforcesStats(username);
      if (data.error) {
        setError(true);
        setErrorMessage(data.message); // Display the error message
      } else {
        setStats(data);
      }
    };

    fetchStats();
  }, [username]);

  if (error) {
    return (
      <div className="bg-gray-900 text-white  p-6 rounded-md shadow-md">
        <h2 className="text-sm font-bold mb-4">Codeforces Stats</h2>
        <p>Could not fetch Codeforces data. Please try again later.</p>
        <p className="text-red-500">{errorMessage}</p>{" "}
        {/* Display detailed error */}
      </div>
    );
  }

  if (!stats) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-md max-w-lg text-sm">
      <h2 className="font-bold text-purple-500 text-lg mb-6">
        {stats.handle} &apos;s Codeforces Stats
      </h2>
      <ul className="space-y-2 text-xs">
        <li>
          <p className="text-green-500">
            <strong className="text-green-200">Rank:</strong> {stats.rank}{" "}
            <span className="font-bold">(Max Rank: {stats.maxRank})</span>
          </p>
        </li>
        <li>
          <p className="text-green-500">
            <strong className="text-green-200">Rating:</strong> {stats.rating}{" "}
            <span className="font-bold">(Max Rating: {stats.maxRating})</span>
          </p>
        </li>
        <li>
          <p className="text-green-200">
            <strong>Country:</strong> India
          </p>
        </li>
        <li>
          <p className="text-red-600">
            <strong>Problems Solved:</strong> {stats.problemsSolved}
          </p>
        </li>
        <li>
          <p className="text-green-200">
            <strong>Friends:</strong> {stats.friendOfCount}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CodeforcesCard;
