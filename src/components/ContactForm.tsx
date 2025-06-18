
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Terminal, Settings } from 'lucide-react';
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
  const [webhookUrl, setWebhookUrl] = useState('');
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);
  
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
      if (webhookUrl) {
        // Send to webhook (Make.com or n8n.io)
        const webhookData = {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          timestamp: new Date().toISOString(),
          source: 'portfolio_contact_form'
        };
        
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify(webhookData),
        });
        
        toast({
          title: "Message sent via automation!",
          description: "Your message has been sent through the configured automation workflow.",
        });
      } else {
        // Fallback to FormSubmit
        const formData = new FormData();
        formData.append('name', formState.name);
        formData.append('email', formState.email);
        formData.append('subject', formState.subject);
        formData.append('message', formState.message);
        
        const response = await fetch('https://formsubmit.co/nisargpatel_5565@outlook.com', {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
        } else {
          throw new Error('Failed to send message');
        }
      }
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Simple Webhook Configuration */}
      <Card className="bg-github-secondary border-github-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Settings size={16} />
            Email Automation
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowWebhookConfig(!showWebhookConfig)}
              className="ml-auto"
            >
              {showWebhookConfig ? 'Hide' : 'Configure'}
            </Button>
          </CardTitle>
        </CardHeader>
        {showWebhookConfig && (
          <CardContent>
            <div>
              <label htmlFor="webhook" className="text-sm font-medium">
                Webhook URL (Make.com or n8n.io):
              </label>
              <Input
                id="webhook"
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hook.integromat.com/... or https://your-n8n.com/webhook/..."
                className="bg-github-dark border-github-border mt-1"
              />
              <p className="text-xs text-github-text mt-1">
                Connect your Make.com or n8n.io webhook to receive emails automatically
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Contact Form */}
      <div className="terminal">
        <div className="flex items-center gap-2 mb-4 border-b border-github-border pb-2">
          <Terminal size={18} className="text-github-accent" />
          <span className="font-semibold">contact.sh</span>
          {webhookUrl && (
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
              Automation Enabled
            </span>
          )}
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
