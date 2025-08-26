
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Trophy, Shield, Star } from "lucide-react";

const AchievementBadges = () => {
  const badges = [
    {
      icon: <Trophy className="w-4 h-4" />,
      text: "Top 5% LeetCode",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      glowColor: "shadow-orange-500/20"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "TryHackMe Rank",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      glowColor: "shadow-green-500/20"
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "Codeforces 1332",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      glowColor: "shadow-blue-500/20"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 mb-6">
      {badges.map((badge, index) => (
        <Badge
          key={index}
          className={`
            ${badge.color} 
            ${badge.glowColor}
            px-4 py-2 text-sm font-medium
            animate-pulse
            hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl
            border backdrop-blur-sm
          `}
        >
          <span className="flex items-center gap-2">
            {badge.icon}
            {badge.text}
          </span>
        </Badge>
      ))}
    </div>
  );
};

export default AchievementBadges;
