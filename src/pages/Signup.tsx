import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const Signup = () => {
  const { translate } = useLanguageContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessibilityNeeds: '',
    agreeToTerms: false,
    newsletterSubscribe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Dummy signup logic
    console.log('Signup attempt:', formData);
    alert('Demo: Account creation functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold">{translate('signup')}</h1>
            <TTSButton text="Create your EduAccess account" />
          </div>
          <p className="text-lg text-muted-foreground">
            Join thousands of students already learning with EduAccess. 
            Create your free account to get started.
          </p>
        </div>

        <div className="card-accessible">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-lg font-medium mb-3">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="input-accessible w-full"
                  placeholder="Enter your first name"
                  aria-describedby="firstName-help"
                />
                <p id="firstName-help" className="text-sm text-muted-foreground mt-1">
                  Your first name as you'd like it to appear
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
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="input-accessible w-full"
                  placeholder="Enter your last name"
                  aria-describedby="lastName-help"
                />
                <p id="lastName-help" className="text-sm text-muted-foreground mt-1">
                  Your last name or surname
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
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-accessible w-full"
                placeholder="Enter your email address"
                aria-describedby="email-help"
              />
              <p id="email-help" className="text-sm text-muted-foreground mt-1">
                We'll use this to send you login information and updates
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-lg font-medium mb-3">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="input-accessible w-full pr-12"
                    placeholder="Create a password"
                    aria-describedby="password-help"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p id="password-help" className="text-sm text-muted-foreground mt-1">
                  At least 8 characters with numbers and letters
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-lg font-medium mb-3">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="input-accessible w-full pr-12"
                    placeholder="Confirm your password"
                    aria-describedby="confirmPassword-help"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p id="confirmPassword-help" className="text-sm text-muted-foreground mt-1">
                  Re-enter your password to confirm
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="accessibilityNeeds" className="block text-lg font-medium mb-3">
                Accessibility Preferences (Optional)
              </label>
              <textarea
                id="accessibilityNeeds"
                name="accessibilityNeeds"
                value={formData.accessibilityNeeds}
                onChange={handleInputChange}
                rows={3}
                className="input-accessible w-full resize-none"
                placeholder="Tell us about any specific accessibility features you need..."
                aria-describedby="accessibility-help"
              />
              <p id="accessibility-help" className="text-sm text-muted-foreground mt-1">
                Help us personalize your experience. Mention any assistive technologies you use or specific needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-border focus:ring-primary"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    Privacy Policy
                  </Link>
                  *
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletterSubscribe"
                  name="newsletterSubscribe"
                  checked={formData.newsletterSubscribe}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 rounded border-border focus:ring-primary"
                />
                <label htmlFor="newsletterSubscribe" className="text-sm text-muted-foreground">
                  Send me updates about new accessibility features and educational content
                </label>
              </div>
            </div>

            <AccessibleButton
              type="submit"
              variant="hero"
              className="w-full"
              disabled={!formData.agreeToTerms}
            >
              <UserPlus size={20} className="mr-2" />
              Create Account
            </AccessibleButton>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Already have an account?
            </p>
            <Link to="/login">
              <AccessibleButton variant="large" className="w-full">
                {translate('login')}
              </AccessibleButton>
            </Link>
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="mt-8 card-accessible bg-success/10 border-success/20">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="font-semibold text-success mb-2">Accessibility Commitment</h3>
              <p className="text-sm text-muted-foreground">
                Your accessibility preferences help us provide a better experience. 
                After signup, you can further customize visual settings, audio preferences, 
                and interaction methods in your account dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};