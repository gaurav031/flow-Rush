"use client";

import { useState } from "react";
import { faqs } from "@/constants/faqs";

const FaqItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-linear-gradient(135deg, #0b1230 0%, #141a3a 100%)">
      {/* Header */}
      <div className="text-center mb-16">
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-semibold shadow-md">
          FAQ
        </button>
        <h2 className="mt-8 text-5xl font-extrabold text-white leading-snug">
          Frequently Asked <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Questions
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about working with Flowrush
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl bg-gradient-to-r from-[#141a3a] to-[#0d122b] px-6 py-4 shadow-md transition-all hover:shadow-lg"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left"
            >
              {/* Left Square */}
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-[#0b1230] border border-cyan-500/40"
                }`}
              />

              {/* Question */}
              <span className="flex-1 ml-4 text-base font-medium text-white">
                {faq.question}
              </span>

              {/* Right Arrow */}
              <svg
                className={`w-4 h-4 text-cyan-400 transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <p className="mt-3 text-gray-300 text-sm leading-relaxed pl-14">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#141a3a] to-[#0d122b] px-8 py-12 text-center shadow-md">
          <h3 className="text-2xl font-semibold text-white">
            Still have questions?
          </h3>
          <p className="mt-3 text-gray-400">
            Our team is here to help you find the perfect solution for your needs.
          </p>
          <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:opacity-90 transition">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqItem;
