
import React from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React", "Node.js", "Express", "Next.js", "Django"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL"] },
    { category: "Design", items: ["Figma", "Adobe XD", "UI/UX Design"] },
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
                Hello! I'm Nisarg Patel, a passionate software developer with a strong focus on creating 
                intuitive and efficient applications. My journey in tech started with a curiosity about 
                how digital products work, and it has evolved into a career where I get to build those products.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices. When I'm not coding, you can find me exploring new 
                tech, contributing to open-source projects, or learning something new.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-github-accent">My Approach</h2>
              <p>
                I approach each project with a holistic mindset, considering not just the code but 
                also the user experience, performance, and scalability. I enjoy solving complex problems 
                and creating solutions that make a positive impact on users' lives.
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
              <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-github-text">University Name, 2016-2020</p>
            </div>
            <div className="github-card">
              <h3 className="font-semibold">Full Stack Web Development Certification</h3>
              <p className="text-github-text">Certification Provider, 2020</p>
            </div>
            <div className="github-card">
              <h3 className="font-semibold">AWS Certified Developer</h3>
              <p className="text-github-text">Amazon Web Services, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default About;
