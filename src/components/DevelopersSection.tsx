import { Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DevelopersSection = () => {
  const developers = [
    {
      name: 'Spandan Sinha',
      role: 'Full Stack Developer',
      avatar: '👨‍💻',
      specialization: 'React & Node.js',
      github: 'alexjohnson',
      linkedin: 'spandan_sinha'
    },
    {
      name: 'Sneha Ghosh',
      role: 'UI/UX Designer',
      avatar: '👩‍🎨',
      specialization: 'Design Systems & User Experience',
      github: 'sarahchen',
      linkedin: 'sneha_ghosh'
    },
    {
      name: 'Ashish Kumar',
      role: 'Backend Engineer',
      avatar: '👨‍🔧',
      specialization: 'Database & API Architecture',
      github: 'marcusrodriguez',
      linkedin: 'ashish_kumar'
    },
    {
      name: 'Shivani Patro',
      role: 'DevOps Engineer',
      avatar: '👩‍💼',
      specialization: 'Cloud Infrastructure & Deployment',
      github: 'emilywatson',
      linkedin: 'shivani_patro'
    }
  ];

  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our 
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Team</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The talented developers behind EduLearn's innovative platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-3 border border-white/10 bg-card-gradient backdrop-blur-sm animate-on-scroll hover:border-accent/30"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-8 text-center">
                {/* Avatar */}
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                  {developer.avatar}
                </div>
                
                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {developer.name}
                </h3>
                <div className="text-accent font-medium mb-3">
                  {developer.role}
                </div>
                
                {/* Specialization */}
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {developer.specialization}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={`https://github.com/${developer.github}`}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href={`https://linkedin.com/in/${developer.linkedin}`}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={`mailto:${developer.name.toLowerCase().replace(' ', '.')}@edulearn.com`}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll">
          <div>
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-white/60">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/60">Lines of Code</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/60">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;