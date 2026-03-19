import GitHubLayout from '@/components/layout/GitHubLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Code, Palette, TrendingUp, Briefcase, Github, Linkedin, Twitter, Mail, Rocket, PenTool, Radio } from 'lucide-react';
import meImage from '../assets/me3.jpg';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';

const About = () => {
  const languages = ["JavaScript", "TypeScript", "Python", "Rust", "C#", "C++", "C", "Solidity"];
  const frameworks = ["Next.js", "Express.js", "Flask", "Django", "React", "React Native"];
  const libraries = ["Node.js", "Web3.js"];
  const tools = ["Docker", "Cargo", "Anchor", "TailwindCSS", "Vite", "Git", "VS Code", "Figma", "Photoshop"];
  const databases = ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Appwrite"];
  const blockchainTech = ["Solana", "Ethereum", "Smart Contracts", "Solidity"];

  const quickStats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "GitHub Repositories", value: "100+" }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/nisargpatel7042lva", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/nisargpatel", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/nisargpatel", label: "Twitter" },
    { icon: Radio, url: "https://farcaster.xyz/nisargxplores", label: "Farcaster" },
    { icon: Mail, url: "mailto:nisarg@example.com", label: "Email" }
  ];

  const techCategories = [
    { title: "Programming Languages", icon: Code, items: languages },
    { title: "Frameworks", icon: Briefcase, items: frameworks },
    { title: "Libraries", icon: Code, items: libraries },
    { title: "Tools & Technologies", icon: Palette, items: tools },
    { title: "Databases", icon: TrendingUp, items: databases },
    { title: "Blockchain & Web3", icon: Code, items: blockchainTech },
  ];

  const whatIDo = [
    { icon: Rocket, title: "Web3 Development", desc: "Building decentralized applications on Solana and Ethereum, creating smart contracts, and developing innovative blockchain solutions that bridge traditional and decentralized finance." },
    { icon: Palette, title: "UI/UX Design", desc: "Crafting intuitive and beautiful user interfaces with a focus on user experience. I believe great design should be both functional and aesthetically pleasing." },
    { icon: PenTool, title: "Content Writing", desc: "Creating technical content, documentation, and thought leadership articles about blockchain technology, Web3 trends, and the future of decentralized systems." },
    { icon: TrendingUp, title: "Market Trading", desc: "Active participant in traditional and crypto markets, applying technical analysis and market insights to make informed trading decisions and understand market dynamics." },
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8 md:space-y-12">
        {/* Hero Section */}
        <ScrollReveal direction="up" duration={0.7}>
          <GlassCard className="p-6 md:p-8" glow>
            <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/50 animate-radar-ring-1"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/40 animate-radar-ring-2"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-github-accent/30 animate-radar-ring-3"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-radial from-github-accent/30 via-github-accent/20 to-transparent"></div>
                  <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-conic-gradient animate-radar-rotate"></div>
                  </div>
                  <motion.div 
                    className="rounded-full overflow-hidden border-4 border-github-accent w-32 h-32 md:w-48 md:h-48 shadow-xl shadow-github-accent/30 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={meImage} alt="Nisarg Patel" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-github-accent">Nisarg Patel</h1>
                  <p className="text-lg md:text-xl text-github-text mb-4 opacity-90">
                    Web 3 Developer | UI/UX Designer | Content Writer | Share Market Trader
                  </p>
                </div>
                
                <p className="text-sm md:text-base text-github-text/80 leading-relaxed max-w-2xl">
                  I'm a passionate developer with expertise in blockchain technology, modern web development, 
                  and user experience design. I love building innovative solutions that bridge the gap between 
                  traditional web and the decentralized future.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <Button 
                    variant="default" 
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
                    <Download className="mr-2" size={16} />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white shadow-md hover:shadow-xl transition-all w-full sm:w-auto"
                    onClick={() => window.open('https://github.com/nisargpatel7042lva', '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    GitHub Profile
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.08} direction="up">
              <GlassCard className="text-center p-4">
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-github-accent mb-1"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-github-text/80">{stat.label}</div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Links */}
        <ScrollReveal>
          <GlassCard className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-github-accent text-center md:text-left">Connect With Me</h2>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-github-accent text-github-accent hover:bg-github-accent hover:text-white transition-all"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon size={16} className="mr-2" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Tech Stack */}
        <div className="space-y-6 md:space-y-8">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold text-github-accent text-center md:text-left">Tech Stack & Skills</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {techCategories.map((cat, index) => (
              <ScrollReveal key={cat.title} delay={index * 0.08}>
                <GlassCard className="p-5 h-full">
                  <h3 className="text-github-accent flex items-center gap-2 text-base md:text-lg font-semibold mb-3">
                    <cat.icon size={18} />
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {cat.items.map((item) => (
                      <motion.span key={item} whileHover={{ scale: 1.08 }}>
                        <Badge variant="secondary" className="bg-github-dark text-github-accent border border-github-accent/30 text-xs hover:border-github-accent/60 transition-colors">
                          {item}
                        </Badge>
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div className="space-y-4 md:space-y-6">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold text-github-accent text-center md:text-left">What I Do</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {whatIDo.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <GlassCard className="p-5 h-full">
                  <h3 className="text-github-accent text-base md:text-lg flex items-center gap-2 font-semibold mb-3">
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </h3>
                  <p className="text-github-text/90 text-sm md:text-base">{item.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Beyond Code */}
        <ScrollReveal>
          <GlassCard className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-github-accent text-center md:text-left">Beyond Code</h2>
            <p className="text-github-text/90 leading-relaxed text-sm md:text-base">
              When I'm not coding, you'll find me exploring the latest Web3 innovations, 
              analyzing market trends, or sharing insights about the future of technology through my writing. 
              I'm passionate about the intersection of technology and finance, and I believe that 
              decentralized systems will play a crucial role in shaping our digital future.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </GitHubLayout>
  );
};

export default About;
