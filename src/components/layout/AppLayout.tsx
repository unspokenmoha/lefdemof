'use client';

import { usePathname } from 'next/navigation';
import Footer from "../footer/Footer";
import Header from '../header/Header';
import MobileNavigationBar from "../mobile-navigation/MobileNavigationBar";
import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  navbar?: React.ReactNode;
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({
  children,
  navbar,
  title = "متجري - التسوق الإلكتروني الأمثل",
}) => {
  const pathname = usePathname();

  // إخفاء الهيدر والفوتر وMobileNavigationBar في صفحة /foryou فقط
  const hideLayout = pathname === '/foryou';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="متجرك الإلكتروني المتكامل للتسوق الآمن والموثوق" />
      </Head>

      {!hideLayout && <Header />}

      <main
  className={`min-h-screen bg-[rgb(248,249,250)] ${
    pathname === '/foryou' ? 'pb-20' : ''
  }`}
>
  {navbar ? (
    <div className="pt-32">{navbar}</div>
  ) : (
    <div>{children}</div>
  )}
</main>


      {!hideLayout && <MobileNavigationBar />}

      {!hideLayout && <Footer />}
    </>
  );
};

export default AppLayout;
