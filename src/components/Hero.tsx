
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')] 
        bg-cover bg-center opacity-10"
        aria-hidden="true"
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          <span className="gold-gradient">aesthetales</span>
        </h1>
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gold mb-12">Est. 2024</p>
        <p className="text-lg md:text-xl text-cream-dark mb-10 max-w-2xl mx-auto">
          Curating exceptional café experiences across Delhi NCR, where every cup tells a story and every space inspires.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/cafes" className="button-gold w-full sm:w-auto">
            Explore Cafés
          </Link>
          <Link to="/register" className="button-outline w-full sm:w-auto">
            Join Our Community
          </Link>
        </div>
        
        <button 
          onClick={scrollToContent} 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gold hover:text-gold-light transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
