import GitHubLayout from '@/components/layout/GitHubLayout';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period?: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 0,
    role: 'Joint Chief Coordinator',
    company: 'ISTE SVIT',
    period: '2025 – Present',
    highlights: [
      'Leading one of the most active technical communities on campus as Joint Chief Secretary.',
      'Organizing workshops, seminars, and college fests like Prakarsh with sponsor partnerships.',
      'Collaborating across tech, design, social media, and finance sectors.',
    ],
  },
  {
    id: 1,
    role: 'Shipping',
    company: 'DEX 2.0 — Mobile Decentralized Exchange',
    period: '2025 – Present',
    highlights: [
      'Built a custom DEX enabling Token-2022 assets with Transfer Hooks on mobile.',
      'Integrated Solana Mobile Wallet Adapter and implemented an on-chain AMM.',
      'Designed for real-world assets (RWA) and compliant DeFi use cases on Solana.',
    ],
  },
  {
    id: 2,
    role: 'UI/UX Designer Intern',
    company: 'CoderOne',
    highlights: [
      'Created user-centric interface designs, prototypes, and wireframes.',
      'Conducted user research and usability testing for improved design experiences.',
    ],
  },
  {
    id: 3,
    role: 'Open-Source Contributor',
    company: 'GirlScript Summer of Code',
    highlights: [
      'Collaborated with global teams on real-world open-source projects.',
      'Enhanced project functionality, UI, and overall user experience.',
    ],
  },
  {
    id: 4,
    role: 'Joint Finance Secretary',
    company: "Students' Central Committee, SVIT-Vasad",
    highlights: [
      'Oversaw financial operations, budget tracking, and expenditure monitoring.',
      'Ensured transparency in financial transactions for student-driven initiatives.',
    ],
  },
  {
    id: 5,
    role: 'Community Volunteer',
    company: 'The Hackers Meetup',
    period: 'May 2025 – Present',
    highlights: [
      'Supporting community initiatives and events for technology enthusiasts.',
      'Facilitating networking among developers and cybersecurity professionals.',
    ],
  },
  {
    id: 6,
    role: 'Student Ambassador',
    company: 'Designare',
    highlights: [
      'Represented and promoted the Designare design community.',
      'Engaged with the ecosystem through branding, content, and events.',
    ],
  },
  {
    id: 7,
    role: 'Joint Web Designer',
    company: 'Indian Society for Technical Education (ISTE)',
    highlights: [
      'Designed and maintained the ISTE student chapter website.',
      'Optimized web performance and content management workflows.',
    ],
  },
  {
    id: 8,
    role: 'Social Media Manager',
    company: 'AWS User Group Vadodara',
    highlights: [
      'Managed AWS community outreach and social media channels.',
      'Organized AWS events, meetups, and knowledge-sharing workshops.',
    ],
  },
  {
    id: 9,
    role: 'Community Growth Associate',
    company: 'PhicsIT',
    highlights: [
      'Analyzed traffic and audience behavior to optimize growth strategies.',
      'Targeted communities to drive engagement on GeekClash.',
    ],
  },
];

const Experience = () => {
  return (
    <GitHubLayout>
      <div className="space-y-10">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-github-accent">Experience</h1>
            <p className="text-github-text/60 text-sm max-w-xl">
              My journey across technical leadership, development, design, and community roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative space-y-8">
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-github-accent via-github-border/60 to-transparent opacity-50" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.05} direction="left">
              <div className="relative group">
                <motion.div
                  className="absolute left-2.5 top-5 w-5 h-5 rounded-full bg-gradient-to-br from-github-accent to-github-accent/60 border-4 border-github-dark shadow-md flex items-center justify-center z-10"
                  whileInView={{ scale: [0.5, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </motion.div>

                <div className="ml-14">
                  <GlassCard className="p-5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h2 className="text-base font-semibold text-github-accent">{exp.role}</h2>
                        <p className="text-sm text-github-text/75 mt-0.5">{exp.company}</p>
                      </div>
                      {exp.period && (
                        <span className="text-xs text-github-text/55 bg-github-dark px-3 py-1 rounded-full border border-github-border self-start whitespace-nowrap">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-github-text/65 leading-relaxed">
                          <div className="w-1 h-1 rounded-full bg-github-accent flex-shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal direction="up">
          <GlassCard className="p-6" glow>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-github-accent/10 border border-github-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap size={18} className="text-github-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-github-accent mb-1">Education</h2>
                <p className="font-medium text-sm text-github-text">
                  Bachelor of Engineering — Computer Science
                </p>
                <p className="text-sm text-github-text/60 mt-0.5">SVIT Vasad</p>
                <p className="text-xs text-github-text/50 mt-2 leading-relaxed">
                  Specialized in web development and UI/UX. Active participant in coding competitions and hackathons.
                </p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </GitHubLayout>
  );
};

export default Experience;
