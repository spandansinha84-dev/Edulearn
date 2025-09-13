import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@edulearn.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 78480 63341',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Silicon Institute of Technology - Bhubaneswar',
      description: 'Come say hello at our HQ'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant help'
    }
  ];

  return (
    <section className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-white mb-10">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="border border-white/10 bg-card-gradient backdrop-blur-sm shadow-glow hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-accent-gradient shadow-glow">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-white mb-2">{item.details}</p>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-white/10 bg-card-gradient backdrop-blur-sm shadow-glow animate-on-scroll">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">
                    First Name
                  </label>
                  <Input placeholder="First Name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">
                    Last Name
                  </label>
                  <Input placeholder="Last Name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-white mb-3 block">
                  Email
                </label>
                <Input type="email" placeholder="your_email@gmail.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-white mb-3 block">
                  Subject
                </label>
                <Input placeholder="How can we help you?" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-white mb-3 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <Button className="w-full bg-accent-gradient hover:shadow-glow transition-all duration-300" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;