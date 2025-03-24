
import React, { useEffect } from 'react';
import { ArrowRight, PenLine } from 'lucide-react';

const Cta = () => {
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
    <section id="demo" className="section bg-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
      </div>
      
      <div className="section-inner relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal mb-6">
            <span className="inline-block py-1.5 px-4 bg-white/10 rounded-full text-primary-foreground text-sm font-medium backdrop-blur-sm">
              Ready to Transform Your Hotel Management?
            </span>
          </div>
          
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
            Get Started with SeamlessHotel Today
          </h2>
          
          <p className="reveal reveal-delay-2 text-lg text-slate-300 mb-10 text-balance">
            Join hundreds of hotels already using our system to streamline operations, 
            enhance guest experiences, and boost revenue.
          </p>
          
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="button-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              Request a Free Demo
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors w-full sm:w-auto">
              <PenLine size={18} />
              Schedule a Consultation
            </a>
          </div>
          
          <div className="reveal reveal-delay-4 flex items-center justify-center gap-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} 
                    alt="Customer avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-300">Trusted by hoteliers worldwide</div>
              <div className="text-yellow-400 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-white ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
