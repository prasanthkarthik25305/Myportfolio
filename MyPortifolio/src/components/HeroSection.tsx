
import React from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedLogo from "@/components/AnimatedLogo";
import ProfilePhoto from "@/components/ProfilePhoto";
import TypewriterText from "@/components/TypewriterText";
import CodingBadges from "@/components/CodingBadges";
import AnimatedCounters from "@/components/AnimatedCounters";

import { ArrowDown } from "lucide-react";

const subtitleTexts = [
  "Cybersecurity Enthusiast",
  "Competitive Programmer", 
  "Full Stack Developer",
  "Problem Solver"
];

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
    <AnimatedBackground />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-500/10"></div>
    <div className="container mx-auto px-6 text-center relative z-20">
      <AnimatedLogo />
      <ProfilePhoto />
      <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground animate-fade-in">
        Prasanth Karthik Varma
      </h1>
      <p className="text-2xl md:text-3xl mb-10 text-foreground/80 min-h-[3rem] font-medium">
        <TypewriterText texts={subtitleTexts} speed={150} deleteSpeed={75} pauseTime={2000} />
      </p>
      <CodingBadges />
      <p className="text-xl mb-10 max-w-4xl mx-auto text-foreground/70 leading-relaxed font-medium">
        A creator at heart, an engineer by training. Passionate about building secure, scalable systems and solving algorithmic puzzles.
      </p>
      <AnimatedCounters />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-10 h-10 text-primary animate-pulse" />
      </div>
    </div>
  </section>
);

export default HeroSection;
