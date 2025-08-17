'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectCostCalculator from '@/components/ProjectCostCalculator';
import ServiceSlider from '@/components/ServiceSlider';
import WhiteLabel from '@/components/WhiteLabel';
import ProcessStep from '@/components/ProcessStep';
import Testimonials from '@/components/Testimonials';
import Whychooses from '@/components/WhyChooseUs';
import TrustItem from '@/components/TrustItem';
import FaqItem from '@/components/FaqItem';
import Contact from '@/components/ContactSection';
import Footer from '@/components/Footer';


export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    country: '',
    whatsapp: '',
    message: ''
  });

  const handleFaqToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      city: '',
      country: '',
      whatsapp: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ✅ Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* ✅ Services Section */}
        <section id="services">
          <ServiceSlider />
        </section>

         <section id = "ProjectCost">
          <ProjectCostCalculator />
        </section>

        {/* ✅ White Label Section (About) */}
        <section id = "whiteLabel">
          <WhiteLabel />
        </section>

{/* ✅ Process Section */}
<section id="process">
  <ProcessStep />
</section>

{/* ✅ Testimonial Section */}
<section id = "Testimonials">
  <Testimonials />
</section>





   {/* ✅ CTA Section */}
<section id = "Whychooses">
    <Whychooses />
</section>


        {/* ✅ FAQ Section */}
        <section id="faq">
          <FaqItem />
        </section>

        {/* ✅ Contact Section */}
        <section id="contact" >
          <Contact />
        </section>
      </main>

      {/* ✅ Footer */}
      <section id="Footer" >
          <Footer />
        </section>
    </div>
  );
}
