import React from 'react';
import { Link } from 'react-router-dom';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Cpu, Palette, Wrench } from 'lucide-react';


const About = () => {
  const skills = [
    { 
      category: "Languages", 
      icon: <Code2 className="text-github-accent" />,
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java"] 
    },
    { 
      category: "Frameworks", 
      icon: <Cpu className="text-github-accent" />,
      items: ["React", "React Native", "Next.js", "Node.js", "Express", "TailwindCSS"] 
    },
    { 
      category: "Tools", 
      icon: <Wrench className="text-github-accent" />,
      items: ["Git", "GitHub", "VS Code", "Figma", "AWS"] 
    },
    { 
      category: "Design", 
      icon: <Palette className="text-github-accent" />,
      items: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design", "Product Designing"] 
    },
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div className="github-card animated-border">
          <h1 className="text-2xl font-bold mb-6 text-github-accent">About Me</h1>
          
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
          <h2 className="text-xl font-semibold mb-4 text-github-accent">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="bg-github-secondary border-github-border hover:border-github-accent transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    {skillGroup.icon}
                    <CardTitle className="text-github-accent">{skillGroup.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="skill-tag"
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
          <h2 className="text-xl font-semibold mb-4 text-github-accent">Education</h2>
          <div className="space-y-4">
            <div className="github-card hover:border-github-accent transition-colors">
              <h3 className="font-semibold text-github-accent">Bachelor of Engineering in Computer Science</h3>
              <p className="text-github-text">SVIT Vasad</p>
            </div>
          </div>
        </div>
        
        {/* Interactive Matrix Code Rain - Impressive Element */}
        <div className="mt-8 relative h-64 overflow-hidden rounded-lg border border-github-border animated-border">
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center z-10">
              <h2 className="text-xl font-bold text-github-accent mb-3">Skills in Action</h2>
              <p className="text-github-text mb-4 max-w-md">
                Check out my projects to see how I combine these skills to create innovative solutions.
              </p>
              <Link to="/projects">
                <Button className="bg-github-accent hover:bg-github-accent/80 animate-glow">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
          <MatrixRain />
        </div>
      </div>
    </GitHubLayout>
  );
};

// Matrix code rain effect
const MatrixRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/*-+.~";
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#2ea043';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    return () => clearInterval(interval);
  }, []);
  
  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default About;
