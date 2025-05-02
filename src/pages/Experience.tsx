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
      id: 1,
      role: "Student Ambassador",
      company: "Designare",
      description: [
        "Represent and contribute to a community of designers and innovators.",
        "Engage with the Designare ecosystem to build and nurture connections.",
        "Promote Designare's initiatives through branding, content creation, and event participation."
      ]
    },
    {
      id: 2,
      role: "Joint Finance Secretary",
      company: "Students' Central Committee, SVIT-Vasad",
      description: [
        "Oversee financial operations, budget tracking, and expenditure monitoring.",
        "Ensure transparency in financial transactions for student-driven initiatives."
      ]
    },
    {
      id: 3,
      role: "Joint Web Designer",
      company: "Indian Society for Technical Education (ISTE)",
      description: [
        "Design and maintain ISTE's student chapter website, ensuring an intuitive UI/UX.",
        "Collaborate with teams to optimize web performance and content management."
      ]
    },
    {
      id: 4,
      role: "Social Media Manager & Customer Relations Manager",
      company: "The A.I.M. Club",
      description: [
        "Develop and manage strategic social media campaigns to increase engagement.",
        "Lead customer relations efforts, ensuring exceptional service and retention."
      ]
    },
    {
      id: 5,
      role: "UI/UX Designer Intern",
      company: "CoderOne",
      description: [
        "Create user-centric interface designs, prototypes, and wireframes.",
        "Conduct user research and usability testing for improved design experiences."
      ]
    },
    {
      id: 6,
      role: "Open-Source Contributor",
      company: "GirlScript Summer of Code",
      description: [
        "Collaborate with global teams on real-world open-source projects.",
        "Enhance project functionality, UI, and overall user experience."
      ]
    },
    {
      id: 7,
      role: "Social Media Manager",
      company: "AWS User Group Vadodara",
      description: [
        "Manage and optimize AWS community outreach via social media.",
        "Organize AWS events, meetups, and workshops for knowledge sharing."
      ]
    },
    {
      id: 8,
      role: "Founder",
      company: "Mysterio Fashion",
      description: [
        "Designed and launched a print-on-demand e-commerce platform.",
        "Managed digital marketing, branding, and creative product design."
      ]
    },
    {
      id: 9,
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
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-github-border md:before:left-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              <div className="absolute left-0 top-1 h-10 w-10 rounded-full bg-github-secondary border-4 border-github-dark flex items-center justify-center">
                <span className="text-github-accent font-bold">{index + 1}</span>
              </div>
              
              <Card className="p-6 bg-github-secondary border-github-border">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-github-accent">{exp.role}</h2>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h3 className="font-medium">{exp.company}</h3>
                    {exp.period && <span className="text-github-text text-sm">{exp.period}</span>}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Responsibilities & Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
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
