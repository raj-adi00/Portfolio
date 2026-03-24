import React, { useState, useEffect } from "react";
import { getCodeforcesStats } from "./getCodeforcesStats";

const CodeforcesCard = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setError(false);
      const data = await getCodeforcesStats(username);
      if (data.error) {
        setError(true);
      } else {
        setStats(data);
      }
    };

    fetchStats();
  }, [username]);

  // 🔴 Error UI
  if (error) {
    return (
      <div className="max-w-md mx-auto p-4 rounded-lg bg-[#181818] border border-red-500 text-sm text-red-400 text-center">
        Failed to load Codeforces stats
      </div>
    );
  }

  // ⏳ Loading UI
  if (!stats) {
    return (
      <div className="max-w-md mx-auto p-4 text-center text-gray-400 text-sm">
        Loading Codeforces stats...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
      
      {/* Card */}
      <div className="bg-[#181818] rounded-xl p-5">
        
        {/* Header */}
        <h2 className="text-sm text-gray-400 mb-4">
          Codeforces Profile
        </h2>

        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          
          {/* Rating */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition">
            <p className="text-xs text-gray-400">Rating</p>
            <p className="text-xl font-semibold text-green-400">
              {stats.rating}
            </p>
            <p className="text-[11px] text-gray-500">
              max: {stats.maxRating}
            </p>
          </div>

          {/* Rank */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition">
            <p className="text-xs text-gray-400">Rank</p>
            <p className="text-xl font-semibold text-blue-400 capitalize">
              {stats.rank}
            </p>
            <p className="text-[11px] text-gray-500">
              max: {stats.maxRank}
            </p>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          
          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Solved</p>
            <p className="text-sm text-white font-medium">
              {stats.problemsSolved}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Friends</p>
            <p className="text-sm text-white font-medium">
              {stats.friendOfCount}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
            <p className="text-[11px] text-gray-400">Country</p>
            <p className="text-sm text-white font-medium">
              India
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 text-right">
          <a
            href={`https://codeforces.com/profile/${stats.handle}`}
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

export default CodeforcesCard;