import GitHubLayout from '@/components/layout/GitHubLayout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, MapPin, ExternalLink, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';

const Contact = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        <ScrollReveal>
          <div>
            <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>
            <p className="mb-8 text-github-text/80">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <GlassCard className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <span className="terminal-prompt mr-2">$</span>
                        <span className="text-sm">email</span>
                      </div>
                      <div className="pl-6">
                        <a href="mailto:nisargpatel_5565@outlook.com" className="text-github-accent hover:underline flex items-center">
                          nisargpatel_5565@outlook.com
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <span className="terminal-prompt mr-2">$</span>
                        <span className="text-sm">location</span>
                      </div>
                      <div className="pl-6"><span>Vadodara, India</span></div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center">
                        <span className="terminal-prompt mr-2">$</span>
                        <span className="text-sm">availability</span>
                      </div>
                      <div className="pl-6"><span>Open to freelance and full-time opportunities</span></div>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <GlassCard className="p-6 h-full">
              <h3 className="text-lg font-semibold mb-4 text-github-accent">Connect With Me</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:nisargpatel_5565@outlook.com" className="flex items-center text-github-accent hover:underline">
                    <MailIcon size={16} className="mr-2" />
                    nisargpatel_5565@outlook.com
                  </a>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Location</h4>
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1" />
                    <span>Vadodara, India</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/nisargpatel7042lva" target="_blank" rel="noopener noreferrer" className="flex items-center text-github-accent hover:underline">
                    <Github size={16} className="mr-2" />
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
