import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-8">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;