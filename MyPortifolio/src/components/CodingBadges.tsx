
// Coding Badges & Profiles - update your coding platform ranks and profile highlights here
import React from 'react';
import { Star, Trophy, Shield } from "lucide-react";

/*
  To update your coding badges:
    - Replace objects in badgeData array below.
    - 'platform': Name for display
    - 'icon': Use icon for the platform (see lucide.dev/icons/)
    - 'text': Short highlight (e.g. rank, percent, medal)
    - 'style': Tailwind classes to set background and accent (optional)
    - You can add, update, or remove as many as you want!
*/
const badgeData = [
  {
    platform: "LeetCode",
    icon: <Trophy className="w-7 h-7 text-emerald-600" />,
    text: "LeetCode — Top 24%",
    // Customize background gradient and ring
    style: "from-emerald-100 to-emerald-300 border-emerald-300 shadow-emerald-200/40 hover:shadow-emerald-400/60",
  },
  {
    platform: "TryHackMe",
    icon: <Shield className="w-7 h-7 text-rose-500" />,
    text: "TryHackMe — Top 50%",
    style: "from-rose-100 to-rose-300 border-rose-300 shadow-rose-200/40 hover:shadow-rose-400/60",
  },
  {
    platform: "HackerRank",
    icon: <Star className="w-7 h-7 text-sky-500" />,
    text: "HackerRank — Gold",
    style: "from-sky-100 to-yellow-200 border-sky-300 shadow-sky-200/40 hover:shadow-yellow-400/60",
  },
  {
    platform: "Codeforces",
    icon: <Star className="w-7 h-7 text-violet-500" />,
    text: "Codeforces — pupil", // Update to your real Codeforces rank/highlight
    style: "from-violet-100 to-purple-200 border-violet-300 shadow-violet-200/40 hover:shadow-purple-400/60",
  },
];

const CodingBadges = () => (
  <div className="my-10">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
      <span className="text-gradient">Coding Badges & Achievements</span>
    </h2>
    {/* Replace badgeData objects to customize badges */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
      {badgeData.map(({ icon, text, style }, idx) => (
        <div 
          key={text}
          className={
            `flex items-center gap-4 rounded-2xl px-6 py-5 border bg-gradient-to-br ${style} 
            transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-400/60 card-hover`
          }
        >
          <div className="shrink-0 bg-white rounded-full p-2 shadow-lg animate-float">
            {icon}
          </div>
          <div>
            <div className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
              {text}
            </div>
            {/* Add a description or your coding profile link here if desired */}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CodingBadges;

