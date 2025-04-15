
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative z-50 py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold gold-gradient">aesthetales</span>
            <span className="text-xs ml-2 tracking-widest font-medium text-gold">EST. 2024</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'text-gold after:w-full' : ''}`}>
              Home
            </Link>
            <Link to="/cafes" className={`navbar-link ${isActive('/cafes') ? 'text-gold after:w-full' : ''}`}>
              Cafés
            </Link>
            <Link to="/events" className={`navbar-link ${isActive('/events') ? 'text-gold after:w-full' : ''}`}>
              Events
            </Link>
            <Link to="/register" className="button-gold">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-cream hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-espresso-light border-t border-b border-mocha animate-fade-in">
            <div className="flex flex-col py-4 container mx-auto space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 ${isActive('/') ? 'text-gold' : 'text-cream'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/cafes" 
                className={`px-4 py-2 ${isActive('/cafes') ? 'text-gold' : 'text-cream'}`}
                onClick={toggleMenu}
              >
                Cafés
              </Link>
              <Link 
                to="/events" 
                className={`px-4 py-2 ${isActive('/events') ? 'text-gold' : 'text-cream'}`}
                onClick={toggleMenu}
              >
                Events
              </Link>
              <Link 
                to="/register" 
                className="mx-4 button-gold text-center"
                onClick={toggleMenu}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
