
import GitHubLayout from '@/components/layout/GitHubLayout';
import { Card } from '@/components/ui/card';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period?: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 0,
      role: "Joint Chief Coordinator",
      company: "ISTE SVIT",
      period: "2025 - Present",
      description: [
        "Leading one of the most active technical communities on campus as Joint Chief Secretary.",
        "Coordinating student committees and managing event operations for technical and cultural initiatives.",
        "Organizing workshops, seminars, and college fests like Prakarsh with focus on student engagement and sponsor partnerships.",
        "Collaborating across tech, non-tech, design, social media, administration, and finance sectors.",
        "Building leadership, communication, and management skills while fostering innovation and community growth."
      ]
    },
    {
      id: 1,
      role: "Shipping",
      company: "DEX 2.0 - Mobile Decentralized Exchange",
      period: "2024 - Present",
      description: [
        "Built a custom decentralized exchange enabling Token-2022 assets with Transfer Hooks to be traded securely on mobile.",
        "Integrated Solana Mobile Wallet Adapter for seamless mobile wallet connectivity and transaction signing.",
        "Developed a comprehensive hook validation layer to ensure secure and compliant token transfers.",
        "Implemented an on-chain AMM (Automated Market Maker) with mobile-first UX design principles.",
        "Designed the platform to support real-world assets (RWA) and compliant DeFi use cases on Solana.",
        "Utilized React, TypeScript, Anchor, and Solana Program Library for full-stack blockchain development."
      ]
    },
    {
      id: 3,
      role: "Community Volunteer",
      company: "The Hackers Meetup",
      period: "May 2025 - Present",
      description: [
        "Supporting community initiatives and events for technology enthusiasts.",
        "Facilitating networking and knowledge sharing among developers and cybersecurity professionals."
      ]
    },
    {
      id: 4,
      role: "Student Ambassador",
      company: "Designare",
      description: [
        "Represent and contribute to a community of designers and innovators.",
        "Engage with the Designare ecosystem to build and nurture connections.",
        "Promote Designare's initiatives through branding, content creation, and event participation."
      ]
    },
    {
      id: 5,
      role: "Joint Finance Secretary",
      company: "Students' Central Committee, SVIT-Vasad",
      description: [
        "Oversee financial operations, budget tracking, and expenditure monitoring.",
        "Ensure transparency in financial transactions for student-driven initiatives."
      ]
    },
    {
      id: 6,
      role: "Joint Web Designer",
      company: "Indian Society for Technical Education (ISTE)",
      description: [
        "Design and maintain ISTE's student chapter website, ensuring an intuitive UI/UX.",
        "Collaborate with teams to optimize web performance and content management."
      ]
    },
    {
      id: 7,
      role: "Social Media Manager & Customer Relations Manager",
      company: "The A.I.M. Club",
      description: [
        "Develop and manage strategic social media campaigns to increase engagement.",
        "Lead customer relations efforts, ensuring exceptional service and retention."
      ]
    },
    {
      id: 8,
      role: "UI/UX Designer Intern",
      company: "CoderOne",
      description: [
        "Create user-centric interface designs, prototypes, and wireframes.",
        "Conduct user research and usability testing for improved design experiences."
      ]
    },
    {
      id: 9,
      role: "Open-Source Contributor",
      company: "GirlScript Summer of Code",
      description: [
        "Collaborate with global teams on real-world open-source projects.",
        "Enhance project functionality, UI, and overall user experience."
      ]
    },
    {
      id: 10,
      role: "Social Media Manager",
      company: "AWS User Group Vadodara",
      description: [
        "Manage and optimize AWS community outreach via social media.",
        "Organize AWS events, meetups, and workshops for knowledge sharing."
      ]
    },
    {
      id: 11,
      role: "Shipping",
      company: "Mysterio Fashion",
      description: [
        "Designed and launched a print-on-demand e-commerce platform.",
        "Managed digital marketing, branding, and creative product design."
      ]
    },
    {
      id: 12,
      role: "Community Growth Associate",
      company: "PhicsIT",
      description: [
        "Analyzed website traffic and audience behavior to optimize growth strategies.",
        "Targeted specific demographics and communities to drive traffic to GeekClash."
      ]
    }
  ];

  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Work Experience</h1>
          <p className="mb-8">
            My professional journey spans various roles in design, development, and community management,
            where I've honed my skills across different technologies and domains.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Modern gradient timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-github-accent via-github-border to-transparent opacity-60"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Enhanced timeline marker */}
              <div className="absolute left-3 top-4 w-6 h-6 rounded-full bg-gradient-to-br from-github-accent to-github-accent/70 border-4 border-github-dark shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              {/* Enhanced card with hover effects */}
              <div className="ml-16 transform transition-all duration-300 group-hover:translate-x-2">
                <Card className="p-6 bg-gradient-to-br from-github-secondary to-github-secondary/90 border-github-border hover:border-github-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-github-accent mb-1 group-hover:text-white transition-colors duration-300">{exp.role}</h2>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="font-medium text-lg">{exp.company}</h3>
                      {exp.period && (
                        <span className="text-github-text text-sm bg-github-dark px-3 py-1 rounded-full border border-github-border">
                          {exp.period}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-github-accent">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-github-accent flex-shrink-0 mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <Card className="p-6 bg-github-secondary border-github-border">
            <h3 className="font-semibold text-lg">Bachelor of Engineering in Computer Science</h3>
            <p className="text-github-text">SVIT Vasad</p>
            <p className="mt-2">
              Specialized in web development and UI/UX design.
              Participated in various coding competitions and hackathons.
            </p>
          </Card>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Experience;
