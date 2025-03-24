
import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "Perfect for small independent hotels",
    features: [
      "POS System (up to 2 terminals)",
      "Reception Management",
      "Basic Reporting",
      "Cloud Storage (10GB)",
      "Email Support"
    ],
    isPopular: false
  },
  {
    name: "Pro",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: "Ideal for medium-sized hotels",
    features: [
      "POS System (up to 5 terminals)",
      "Reception & Room Management",
      "Kitchen Management System",
      "Advanced Analytics",
      "Guest Communication Tools",
      "Cloud Storage (50GB)",
      "24/7 Support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    monthlyPrice: 349,
    yearlyPrice: 3490,
    description: "For large hotel chains and resorts",
    features: [
      "Unlimited POS Terminals",
      "Complete Hotel Management Suite",
      "AI-powered Analytics & Forecasting",
      "Multi-location Management",
      "Custom Integrations",
      "Unlimited Cloud Storage",
      "24/7 Priority Support",
      "Dedicated Account Manager"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
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
    <section id="pricing" className="section bg-white">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">Simple, Transparent Pricing</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            Choose the plan that fits your hotel's needs
          </p>
          
          <div className="reveal reveal-delay-2 flex items-center justify-center mt-8 mb-12">
            <span className={`mr-3 ${!annual ? 'font-semibold text-primary' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-200"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                  annual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${annual ? 'font-semibold text-primary' : 'text-slate-500'}`}>Annual (Save 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`reveal ${plan.isPopular ? 'reveal-delay-2 price-card-popular' : `reveal-delay-${index + 1} price-card`}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${annual ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-muted-foreground ml-1">{annual ? '/year' : '/month'}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 min-w-[18px]" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#demo"
                className={`w-full py-3 px-6 rounded-xl text-center font-medium block transition-all hover:shadow-md ${
                  plan.isPopular 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {plan.isPopular ? 'Get Started' : 'Try Free Demo'}
              </a>
            </div>
          ))}
        </div>
        
        <div className="reveal reveal-delay-4 mt-16 text-center">
          <p className="text-muted-foreground mb-6">Need a custom solution for your specific requirements?</p>
          <a href="#contact" className="button-secondary inline-flex">Contact Sales for Custom Pricing</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
