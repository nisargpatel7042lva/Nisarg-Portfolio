
import React, { useState } from 'react';
import GitHubLayout from '@/components/layout/GitHubLayout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MailIcon, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <GitHubLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Get In Touch</h1>
          <p className="mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out using the form below or through my social media channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="form">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="form" className="flex-1">Contact Form</TabsTrigger>
                <TabsTrigger value="info" className="flex-1">Contact Info</TabsTrigger>
              </TabsList>
              
              <TabsContent value="form">
                <ContactForm />
              </TabsContent>
              
              <TabsContent value="info">
                <div className="space-y-6 terminal">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="terminal-prompt mr-2">$</span>
                      <span className="text-sm">email</span>
                    </div>
                    <div className="pl-6">
                      <a 
                        href="mailto:youremail@example.com" 
                        className="text-github-accent hover:underline flex items-center"
                      >
                        youremail@example.com
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="terminal-prompt mr-2">$</span>
                      <span className="text-sm">location</span>
                    </div>
                    <div className="pl-6">
                      <span>City, Country</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="terminal-prompt mr-2">$</span>
                      <span className="text-sm">availability</span>
                    </div>
                    <div className="pl-6">
                      <span>Open to freelance and full-time opportunities</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="bg-github-secondary border-github-border h-full">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:youremail@example.com" 
                    className="flex items-center text-github-accent hover:underline"
                  >
                    <MailIcon size={16} className="mr-2" />
                    youremail@example.com
                  </a>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Location</h3>
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1" />
                    <span>City, Country</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/nisargpatel7042lva" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-github-accent hover:underline"
                  >
                    <Github size={16} className="mr-2" />
                    @nisargpatel7042lva
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </GitHubLayout>
  );
};

export default Contact;
