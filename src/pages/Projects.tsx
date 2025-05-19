
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock } from 'lucide-react';
import projectImage from '../assets/image.png'; // Import the image
import projectImage2 from '../assets/image2.png'; // Import the image
import projectImage3 from '../assets/image3.png'; // Import the image
import cloviaImage from '/lovable-uploads/de5f81e6-4960-4f33-b572-07fa4aa4661b.png'; // Import Clovia image

const Projects = () => {
  const featuredProjects = [
    {
      id: 4,
      title: "Clovia",
      description: "Clovia is a Web3-native social staking platform built on Solana that transforms social engagement into a decentralized economy. Users can stake value behind the people they follow, turning attention into capital and enabling influencers, creators, and communities to monetize their social presence. By aligning financial incentives with authentic connections, Clovia redefines how trust, influence, and value are exchanged in the digital world.",
      technologies: ["Solana", "Web3", "React", "TypeScript", "Social Staking"],
      imageUrl: cloviaImage, // Use the uploaded Clovia image
      comingSoon: true
    },
    {
      id: 1,
      title: "Nisarg Portfolio",
      description: "A personal portfolio website built with React and Next.js, featuring my projects, skills, and experience.",
      technologies: ["Typescript", "Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/Nisarg-Portfolio",
      demoLink: "https://nisargxplores-portfolio.vercel.app/",
      imageUrl: projectImage // Use the imported image
    },
    
    {
      id: 2,
      title: "Aura Verify",
      description: "AuraVerify is a decentralized biometric identity verification system built on the Solana blockchain. It combines wallet-based identity, biometric facial recognition, and blockchain immutability to enable secure, trustless, and reusable digital identity verification.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "Solana Wallet Adapter", "Flask", "OpenCV", "Biometric Face Scan API", "Jupiter API"],
      githubLink: "https://github.com/nisargpatel7042lva/aura-verify-web3",
      demoLink: "https://aura-verify-web3.vercel.app/",
      imageUrl: projectImage2 // Use the imported image
    }, 

    {
      id: 3,
      title: "Rewind",
      description: "REWIND is a meticulously crafted web experience that takes you back to the golden era of personal computing. This project captures the authentic look and feel of Windows 98-era interfaces, complete with pixelated graphics, classic color schemes, and that unmistakable retro charm that defined the early internet.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "React", "Google Photos API"],
      githubLink: "https://github.com/nisargpatel7042lva/retro-website",
      demoLink: "https://rewind-ten.vercel.app/",
      imageUrl: projectImage3 // Use the imported image
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
                      {project.comingSoon ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2"
                          disabled
                        >
                          <Clock size={16} className="mr-2" />
                          Coming Soon
                        </Button>
                      ) : (
                        <>
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
                        </>
                      )}
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
              View all <ExternalLink size={16} className="ml-1" />
            </Button>
          </div>
          
          <RepoCarousel />
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Projects;
