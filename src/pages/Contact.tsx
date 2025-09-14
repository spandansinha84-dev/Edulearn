import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const Contact = () => {
  const { translate } = useLanguageContext();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@eduaccess.com',
      description: 'Get help within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 78480 63341',
      description: 'Monday - Friday, 9 AM - 6 PM'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Silicon university - Bhubaneswar',
      description: 'Visit us for in-person support'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Online Chat',
      description: 'Always available for urgent issues'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold">{translate('contact')} Us</h1>
            <TTSButton 
              text="Contact us for support and assistance"
              className="bg-primary text-primary-foreground rounded-full"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            We're here to help you succeed. Reach out to our dedicated support team for assistance, 
            feedback, or any questions about accessibility features.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-accessible group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <info.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{info.title}</h3>
                        <TTSButton 
                          text={`${info.title}. ${info.details}. ${info.description}`}
                          className="opacity-70 hover:opacity-100"
                        />
                      </div>
                      <p className="font-medium text-primary mb-1">{info.details}</p>
                      <p className="text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Accessibility Support Section */}
            <div className="card-accessible bg-accent/10 border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-accent">Accessibility Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our accessibility support team specializes in helping users with diverse needs. 
                We provide personalized assistance with screen readers, voice commands, 
                keyboard navigation, and other assistive technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <AccessibleButton variant="default" className="bg-accent text-accent-foreground">
                  <Mail size={16} className="mr-2" />
                  accessibility@eduaccess.com
                </AccessibleButton>
                <AccessibleButton variant="default" className="bg-accent text-accent-foreground">
                  <Phone size={16} className="mr-2" />
                  Priority Line: +91 78480 63341-HELP
                </AccessibleButton>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-accessible">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold">Send us a Message</h2>
              <TTSButton text="Contact form to send us a message" />
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-lg font-medium mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="input-accessible w-full"
                    aria-describedby="firstName-help"
                  />
                  <p id="firstName-help" className="text-sm text-muted-foreground mt-1">
                    Enter your first name
                  </p>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-lg font-medium mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="input-accessible w-full"
                    aria-describedby="lastName-help"
                  />
                  <p id="lastName-help" className="text-sm text-muted-foreground mt-1">
                    Enter your last name
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-accessible w-full"
                  aria-describedby="email-help"
                />
                <p id="email-help" className="text-sm text-muted-foreground mt-1">
                  We'll respond to this email address
                </p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium mb-3">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="input-accessible w-full"
                  aria-describedby="subject-help"
                >
                  <option value="">Select a topic</option>
                  <option value="accessibility">Accessibility Support</option>
                  <option value="technical">Technical Issue</option>
                  <option value="feature">Feature Request</option>
                  <option value="general">General Question</option>
                  <option value="feedback">Feedback</option>
                </select>
                <p id="subject-help" className="text-sm text-muted-foreground mt-1">
                  Choose the topic that best describes your inquiry
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="input-accessible w-full resize-none"
                  placeholder="Please describe your question or issue in detail..."
                  aria-describedby="message-help"
                />
                <p id="message-help" className="text-sm text-muted-foreground mt-1">
                  Provide as much detail as possible to help us assist you better
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="accessibility"
                  name="accessibility"
                  className="mt-1"
                />
                <label htmlFor="accessibility" className="text-sm text-muted-foreground">
                  I would like to receive information about new accessibility features and updates
                </label>
              </div>

              <AccessibleButton
                type="submit"
                variant="hero"
                className="w-full sm:w-auto"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </AccessibleButton>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our accessibility features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-accessible">
              <h3 className="text-xl font-bold mb-3">How do I enable text-to-speech?</h3>
              <p className="text-muted-foreground">
                Look for the speaker icon next to any text content. Click it to have the text read aloud. 
                You can adjust speech rate and voice in your account settings.
              </p>
            </div>
            <div className="card-accessible">
              <h3 className="text-xl font-bold mb-3">Can I use keyboard navigation?</h3>
              <p className="text-muted-foreground">
                Yes! Use Tab to navigate forward, Shift+Tab to go back, Enter to activate, 
                and Escape to close dialogs. All features are fully keyboard accessible.
              </p>
            </div>
            <div className="card-accessible">
              <h3 className="text-xl font-bold mb-3">How accurate is voice recognition?</h3>
              <p className="text-muted-foreground">
                Our voice recognition works well with clear speech. Speak at a normal pace 
                and ensure good microphone quality for best results.
              </p>
            </div>
            <div className="card-accessible">
              <h3 className="text-xl font-bold mb-3">What assistive technologies are supported?</h3>
              <p className="text-muted-foreground">
                We support all major screen readers (NVDA, JAWS, VoiceOver), voice control software, 
                and switch navigation devices. Contact us for specific compatibility questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};