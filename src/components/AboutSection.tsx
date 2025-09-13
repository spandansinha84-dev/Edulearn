import { Users, Award, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50K+', label: 'Active Students' },
    { icon: BookOpen, number: '1000+', label: 'Courses Available' },
    { icon: Award, number: '500+', label: 'Expert Teachers' },
    { icon: Target, number: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Empowering Students 
              <span className="bg-accent-gradient bg-clip-text text-transparent"> Worldwide</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              EduLearn is revolutionizing education by making quality learning accessible to everyone. 
              Our platform connects students with top educators, comprehensive resources, and 
              innovative learning tools designed for the digital age.
            </p>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether you're a high school student preparing for exams, a college student exploring 
              new subjects, or a lifelong learner pursuing personal growth, EduLearn provides the 
              support and resources you need to achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-accent-gradient hover:shadow-glow transition-all duration-300 px-8">
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 animate-on-scroll">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl bg-card-gradient border border-white/10 shadow-glow hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-accent-gradient shadow-glow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;