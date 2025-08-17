// pages/testimonials.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { testimonials } from "@/constants/testimonials";

const gradientColors = [
  "bg-gradient-to-r from-purple-500 to-indigo-500",
  "bg-gradient-to-r from-pink-500 to-red-500",
  "bg-gradient-to-r from-green-500 to-emerald-500",
  "bg-gradient-to-r from-yellow-500 to-orange-500",
  "bg-gradient-to-r from-cyan-500 to-blue-500",
];

const Testimonials = () => {
  return (
    <section className="bg-[#0b1230] min-h-screen py-20 px-6 text-center flex flex-col items-center">
      {/* Heading */}
      <div className="mb-12">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ff5e00] text-white text-base font-semibold shadow-lg">
          ⭐ Client Success Stories
        </span>
        <h2 className="mt-6 text-5xl font-bold text-white">
          What Our <span className="text-[#ff9900]">Partners</span> Say
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Real testimonials from agencies who've transformed their business with our white-label solutions
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="w-full flex justify-center">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1} // show only one at a time
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="pb-4 w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-[95%] md:w-[60%] mx-auto bg-[#0d1635]/80 backdrop-blur-lg rounded-2xl p-10 shadow-lg border border-gray-700 text-left transition-all duration-300">
                {/* Stars */}
                <div className="flex mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                  {t.rating < 5 &&
                    Array.from({ length: 5 - t.rating }).map((_, i) => (
                      <span key={i} className="text-gray-600 text-2xl">★</span>
                    ))}
                </div>

                {/* Review Text (larger + 60% opacity) */}
                <p className="text-gray-200 italic leading-relaxed text-2xl md:text-3xl opacity-60">
                  "{t.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mt-10">
                  <div
                    className={`w-16 h-16 rounded-full ${
                      gradientColors[index % gradientColors.length]
                    } flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xl">
                      {t.name.split(" ")[0][0]}
                      {t.name.split(" ")[1] ? t.name.split(" ")[1][0] : ""}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Controls below the box: arrows + pagination (pagination is rendered by Swiper) */}
      <div className="mt-8 flex items-center justify-center gap-6">
        {/* Prev */}
        <button
          className="swiper-button-prev w-12 h-12 rounded-full bg-[#1c2b4a] flex items-center justify-center text-white hover:bg-[#ff9900] transition-shadow shadow"
          aria-label="Previous testimonial"
        >
          {/* simple chevron */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots area is handled by Swiper; keep empty container so layout matches — Swiper will inject its pagination dots here by default.
            You can style pagination with .swiper-pagination in your CSS if you want custom look. */}
        <div className="swiper-pagination" />

        {/* Next */}
        <button
          className="swiper-button-next w-12 h-12 rounded-full bg-[#1c2b4a] flex items-center justify-center text-white hover:bg-[#ff9900] transition-shadow shadow"
          aria-label="Next testimonial"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* small spacer */}
      <div className="h-12" />
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

export default Testimonials;
