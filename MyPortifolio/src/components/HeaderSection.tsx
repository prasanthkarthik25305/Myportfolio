// Header navigation bar for portfolio
import React from 'react';

/*
  To update navigation links:
    - Change NAV_LINKS below to match your own section IDs/titles as needed.
    - Make sure 'anchor' matches the section 'id' you want to scroll to.
    - To add/remove sections in nav, just edit the NAV_LINKS array!
*/
const NAV_LINKS = [
  // Update these labels/anchors to match your sections
  { label: 'About', anchor: 'about' },
  { label: 'Experience', anchor: 'experience' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Skills', anchor: 'skills' },
  { label: 'Certifications', anchor: 'certificates' }, // Must match the id in CertificationsGallery.tsx
  { label: 'Arts', anchor: 'artworks' },              // Must match the id in ArtsSection.tsx
  { label: 'Contact', anchor: 'contact' },
];

const HeaderSection = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-yellow-500/20 backdrop-blur-lg glam-glass">
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg,#232c40 60%,#fee16a44 100%)",
          opacity: 0.91,
          filter: "blur(0.5px)"
        }}
      />
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* To customize initials or logo, replace 'PKV' below */}
        <div className="text-2xl font-playfair font-bold bg-gradient-to-r from-[#ffe16a] to-white bg-clip-text text-transparent drop-shadow-md">
          PKV
        </div>
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={`#${item.anchor}`}
              className="hover:text-gold transition-colors duration-300 px-1 relative font-playfair"
              style={{ fontWeight: 600 }}
              onClick={e => {
                // Smooth scroll to section on click
                e.preventDefault();
                const element = document.getElementById(item.anchor);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default HeaderSection;
