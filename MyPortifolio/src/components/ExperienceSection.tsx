
// Experience Section - update your internships, jobs, and experience here
import React from 'react';
import { Briefcase, Globe, Code } from "lucide-react";

/*
  To update your work/internship experience:
    - Add or modify the objects in the experiences array below.
      - icon: use a lucide icon or emoji for visual
      - role: your job title or role
      - company: the organization or company name
      - year: year or date range
      - description: brief about what you did
    - To add more, just push more objects to experiences.
    - To remove, just delete the objects you don't need.
  You can find more Lucide icons here: https://lucide.dev/icons/
*/
const experiences = [
  {
    icon: <Briefcase className="w-6 h-6 text-pink-500" />,
    role: "DSA Intern",
    company: "Technical Hub", // <-- Update to your real company
    year: "2025",
    description: "Worked on microservices, learned Java enterprise patterns, and deployed small tools."
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    role: "Python Intern",
    company: "Technical Hub",
    year: "2024",
    description: "Developed responsive landing pages and REST APIs. Frequent use of React + Tailwind."
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    role: "Projects & Personal Growth",
    company: "Personal Portfolio",
    year: "2025",
    description: "Built personal projects, continuously upgraded my skills, and focused on hands-on learning and self-improvement."
  }
];

const ExperienceSection = () => (
  <section id="experience" className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">Experience &amp; Projects</h2>
      <div className="relative flex flex-col items-center">
        {/* VERTICAL TIMELINE */}
        <div className="border-l-4 border-gradient-to-b from-primary to-accent absolute h-full left-7 top-0 bg-gradient-to-b from-primary to-accent w-1"></div>
        <div className="w-full max-w-2xl">
          {/* Loop over your experience cards */}
          {experiences.map((exp, idx) => (
            <div key={exp.role} className="flex mb-12 relative group">
              <div className="flex flex-col items-center mr-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/50 rounded-full p-3 shadow-xl mb-1 hover:scale-110 transition-all">
                  {exp.icon}
                </div>
                <div className={`h-full w-1 ${idx === experiences.length - 1 ? 'bg-transparent' : 'bg-yellow-200'}`}></div>
              </div>
              <div className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-md rounded-xl px-8 py-6 shadow-lg w-full hover:scale-[1.03] transition-all duration-300 border border-primary/20 hover:border-primary/40">
                <h3 className="text-xl font-bold mb-2 text-foreground">{exp.role}</h3>
                <div className="text-foreground/90 mb-3 font-medium">{exp.company} • <span className="font-bold text-primary">{exp.year}</span></div>
                <div className="text-foreground/80 text-base leading-relaxed">{exp.description}</div>
                {/* Add: list of major achievements, if desired */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button to scroll to Projects section. Make sure 'projects' matches your ProjectsSection id */}
      <div className="flex justify-center mt-10">
        <a
          href="#projects"
          onClick={e => {
            // Smooth scroll to #projects when button clicked
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-background px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 magnetic-button"
        >
          View Projects
        </a>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

