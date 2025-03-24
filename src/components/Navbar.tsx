
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 lg:px-20 
        ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="font-display font-bold text-xl">SeamlessHotel</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="button-secondary text-sm px-5 py-2.5">Contact Sales</a>
            <a href="#demo" className="button-primary text-sm px-5 py-2.5">Get Demo</a>
          </div>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="#contact" 
                className="button-secondary text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </a>
              <a 
                href="#demo" 
                className="button-primary text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
