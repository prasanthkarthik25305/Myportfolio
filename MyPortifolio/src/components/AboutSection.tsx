
import React from 'react';

const AboutSection = () => (
  <section id="about" className="py-16 bg-gradient-to-br from-background via-primary/5 to-background relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6 text-foreground/80 leading-relaxed font-medium">
              My journey began with a fascination for problem-solving and security. From mentoring students in Python 
              to developing complex AI systems, I've always been driven by the challenge of creating secure, efficient solutions.
            </p>
            <p className="text-xl mb-8 text-foreground/80 leading-relaxed font-medium">
              With expertise spanning cybersecurity, competitive programming, and full-stack development, 
              I bring a unique perspective to every project I work on.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Chess enthusiast - loves analyzing opening theories</span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Digital artist - creates technical illustrations and sketches</span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Favorite Quote: "Security is not a product, but a process"</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md p-8 rounded-xl border border-primary/30 hover:border-primary/50 transition-all card-hover">
              <h3 className="text-3xl font-bold mb-6 text-white">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-card/30">
                  <span className="text-lg font-medium text-foreground">Problems Solved</span>
                  <span className="text-2xl font-bold text-primary">1000+</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-card/30">
                  <span className="text-lg font-medium text-foreground">Projects Completed</span>
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-card/30">
                  <span className="text-lg font-medium text-foreground">Students Mentored</span>
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-card/30">
                  <span className="text-lg font-medium text-foreground">Certifications</span>
                  <span className="text-2xl font-bold text-primary">8+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
