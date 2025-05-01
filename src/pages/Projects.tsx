import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import projectImage from '../assets/image.png'; // Import the image

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Nisarg Portfolio",
      description: "A personal portfolio website built with React and Next.js, featuring my projects, skills, and experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva",
      demoLink: "https://nisargxplores-portfolio.vercel.app/",
      imageUrl: projectImage // Use the imported image
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-12">
        <div>
          <h1 className="text-2xl font-bold mb-6">My Projects</h1>
          <p className="mb-8">
            Here are some of the projects I've worked on. From web applications to UI/UX designs,
            I enjoy building software and designs that solve real problems. Feel free to check out the code or live demos!
          </p>
        </div>
        
        {/* Featured Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden bg-github-secondary border-github-border">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-github-accent">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-github-dark rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* GitHub Repositories */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">GitHub Repositories</h2>
            <Button 
              variant="link" 
              className="text-github-accent"
              onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
            >
              View all <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <RepoCarousel />
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Projects;