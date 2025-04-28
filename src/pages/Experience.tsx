
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card } from '@/components/ui/card';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of a customer-facing web application that increased user engagement by 40%",
        "Implemented CI/CD pipelines which reduced deployment time by 60%",
        "Mentored junior developers and conducted code reviews to ensure high code quality",
        "Collaborated with product managers and designers to refine product requirements"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Developed and maintained multiple web applications for clients in various industries",
        "Optimized database queries resulting in a 30% performance improvement",
        "Integrated third-party APIs to enhance application functionality",
        "Participated in agile development processes including daily stand-ups and sprint planning"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB", "GraphQL"]
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup Innovations",
      period: "Jun 2018 - Feb 2020",
      description: [
        "Assisted in the development of a mobile-responsive web application",
        "Fixed bugs and implemented new features based on user feedback",
        "Wrote clean, maintainable code following best practices",
        "Collaborated with team members using version control and project management tools"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Work Experience</h1>
          <p className="mb-8">
            My professional journey spans various roles in software development, 
            where I've honed my skills across different technologies and domains.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-github-border md:before:left-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              <div className="absolute left-0 top-1 h-10 w-10 rounded-full bg-github-secondary border-4 border-github-dark flex items-center justify-center">
                <span className="text-github-accent font-bold">{index + 1}</span>
              </div>
              
              <Card className="p-6 bg-github-secondary border-github-border">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-github-accent">{exp.role}</h2>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="font-medium">{exp.company}</h3>
                    <span className="text-github-text text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Responsibilities & Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-github-dark rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <Card className="p-6 bg-github-secondary border-github-border">
            <h3 className="font-semibold text-lg">Bachelor of Technology in Computer Science</h3>
            <p className="text-github-text">University Name, 2014-2018</p>
            <p className="mt-2">
              Graduated with honors. Specialized in web development and software engineering.
              Participated in various coding competitions and hackathons.
            </p>
          </Card>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Experience;
