
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  interests: string[];
  agreeToTerms: boolean;
};

const interestOptions = [
  "Coffee Tasting",
  "Café Hopping",
  "Barista Skills",
  "Coffee Education",
  "Social Events",
  "Photography"
];

const Register = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    interests: [],
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<Partial<FormData & { general: string }>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  
  const validateStep1 = () => {
    const newErrors: Partial<FormData & { general: string }> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors: Partial<FormData & { general: string }> = {};
    
    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (formStep === 1 && validateStep1()) {
      setFormStep(2);
    }
  };

  const handlePrevStep = () => {
    setFormStep(1);
  };

  const handleInterestToggle = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStep === 2 && validateStep2()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Registration successful
        setIsSubmitting(false);
        setRegistrationComplete(true);
        
        toast({
          title: "Registration Successful!",
          description: "Welcome to the aesthetales community.",
          variant: "default",
        });
      }, 1500);
    }
  };

  // Password strength indicators
  const getPasswordStrength = (password: string) => {
    if (!password) return 0;
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    
    // Contains number
    if (/[0-9]/.test(password)) strength += 1;
    
    // Contains special character
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-md mx-auto">
            {!registrationComplete ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    <span className="gold-gradient">Join aesthetales</span>
                  </h1>
                  <p className="text-cream-dark">
                    Become part of our community and get access to exclusive events and updates.
                  </p>
                </div>
                
                {/* Registration Progress */}
                <div className="flex mb-8">
                  <div className="flex-1">
                    <div className={`h-1 rounded-l-full ${formStep >= 1 ? 'bg-gold' : 'bg-mocha'}`}></div>
                    <div className="mt-2 text-center text-sm font-medium text-gold">Account</div>
                  </div>
                  <div className="flex-1">
                    <div className={`h-1 rounded-r-full ${formStep >= 2 ? 'bg-gold' : 'bg-mocha'}`}></div>
                    <div className={`mt-2 text-center text-sm font-medium ${formStep >= 2 ? 'text-gold' : 'text-cream-dark'}`}>Preferences</div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="bg-espresso-light border border-mocha p-6 rounded-lg shadow-md">
                  {/* Step 1: Account Information */}
                  {formStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-cream mb-1">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field w-full"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-cream mb-1">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field w-full"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-cream mb-1">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="input-field w-full"
                          placeholder="Create a password"
                        />
                        
                        {/* Password strength indicator */}
                        {formData.password && (
                          <div className="mt-2">
                            <div className="flex gap-1 mb-1">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <div 
                                  key={level}
                                  className={`h-1 flex-1 rounded-full ${
                                    passwordStrength >= level 
                                      ? passwordStrength >= 4 
                                        ? 'bg-green-500' 
                                        : passwordStrength >= 3 
                                          ? 'bg-yellow-500' 
                                          : 'bg-red-500'
                                      : 'bg-mocha'
                                  }`}
                                ></div>
                              ))}
                            </div>
                            <p className="text-xs text-cream-dark">
                              {passwordStrength === 0 && 'Enter a password'}
                              {passwordStrength === 1 && 'Very weak password'}
                              {passwordStrength === 2 && 'Weak password'}
                              {passwordStrength === 3 && 'Medium strength password'}
                              {passwordStrength === 4 && 'Strong password'}
                              {passwordStrength === 5 && 'Very strong password'}
                            </p>
                          </div>
                        )}
                        
                        {errors.password && (
                          <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-cream mb-1">Confirm Password</label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="input-field w-full"
                          placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                          <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                      </div>
                      
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="button-gold w-full mt-6"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                  
                  {/* Step 2: Preferences */}
                  {formStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-cream mb-3">What are you interested in?</label>
                        <div className="grid grid-cols-2 gap-3">
                          {interestOptions.map(interest => (
                            <label
                              key={interest}
                              className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                                formData.interests.includes(interest)
                                  ? 'bg-gold/20 border border-gold'
                                  : 'bg-mocha border border-mocha-light hover:bg-mocha-light'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.interests.includes(interest)}
                                onChange={() => handleInterestToggle(interest)}
                                className="sr-only"
                              />
                              <span className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mr-2 ${
                                formData.interests.includes(interest)
                                  ? 'bg-gold text-espresso'
                                  : 'bg-mocha-light text-transparent'
                              }`}>
                                <Check size={16} />
                              </span>
                              <span className="text-cream text-sm">{interest}</span>
                            </label>
                          ))}
                        </div>
                        {errors.interests && (
                          <p className="text-red-400 text-sm mt-2">{errors.interests}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="flex items-start cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded flex items-center justify-center mr-2 ${
                            formData.agreeToTerms
                              ? 'bg-gold text-espresso'
                              : 'bg-mocha text-transparent'
                          }`}>
                            {formData.agreeToTerms ? <Check size={16} /> : null}
                          </span>
                          <span className="text-cream-dark text-sm">
                            I agree to the <a href="#" className="text-gold hover:underline">Terms of Service</a> and <a href="#" className="text-gold hover:underline">Privacy Policy</a>
                          </span>
                        </label>
                        {errors.agreeToTerms && (
                          <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms}</p>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="button-outline flex-1"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="button-gold flex-1 relative"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <span className="w-5 h-5 border-2 border-espresso border-t-transparent rounded-full animate-spin mr-2"></span>
                              Processing...
                            </span>
                          ) : "Complete Registration"}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="bg-espresso-light border border-mocha p-8 rounded-lg shadow-md text-center animate-fade-in">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-cream mb-4">Welcome to aesthetales!</h2>
                <p className="text-cream-dark mb-6">
                  Your registration is complete. You can now explore our exclusive café recommendations and upcoming events.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/" className="button-outline flex-1">
                    Go to Homepage
                  </Link>
                  <Link to="/events" className="button-gold flex-1">
                    Explore Events
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
