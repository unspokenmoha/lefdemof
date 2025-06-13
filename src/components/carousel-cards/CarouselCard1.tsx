'use client';

import React from 'react';
import { ArrowLeft, Star, ShoppingBag } from 'lucide-react';

interface CarouselCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  gradient?: string;
  index?: number;
}

const CarouselCard1: React.FC<CarouselCardProps> = ({
  title = "عروض حصرية",
  subtitle = "خصم يصل إلى 70%",
  description = "على جميع المنتجات المختارة",
  image = "https://images.pexels.com/photos/1082529/pexels-photo-165538?auto=compress&cs=tinysrgb&w=800&h=400",
  buttonText = "تسوق الآن",
  gradient = "from-blue-600 via-purple-600 to-pink-600",
  index = 0
}) => {
  const gradients = [
    "from-blue-600 via-purple-600 to-pink-600",
    "from-green-500 via-teal-500 to-blue-500",
    "from-orange-500 via-red-500 to-pink-500",
    "from-purple-600 via-blue-600 to-indigo-600",
    "from-yellow-500 via-orange-500 to-red-500"
  ];

  const selectedGradient = gradients[index % gradients.length];

  return (
    <div className="relative min-w-full md:min-w-[600px] h-screen md:h-80 rounded-2xl overflow-hidden group cursor-pointer">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-between p-8 text-white">
        <div className="flex-1 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            <Star className="w-4 h-4 ml-1 fill-current" />
            عرض مميز
          </div>
          
          {/* Main Content */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-yellow-300">
              {subtitle}
            </p>
            <p className="text-lg opacity-90 max-w-md">
              {description}
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="group/btn inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <ShoppingBag className="w-5 h-5 ml-2" />
            {buttonText}
            <ArrowLeft className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="hidden md:flex flex-col items-center space-y-4">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowLeft className="w-6 h-6" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">70%</div>
            <div className="text-sm opacity-80">خصم</div>
          </div>
        </div>
      </div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-8 right-12 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300" />
      <div className="absolute top-12 right-20 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-700" />
    </div>
  );
};

export default CarouselCard1;