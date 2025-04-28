
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Terminal } from 'lucide-react';

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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="terminal">
      <div className="flex items-center gap-2 mb-4 border-b border-github-border pb-2">
        <Terminal size={18} className="text-github-accent" />
        <span className="font-semibold">contact.sh</span>
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
  );
};

export default ContactForm;
