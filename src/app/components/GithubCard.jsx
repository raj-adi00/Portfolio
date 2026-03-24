import React from "react";

const GithubCard = () => {
  return (
    <section className="bg-[#121212] py-12 px-4">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-white mb-10">
        GitHub Activity
      </h2>

      {/* Wrapper */}
      <div className="max-w-5xl mx-auto p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
        
        {/* Card */}
        <div className="bg-[#181818] rounded-xl p-6">
          
          {/* Username */}
          <h3 className="text-sm text-gray-400 text-center mb-6">
            raj-adi00
          </h3>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            {/* LEFT */}
            <div className="flex flex-col gap-4">
              
              {/* Stats */}
              <div className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-700 hover:border-purple-500 transition">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=raj-adi00&theme=dark&hide_border=true&include_all_commits=true&count_private=true"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>

              {/* Streak */}
              <div className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-700 hover:border-purple-500 transition">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=raj-adi00&theme=dark&hide_border=true"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-700 hover:border-purple-500 transition">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=raj-adi00&theme=dark&hide_border=true&layout=compact"
                alt="Most Used Languages"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubCard;