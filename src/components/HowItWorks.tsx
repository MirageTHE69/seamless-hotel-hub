
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const tabs = [
  {
    title: "POS System",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: [
      "Intuitive touchscreen interface",
      "Integrated payment processing",
      "Real-time inventory management",
      "Split bills and reservations",
      "Custom receipt printing options"
    ]
  },
  {
    title: "Reception Panel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: [
      "Streamlined check-in/check-out",
      "Room availability visualization",
      "Guest profile management",
      "ID scanning and verification",
      "Customizable guest communications"
    ]
  },
  {
    title: "Kitchen Panel",
    image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: [
      "Order tracking and prioritization",
      "Recipe and ingredient management",
      "Prep time optimization",
      "Dietary restrictions flagging",
      "Inventory alerts and ordering"
    ]
  },
  {
    title: "Admin Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: [
      "Real-time business analytics",
      "Staff management and scheduling",
      "Revenue and expense tracking",
      "Customizable reporting",
      "Multi-location management capability"
    ]
  }
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">How It Works</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            A complete hotel management ecosystem at your fingertips
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side: Tab buttons */}
          <div className="reveal reveal-delay-1 lg:w-1/3 flex flex-col space-y-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <h3 className="text-lg font-bold">{tab.title}</h3>
              </button>
            ))}
          </div>

          {/* Right side: Tab content */}
          <div className="reveal reveal-delay-2 lg:w-2/3">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold mb-4">{tabs[activeTab].title}</h3>
                <ul className="space-y-2">
                  {tabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white">
                      <Check size={18} className="mt-1 min-w-[18px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
