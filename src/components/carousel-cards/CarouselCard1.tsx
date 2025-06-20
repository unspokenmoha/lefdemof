'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface CarouselCardProps {
  image?: string;
  index?: number;
  buttonText?: string; // لم يعد مستخدمًا، لكن نتركه للمرونة
}

const CarouselCard1: React.FC<CarouselCardProps> = ({
  image = "https://images.pexels.com/photos/1082529/pexels-photo-165538?auto=compress&cs=tinysrgb&w=800&h=400",
  index = 0
}) => {

  const handleClick = () => {
    // هنا يمكنك تنفيذ الإجراء عند النقر على الصورة، مثل التنقل أو فتح رابط
    window.location.href = "/"; // قم بتغيير الرابط حسب ما تحتاج
  };

  return (
    <div
      onClick={handleClick}
      className="relative min-w-full md:min-w-[600px] h-screen md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
    >

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Badge: عرض مميز */}
      <div className="absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
        <Star className="w-4 h-4 ml-1 fill-current" />
        عرض مميز
      </div>

      {/* Animated Border (اختياري) */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />

      {/* Floating Elements (اختياري) */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-8 right-12 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300" />
      <div className="absolute top-12 right-20 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-700" />
    </div>
  );
};

export default CarouselCard1;
