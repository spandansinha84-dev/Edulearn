import { FileText, BookOpen, Brain, TrendingUp, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Easy Notes',
      description: 'Access and create comprehensive notes for all your subjects with our intuitive note-taking system.',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      title: 'Teacher-Recommended Books',
      description: 'Discover curated reading lists and textbooks recommended by experienced educators.',
      color: 'text-accent'
    },
    {
      icon: Brain,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with adaptive quizzes that help reinforce learning and identify gaps.',
      color: 'text-success'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics and personalized progress reports.',
      color: 'text-warning'
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Connect with peers, join study groups, and collaborate on challenging topics.',
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: '24/7 Learning',
      description: 'Learn at your own pace with round-the-clock access to all educational resources.',
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-accent-gradient bg-clip-text text-transparent"> Excel</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need for academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-card-gradient backdrop-blur-sm animate-on-scroll hover:border-accent/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-xl bg-accent-gradient shadow-glow">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-accent transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-white/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;