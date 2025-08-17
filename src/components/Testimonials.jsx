// pages/testimonials.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your constants
import { testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#0b1230] min-h-screen py-20 px-6 text-center">
      {/* Heading */}
      <div className="mb-16">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ff9900] to-[#ff5e00] text-white text-base font-semibold shadow-lg">
          ⭐ Client Success Stories
        </span>
        <h2 className="mt-8 text-5xl font-bold text-white">
          What Our <span className="text-[#ff9900]">Partners</span> Say
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Real testimonials from agencies who've transformed their business with
          our white-label solutions
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="pb-16 relative"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#0d1635]/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-700 text-left transition-all duration-300 hover:scale-[1.02]">
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 italic leading-relaxed text-lg">
                "{t.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-6">
                <div
                  className={`w-14 h-14 rounded-full ${t.color || "bg-gradient-to-r from-blue-500 to-cyan-500"} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">
                    {t.name.split(" ")[0][0]}
                    {t.name.split(" ")[1] ? t.name.split(" ")[1][0] : ""}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                  <p className="text-sm text-[#00c3ff]">Project: {t.project}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-white !w-10 !h-10 !flex !items-center !justify-center !rounded-full !bg-[#1c2b4a] hover:!bg-[#ff9900] transition"></div>
        <div className="swiper-button-next !text-white !w-10 !h-10 !flex !items-center !justify-center !rounded-full !bg-[#1c2b4a] hover:!bg-[#ff9900] transition"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
