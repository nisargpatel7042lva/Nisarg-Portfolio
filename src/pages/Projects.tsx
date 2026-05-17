import { useState } from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Clock, Twitter, Youtube, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
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
import hustl3Image from '/lovable-uploads/hustl3.png';
import rugradarImage from '/lovable-uploads/rugradar.png';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';

const FEATURED_COUNT = 8;

const featuredProjects = [
  {
    id: 19,
    title: 'RugRadar',
    description: 'Solana Rug Pull Early Warning System. Monitors new token listings in real-time and scores every token on a 0–100 risk scale using 6 signals: mint authority, holder concentration, freeze authority, liquidity depth, token age, and 24h volume.',
    technologies: ['Next.js', 'TypeScript', 'Solana', 'Birdeye API', 'Telegram Bot'],
    githubLink: 'https://github.com/nisargpatel7042lva/RugRadar',
    demoLink: 'https://rugradar-birdeye.vercel.app/',
    imageUrl: rugradarImage,
  },
  {
    id: 18,
    title: 'Hustl3',
    description: 'A marketplace where AI agents and humans build together. Hire talent or deploy autonomous AI agents, pay with crypto secured by on-chain escrow.',
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'AI Agents', 'Web3'],
    githubLink: 'https://github.com/nisargpatel7042lva/Hustl3',
    demoLink: 'https://hustl3-web-inky.vercel.app/',
    showcaseLink: 'https://ethglobal.com/showcase/hustl3-de5q3',
    imageUrl: hustl3Image,
  },
  {
    id: 17,
    title: 'Lazorkit',
    description: 'A Solana smart wallet powered by WebAuthn passkeys — no seed phrases, no gas fees. Gasless SOL and USDC transfers on Devnet via the Lazorkit SDK.',
    technologies: ['Next.js', 'TypeScript', 'Solana', 'WebAuthn', 'Lazorkit SDK'],
    demoLink: 'https://lazorkit-xi.vercel.app',
    githubLink: 'https://github.com/nisargpatel7042lva/Lazorkit',
    imageUrl: lazorkitImage,
  },
  {
    id: 14,
    title: 'SafeMask',
    description: 'A privacy-first multi-chain crypto wallet supporting Ethereum, Solana, and Bitcoin with live balances, transaction history, and advanced privacy features.',
    technologies: ['React Native', 'TypeScript', 'Ethereum', 'Solana', 'Bitcoin'],
    githubLink: 'https://github.com/Kartikvyas1604/SafeMask',
    demoLink: 'https://safemaskweb.vercel.app',
    videoLink: 'https://youtu.be/QXXFGKl47go',
    imageUrl: safemaskImage,
    isHackathonWinner: true,
    hackathonLinks: [
      { name: 'ZypherPunk', url: 'https://zypherpunk.d4mr.com/project/safemask-e909/' },
      { name: 'Devfolio',   url: 'https://devfolio.co/projects/safemask-04d4' },
    ],
  },
  {
    id: 7,
    title: 'ChainCred',
    description: 'A Sybil-resistant reputation system built at ETHGlobal combining on-chain activity analysis with privacy-preserving identity via Zero-Knowledge Proofs and Soulbound Tokens.',
    technologies: ['Next.js', 'Solidity', 'Hardhat', 'The Graph', 'ZK Proofs'],
    githubLink: 'https://github.com/nisargpatel7042lva/chaincred-ETHGlobal/',
    demoLink: 'https://eth-reputation-passport.vercel.app/',
    showcaseLink: 'https://ethglobal.com/showcase/chaincred-z71wr',
    imageUrl: chainCredImage,
  },
  {
    id: 5,
    title: 'Skill Swap DAO',
    description: 'A decentralized skill-sharing platform governed by its community through a DAO. Users exchange skills using tokenized incentives on-chain.',
    technologies: ['React', 'TypeScript', 'Solidity', 'DAO', 'Tokenomics'],
    githubLink: 'https://github.com/nisargpatel7042lva/SkillSwap-DAO',
    demoLink: 'https://skill-swap-dao.vercel.app/',
    imageUrl: skillSwapImage,
  },
  {
    id: 6,
    title: 'DEX 2.0',
    description: 'A custom decentralized exchange enabling Token-2022 assets with Transfer Hooks to be traded securely on mobile, with Solana Mobile Wallet Adapter integration.',
    technologies: ['React', 'TypeScript', 'Anchor', 'Solana', 'Token-2022'],
    imageUrl: dexImage,
    socialLink: 'https://x.com/usedex2_0',
    comingSoon: true,
  },
  {
    id: 9,
    title: 'ChainShare',
    description: 'A payment-split app where all records and receipts are stored on-chain via IPFS. Deployed on Base.',
    technologies: ['React', 'TypeScript', 'Base', 'Smart Contracts', 'IPFS'],
    demoLink: 'https://speedrun-project-1762289362002.vercel.app/',
    imageUrl: chainShareImage,
  },
  {
    id: 2,
    title: 'Aura Verify',
    description: 'Decentralized biometric identity verification system on Solana using OpenCV for facial recognition.',
    technologies: ['Next.js', 'TypeScript', 'Solana', 'Flask', 'OpenCV'],
    githubLink: 'https://github.com/nisargpatel7042lva/aura-verify-web3',
    demoLink: 'https://aura-verify-web3.vercel.app/',
    imageUrl: projectImage2,
  },
  {
    id: 3,
    title: 'Rewind',
    description: 'A meticulously crafted web experience that takes you back to the golden era of personal computing with Windows 98-era interfaces.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Google Photos API'],
    githubLink: 'https://github.com/nisargpatel7042lva/retro-website',
    demoLink: 'https://rewind-ten.vercel.app/',
    imageUrl: projectImage3,
  },
  {
    id: 16,
    title: 'The Anime Hub',
    description: 'A curated e-commerce store for premium anime merchandise — rare collectibles, action figures, and apparel for otaku enthusiasts.',
    technologies: ['React', 'TypeScript', 'E-commerce', 'Vercel'],
    demoLink: 'https://theanimehub.vercel.app',
    imageUrl: animeHubImage,
  },
  {
    id: 15,
    title: 'Stranger Shelf',
    description: 'A merch store for Stranger Things fans featuring exclusive merchandise. Built for learning affiliate marketing.',
    technologies: ['React', 'TypeScript', 'E-commerce', 'Vercel'],
    demoLink: 'https://strangershelf.vercel.app',
    imageUrl: strangerShelfImage,
  },
  {
    id: 8,
    title: 'Amazon Badge Maker',
    description: "Upload your photo — automatically cropped into the Amazon Community Day badge and ready to share.",
    technologies: ['React', 'TypeScript', 'Image Processing', 'Vercel'],
    githubLink: 'https://github.com/nisargpatel7042lva/ACD-Badge-Maker',
    demoLink: 'https://acd-photo-cropper.vercel.app/',
    imageUrl: acdBadgeMakerImage,
  },
  {
    id: 10,
    title: 'FinWise',
    description: 'A smart finance manager for tracking expenses and analyzing spending habits.',
    technologies: ['React', 'TypeScript', 'Finance', 'Vercel'],
    githubLink: 'https://github.com/nisargpatel7042lva/FinWise',
    demoLink: 'https://finwise-nine.vercel.app/',
    imageUrl: finwiseImage,
  },
  {
    id: 11,
    title: 'AuraLoom',
    description: 'A sleek music player app with a visually appealing frontend interface.',
    technologies: ['React', 'TypeScript', 'Music Player', 'Vercel'],
    githubLink: 'https://github.com/nisargpatel7042lva/Auraloom',
    demoLink: 'https://auraloom.vercel.app/',
    imageUrl: auraloomImage,
  },
  {
    id: 12,
    title: 'Tune Carnival',
    description: 'The official booking platform for a college fest featuring Mohit Chauhan.',
    technologies: ['React', 'TypeScript', 'Event Management', 'Vercel'],
    githubLink: 'https://github.com/nisargpatel7042lva/malhar-festival',
    demoLink: 'https://malhar-festival.vercel.app/',
    imageUrl: tuneCarnivalImage,
  },
  {
    id: 13,
    title: 'QuickAid',
    description: 'Fast and accessible real-time first-aid guidance during medical emergencies.',
    technologies: ['React', 'TypeScript', 'Healthcare', 'Vercel'],
    githubLink: 'https://github.com/nisargpatel7042lva/quickaid',
    demoLink: 'https://quick-aid.vercel.app/',
    imageUrl: quickaidImage,
  },
  {
    id: 1,
    title: 'Nisarg Portfolio',
    description: 'This portfolio — built with React, Framer Motion, and a GitHub-inspired dark aesthetic.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubLink: 'https://github.com/nisargpatel7042lva/Nisarg-Portfolio',
    demoLink: 'https://nisargxplores-portfolio.vercel.app/',
    imageUrl: projectImage,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? featuredProjects : featuredProjects.slice(0, FEATURED_COUNT);

  return (
    <GitHubLayout>
      <div className="space-y-10">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-github-accent">Projects</h1>
            <p className="text-github-text/60 text-sm max-w-xl">
              A selection of projects I've built — spanning Web3, DeFi, full-stack apps, and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative space-y-10">
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-github-accent via-github-border/60 to-transparent opacity-50" />

          <AnimatePresence>
            {visible.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={Math.min((index % FEATURED_COUNT) * 0.04, 0.28)}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="relative group">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2.5 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-github-accent to-github-accent/60 border-4 border-github-dark shadow-md flex items-center justify-center z-10"
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.04, 0.25), duration: 0.35 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </motion.div>

                  <div className="ml-14">
                    <GlassCard className="overflow-hidden">
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-[38%] overflow-hidden bg-github-dark/40 flex-shrink-0 project-img-wrap">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="h-48 md:h-full w-full object-cover project-img"
                          />
                        </div>

                        {/* Content */}
                        <div className="md:w-[62%] flex flex-col">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-3 flex-wrap">
                              <CardTitle className="text-github-accent text-base md:text-lg">
                                {project.title}
                              </CardTitle>
                              {project.isHackathonWinner && (
                                <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/15 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/25 hackathon-badge">
                                  <Trophy size={11} />
                                  Hackathon Winner
                                </span>
                              )}
                            </div>
                          </CardHeader>

                          <CardContent className="pb-3 flex-1">
                            <p className="mb-4 text-sm text-github-text/70 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-0.5 bg-github-dark rounded-full text-xs border border-github-border hover:border-github-accent/45 text-github-text/80 transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </CardContent>

                          <CardFooter className="flex gap-2 flex-wrap pt-0">
                            {project.comingSoon ? (
                              <>
                                <Button variant="outline" size="sm" disabled className="text-xs">
                                  <Clock size={13} className="mr-1" />
                                  Coming Soon
                                </Button>
                                {project.socialLink && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => window.open(project.socialLink, '_blank')}
                                  >
                                    <Twitter size={13} className="mr-1" />
                                    Updates
                                  </Button>
                                )}
                              </>
                            ) : (
                              <>
                                {project.githubLink && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => window.open(project.githubLink, '_blank')}
                                  >
                                    <Github size={13} className="mr-1" />
                                    Code
                                  </Button>
                                )}
                                {project.demoLink && (
                                  <Button
                                    size="sm"
                                    className="text-xs bg-github-accent hover:bg-github-accent/80"
                                    onClick={() => window.open(project.demoLink, '_blank')}
                                  >
                                    <ExternalLink size={13} className="mr-1" />
                                    Live Demo
                                  </Button>
                                )}
                                {project.showcaseLink && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => window.open(project.showcaseLink, '_blank')}
                                  >
                                    <ExternalLink size={13} className="mr-1" />
                                    ETHGlobal
                                  </Button>
                                )}
                                {project.videoLink && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                    onClick={() => window.open(project.videoLink, '_blank')}
                                  >
                                    <Youtube size={13} className="mr-1" />
                                    Demo Video
                                  </Button>
                                )}
                                {project.hackathonLinks?.map((link) => (
                                  <Button
                                    key={link.name}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/15"
                                    onClick={() => window.open(link.url, '_blank')}
                                  >
                                    <Trophy size={13} className="mr-1" />
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
          </AnimatePresence>
        </div>

        {/* Show All Toggle */}
        {featuredProjects.length > FEATURED_COUNT && (
          <ScrollReveal direction="none">
            <div className="flex justify-center pt-2">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  className="border-github-accent/50 text-github-accent hover:bg-github-accent hover:text-white gap-2 transition-all"
                  onClick={() => setShowAll((v) => !v)}
                >
                  {showAll ? (
                    <>
                      <ChevronUp size={16} />
                      Show Fewer Projects
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show All {featuredProjects.length} Projects
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </GitHubLayout>
  );
};

export default Projects;
