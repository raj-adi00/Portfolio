import React, { useEffect, useState } from "react";
import { getStats } from "./getStats";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats("raj-adi");
      if (data.status === "error") {
        setError(data.message);
      } else {
        setStats(data);
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Border color based on acceptance rate
  const getAcceptanceColor = (rate) => {
    if (rate > 75) return "text-green-400 border-green-400";
    if (rate > 50) return "text-yellow-400 border-yellow-400";
    return "text-red-400 border-red-400";
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      {/* User ID */}
      <h1 className="text-lg font-bold text-purple-500 text-center mb-6">
        raj-adi &apos;s LeetCode Stats
      </h1>

      {/* Stats Section */}
      <ul className="space-y-2 text-xs">
        <li>
          <strong className="text-green-200">Ranking:</strong> <span className="text-green-200">{stats.ranking}</span>
        </li>
        <li>
          <strong className="text-green-200">Total Questions Solved:</strong>{" "}
          <span className="text-green-200">{stats.totalSolved}/{stats.totalQuestions}</span>
        </li>
        <li>
          <strong className="text-green-400">Easy Questions Solved:</strong>{" "}
          <span className="text-green-400">{stats.easySolved}/{stats.totalEasy}</span>
        </li>
        <li>
          <strong className="text-yellow-500">Medium Questions Solved:</strong>{" "}
          <span className="text-yellow-500">{stats.mediumSolved}/{stats.totalMedium}</span>
        </li>
        <li>
          <strong className="text-red-700">Hard Questions Solved:</strong>{" "}
          <span className="text-red-700">{stats.hardSolved}/{stats.totalHard}</span>
        </li>
      </ul>

      {/* Acceptance Rate */}
    </div>
  );
};

export default LeetCodeStats;
