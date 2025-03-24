
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "General Manager, Oceanview Resort",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    quote: "SeamlessHotel has revolutionized how we manage our hotel. We've increased our operational efficiency by 40% and our staff can focus more on providing exceptional service instead of dealing with paperwork."
  },
  {
    name: "Michael Chen",
    role: "Operations Director, Grand Plaza Hotels",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    quote: "After implementing SeamlessHotel across our 5 properties, we've seen a 30% reduction in check-in times and significantly improved guest satisfaction scores. The analytics have been invaluable for our decision-making."
  },
  {
    name: "Emily Rodriguez",
    role: "Front Desk Manager, Boutique Inn & Spa",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    quote: "The intuitive interface made training our staff so easy. Even our less tech-savvy employees picked it up quickly. The guest communication tools have helped us create more personalized experiences."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
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
  
  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="testimonials" className="section bg-slate-50">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">What Our Clients Say</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            Trusted by hoteliers around the world
          </p>
        </div>
        
        <div className="reveal reveal-delay-2 max-w-4xl mx-auto">
          <div className="relative glass rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                    <div className="flex items-center bg-yellow-400 rounded-full px-2 py-0.5">
                      <Star size={12} className="text-white" fill="white" />
                      <span className="text-white text-xs font-bold ml-1">5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center md:text-left">
                  <h4 className="font-bold">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg italic">
                  "{testimonials[current].quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end gap-2 mt-8">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow hover:shadow-md transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow hover:shadow-md transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex justify-center gap-1 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full ${
                    current === index ? 'bg-primary' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="reveal reveal-delay-3 mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <p className="text-sm text-muted-foreground">Average Efficiency Increase</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30%</div>
            <p className="text-sm text-muted-foreground">Faster Guest Check-in</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Hotels Using Our System</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
