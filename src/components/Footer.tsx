import React from 'react';
import { Github, Linkedin, Mail, Code, Palette, Database, Users } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from './TTSButton';

export const Footer = () => {
  const { translate } = useLanguageContext();

  const developers = [
    {
      name: 'Spandan Sinha',
      role: 'Full Stack Developer',
      avatar: '👨‍💻',
      description: 'Lead developer focusing on accessibility features and backend architecture',
      icon: Code,
      color: 'text-primary'
    },
    {
      name: 'Sneha Ghosh',
      role: 'UI/UX Designer',
      avatar: '👩‍🎨',
      description: 'Specialist in inclusive design and user experience for specially-abled students',
      icon: Palette,
      color: 'text-accent'
    },
    {
      name: 'Ashish Kumar',
      role: 'Backend Engineer',
      avatar: '👨‍🔧',
      description: 'Expert in database design and API development for educational platforms',
      icon: Database,
      color: 'text-success'
    },
    {
      name: 'Shivani Patro',
      role: 'Product Manager',
      avatar: '👩‍💼',
      description: 'Coordinating accessibility requirements and ensuring inclusive learning experiences',
      icon: Users,
      color: 'text-destructive'
    }
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Developer Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <TTSButton text="Meet our development team behind EduAccess" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate team of developers and designers who created this accessible learning platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((dev, index) => (
              <div key={index} className="card-accessible text-center group">
                <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-muted group-hover:bg-current group-hover:text-white transition-all duration-300 ${dev.color}`}>
                  <dev.icon size={32} />
		<div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                  {dev.avatar}
                </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{dev.name}</h3>
                  <TTSButton 
                    text={`${dev.name}, ${dev.role}. ${dev.description}`}
                    className="opacity-70 hover:opacity-100"
                  />
                </div>
                <p className="font-semibold text-primary mb-3">{dev.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {dev.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">EduLearn</h3>
            <p className="text-muted-foreground mb-4">
              Empowering specially-abled students through accessible, inclusive education technology.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Follow us on Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Dashboard</a></li>
              <li><a href="/notes" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Study Notes</a></li>
              <li><a href="/quiz" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Quizzes</a></li>
              <li><a href="/search" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Search</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/features" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Features</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Support</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 EduLearn. All rights reserved. Built with ❤️ for inclusive education.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Made accessible with</span>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">WCAG 2.1 AA</span>
                <span className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium">Screen Reader</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">Voice Control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};