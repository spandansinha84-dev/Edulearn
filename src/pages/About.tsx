import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';

export const About = () => {
  const { translate } = useLanguageContext();

  const values = [
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'We believe every student deserves equal access to quality education, regardless of their abilities or challenges.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where students, educators, and families work together for better learning outcomes.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously developing cutting-edge accessibility features to enhance the learning experience.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality educational content and user experience.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Accessibility Expert',
      description: 'Leading researcher in educational accessibility with 15+ years of experience.'
    },
    {
      name: 'Michael Chen',
      role: 'Technology Director',
      description: 'Expert in assistive technologies and inclusive design principles.'
    },
    {
      name: 'Priya Sharma',
      role: 'Educational Specialist',
      description: 'Curriculum designer focused on multi-sensory learning approaches.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold">{translate('about')} EduAccess</h1>
            <TTSButton 
              text="About EduAccess - Empowering specially-abled students through inclusive education technology"
              className="bg-primary text-primary-foreground rounded-full"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Empowering specially-abled students through innovative, accessible education technology 
            that breaks down barriers and creates inclusive learning environments.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <div className="prose prose-lg">
                <p className="text-lg leading-relaxed mb-6">
                  At EduAccess, we believe that every student, regardless of their physical or cognitive abilities, 
                  deserves access to high-quality education. Our platform is specifically designed to address the 
                  unique challenges faced by specially-abled students in traditional learning environments.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We combine cutting-edge assistive technologies with proven educational methodologies to create 
                  an inclusive learning ecosystem. From text-to-speech capabilities to voice-controlled navigation, 
                  every feature is thoughtfully designed with accessibility at its core.
                </p>
                <p className="text-lg leading-relaxed">
                  Our goal is not just to make education accessible, but to make it engaging, effective, 
                  and empowering for all learners.
                </p>
              </div>
            </div>
            <div className="card-accessible">
              <div className="text-center p-8">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Impact by Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">10,000+</div>
                    <div className="text-muted-foreground">Students Empowered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success">500+</div>
                    <div className="text-muted-foreground">Educational Institutions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">15</div>
                    <div className="text-muted-foreground">Accessibility Features</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-destructive">95%</div>
                    <div className="text-muted-foreground">Student Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to inclusive education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-accessible text-center group">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate experts dedicated to making education accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-accessible text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-3xl text-white font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Accessibility-First Technology</h2>
          <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto">
            Our platform leverages the latest web technologies and accessibility standards to ensure 
            seamless experiences across all devices and abilities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">🗣️ Voice Technology</h3>
              <p className="opacity-90">
                Advanced speech recognition and synthesis for hands-free interaction and audio learning.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">👁️ Visual Accessibility</h3>
              <p className="opacity-90">
                High contrast design, customizable fonts, and screen reader optimization.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">🌐 Universal Design</h3>
              <p className="opacity-90">
                WCAG 2.1 AA compliant design that works for users of all abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};