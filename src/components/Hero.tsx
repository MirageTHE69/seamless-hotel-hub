
import React, { useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 pb-10 px-6 md:px-10 lg:px-20">
      <div className="section-inner flex flex-col items-center text-center">
        <div className="reveal reveal-delay-1 mb-6">
          <span className="inline-block py-1.5 px-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Next-Gen Hotel Management
          </span>
        </div>
        
        <h1 className="reveal reveal-delay-2 section-title max-w-5xl mb-6 text-balance">
          Seamless, Smart, and Scalable Hotel Management System
        </h1>
        
        <p className="reveal reveal-delay-3 section-subtitle mb-12 text-balance">
          A one-stop solution for hotels – from reception to kitchen, manage everything effortlessly with our AI-powered platform!
        </p>
        
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#demo" className="button-primary flex items-center justify-center gap-2 text-base">
            Get a Free Demo
            <ArrowRight size={18} />
          </a>
          <a href="#pricing" className="button-secondary flex items-center justify-center gap-2 text-base">
            See Pricing
          </a>
        </div>
        
        <div className="reveal reveal-delay-4 relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Hotel Management System Dashboard"
            className="w-full object-cover"
          />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <span className="text-white/90 text-sm font-medium mb-2">Scroll to explore</span>
            <div className="mouse-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
