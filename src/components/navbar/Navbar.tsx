'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

type Props = {
  navListOpen?: boolean;
};

const Navbar = ({ navListOpen = false }: Props) => {
  const [isOpen, setIsOpen] = React.useState(navListOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">متجري</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">الرئيسية</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">المنتجات</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">عروض</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">تواصل</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">الرئيسية</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">المنتجات</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">عروض</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">تواصل</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
