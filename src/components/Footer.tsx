
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-dark border-t border-mocha py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold gold-gradient">aesthetales</span>
              <span className="text-xs ml-2 tracking-widest font-medium text-gold">EST. 2024</span>
            </Link>
            <p className="text-cream-dark mt-4 max-w-xs">
              Curating exceptional café experiences across Delhi NCR, one cup at a time.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-cream-dark hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-dark hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-dark hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@aesthetales.com" className="text-cream-dark hover:text-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gold font-medium mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-cream-dark hover:text-gold transition-colors">Home</Link></li>
                <li><Link to="/cafes" className="text-cream-dark hover:text-gold transition-colors">Cafés</Link></li>
                <li><Link to="/events" className="text-cream-dark hover:text-gold transition-colors">Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="/register" className="text-cream-dark hover:text-gold transition-colors">Join Now</Link></li>
                <li><a href="#" className="text-cream-dark hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-cream-dark hover:text-gold transition-colors">Partner With Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream-dark hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-cream-dark hover:text-gold transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-cream-dark hover:text-gold transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-mocha mt-12 pt-8 text-center text-cream-dark text-sm">
          <p>© {currentYear} aesthetales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
