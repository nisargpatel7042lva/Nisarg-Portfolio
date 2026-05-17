import GitHubLayout from '@/components/layout/GitHubLayout';
import RepoCarousel from '@/components/RepoCarousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import meImage from '@/assets/me3.jpg';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.4, 0.25, 1], duration: 0.5 } },
};

const quickLinks = [
  {
    title: 'Experience',
    desc: 'My professional journey across development, design, and community leadership.',
    link: '/experience',
    label: 'View Experience',
  },
  {
    title: 'Projects',
    desc: 'Featured projects built across Web3, DeFi, and full-stack development.',
    link: '/projects',
    label: 'View Projects',
  },
  {
    title: 'Contact',
    desc: 'Open to collaborations, freelance engagements, and full-time opportunities.',
    link: '/contact',
    label: 'Get in Touch',
  },
];

const Home = () => {
  return (
    <GitHubLayout>
      <div className="space-y-14">

        {/* Hero */}
        <motion.div variants={container} initial="hidden" animate="show">
          <GlassCard className="p-8 md:p-12" glow>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

              {/* Profile Image */}
              <motion.div variants={item} className="flex-shrink-0">
                <motion.div
                  className="rounded-full overflow-hidden w-32 h-32 md:w-44 md:h-44 border-2 border-github-accent/50 shadow-lg shadow-github-accent/10 ring-4 ring-github-accent/5"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(46,160,67,0.22)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>

              {/* Text */}
              <div className="text-center md:text-left space-y-5">
                <motion.div variants={item}>
                  <h1 className="text-3xl md:text-5xl font-bold text-github-accent leading-tight">
                    Nisarg Patel
                  </h1>
                  <p className="mt-2 text-sm md:text-base text-github-text/60 font-mono tracking-wide">
                    Web3 Developer · UI/UX Designer · Content Writer
                  </p>
                </motion.div>

                <motion.p
                  variants={item}
                  className="text-sm md:text-base text-github-text/70 leading-relaxed max-w-md"
                >
                  Building decentralized applications on Solana &amp; Ethereum. Passionate about
                  bridging design and blockchain to create meaningful user experiences.
                </motion.p>

                <motion.div
                  variants={item}
                  className="flex flex-wrap gap-3 justify-center md:justify-start"
                >
                  <Link to="/about">
                    <Button className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl hover:shadow-github-accent/20 transition-all">
                      About Me
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button
                      variant="outline"
                      className="border-github-accent/60 text-github-accent hover:bg-github-accent hover:text-white transition-all"
                    >
                      View Projects
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <GlassCard className="p-6">
            <RepoCarousel />
          </GlassCard>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {quickLinks.map((link) => (
            <motion.div key={link.title} variants={item}>
              <GlassCard className="p-6 h-full flex flex-col" glow>
                <h3 className="text-lg font-semibold mb-3 text-github-accent">{link.title}</h3>
                <p className="text-github-text/65 mb-6 leading-relaxed flex-1 text-sm">
                  {link.desc}
                </p>
                <Link to={link.link} className="block mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center border-github-accent/50 text-github-accent hover:bg-github-accent hover:text-white group transition-all"
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </GitHubLayout>
  );
};

export default Home;
