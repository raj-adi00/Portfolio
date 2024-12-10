import React from "react";

const GithubCard = () => {
  return (
    <div className="mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md ">
      <h1 className="text-lg font-bold text-purple-500 text-center mb-6">
        GitHub Stats for raj-adi00
      </h1>

      {/* Total Commits and Repos */}
      <div className="flex gap-4 sm:flex-wrap items-center justify-center">
        <div className="text-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=raj-adi00&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
            alt="GitHub Stats"
            className="mx-auto mb-4"
          />
        </div>

        {/* Streak Stats */}
        <div className="text-center">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=raj-adi00&theme=dark&hide_border=false"
            alt="GitHub Streak"
            className="mx-auto mb-4"
          />
        </div>

        {/* Most Used Languages */}
        <div className="text-center">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=raj-adi00&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="Most Used Languages"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
