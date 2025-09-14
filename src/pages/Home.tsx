import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Mic, Volume2, Eye } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { VoiceSearch } from '@/components/VoiceSearch';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';
import gsap from 'gsap';

export const Home = () => {
  const navigate = useNavigate();
  const { translate } = useLanguageContext();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      
      gsap.fromTo(featuresRef.current?.children || [], 
        { opacity: 0, y: 30, scale: 0.9 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "back.out(1.7)",
          delay: 0.3 
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const features = [
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Listen to any content with our advanced text-to-speech technology.',
    },
    {
      icon: Mic,
      title: 'Voice Input',
      description: 'Search and interact using your voice for hands-free learning.',
    },
    {
      icon: Eye,
      title: 'High Contrast',
      description: 'Clear, accessible design with high contrast for better visibility.',
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Built specifically for students with diverse learning needs.',
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Visual progress indicators to celebrate your achievements.',
    },
    {
      icon: BookOpen,
      title: 'Interactive Content',
      description: 'Engaging quizzes and notes designed for accessibility.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 py-20">
        <div ref={heroRef} className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              {translate('welcome')}
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
              <TTSButton 
                text={translate('welcome')}
                className="bg-primary text-primary-foreground rounded-full"
              />
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Empowering specially-abled students with accessible, inclusive education technology.
            Learn at your own pace with voice commands, text-to-speech, and adaptive interfaces.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <AccessibleButton
                variant="hero"
                onClick={() => navigate('/dashboard')}
              >
                Get Started
              </AccessibleButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <AccessibleButton
                variant="large"
                onClick={() => navigate('/features')}
              >
                Learn More
              </AccessibleButton>
            </motion.div>
          </motion.div>

          {/* Search Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <VoiceSearch
              onSearch={handleSearch}
              placeholder={translate('search')}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Accessibility Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Our platform is designed with accessibility at its core, ensuring every student can learn effectively.
            </motion.p>
          </div>

          <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card-accessible group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <feature.icon size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Join thousands of students who are already using EduAccess to achieve their educational goals.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <AccessibleButton
                variant="hero"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => navigate('/signup')}
              >
                Sign Up Free
              </AccessibleButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <AccessibleButton
                variant="large"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/about')}
              >
                Learn About Us
              </AccessibleButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};