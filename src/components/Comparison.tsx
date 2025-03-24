
import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';

const comparisonFeatures = [
  {
    feature: "Mobile Responsive Design",
    ours: true,
    traditional: false
  },
  {
    feature: "AI-Powered Analytics",
    ours: true,
    traditional: false
  },
  {
    feature: "Real-Time Synchronization",
    ours: true,
    traditional: false
  },
  {
    feature: "Cloud-Based Storage",
    ours: true,
    traditional: true
  },
  {
    feature: "Multi-Location Management",
    ours: true,
    traditional: false
  },
  {
    feature: "Automated Reporting",
    ours: true,
    traditional: false
  },
  {
    feature: "Guest Communication Tools",
    ours: true,
    traditional: true
  },
  {
    feature: "Third-Party Integrations",
    ours: true,
    traditional: false
  }
];

const Comparison = () => {
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
    <section id="comparison" className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">Why Choose Us?</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            See how our modern solution compares to traditional systems
          </p>
        </div>

        <div className="reveal reveal-delay-2 max-w-4xl mx-auto glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 text-center bg-slate-100 font-medium py-4">
            <div className="text-slate-600">Feature</div>
            <div className="text-primary">SeamlessHotel</div>
            <div className="text-slate-500">Traditional Systems</div>
          </div>

          {comparisonFeatures.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 border-t border-slate-200 py-4 ${
                index % 2 === 0 ? 'bg-white/50' : 'bg-slate-50/50'
              }`}
            >
              <div className="px-4 font-medium">{item.feature}</div>
              <div className="flex justify-center items-center">
                {item.ours ? <Check className="text-green-500" /> : <X className="text-red-500" />}
              </div>
              <div className="flex justify-center items-center">
                {item.traditional ? <Check className="text-green-500" /> : <X className="text-red-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
