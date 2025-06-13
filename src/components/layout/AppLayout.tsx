'use client'

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
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="متجرك الإلكتروني المتكامل للتسوق الآمن والموثوق" />
    </Head>

    {/* Header with fixed positioning */}
    <Header />

    {/* Main Content */}
    <main className="min-h-screen bg-[rgb(248,249,250)]">
      {navbar ? (
        <div className="pt-32">{navbar}</div>
      ) : (
        <div>{children}</div>
      )}
    </main>

    {/* Mobile Navigation */}
    <MobileNavigationBar />
    
    {/* Footer */}
    <Footer />
  </>
);

export default AppLayout;