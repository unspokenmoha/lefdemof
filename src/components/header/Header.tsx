'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User, Heart } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      {/* Top Bar */}
     {/*
<div className="bg-red-300 text-white text-sm py-2">
  <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
    <span>شحن مجاني للطلبات أكثر من 200 ريال</span>
    <div className="flex gap-4">
      <span>تواصل معنا: 966123456789+</span>
    </div>
  </div>
</div>
*/}


      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/logo.png" alt="شعار المتجر" className="h-10 w-auto" />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium">
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products" className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium">
              المنتجات
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/categories" className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium">
              الفئات
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/offers" className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium">
              العروض
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="relative group text-gray-700 hover:text-blue-600 transition-colors font-medium">
              تواصل معنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button className="hidden md:flex p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden md:flex p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
       {/*
<div className="md:hidden mt-4">
  <div className="relative">
    <input
      type="text"
      placeholder="ابحث عن المنتجات..."
      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </div>
</div>
*/}

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
              الرئيسية
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
              المنتجات
            </Link>
            <Link href="/categories" className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
              الفئات
            </Link>
            <Link href="/offers" className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
              العروض
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
              تواصل معنا
            </Link>
            <div className="border-t pt-3 mt-3">
              <Link href="/wishlist" className="flex items-center py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
                <Heart className="w-5 h-5 ml-2" />
                المفضلة
              </Link>
              <Link href="/account" className="flex items-center py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 transition-all">
                <User className="w-5 h-5 ml-2" />
                حسابي
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;