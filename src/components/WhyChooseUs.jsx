import React, { useEffect, useState } from "react";

const features = [
  {
    title: "Strict Confidentiality & White-Label Delivery",
    description:
      "We operate under NDAs and deliver fully branded solutions—your clients never know we're there.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Scalable On-Demand Teams",
    description:
      "Quickly expand your development capacity with dedicated experts, without the overhead.",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Reliable, On-Time Delivery",
    description:
      "We meet your deadlines—no delays, no excuses—so you can maintain client trust.",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Custom-Built Solutions",
    description:
      "Every project is tailored to your client’s unique needs for maximum impact.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Transparent Communication",
    description:
      "Stay updated at every stage with open and clear communication from our team.",
    color: "from-indigo-400 to-blue-500",
  },
  {
    title: "Post-Launch Support & Maintenance",
    description:
      "We don’t stop at delivery—our team ensures smooth operations post-launch.",
    color: "from-pink-500 to-rose-500",
  },
];

const WhyChooseUs = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // generate random dots for each card
    const newDots = features.map(() =>
      Array.from({ length: 5 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: [
          "#00f5ff",
          "#ff3c7b",
          "#8b5cf6",
          "#22d3ee",
          "#f472b6",
          "#34d399",
        ][Math.floor(Math.random() * 6)],
      }))
    );
    setDots(newDots);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0b1230] via-[#101c46] to-[#0b1230] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold shadow-md">
          Why Choose Us
        </button>
        <h2 className="mt-8 text-5xl font-extrabold text-white leading-snug">
          Why Agencies Worldwide Trust <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Flowrush
          </span>
          <br /> as Their Tech Partner
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Built for agencies who demand excellence, reliability, and complete
          confidentiality
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Rotated Gradient Square */}
            <div className="w-14 h-14 rotate-3 mb-6 relative rounded-xl">
              <div
                className={`absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r ${feature.color}`}
              >
                <div className="w-full h-full rounded-xl bg-[#0b1230]/60 backdrop-blur-md"></div>
              </div>
            </div>

            {/* Random Dots */}
            {dots[index]?.map((dot, i) => (
              <span
                key={i}
                className="absolute rounded-full opacity-80"
                style={{
                  top: `${dot.y}%`,
                  left: `${dot.x}%`,
                  width: "6px",
                  height: "6px",
                  backgroundColor: dot.color,
                }}
              />
            ))}

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400">{feature.description}</p>

            {/* Underline Accent */}
            <div
              className={`mt-4 w-20 h-[3px] rounded-full bg-gradient-to-r ${feature.color}`}
            ></div>
          </div>
        ))}
      </div>
                {/* Three Dots with Line */}
<div className="flex items-center justify-center w-full py-10">
  <div className="relative flex items-center w-40 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
    <div className="absolute left-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
    <div className="absolute right-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
  </div>
</div>
    </section>
  );
};

export default WhyChooseUs;
