
// Featured Projects Section - Add, edit, or remove projects here
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

/*
  To add a project:
    - Add a new object to projectsData (fill out all properties).
  To update a project:
    - Change the title, description, techStack, challenges, outcome, github, and live fields.
    - For 'github' or 'live', put "#" to disable the button or use your actual URL (starting with "https://").
    - To remove a project, just delete its object from the array.
*/
const projectsData = [
  // Example Project: To add or update, just copy/change the values below
  {
    title: "AIRecruiter",
    description: "Multi-agent LLM resume matcher with email-based interview scheduling.",
    techStack: ["Python", "Ollama", "flask", "Git"],
    category: "ai", // Category: 'ai', 'web', 'backend', 'security', etc
    challenges: "Implemented complex multi-agent communication and email automation",
    outcome: "Reduced hiring time by 60% and improved match accuracy to 89%",
    github: "https://github.com/youruser/AIRecruiter",  // <-- Put your Github repo here
    live: "https://ai-recruiter.example.com"            // <-- Put your live demo URL here, or "#" to disable
  },
  {
    title: "HealthHub",
    description: "Predictive health system with appointment booking & dynamic UI.",
    techStack: ["HTML5", "JavaScript", "React", "CSS3"],
    category: "web",
    challenges: "Created responsive UI with complex data visualization",
    outcome: "Successfully deployed for 500+ users with 95% satisfaction rate",
    github: "https://github.com/prasanthkarthik25305/Frontend/tree/main/Health_Hub",
    live: "https://healthhub-nine.vercel.app/"
  },
  // Add more objects for more projects
  {
    title: "Inventory Management System",
    description: "Cloud-ready servlet application with database integration and role-based authentication.",
    techStack: ["Java", "JDBC", "MySQL", "HTML","ApacheTomcat"],
    category: "backend",
    challenges: "Designed scalable architecture using Java servlets and apache Tomcat",
    outcome: "Developed a Cloud ready web app",
    github: "https://github.com/prasanthkarthik25305/Frontend/tree/main/Inventory", // No github available - disables button
    live: "#"
  },
  {
    title: "PathPilot",
    description: "",
    techStack: ["React", "Vite.js", "Node.js", "Express.js", "Tailwind CSS", "JWT"],
    category: "FullstackProject",
    challenges: "Integrating secure JWT-based authentication, implementing role-specific features for users and admins, and managing API-based hackathon data with filtering and customization options.",
    outcome: "Delivered a robust hackathon platform enabling users to find, filter, and manage hackathon participation seamlessly, with customizable UI themes and secure backend integration.",
    github: "https://github.com/prasanthkarthik25305/Frontend/tree/main/Vidhyamaarg",
    live: "https://pathpilot-beta.vercel.app/"
  }
];

// Categories for filter buttons (update or add as necessary)
const categoryFilters = ['all', 'ai', 'web', 'backend', 'security'];

const ProjectsSection = () => {
  const [projectFilter, setProjectFilter] = useState('all');
  // Filtered projects based on category
  const filteredProjects = projectFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === projectFilter);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/3 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">
          Featured Projects
        </h2>
        {/* Filter buttons - add/remove categories in categoryFilters above */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryFilters.map((filter) => (
            <Button
              key={filter}
              variant={projectFilter === filter ? "default" : "outline"}
              onClick={() => setProjectFilter(filter)}
              className={projectFilter === filter 
                ? "bg-gradient-to-r from-primary to-accent text-background font-bold" 
                : "border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-background transition-all"
              }
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-300 transform hover:scale-[1.02] project-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 text-lg leading-relaxed font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2 text-primary text-lg">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* Add/remove technologies per project */}
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/40 hover:scale-105 transition-transform">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary text-lg">Challenge:</h4>
                    <p className="text-foreground/70 text-base leading-relaxed">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary text-lg">Outcome:</h4>
                    <p className="text-foreground/70 text-base leading-relaxed">{project.outcome}</p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    {/* GitHub Button: Enter your repo link or disable with "#" */}
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-background font-bold transition-all magnetic-button"
                      asChild
                      disabled={project.github === "#"}
                    >
                      {/* Set target and rel for new tab open/safe */}
                      <a href={project.github !== "#" ? project.github : undefined} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    {/* Live Demo Button: Enter live link or disable with "#" */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-background transition-all magnetic-button"
                      asChild
                      disabled={project.live === "#"}
                    >
                      <a href={project.live !== "#" ? project.live : undefined} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

