
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

  // Structured data for hotel management software (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SeamlessHotel Management System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "description": "A seamless, smart, and scalable hotel management system that streamlines operations from reception to kitchen with AI-powered tools.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SeamlessHotel - Next-Gen Hotel Management System</title>
        <meta name="description" content="A seamless, smart, and scalable hotel management system that streamlines operations from reception to kitchen with AI-powered tools." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
