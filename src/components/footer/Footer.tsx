'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/*
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في النشرة الإخبارية</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            احصل على آخر العروض والمنتجات الجديدة مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              اشتراك
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
*/}
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
               <img src="/logo.png" alt="شعار المتجر" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              متجرك الإلكتروني المتكامل للتسوق الآمن والموثوق. نقدم أفضل المنتجات بأسعار تنافسية وخدمة عملاء متميزة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { name: 'من نحن', href: '/about' },
                { name: 'المنتجات', href: '/products' },
                { name: 'العروض الخاصة', href: '/offers' },
                { name: 'المدونة', href: '/blog' },
                { name: 'تواصل معنا', href: '/contact' },
                { name: 'الأسئلة الشائعة', href: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">خدمة العملاء</h3>
            <ul className="space-y-3">
              {[
                { name: 'سياسة الإرجاع', href: '/return-policy' },
                { name: 'الشحن والتوصيل', href: '/shipping' },
                { name: 'طرق الدفع', href: '/payment' },
                { name: 'سياسة الخصوصية', href: '/privacy' },
                { name: 'الشروط والأحكام', href: '/terms' },
                { name: 'الدعم الفني', href: '/support' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400">
                   ....
                    <br />
                    ...
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400">966123456789+</p>
                  <p className="text-sm text-gray-500">متاح 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400">info@mystore.com</p>
                  <p className="text-sm text-gray-500">نرد خلال 24 ساعة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} متجري. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <img src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="Visa" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="Mastercard" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="PayPal" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;