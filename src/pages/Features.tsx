import Navbar from '@/components/Navbar';
import FeaturesSection from '@/components/FeaturesSection';

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-8">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Features;