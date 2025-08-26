
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  languages: ["Java", "Python", "C++","c","JavaScript"],
  web: ["HTML5", "CSS3", "React", "Bootstrap"],
  backend: ["Flask", "REST APIs", "Node.js"],
  database: ["MySQL", "Oracle", "MongoDB"],
  tools: ["Git", "Linux", "PyTorch", "Ollama"]
};

const SkillsSection = () => (
  <section id="skills" className="py-16 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative">
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/3 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">Skills & Technologies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Card key={index} className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md border border-primary/30 hover:border-primary/50 transition-all card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <Badge key={skillIndex} className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/40 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-background transition-all skill-badge font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;