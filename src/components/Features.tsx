
import React, { useEffect } from 'react';
import { Shield, Zap, Clock, Users, BarChart, Tablet } from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} className="text-blue-500" />,
    title: "POS System",
    description: "Lightning-fast billing with integrated payments and real-time inventory management."
  },
  {
    icon: <Users size={24} className="text-indigo-500" />,
    title: "Reception Panel",
    description: "Smooth guest check-in/out and room allocation with automated ID verification."
  },
  {
    icon: <Clock size={24} className="text-green-500" />,
    title: "Kitchen Panel",
    description: "Real-time order management for efficient service and inventory tracking."
  },
  {
    icon: <BarChart size={24} className="text-purple-500" />,
    title: "Admin Panel",
    description: "Complete control over operations with advanced analytics and reporting."
  },
  {
    icon: <Shield size={24} className="text-red-500" />,
    title: "AI Integration",
    description: "Smart recommendations, automated reports, and predictive analytics."
  },
  {
    icon: <Tablet size={24} className="text-orange-500" />,
    title: "Multi-device Support",
    description: "Access from mobile, tablet, or desktop with responsive design."
  }
];

const Features = () => {
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
    <section id="features" className="section bg-slate-50">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">Powerful Features</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            Everything you need to run your hotel operations efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`reveal feature-card reveal-delay-${index % 4 + 1}`}
            >
              <div className="p-3 rounded-lg bg-slate-100 mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
