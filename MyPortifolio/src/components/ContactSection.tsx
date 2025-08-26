// Contact Section - Update your email and social media here.
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Calendar } from "lucide-react";
import InteractiveButtons from "@/components/InteractiveButtons";

// Submission handler for simple demo. Replace this for real backend connection if needed.
const handleContactSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast({
    title: "Message Sent!",
    description: "Thanks for reaching out. I'll get back to you soon!",
  });
};

const ContactSection = () => (
  <section id="contact" className="py-16 bg-gradient-to-br from-card/5 via-background to-muted/5 relative overflow-x-hidden">
    <div className="container mx-auto px-6 flex flex-col items-center relative">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">
        Get In Touch
      </h2>
      {/* Decorative SVG - update or remove as desired */}
      <div className="absolute -top-20 right-12 hidden md:block opacity-20 pointer-events-none select-none"
        aria-hidden
      >
        <svg width="160" height="160" viewBox="0 0 400 400" fill="none">
          <circle cx="220" cy="180" r="95" fill="#fde047" fillOpacity="0.10" />
          <circle cx="70" cy="110" r="40" fill="#facc15" fillOpacity="0.15" />
        </svg>
      </div>
      {/* Contact form fields */}
      <div className="glam-glass border shadow-xl rounded-3xl p-8 md:p-12 backdrop-blur-lg w-full max-w-2xl z-10">
        <div className="mb-6 text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold heading-glam shadowed-heading">
            Let's Collaborate!
          </h3>
          <p className="text-gray-200 max-w-md mx-auto text-base">
            Share your ideas or questions below. I’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleContactSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder=" "
                className="peer bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 px-2 py-3 w-full text-white placeholder-transparent focus:outline-none transition-all"
                required
              />
              <label htmlFor="contact-name" className="absolute left-2 top-2.5 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder=" "
                className="peer bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 px-2 py-3 w-full text-white placeholder-transparent focus:outline-none transition-all"
                required
              />
              <label htmlFor="contact-email" className="absolute left-2 top-2.5 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                Email Address
              </label>
            </div>
          </div>
          <div className="relative">
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder=" "
              className="peer bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 px-2 py-3 w-full text-white placeholder-transparent focus:outline-none transition-all"
              required
            />
            <label htmlFor="contact-subject" className="absolute left-2 top-2.5 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
              Subject
            </label>
          </div>
          <div className="relative">
            <textarea
              id="contact-message"
              name="message"
              placeholder=" "
              minLength={10}
              className="peer bg-transparent border-b-2 border-gray-600 focus:border-yellow-400 px-2 py-3 w-full text-white placeholder-transparent resize-none focus:outline-none transition-all h-32"
              required
            />
            <label htmlFor="contact-message" className="absolute left-2 top-2.5 text-gray-400 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
              Message
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 text-black font-bold py-3 rounded-2xl hover:from-yellow-500 hover:to-yellow-400 shadow-lg hover:scale-105 transition-all text-lg"
          >
            Send Message
          </Button>
        </form>
      </div>
      
      {/* Interactive Action Buttons */}
      <div className="mt-12 z-10">
        <InteractiveButtons />
      </div>
      
      {/* Update your social links below */}
      <div className="flex flex-wrap justify-center space-x-6 mt-10 z-10">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-gray-600 hover:bg-yellow-500/20 hover:scale-110 transition-all shadow-md text-gray-300 hover:text-yellow-400">
          <Github className="w-7 h-7" />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-gray-600 hover:bg-yellow-500/20 hover:scale-110 transition-all shadow-md text-gray-300 hover:text-yellow-400">
          <Linkedin className="w-7 h-7" />
        </a>
        <button 
          onClick={() => window.open('https://calendly.com/yourname/meeting', '_blank')} 
          className="p-3 rounded-full backdrop-blur-md bg-blue-500/20 border border-blue-500 hover:bg-blue-500/30 hover:scale-110 transition-all shadow-md text-blue-400 hover:text-blue-300"
        >
          <Calendar className="w-7 h-7" />
        </button>
      </div>
      {/* Replace the email below with your own! */}
      <p className="text-xs mt-8 text-gray-500 text-center max-w-md mx-auto z-10">
        Or email me directly: <span className="text-yellow-400">your-email@example.com</span>
      </p>
    </div>
  </section>
);

export default ContactSection;
