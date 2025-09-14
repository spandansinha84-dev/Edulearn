import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { AccessibleButton } from './AccessibleButton';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { translate } = useLanguageContext();

  const navItems = [
    { path: '/', label: translate('home') },
    { path: '/about', label: translate('about') },
    { path: '/features', label: translate('features') },
    { path: '/dashboard', label: translate('dashboard') },
    { path: '/notes', label: translate('notes') },
    { path: '/quiz', label: translate('quiz') },
    { path: '/contact', label: translate('contact') },
  ];

  const authItems = [
    { path: '/login', label: translate('login') },
    { path: '/signup', label: translate('signup') },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-card border-b border-border shadow-soft sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-2"
              aria-label="EduAccess Home"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen size={32} />
              </motion.div>
              <span>EduAccess</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'px-3 py-2 rounded-lg text-lg font-medium transition-all duration-200',
                      'hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary',
                      location.pathname === item.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="h-6 w-px bg-border mx-2" />
              {authItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            whileTap={{ scale: 0.9 }}
          >
            <AccessibleButton
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              ariaLabel="Toggle navigation menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AccessibleButton>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200',
                        'hover:bg-primary/10 focus:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary',
                        location.pathname === item.path
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center gap-4 px-4 py-2"
                >
                  <LanguageSwitcher />
                  <ThemeToggle />
                </motion.div>
                
                <div className="flex flex-col gap-2 pt-2 border-t border-border mt-2">
                  {authItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="mx-4 px-4 py-2 text-center text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};