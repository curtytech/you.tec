'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

// const AbstractBorders = ({ seed }: { seed: string }) => {
//   let state = 2166136261
//   for (let i = 0; i < seed.length; i++) {
//     state ^= seed.charCodeAt(i)
//     state += (state << 1) + (state << 4) + (state << 7) + (state << 8) + (state << 24)
//   }
//   const rnd = () => {
//     state = (1664525 * state + 1013904223) >>> 0
//     return state / 4294967296
//   }
//   const rings: { cx: number; cy: number; r: number; strokeClass: string; stroke: number; opacity: number }[] = []
//   const fills: { cx: number; cy: number; r: number; fillClass: string; opacity: number }[] = []
//   const baseCx = 50 + (rnd() - 0.5) * 8
//   const baseCy = 50 + (rnd() - 0.5) * 8
//   const ringCount = Math.floor(rnd() * 3) + 4
//   for (let i = 0; i < ringCount; i++) {
//     const jitter = (rnd() - 0.5) * 6
//     const r = 18 + i * 7 + jitter
//     const cx = baseCx + (rnd() - 0.5) * 6
//     const cy = baseCy + (rnd() - 0.5) * 6
//     const strokeClass = rnd() < 0.6 ? 'text-primary' : 'text-secondary'
//     const stroke = 0.8 + rnd() * 1.2
//     const opacity = 0.25 + rnd() * 0.4
//     rings.push({ cx, cy, r, strokeClass, stroke, opacity })
//   }
//   const fillCount = Math.floor(rnd() * 2) + 2
//   for (let i = 0; i < fillCount; i++) {
//     const r = 8 + rnd() * 16
//     const cx = 50 + (rnd() - 0.5) * 30
//     const cy = 50 + (rnd() - 0.5) * 30
//     const fillClass = rnd() < 0.6 ? 'text-primary' : 'text-secondary'
//     const opacity = 0.12 + rnd() * 0.25
//     fills.push({ cx, cy, r, fillClass, opacity })
//   }
//   return (
//     <div className='absolute inset-0 pointer-events-none'>
//       <svg viewBox='0 0 100 100' className='w-full h-full'>
//         {rings.map((s, i) => (
//           <circle
//             key={`ring-${i}`}
//             cx={s.cx}
//             cy={s.cy}
//             r={s.r}
//             className={s.strokeClass}
//             fill='none'
//             stroke='currentColor'
//             strokeWidth={s.stroke}
//             opacity={s.opacity}
//           />
//         ))}
//         {fills.map((f, i) => (
//           <circle
//             key={`fill-${i}`}
//             cx={f.cx}
//             cy={f.cy}
//             r={f.r}
//             className={f.fillClass}
//             fill='currentColor'
//             opacity={f.opacity}
//           />
//         ))}
//       </svg>
//     </div>
//   )
// }

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <Link key={index} href={`${item.slug}`} target='_blank' passHref>
              <div
                className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-24 ' : ''}`}>
                <div className='relative overflow-hidden rounded-lg '>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={900}
                    height={800}
                    style={{ width: '80%', height: '80%' }}
                    className='m-auto  group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500 animate-pulse '                     
                  />
                  {/* <AbstractBorders seed={`${item.slug}-${index}`} /> */}
                </div>
                <h4 className='pb-1 pt-9 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
                  {item.title}
                </h4>
                <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
                  {item.info}
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
