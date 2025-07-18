
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Terminal, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit with proper configuration to avoid captcha
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);
      formData.append('_next', window.location.href); // Redirect back to current page
      formData.append('_captcha', 'false'); // Disable captcha
      formData.append('_template', 'table'); // Use table format for better readability
      
      const response = await fetch('https://formsubmit.co/nisargpatel_5565@outlook.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly at nisargpatel_5565@outlook.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Email Service Info */}
      <Card className="bg-github-secondary border-github-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            Email Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-github-text">
            Messages are sent directly to nisargpatel_5565@outlook.com via FormSubmit. You'll receive a response within 24 hours.
          </p>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <div className="terminal">
        <div className="flex items-center gap-2 mb-4 border-b border-github-border pb-2">
          <Terminal size={18} className="text-github-accent" />
          <span className="font-semibold">contact.sh</span>
          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
            Ready to Send
          </span>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center mb-1">
              <span className="terminal-prompt mr-2">$</span>
              <label htmlFor="name" className="text-sm">name:</label>
            </div>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="bg-github-dark border-github-border"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-1">
              <span className="terminal-prompt mr-2">$</span>
              <label htmlFor="email" className="text-sm">email:</label>
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="bg-github-dark border-github-border"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-1">
              <span className="terminal-prompt mr-2">$</span>
              <label htmlFor="subject" className="text-sm">subject:</label>
            </div>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="bg-github-dark border-github-border"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-1">
              <span className="terminal-prompt mr-2">$</span>
              <label htmlFor="message" className="text-sm">message:</label>
            </div>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="bg-github-dark border-github-border min-h-[120px]"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
