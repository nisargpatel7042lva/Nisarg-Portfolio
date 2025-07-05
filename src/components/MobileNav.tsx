
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const MobileNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { path: '/home', label: 'Overview' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/socials', label: 'Socials' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="p-2 text-github-accent hover:bg-github-secondary"
        >
          <Menu size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-github-secondary border-github-border">
        <DrawerHeader className="border-b border-github-border">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-github-accent">Navigation</DrawerTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="p-2 text-github-accent hover:bg-github-dark"
            >
              <X size={20} />
            </Button>
          </div>
        </DrawerHeader>
        <div className="p-4">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-github-accent text-white font-medium'
                    : 'text-github-text hover:bg-github-dark hover:text-github-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 pt-4 border-t border-github-border space-y-2">
            <Link to="/">
              <Button 
                variant="outline" 
                className="w-full border-github-accent text-github-accent hover:bg-github-accent hover:text-white"
                onClick={handleNavClick}
              >
                Terminal Mode
              </Button>
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
