import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock, Twitter, Youtube, Trophy } from 'lucide-react';
import projectImage from '../assets/image.png';
import projectImage2 from '../assets/image2.png';
import projectImage3 from '../assets/image3.png';
import skillSwapImage from '/lovable-uploads/6b3efac9-f6b0-4f5f-8f7a-a3c59b976f2d.png';
import dexImage from '/lovable-uploads/76f90aa6-321b-48b8-8bb0-9670f8e99fe8.png';
import chainCredImage from '../assets/chaincred-logo.png';
import chainShareImage from '/lovable-uploads/chainshare.png';
import acdBadgeMakerImage from '/lovable-uploads/acd-badge-maker.png';
import finwiseImage from '/lovable-uploads/finwise.png';
import auraloomImage from '/lovable-uploads/auraloom.png';
import tuneCarnivalImage from '/lovable-uploads/tune-carnival.png';
import quickaidImage from '/lovable-uploads/quickaid.png';
import safemaskImage from '/lovable-uploads/safemask.png';
import strangerShelfImage from '/lovable-uploads/strangershelf.png';
import animeHubImage from '/lovable-uploads/animehub.png';
import lazorkitImage from '/lovable-uploads/lazorkit.png';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const featuredProjects = [
    {
      id: 17,
      title: "Lazorkit",
      description: "A Solana smart wallet powered by WebAuthn passkeys — no seed phrases, no gas fees. Users can sign in with a passkey to access gasless SOL and USDC transfers on Devnet. Built using the Lazorkit SDK for seamless Web3 onboarding.",
      technologies: ["Next.js", "TypeScript", "Solana", "WebAuthn", "Lazorkit SDK", "Vercel"],
      demoLink: "https://lazorkit-xi.vercel.app",
      githubLink: "https://github.com/nisargpatel7042lva/Lazorkit",
      imageUrl: lazorkitImage
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
      id: 15,
      title: "Stranger Shelf",
      description: "A merch store built for Stranger Things fans, featuring exclusive merchandise from the Upside Down. Created as part of learning affiliate marketing, offering apparel, accessories, home decor, and collectibles for the dedicated fanbase.",
      technologies: ["React", "TypeScript", "E-commerce", "Affiliate Marketing", "Vercel"],
      demoLink: "https://strangershelf.vercel.app",
      imageUrl: strangerShelfImage
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
      description: "A comprehensive Sybil-resistant reputation system built at ETHGlobal that combines on-chain activity analysis with privacy-preserving identity verification. Creates a 'credit score for Web3' using Zero-knowledge proofs and Soulbound Tokens.",
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
      description: "A payment split app where all records are stored on-chain. Split bills among friends and store bill receipts directly on the blockchain. Deployed on Base chain.",
      technologies: ["React", "TypeScript", "Base", "Smart Contracts", "Web3", "IPFS"],
      demoLink: "https://speedrun-project-1762289362002.vercel.app/",
      imageUrl: chainShareImage
    },
    {
      id: 6,
      title: "DEX 2.0",
      description: "Built a custom decentralized exchange enabling Token-2022 assets with Transfer Hooks to be traded securely on mobile. Integrated Solana Mobile Wallet Adapter.",
      technologies: ["React", "TypeScript", "Anchor", "Solana Program Library", "Token-2022", "Mobile Wallet Adapter"],
      imageUrl: dexImage,
      socialLink: "https://x.com/usedex2_0",
      comingSoon: true
    },
    {
      id: 5,
      title: "Skill Swap DAO",
      description: "A decentralized skill-sharing platform powered by blockchain technology and governed by its community through a DAO.",
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
      description: "AuraVerify is a decentralized biometric identity verification system built on the Solana blockchain.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "Solana Wallet Adapter", "Flask", "OpenCV"],
      githubLink: "https://github.com/nisargpatel7042lva/aura-verify-web3",
      demoLink: "https://aura-verify-web3.vercel.app/",
      imageUrl: projectImage2
    },
    {
      id: 3,
      title: "Rewind",
      description: "REWIND is a meticulously crafted web experience that takes you back to the golden era of personal computing with Windows 98-era interfaces.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel", "React", "Google Photos API"],
      githubLink: "https://github.com/nisargpatel7042lva/retro-website",
      demoLink: "https://rewind-ten.vercel.app/",
      imageUrl: projectImage3
    },
    {
      id: 10,
      title: "FinWise",
      description: "Your smart finance manager app for tracking expenses, analyzing spending habits, and keeping finances organized.",
      technologies: ["React", "TypeScript", "Finance", "Expense Tracking", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/FinWise",
      demoLink: "https://finwise-nine.vercel.app/",
      imageUrl: finwiseImage
    },
    {
      id: 11,
      title: "AuraLoom",
      description: "A sleek and intuitive music player app with a visually appealing frontend interface for users to explore and play their favorite tunes.",
      technologies: ["React", "TypeScript", "Music Player", "Frontend", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/Auraloom",
      demoLink: "https://auraloom.vercel.app/",
      imageUrl: auraloomImage
    },
    {
      id: 12,
      title: "Tune Carnival",
      description: "The official booking platform for college fest! Explore events, book tickets, and enjoy Malhar Festival with Mohit Chauhan.",
      technologies: ["React", "TypeScript", "Event Management", "Booking System", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/malhar-festival",
      demoLink: "https://malhar-festival.vercel.app/",
      imageUrl: tuneCarnivalImage
    },
    {
      id: 13,
      title: "QuickAid",
      description: "Provides fast, easy, and accessible real-time first-aid guidance during medical emergencies.",
      technologies: ["React", "TypeScript", "Healthcare", "Emergency Response", "First Aid", "Vercel"],
      githubLink: "https://github.com/nisargpatel7042lva/quickaid",
      demoLink: "https://quick-aid.vercel.app/",
      imageUrl: quickaidImage
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-12">
        <ScrollReveal>
          <div>
            <h1 className="text-2xl font-bold mb-6">My Projects</h1>
            <p className="mb-8 text-github-text/80">
              Here are some of the projects I've worked on. From web applications to UI/UX designs,
              I enjoy building software and designs that solve real problems.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Featured Projects */}
        <div>
          <ScrollReveal>
            <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
          </ScrollReveal>
          <div className="relative space-y-12">
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-github-accent via-github-border to-transparent opacity-60"></div>
            
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={Math.min(index * 0.05, 0.3)} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="relative group">
                  <motion.div 
                    className="absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-github-accent to-github-accent/70 border-4 border-github-dark shadow-lg flex items-center justify-center z-10"
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </motion.div>
                  
                  <div className="ml-16">
                    <GlassCard className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 overflow-hidden">
                          <motion.img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <CardTitle className="text-github-accent">{project.title}</CardTitle>
                              {project.isHackathonWinner && (
                                <motion.span 
                                  className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30"
                                  animate={{ boxShadow: ['0 0 0px rgba(234,179,8,0)', '0 0 12px rgba(234,179,8,0.3)', '0 0 0px rgba(234,179,8,0)'] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <Trophy size={12} />
                                  Hackathon Winner
                                </motion.span>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4 leading-relaxed text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <motion.span 
                                  key={tech}
                                  className="px-3 py-1 bg-github-dark rounded-full text-xs border border-github-border hover:border-github-accent/50 transition-colors duration-300"
                                  whileHover={{ scale: 1.08 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex gap-3 flex-wrap">
                            {project.comingSoon ? (
                              <>
                                <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
                                  <Clock size={16} className="mr-1" />
                                  Coming Soon
                                </Button>
                                {project.socialLink && (
                                  <Button variant="outline" size="sm" onClick={() => window.open(project.socialLink, '_blank')}>
                                    <Twitter size={16} className="mr-1" />
                                    Social
                                  </Button>
                                )}
                              </>
                            ) : (
                              <>
                                {project.githubLink && (
                                  <Button variant="outline" size="sm" onClick={() => window.open(project.githubLink, '_blank')}>
                                    <Github size={16} className="mr-1" />
                                    Code
                                  </Button>
                                )}
                                {project.demoLink && (
                                  <Button variant="default" size="sm" onClick={() => window.open(project.demoLink, '_blank')}>
                                    <ExternalLink size={16} className="mr-1" />
                                    Live Demo
                                  </Button>
                                )}
                                {project.showcaseLink && (
                                  <Button variant="outline" size="sm" onClick={() => window.open(project.showcaseLink, '_blank')}>
                                    <ExternalLink size={16} className="mr-1" />
                                    ETHGlobal
                                  </Button>
                                )}
                                {project.videoLink && (
                                  <Button variant="outline" size="sm" onClick={() => window.open(project.videoLink, '_blank')}>
                                    <Youtube size={16} className="mr-1" />
                                    Video
                                  </Button>
                                )}
                                {project.hackathonLinks && project.hackathonLinks.map((link) => (
                                  <Button 
                                    key={link.name}
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => window.open(link.url, '_blank')}
                                    className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20"
                                  >
                                    <Trophy size={16} className="mr-1" />
                                    {link.name}
                                  </Button>
                                ))}
                              </>
                            )}
                          </CardFooter>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Projects;
