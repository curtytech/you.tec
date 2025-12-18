import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Partners from '@/components/Home/Partners';

import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "You Tec",
  description: "Inovação, performance e design para seu produto digital. Construímos experiências que conectam.",
  openGraph: {
    title: "You Tec",
    description: "Inovação, performance e design para seu produto digital. Construímos experiências que conectam.",
    type: "website",
    url: "https://seu-dominio/",
    siteName: "You Tec",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "You Tec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "You Tec",
    description: "Inovação, performance e design para seu produto digital. Construímos experiências que conectam.",
    images: ["/images/og-cover.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      {/* <Progresswork isColorMode={false} /> */}
      {/* <Partners /> */}
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Blog />
      {/* <Contactform /> */}
    </main>
  )
}
