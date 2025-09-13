import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-glow" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-scale-in">
          Learn Without
          <span className="block bg-accent-gradient bg-clip-text text-transparent animate-glow">
            Limits
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          Access thousands of courses, notes, and resources from top educators worldwide
        </p>

        {/* Hero Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for courses, notes, teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-6 pr-20 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-glow text-white placeholder:text-white/60 focus:bg-white/15 transition-all duration-300"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-2 h-12 w-12 rounded-full bg-accent-gradient hover:shadow-glow transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="bg-accent-gradient hover:shadow-glow transition-all duration-300 text-white border-0 px-8">
            Browse Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm transition-all duration-300 px-8">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;