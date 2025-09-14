import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Toggle
        pressed={isDark}
        onPressedChange={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className="relative p-2 bg-muted hover:bg-muted/80 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      >
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.div>
      </Toggle>
    </motion.div>
  );
};