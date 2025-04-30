
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"] },
    { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Adobe XD", "AWS"] },
    { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design"] },
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="github-card">
          <h1 className="text-2xl font-bold mb-6">About Me</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-github-accent">Who am I?</h2>
              <p className="mb-4">
                Hello! I'm Nisarg Patel, a passionate developer and UI/UX designer with a strong focus on creating 
                intuitive and efficient web applications. I'm currently pursuing my degree in Computer Engineering
                and have been actively involved in various web development and design projects.
              </p>
              <p>
                I believe in combining creativity with technical skills to build products that not only work well
                but also provide an excellent user experience. When I'm not coding, you can find me exploring new 
                design trends, contributing to open-source projects, or learning new technologies.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-github-accent">My Approach</h2>
              <p>
                I approach each project with a user-centered design philosophy, considering not just the code but 
                also the user experience, accessibility, and performance. I enjoy solving complex problems 
                and creating solutions that make a positive impact on users' lives. My experience in both development
                and design allows me to bridge the gap between technical requirements and aesthetic presentation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="bg-github-secondary border-github-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-github-accent">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-github-dark rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Education & Certifications */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="github-card">
              <h3 className="font-semibold">Bachelor of Engineering in Computer Science</h3>
              <p className="text-github-text">SVIT Vasad</p>
            </div>
            <div className="github-card">
              <h3 className="font-semibold">AWS Certified Cloud Practitioner</h3>
              <p className="text-github-text">Amazon Web Services</p>
            </div>
            <div className="github-card">
              <h3 className="font-semibold">UI/UX Design Certification</h3>
              <p className="text-github-text">Google UX Design Professional Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default About;
