'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; // ✅ moved here
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectCostCalculator from '@/components/ProjectCostCalculator';
import ServiceSlider from '@/components/ServiceSlider';
import WhiteLabel from '@/components/WhiteLabel';
import ProcessStep from '@/components/ProcessStep';
import Testimonials from '@/components/Testimonials';
import TrustItem from '@/components/TrustItem';
import FaqItem from '@/components/FaqItem';
import StatCard from '@/components/StatCard';
import Button from '@/components/Button';
import { stats } from '@/constants/stats';
import { trustPoints } from '@/constants/trustPoints';
import { faqs } from '@/constants/faqs';

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
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-6 text-white"
    >
      Think of us as an extension of your team.
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
      className="text-xl mb-8 text-gray-200"
    >
      Let's kick things off with a no-pressure consultation and explore how we can grow together—because when you succeed, we all succeed.
    </motion.p>

    {/* ✅ Animated Button in Center */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 20px rgba(255,255,255,0.6)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="px-8 py-3 text-lg font-semibold rounded-xl
                   bg-white text-blue-900 hover:bg-gray-200
                   transition-all"
      >
        Get Started
      </motion.button>
    </motion.div>
  </div>
</section>


        {/* ✅ FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={activeFaq === index}
                  onClick={() => handleFaqToggle(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                24/7 Global Connectivity That Works Around You
              </h2>
              <p className="text-xl text-gray-300">
                No matter where you are, we're always within reach. With teams across time zones, Flowrush ensures round-the-clock communication,
                seamless collaboration, and real-time updates—because your deadlines don't wait, and neither do we.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Short Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" text="Connect Now" variant="primary" />
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ✅ Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Flowrush Technologies
              </h3>
              <p className="text-gray-400 mt-2">Your trusted global partner for digital development</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Disclaimer</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Flowrush Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
