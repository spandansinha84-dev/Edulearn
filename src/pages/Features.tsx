import React from 'react';
import { 
  Volume2, Mic, Eye, Keyboard, Languages, TrendingUp, 
  Headphones, MousePointer, Smartphone, Monitor, Users, Shield 
} from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const Features = () => {
  const { translate } = useLanguageContext();

  const coreFeatures = [
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Every piece of content can be read aloud with natural-sounding voices in multiple languages.',
      benefits: ['Natural voice synthesis', 'Adjustable speed and pitch', 'Multiple language support', 'Offline capability']
    },
    {
      icon: Mic,
      title: 'Voice Input & Control',
      description: 'Navigate, search, and answer questions using voice commands for hands-free learning.',
      benefits: ['Voice navigation', 'Speech-to-text input', 'Voice commands', 'Audio feedback']
    },
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast design, customizable fonts, and screen reader optimized interface.',
      benefits: ['High contrast themes', 'Scalable fonts', 'Screen reader support', 'Clear visual hierarchy']
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard accessibility with clear focus indicators and logical tab order.',
      benefits: ['Full keyboard support', 'Visible focus indicators', 'Skip navigation links', 'Custom shortcuts']
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Content available in multiple languages with seamless switching capabilities.',
      benefits: ['English, Hindi, Odia', 'Real-time translation', 'Cultural adaptation', 'Regional content']
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Visual and audio progress indicators to celebrate achievements and track learning.',
      benefits: ['Visual progress bars', 'Achievement badges', 'Performance analytics', 'Goal setting']
    }
  ];

  const additionalFeatures = [
    {
      icon: Headphones,
      title: 'Audio Descriptions',
      description: 'Detailed audio descriptions for visual content and interface elements.'
    },
    {
      icon: MousePointer,
      title: 'Large Click Targets',
      description: 'All interactive elements are designed with generous click/tap areas.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works seamlessly on all device sizes.'
    },
    {
      icon: Monitor,
      title: 'Screen Magnification',
      description: 'Compatible with screen magnification software and zoom features.'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Features for group learning and peer support with accessibility in mind.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'GDPR compliant with strong privacy protections for student data.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold">{translate('features')}</h1>
            <TTSButton 
              text="Accessibility features designed for inclusive learning"
              className="bg-primary text-primary-foreground rounded-full"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Discover how our comprehensive accessibility features create an inclusive learning environment 
            for students of all abilities.
          </p>
          <AccessibleButton
            variant="hero"
            onClick={() => document.getElementById('core-features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Features
          </AccessibleButton>
        </div>
      </section>

      {/* Core Features */}
      <section id="core-features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Accessibility Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These essential features form the foundation of our inclusive learning platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="card-accessible group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    <feature.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <TTSButton 
                        text={`${feature.title}. ${feature.description}`}
                        className="opacity-70 hover:opacity-100"
                      />
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extra accessibility enhancements that make learning even more inclusive and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="card-accessible text-center group">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our Features Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our accessibility features are designed to work in harmony, creating a seamless learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Choose Your Method</h3>
              <p className="text-muted-foreground">
                Select how you prefer to interact - voice, keyboard, touch, or a combination of methods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Personalize Experience</h3>
              <p className="text-muted-foreground">
                Customize visual settings, audio preferences, and interaction methods to suit your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Learn & Progress</h3>
              <p className="text-muted-foreground">
                Engage with content in your preferred way while tracking progress through visual and audio feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Inclusive Learning</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to explore how these features can transform your learning experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              variant="hero"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = '/dashboard'}
            >
              Try the Platform
            </AccessibleButton>
            <AccessibleButton
              variant="large"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Get Support
            </AccessibleButton>
          </div>
        </div>
      </section>
    </div>
  );
};