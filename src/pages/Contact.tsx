import GitHubLayout from '@/components/layout/GitHubLayout';
import ContactForm from '@/components/ContactForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, MapPin, ExternalLink, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';

const Contact = () => {
  return (
    <GitHubLayout>
      <div className="space-y-10">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-github-accent">Get In Touch</h1>
            <p className="text-github-text/60 text-sm max-w-lg">
              Open to discussing projects, collaborations, or opportunities. Drop me a message.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Form / Info tabs */}
          <ScrollReveal className="md:col-span-2" direction="left">
            <Tabs defaultValue="form">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="form" className="flex-1">Contact Form</TabsTrigger>
                <TabsTrigger value="info" className="flex-1">Contact Info</TabsTrigger>
              </TabsList>

              <TabsContent value="form">
                <ContactForm />
              </TabsContent>

              <TabsContent value="info">
                <GlassCard className="p-6 space-y-6">
                  {[
                    { label: 'email',        content: <a href="mailto:nisargpatel_5565@outlook.com" className="text-github-accent hover:underline flex items-center gap-1 text-sm">nisargpatel_5565@outlook.com <ExternalLink size={12} /></a> },
                    { label: 'location',     content: <span className="text-github-text/70 text-sm">Vadodara, India</span> },
                    { label: 'availability', content: <span className="text-github-text/70 text-sm">Open to freelance and full-time opportunities</span> },
                  ].map(({ label, content }) => (
                    <div key={label} className="space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="terminal-prompt text-sm">$</span>
                        <span className="text-xs text-github-text/50 font-mono">{label}</span>
                      </div>
                      <div className="pl-5">{content}</div>
                    </div>
                  ))}
                </GlassCard>
              </TabsContent>
            </Tabs>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal direction="right">
            <GlassCard className="p-6 h-full space-y-6">
              <h3 className="text-base font-semibold text-github-accent">Reach me at</h3>

              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-xs text-github-text/50 uppercase tracking-wider">Email</p>
                  <a href="mailto:nisargpatel_5565@outlook.com" className="flex items-center gap-2 text-github-accent hover:underline text-sm">
                    <MailIcon size={14} />
                    nisargpatel_5565@outlook.com
                  </a>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-github-text/50 uppercase tracking-wider">Location</p>
                  <div className="flex items-center gap-2 text-github-text/70 text-sm">
                    <MapPin size={14} />
                    Vadodara, India
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-github-text/50 uppercase tracking-wider">GitHub</p>
                  <a
                    href="https://github.com/nisargpatel7042lva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-github-accent hover:underline text-sm"
                  >
                    <Github size={14} />
                    @nisargpatel7042lva
                  </a>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </GitHubLayout>
  );
};

export default Contact;
