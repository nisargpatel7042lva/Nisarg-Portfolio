import GitHubLayout from '@/components/layout/GitHubLayout';
import { CardContent, CardHeader } from '@/components/ui/card';
import { Github, ExternalLink, Twitter, Linkedin, Instagram, MessageSquare, Mail, MessagesSquare, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.4, 0.25, 1], duration: 0.45 } },
};

const socialLinks = [
  { name: 'GitHub',    username: '@nisargpatel7042lva',      url: 'https://github.com/nisargpatel7042lva',                  icon: Github,         accent: '#3fb950' },
  { name: 'LinkedIn',  username: '@nisarg-patel-7b799a277',   url: 'https://www.linkedin.com/in/nisarg-patel-7b799a277',     icon: Linkedin,       accent: '#0a66c2' },
  { name: 'Twitter',   username: '@NisargPatel5563',           url: 'https://x.com/NisargPatel5563',                         icon: Twitter,        accent: '#1da1f2' },
  { name: 'Instagram', username: '@nisargxplores',             url: 'https://www.instagram.com/nisargxplores/',               icon: Instagram,      accent: '#e1306c' },
  { name: 'Telegram',  username: '@nisargpatel7042',           url: 'https://t.me/nisargpatel',                               icon: MessagesSquare, accent: '#0088cc' },
  { name: 'Discord',   username: 'nisargpatel_7042lva',        url: '#',                                                      icon: MessageSquare,  accent: '#5865f2' },
  { name: 'Email',     username: 'nisargpatel_5565@outlook.com', url: 'mailto:nisargpatel_5565@outlook.com',                 icon: Mail,           accent: '#ea4335' },
  { name: 'Farcaster', username: '@nisargxplores',             url: 'https://farcaster.xyz/nisargxplores',                    icon: Radio,          accent: '#855dcd' },
];

const Socials = () => {
  return (
    <GitHubLayout>
      <div className="space-y-10">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-github-accent">Connect</h1>
            <p className="text-github-text/60 text-sm">
              Find me on these platforms — always happy to connect.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {socialLinks.map((social) => (
            <motion.div key={social.name} variants={item}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlassCard className="overflow-hidden h-full">
                  {/* Accent bar */}
                  <div
                    className="h-0.5 w-full opacity-70"
                    style={{ backgroundColor: social.accent }}
                  />

                  <CardHeader className="pt-4 pb-2">
                    <div className="flex items-center justify-between">
                      <social.icon size={18} style={{ color: social.accent }} />
                      <h2 className="text-sm font-semibold text-github-text">{social.name}</h2>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-1 pb-4">
                    <p className="text-xs text-github-text/55 font-mono mb-4 truncate">
                      {social.username}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-github-border/60 text-github-text/70 hover:border-github-accent hover:text-github-accent text-xs flex items-center gap-1.5 transition-all"
                    >
                      Visit
                      <ExternalLink size={11} />
                    </Button>
                  </CardContent>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </GitHubLayout>
  );
};

export default Socials;
