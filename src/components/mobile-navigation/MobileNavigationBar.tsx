'use client';

import { Home, ShoppingCart, Search, Heart, Grid3X3 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', icon: Home, label: 'الرئيسية' },
  { href: '/foryou', icon: Grid3X3, label: 'اكسبلور' },
  { href: '/search', icon: Search, label: 'البحث' },
  { href: '/wishlist', icon: Heart, label: 'المفضلة' },
  { href: '/cart', icon: ShoppingCart, label: 'السلة', badge: 3 },
];

const MobileNavigationBar = () => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState(pathname);

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-20 md:hidden" />
      
      {/* Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50">
        {/* Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-pink-600" />
        
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map(({ href, icon: Icon, label, badge }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveTab(href)}
                className={`relative flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 transition-all duration-300 ${
                  active 
                    ? 'text-blue-600 scale-105' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {/* Active Indicator */}
                {active && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-pink-600 rounded-full" />
                )}
                
                {/* Icon Container */}
                <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${
                  active 
                    ? 'bg-blue-50 shadow-md' 
                    : 'hover:bg-gray-50'
                }`}>
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      active ? 'scale-110' : ''
                    }`}
                  />
                  
                  {/* Badge */}
                  {badge && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                      {badge}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <span className={`text-xs mt-1 font-medium transition-all duration-300 ${
                  active ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {label}
                </span>
                
                {/* Active Background Glow */}
                {active && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent rounded-xl -z-10" />
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Bottom Safe Area */}
        <div className="h-safe-area-inset-bottom bg-white/95" />
      </nav>
    </>
  );
};

export default MobileNavigationBar;
