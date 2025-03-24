
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize the reveal animation for elements
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
