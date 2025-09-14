import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { TTSButton } from '@/components/TTSButton';
import { AccessibleButton } from '@/components/AccessibleButton';

export const Login = () => {
  const { translate } = useLanguageContext();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login logic
    console.log('Login attempt:', formData);
    alert('Demo: Login functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold">{translate('login')}</h1>
            <TTSButton text="Login to your EduAccess account" />
          </div>
          <p className="text-lg text-muted-foreground">
            Welcome back! Access your personalized learning dashboard.
          </p>
        </div>

        <div className="card-accessible">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your email"
                aria-describedby="email-help"
              />
              <p id="email-help" className="text-sm text-muted-foreground mt-1">
                The email address you used to create your account
              </p>
            </div>

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
                  placeholder="Enter your password"
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
                Your account password
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-border focus:ring-primary"
                />
                <label htmlFor="rememberMe" className="text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
              >
                Forgot password?
              </Link>
            </div>

            <AccessibleButton
              type="submit"
              variant="hero"
              className="w-full"
            >
              <LogIn size={20} className="mr-2" />
              {translate('login')}
            </AccessibleButton>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Don't have an account?
            </p>
            <Link to="/signup">
              <AccessibleButton variant="large" className="w-full">
                Create New Account
              </AccessibleButton>
            </Link>
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="mt-8 card-accessible bg-accent/10 border-accent/20">
          <div className="flex items-start gap-3">
            <div className="text-2xl">♿</div>
            <div>
              <h3 className="font-semibold text-accent mb-2">Accessibility Features</h3>
              <p className="text-sm text-muted-foreground">
                This login form is fully accessible with screen readers, keyboard navigation, 
                and voice commands. Use Tab to navigate, Enter to submit, and click the speaker 
                icons for audio assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};