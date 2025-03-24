
import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is your system cloud-based or on-premise?",
    answer: "Our system is available both as a cloud-based SaaS solution and as an on-premise installation. The cloud version offers automatic updates and remote access, while the on-premise version provides more control over your data and can work without internet connectivity."
  },
  {
    question: "Does it support multi-location hotels or chains?",
    answer: "Yes, our Enterprise plan is specifically designed for hotel chains and multi-location properties. It provides centralized management, cross-property analytics, and unified guest profiles across all locations while maintaining property-specific settings."
  },
  {
    question: "How secure is the guest data in your system?",
    answer: "Security is our top priority. We implement bank-level encryption, regular security audits, and are fully GDPR compliant. All sensitive guest data is encrypted both in transit and at rest, and we provide tools to help you manage consent and data retention policies."
  },
  {
    question: "Can I integrate with my existing PMS or booking system?",
    answer: "Absolutely. Our system offers open APIs and pre-built integrations with popular hotel management software, including major booking engines, payment processors, and channel managers. Our integration team can help create custom connectors for less common systems."
  },
  {
    question: "How long does implementation and training take?",
    answer: "For small to medium hotels, implementation typically takes 2-4 weeks. Larger properties or chains may require 4-8 weeks. We provide comprehensive training for all staff levels, and our implementation team helps with data migration, setup, and configuration to ensure a smooth transition."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Our Pro and Enterprise plans include 24/7 phone and chat support. Enterprise customers also receive a dedicated account manager. We also offer optional premium support packages for hotels requiring on-site assistance or extended hours."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

  return (
    <section id="faq" className="section bg-white">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="reveal section-title">Frequently Asked Questions</h2>
          <p className="reveal reveal-delay-1 section-subtitle">
            Everything you need to know about our hotel management system
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`reveal reveal-delay-${index % 4 + 1} mb-4 last:mb-0`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left p-6 rounded-xl glass flex justify-between items-center transition-all ${
                  openIndex === index ? 'bg-primary/5' : ''
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-6 pt-2 text-muted-foreground text-sm animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="reveal reveal-delay-4 mt-12 text-center">
          <p className="mb-4">Still have questions? We're here to help!</p>
          <a href="#contact" className="button-primary inline-flex">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
