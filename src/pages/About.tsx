import GitHubLayout from '@/components/layout/GitHubLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Code, Palette, TrendingUp, Briefcase, Rocket, PenTool } from 'lucide-react';
import meImage from '../assets/me3.jpg';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.4, 0.25, 1], duration: 0.45 } },
};


const quickStats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed',  value: '50+' },
  { label: 'Technologies',        value: '20+' },
  { label: 'GitHub Repos',        value: '100+' },
];

const techCategories = [
  { title: 'Languages',           icon: Code,       items: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'C#', 'Solidity'] },
  { title: 'Frameworks',          icon: Briefcase,   items: ['Next.js', 'Express.js', 'Flask', 'React', 'React Native'] },
  { title: 'Tools & Design',      icon: Palette,     items: ['Docker', 'TailwindCSS', 'Vite', 'Git', 'Figma', 'Photoshop'] },
  { title: 'Databases',           icon: TrendingUp,  items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Appwrite'] },
  { title: 'Blockchain & Web3',   icon: Code,        items: ['Solana', 'Ethereum', 'Smart Contracts', 'Anchor', 'Web3.js'] },
];

const whatIDo = [
  { icon: Rocket,    title: 'Web3 Development', desc: 'Building decentralized apps on Solana and Ethereum — smart contracts, DeFi protocols, and wallets.' },
  { icon: Palette,   title: 'UI/UX Design',     desc: 'Crafting intuitive, visually polished interfaces with a focus on user experience and accessibility.' },
  { icon: PenTool,   title: 'Content Writing',  desc: 'Technical articles and newsletters on blockchain, Web3 trends, and emerging technology.' },
  { icon: TrendingUp, title: 'Market Trading',  desc: 'Applying technical analysis across crypto and traditional markets to understand financial dynamics.' },
];

const About = () => {
  return (
    <GitHubLayout>
      <div className="space-y-12">

        {/* Hero */}
        <ScrollReveal direction="up" duration={0.6}>
          <GlassCard className="p-8 md:p-10" glow>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">

              {/* Profile Image */}
              <div className="flex-shrink-0">
                <motion.div
                  className="rounded-full overflow-hidden w-32 h-32 md:w-44 md:h-44 border-2 border-github-accent/50 shadow-lg shadow-github-accent/10 ring-4 ring-github-accent/5"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(46,160,67,0.22)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Bio */}
              <motion.div
                className="flex-1 text-center md:text-left space-y-4"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <h1 className="text-3xl md:text-4xl font-bold text-github-accent">Nisarg Patel</h1>
                  <p className="mt-1 text-sm md:text-base text-github-text/60 font-mono">
                    Web3 Developer · UI/UX Designer · Content Writer
                  </p>
                </motion.div>

                <motion.p
                  variants={item}
                  className="text-sm md:text-base text-github-text/70 leading-relaxed max-w-xl"
                >
                  Passionate developer with expertise in blockchain technology, modern web development,
                  and user experience design. I love building innovative solutions that bridge traditional
                  web and the decentralized future.
                </motion.p>

                <motion.div
                  variants={item}
                  className="flex flex-col sm:flex-row gap-3 items-center md:justify-start justify-center"
                >
                  <Button
                    className="bg-github-accent hover:bg-github-accent/80 shadow-md hover:shadow-xl hover:shadow-github-accent/20 transition-all w-full sm:w-auto"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/assets/resume.pdf';
                      link.download = 'Nisarg_Patel_Resume.pdf';
                      link.setAttribute('target', '_blank');
                      link.setAttribute('rel', 'noopener noreferrer');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="mr-2" size={15} />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="border-github-accent/60 text-github-accent hover:bg-github-accent hover:text-white transition-all w-full sm:w-auto"
                    onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={15} />
                    GitHub Profile
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {quickStats.map((stat, i) => (
            <motion.div key={stat.label} variants={item}>
              <GlassCard className="text-center p-5">
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-github-accent mb-1"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 220 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-github-text/60">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold text-github-accent">Tech Stack</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techCategories.map((cat, index) => (
              <ScrollReveal key={cat.title} delay={index * 0.07}>
                <GlassCard className="p-5 h-full">
                  <h3 className="text-github-accent flex items-center gap-2 text-sm font-semibold mb-3 uppercase tracking-wider">
                    <cat.icon size={15} />
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-github-dark text-github-accent border border-github-accent/25 text-xs hover:border-github-accent/55 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="space-y-6">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold text-github-accent">What I Do</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatIDo.map((entry, index) => (
              <ScrollReveal key={entry.title} delay={index * 0.08}>
                <GlassCard className="p-6 h-full">
                  <h3 className="text-github-accent text-sm font-semibold flex items-center gap-2 mb-2 uppercase tracking-wider">
                    <entry.icon className="w-4 h-4" />
                    {entry.title}
                  </h3>
                  <p className="text-github-text/70 text-sm leading-relaxed">{entry.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </GitHubLayout>
  );
};

export default About;
