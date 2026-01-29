
import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock, Twitter, Youtube, Trophy } from 'lucide-react';
import projectImage from '../assets/image.png'; // Import the image
import projectImage2 from '../assets/image2.png'; // Import the image
import projectImage3 from '../assets/image3.png'; // Import the image
import skillSwapImage from '/lovable-uploads/6b3efac9-f6b0-4f5f-8f7a-a3c59b976f2d.png'; // Import Skill Swap DAO image
import dexImage from '/lovable-uploads/76f90aa6-321b-48b8-8bb0-9670f8e99fe8.png'; // Import DEX 2.0 image
import chainCredImage from '../assets/chaincred-logo.png'; // Import ChainCred logo
import chainShareImage from '/lovable-uploads/chainshare.png'; // Import ChainShare image
import acdBadgeMakerImage from '/lovable-uploads/acd-badge-maker.png'; // Import ACD Badge Maker image
import finwiseImage from '/lovable-uploads/finwise.png'; // Import FinWise image
import auraloomImage from '/lovable-uploads/auraloom.png'; // Import AuraLoom image
import tuneCarnivalImage from '/lovable-uploads/tune-carnival.png'; // Import Tune Carnival image
import quickaidImage from '/lovable-uploads/quickaid.png'; // Import QuickAid image
import safemaskImage from '/lovable-uploads/safemask.png'; // Import SafeMask image
import strangerShelfImage from '/lovable-uploads/strangershelf.png'; // Import Stranger Shelf image
import animeHubImage from '/lovable-uploads/animehub.png'; // Import Anime Hub image

const Projects = () => {
  const featuredProjects = [
    {
      id: 15,
      title: "Stranger Shelf",
      description: "A merch store built for Stranger Things fans, featuring exclusive merchandise from the Upside Down. Created as part of learning affiliate marketing, offering apparel, accessories, home decor, and collectibles for the dedicated fanbase.",
      technologies: ["React", "TypeScript", "E-commerce", "Affiliate Marketing", "Vercel"],
      demoLink: "https://strangershelf.vercel.app",
      imageUrl: strangerShelfImage
    },
    {
      id: 16,
      title: "The Anime Hub",
      description: "Your ultimate destination for premium anime merchandise. A curated store featuring rare collectibles, exclusive action figures, and anime-themed apparel. Built as part of exploring affiliate marketing, offering everything from t-shirts to collectibles for otaku enthusiasts.",
      technologies: ["React", "TypeScript", "E-commerce", "Affiliate Marketing", "Vercel"],
      demoLink: "https://theanimehub.vercel.app",
      imageUrl: animeHubImage
    },
    {
      id: 14,
      title: "SafeMask",
      description: "SafeMask is a privacy-first multi-chain crypto wallet that keeps your funds and activity secure. Manage Ethereum, Solana, Bitcoin, and more with live balances, transaction history, and advanced privacy features, all while your keys stay safely on your device.",
      technologies: ["React Native", "TypeScript", "Ethereum", "Solana", "Bitcoin", "Web3", "Crypto Wallet"],
      githubLink: "https://github.com/Kartikvyas1604/SafeMask",
      demoLink: "https://safemaskweb.vercel.app",
      videoLink: "https://youtu.be/QXXFGKl47go",
      imageUrl: safemaskImage,
      isHackathonWinner: true,
      hackathonLinks: [
        { name: "ZypherPunk", url: "https://zypherpunk.d4mr.com/project/safemask-e909/" },
        { name: "Devfolio", url: "https://devfolio.co/projects/safemask-04d4" }
      ]
    },
    {
      id: 7,
      title: "ChainCred",
      description: "A comprehensive Sybil-resistant reputation system built at ETHGlobal that combines on-chain activity analysis with privacy-preserving identity verification. Creates a 'credit score for Web3' using Zero-knowledge proofs and Soulbound Tokens to prove you're a real human with good on-chain behavior—protecting DAOs from governance manipulation and airdrop farming while maintaining user privacy.",
      technologies: ["Next.js", "TypeScript", "Solidity", "Hardhat", "The Graph", "Zero-Knowledge Proofs", "Soulbound Tokens"],
      githubLink: "https://github.com/nisargpatel7042lva/chaincred-ETHGlobal/",
      demoLink: "https://eth-reputation-passport.vercel.app/",
      showcaseLink: "https://ethglobal.com/showcase/chaincred-z71wr",
      imageUrl: chainCredImage
    },
    {
      id: 8,
      title: "Amazon Badge Maker",
      description: "Upload your photo and it's automatically cropped into the Amazon Community Day badge — ready to download and share on social media.",
      technologies: ["React", "TypeScript", "Image Processing", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/ACD-Badge-Maker",
      demoLink: "https://acd-photo-cropper.vercel.app/",
      imageUrl: acdBadgeMakerImage
    },
    {
      id: 9,
      title: "ChainShare",
      description: "A payment split app where all records are stored on-chain. Split bills among friends and store bill receipts directly on the blockchain. Deployed on Base chain for secure, transparent, and immutable payment tracking.",
      technologies: ["React", "TypeScript", "Base", "Smart Contracts", "Web3", "IPFS"],
      demoLink: "https://speedrun-project-1762289362002.vercel.app/",
      imageUrl: chainShareImage
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
      id: 1,
      title: "Nisarg Portfolio",
      description: "A personal portfolio website built with React and Next.js, featuring my projects, skills, and experience.",
      technologies: ["Typescript", "Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/Nisarg-Portfolio",
      demoLink: "https://nisargxplores-portfolio.vercel.app/",
      imageUrl: projectImage
    },
    {
      id: 2,
      title: "Aura Verify",
      description: "AuraVerify is a decentralized biometric identity verification system built on the Solana blockchain. It combines wallet-based identity, biometric facial recognition, and blockchain immutability to enable secure, trustless, and reusable digital identity verification.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "Solana Wallet Adapter", "Flask", "OpenCV", "Biometric Face Scan API", "Jupiter API"],
      githubLink: "https://github.com/nisargpatel7042lva/aura-verify-web3",
      demoLink: "https://aura-verify-web3.vercel.app/",
      imageUrl: projectImage2
    },
    {
      id: 3,
      title: "Rewind",
      description: "REWIND is a meticulously crafted web experience that takes you back to the golden era of personal computing. This project captures the authentic look and feel of Windows 98-era interfaces, complete with pixelated graphics, classic color schemes, and that unmistakable retro charm that defined the early internet.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "React", "Google Photos API"],
      githubLink: "https://github.com/nisargpatel7042lva/retro-website",
      demoLink: "https://rewind-ten.vercel.app/",
      imageUrl: projectImage3
    },
    {
      id: 10,
      title: "FinWise",
      description: "Welcome to FinWise, your smart finance manager app! Whether you want to track your expenses, analyze your spending habits, or keep your finances organized, FinWise is here to simplify money management for you.",
      technologies: ["React", "TypeScript", "Finance", "Expense Tracking", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/FinWise",
      demoLink: "https://finwise-nine.vercel.app/",
      imageUrl: finwiseImage
    },
    {
      id: 11,
      title: "AuraLoom",
      description: "AuraLoom is a sleek and intuitive music player app that offers a visually appealing frontend interface for users to explore and play their favorite tunes. Built with modern web technologies, AuraLoom focuses on delivering an exceptional user experience with an elegant design and seamless functionality.",
      technologies: ["React", "TypeScript", "Music Player", "Frontend", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/Auraloom",
      demoLink: "https://auraloom.vercel.app/",
      imageUrl: auraloomImage
    },
    {
      id: 12,
      title: "Tune Carnival",
      description: "Welcome to Tune Carnival, the official booking platform for our college fest! This platform allows users to explore events, book tickets, and enjoy the vibrant experiences of Malhar Festival with Mohit Chauhan.",
      technologies: ["React", "TypeScript", "Event Management", "Booking System", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/malhar-festival",
      demoLink: "https://malhar-festival.vercel.app/",
      imageUrl: tuneCarnivalImage
    },
    {
      id: 13,
      title: "QuickAid",
      description: "Many people panic during medical emergencies and don't know what first-aid steps to take. QuickAid provides a fast, easy, and accessible way to get real-time guidance, reducing the risk of complications before professional medical assistance arrives.",
      technologies: ["React", "TypeScript", "Healthcare", "Emergency Response", "First Aid", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/quickaid",
      demoLink: "https://quick-aid.vercel.app/",
      imageUrl: quickaidImage
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
                          <div className="flex items-center gap-3">
                            <CardTitle className="text-github-accent group-hover:text-white transition-colors duration-300">{project.title}</CardTitle>
                            {project.isHackathonWinner && (
                              <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30">
                                <Trophy size={12} />
                                Hackathon Winner
                              </span>
                            )}
                          </div>
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
                              {project.videoLink && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(project.videoLink, '_blank')}
                                >
                                  <Youtube size={16} className="mr-2" />
                                  Video
                                </Button>
                              )}
                              {project.hackathonLinks && project.hackathonLinks.map((link) => (
                                <Button 
                                  key={link.name}
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(link.url, '_blank')}
                                  className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                                >
                                  <Trophy size={16} className="mr-2" />
                                  {link.name}
                                </Button>
                              ))}
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
      </div>
    </GitHubLayout>
  );
};

export default Projects;
