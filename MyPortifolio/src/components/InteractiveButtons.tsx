// Main action buttons - update resume, project links here
import React, { useState } from 'react';
import { Download, Eye } from "lucide-react";

/*
  How to update your call-to-action buttons:
    - Resume download: Link to your resume PDF; set download URL.
    - View Projects: Will smoothly scroll to the Projects section.
*/
const InteractiveButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const primaryButtons = [{
    id: 'resume',
    text: 'Download Resume',
    icon: <Download className="w-4 h-4" />,
    variant: 'default' as const,
    className: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    action: () => {
      // To enable, update the URL to your actual resume file
      // EXAMPLE: window.open("https://yourdomain.com/your-resume.pdf", "_blank");
      window.open("https://yourdomain.com/your-resume.pdfhttps://drive.google.com/file/d/1sfYCK2RC6TD8xXf1W4vrWEkuJo5dQq65/view?usp=sharing", "_blank"); // <-- Replace with your resume URL!
    }
  }, {
    id: 'projects',
    text: 'View Projects',
    icon: <Eye className="w-4 h-4" />,
    variant: 'outline' as const,
    className: 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black',
    action: () => {
      // Smooth scroll to projects section
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }];
  const handleButtonHover = (buttonId: string) => {
    setHoveredButton(buttonId);
  };
  const handleButtonLeave = () => {
    setHoveredButton(null);
  };
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* Primary action buttons styled like social icons */}
      {primaryButtons.map(button => (
        <button
          key={button.id}
          onClick={button.action}
          onMouseEnter={() => handleButtonHover(button.id)}
          onMouseLeave={handleButtonLeave}
          className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-gray-600 hover:bg-yellow-500/20 hover:scale-110 transition-all shadow-md text-gray-300 hover:text-yellow-400 flex items-center gap-2 px-6"
        >
          {button.icon}
          <span className="text-sm font-medium">{button.text}</span>
        </button>
      ))}
    </div>
  );
};
export default InteractiveButtons;