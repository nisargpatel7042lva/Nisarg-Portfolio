
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock, Twitter } from 'lucide-react';
import projectImage from '../assets/image.png'; // Import the image
import projectImage2 from '../assets/image2.png'; // Import the image
import projectImage3 from '../assets/image3.png'; // Import the image
import cloviaImage from '/lovable-uploads/a8867095-a408-4c3e-99a6-888f0efcdf55.png'; // Import new Clovia image
import skillSwapImage from '/lovable-uploads/6b3efac9-f6b0-4f5f-8f7a-a3c59b976f2d.png'; // Import Skill Swap DAO image
import dexImage from '/lovable-uploads/76f90aa6-321b-48b8-8bb0-9670f8e99fe8.png'; // Import DEX 2.0 image
import chainCredImage from '../assets/chaincred-logo.png'; // Import ChainCred logo

const Projects = () => {
  const featuredProjects = [
    {
      id: 7,
      title: "ChainCred",
      description: "A comprehensive Sybil-resistant reputation system built at ETHGlobal that combines on-chain activity analysis with privacy-preserving identity verification. Creates a 'credit score for Web3' using Zero-knowledge proofs and Soulbound Tokens to prove you're a real human with good on-chain behavior—protecting DAOs from governance manipulation and airdrop farming while maintaining user privacy.",
      technologies: ["Next.js", "TypeScript", "Solidity", "Hardhat", "The Graph", "Zero-Knowledge Proofs", "Soulbound Tokens"],
      demoLink: "https://eth-reputation-passport.vercel.app/",
      showcaseLink: "https://ethglobal.com/showcase/chaincred-z71wr",
      imageUrl: chainCredImage
    },
    {
      id: 6,
      title: "DEX 2.0",
      description: "Built a custom decentralized exchange enabling Token-2022 assets with Transfer Hooks to be traded securely on mobile. Integrated Solana Mobile Wallet Adapter, developed a hook validation layer, and implemented an on-chain AMM with mobile-first UX. Designed to support real-world assets (RWA) and compliant DeFi use cases on Solana.",
      technologies: ["React", "TypeScript", "Anchor", "Solana Program Library", "Token-2022", "Mobile Wallet Adapter"],
      imageUrl: dexImage,
      socialLink: "https://x.com/usedex2_0",
      comingSoon: true
    },
    {
      id: 5,
      title: "Skill Swap DAO",
      description: "A decentralized skill-sharing platform powered by blockchain technology and governed by its community through a DAO. Users can exchange skills directly without intermediaries, build verifiable reputations, and participate in platform governance while earning tokenized incentives for their contributions.",
      technologies: ["Blockchain", "Smart Contracts", "DAO", "Web3", "Solidity", "React", "TypeScript", "Tokenomics"],
      githubLink: "https://github.com/nisargpatel7042lva/SkillSwap-DAO",
      demoLink: "https://skill-swap-dao.vercel.app/",
      imageUrl: skillSwapImage
    },
    {
      id: 4,
      title: "Clovia",
      description: "Clovia is a Web3-native social staking platform built on Solana that transforms social engagement into a decentralized economy. Users can stake value behind the people they follow, turning attention into capital and enabling influencers, creators, and communities to monetize their social presence. By aligning financial incentives with authentic connections, Clovia redefines how trust, influence, and value are exchanged in the digital world.",
      technologies: ["Solana", "Web3", "React Native", "TypeScript", "Social Staking"],
      imageUrl: cloviaImage, // Use the newly uploaded Clovia image
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
          <div className="relative space-y-12">
            {/* Modern gradient timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-github-accent via-github-border to-transparent opacity-60"></div>
            
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Enhanced timeline marker */}
                <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-github-accent to-github-accent/70 border-4 border-github-dark shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                {/* Enhanced project card */}
                <div className="ml-16 transform transition-all duration-300 group-hover:translate-x-2">
                  <Card className="overflow-hidden bg-gradient-to-br from-github-secondary to-github-secondary/90 border-github-border hover:border-github-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
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
                          <CardTitle className="text-github-accent group-hover:text-white transition-colors duration-300">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-github-dark rounded-full text-xs border border-github-border hover:border-github-accent/50 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                          {project.comingSoon ? (
                            <>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="flex items-center gap-2"
                                disabled
                              >
                                <Clock size={16} className="mr-2" />
                                Coming Soon
                              </Button>
                              {project.socialLink && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(project.socialLink, '_blank')}
                                >
                                  <Twitter size={16} className="mr-2" />
                                  Social
                                </Button>
                              )}
                            </>
                          ) : (
                            <>
                              {project.githubLink && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(project.githubLink, '_blank')}
                                >
                                  <Github size={16} className="mr-2" />
                                  Code
                                </Button>
                              )}
                              {project.demoLink && (
                                <Button 
                                  variant="default" 
                                  size="sm"
                                  onClick={() => window.open(project.demoLink, '_blank')}
                                >
                                  <ExternalLink size={16} className="mr-2" />
                                  Live Demo
                                </Button>
                              )}
                              {project.showcaseLink && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(project.showcaseLink, '_blank')}
                                >
                                  <ExternalLink size={16} className="mr-2" />
                                  ETHGlobal
                                </Button>
                              )}
                            </>
                          )}
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
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
