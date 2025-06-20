'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselCard1 from '../carousel-cards/CarouselCard1';

const Section2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "https://cdn.shopify.com/s/files/1/0267/2587/5903/files/000022.jpg?v=1742074739",
      link: "/shop"  // يمكن تغييره لكل شريحة حسب الحاجة
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0267/2587/5903/files/0000444.jpg?v=1742074686",
      link: "/collection"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0267/2587/5903/files/000011.jpg?v=1742074768",
      link: "/offers"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-32 pb-16">
 <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[350px] md:h-[600px]">

        <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CarouselCard1
                  image={slide.image}
                  index={index}
                  // لو أضفت دعم لـ link في CarouselCard1 يمكن تمريره هنا
                />
              </div>
            ))}
          </div>

          {/* أزرار التنقل */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* نقاط المؤشر */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* شريط التقدم */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

