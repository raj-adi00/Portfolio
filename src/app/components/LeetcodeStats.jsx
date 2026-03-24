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

  if (loading)
    return (
      <div className="text-center text-gray-400 text-sm">
        Loading LeetCode stats...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-400 text-sm">
        {error}
      </div>
    );

  // Acceptance color
  const getAcceptanceColor = (rate) => {
    if (rate > 75) return "text-green-400 border-green-400";
    if (rate > 50) return "text-yellow-400 border-yellow-400";
    return "text-red-400 border-red-400";
  };

  return (
    <div className="max-w-2xl mx-auto p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
      
      {/* Card */}
      <div className="bg-[#181818] rounded-xl p-5">
        
        {/* Header */}
        <h2 className="text-sm text-gray-400 mb-4">
          LeetCode Profile
        </h2>

        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          
          {/* Ranking */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition">
            <p className="text-xs text-gray-400">Ranking</p>
            <p className="text-xl font-semibold text-yellow-400">
              {stats.ranking}
            </p>
          </div>

          {/* Total Solved */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition">
            <p className="text-xs text-gray-400">Solved</p>
            <p className="text-xl font-semibold text-green-400">
              {stats.totalSolved}
            </p>
            <p className="text-[11px] text-gray-500">
              / {stats.totalQuestions}
            </p>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="grid grid-cols-3 gap-3 text-center mb-5">
          
          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Easy</p>
            <p className="text-sm text-green-400 font-medium">
              {stats.easySolved}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Medium</p>
            <p className="text-sm text-yellow-400 font-medium">
              {stats.mediumSolved}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Hard</p>
            <p className="text-sm text-red-400 font-medium">
              {stats.hardSolved}
            </p>
          </div>
        </div>

        {/* Acceptance Rate */}
        {stats.acceptanceRate && (
          <div
            className={`inline-block px-3 py-1 text-xs rounded-full border ${getAcceptanceColor(
              stats.acceptanceRate
            )}`}
          >
            Acceptance: {stats.acceptanceRate}%
          </div>
        )}

        {/* Footer */}
        <div className="mt-5 text-right">
          <a
            href="https://leetcode.com/u/raj-adi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-purple-400 hover:text-white transition"
          >
            View Profile →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;