import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;