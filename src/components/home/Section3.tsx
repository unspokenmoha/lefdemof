'use client';

import Image from 'next/image';

const Section3 = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-transparent px-4">
      {/* بطاقة المنتج */}
      <div className="relative max-w-xs w-full rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl pt-20 pb-6 px-6 text-center">
        {/* صورة المنتج تطفو فوق البطاقة */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Image
            src="/product.webp"
            alt="منتج"
            width={120}
            height={120}
            className="object-contain drop-shadow-xl rounded-xl"
          />
        </div>

        {/* اسم المنتج */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">اسم المنتج</h2>

        {/* السعر */}
        <div className="flex justify-center items-center gap-2 mt-1 text-sm">
          <span className="line-through text-gray-400">$99</span>
          <span className="text-red-500 font-bold">$69</span>
        </div>

        {/* الألوان */}
        <div className="flex justify-center gap-2 mt-3">
          <span className="w-4 h-4 rounded-full bg-red-500 border border-white/20"></span>
          <span className="w-4 h-4 rounded-full bg-blue-500 border border-white/20"></span>
          <span className="w-4 h-4 rounded-full bg-green-500 border border-white/20"></span>
        </div>

        {/* زر الإضافة إلى السلة */}
        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          أضف إلى السلة
        </button>
      </div>


      {/* قسم المميزات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl w-full px-4">
        {[
          {
            icon: "🚚",
            title: "شحن مجاني",
            description: "للطلبات أكثر من 200 ريال"
          },
          {
            icon: "🔒",
            title: "دفع آمن",
            description: "حماية كاملة لبياناتك"
          },
          {
            icon: "↩️",
            title: "إرجاع مجاني",
            description: "خلال 30 يوم من الشراء"
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
