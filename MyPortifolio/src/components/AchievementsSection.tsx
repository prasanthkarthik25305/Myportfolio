
// Achievements & Certifications Section - update rating badges, certificates, awards
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import codeforcesBadge from "@/assets/codeforces-badge.png";
import codechefBadge from "@/assets/codechef-badge.png";
import gfgBadge from "@/assets/gfg-badge.png";
import githubCertBadge from "@/assets/github-cert-badge.png";
import googleCyberBadge from "@/assets/google-cyber-badge.png";

/*
  To add/update your achievements (certificates, contest ratings, awards):
    - Add/replace objects in the achievements array below.
    - For each: 
       - Change title to contest/certificate/award name
       - Change value to rating/year/certification/award info
       - type can be: 'cp', 'cert', or 'achievement' for coloring/icon
    - Remove any that don't apply to you.
*/
const achievements = [
  { title: "Codeforces Pupil", value: "1312 Rating", type: "cp", image: codeforcesBadge },
  { title: "CodeChef 3-Star", value: "1600+ Rating", type: "cp", image: codechefBadge },
  { title: "GFG 3-Star", value: "Top Contributor", type: "cp", image: gfgBadge },
  { title: "Problems Solved", value: "1000+", type: "cp" },
  { title: "GitHub Advanced Security", value: "Certified", type: "cert", image: githubCertBadge },
  { title: "RHCSA Qualified", value: "2024", type: "cert" },
  { title: "Google Cybersecurity", value: "Certified", type: "cert", image: googleCyberBadge },
  { title: "GSoC Participant", value: "2024", type: "achievement" },
  { title: "DRDO RCI Intern" , value: "2026",type:"achievement"}
];

const AchievementsSection = () => (
  <section id="achievements" className="py-16 bg-gradient-to-br from-primary/3 via-background to-accent/3 relative">
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/2 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">Achievements & Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Loop for each achievement */}
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md border border-primary/30 text-center hover:border-primary/50 transition-all duration-300 card-hover">
            <CardContent className="p-6">
              <div className="mb-4">
                {achievement.image ? (
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/50 overflow-hidden bg-card/30">
                    <img 
                      src={achievement.image} 
                      alt={`${achievement.title} badge`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm border-2 ${
                    achievement.type === 'cp' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/50 text-blue-400' :
                    achievement.type === 'cert' ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/50 text-green-400' :
                    'bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 text-primary'
                  }`}>
                    <span className="text-2xl font-bold">
                      {achievement.type === 'cp' ? '🏆' : achievement.type === 'cert' ? '📜' : '⭐'}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{achievement.title}</h3>
              <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-base">{achievement.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;

