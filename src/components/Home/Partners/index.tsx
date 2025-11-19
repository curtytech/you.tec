'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedPartners } from "@/app/api/dataPartners";
import { getImagePrefix } from '@/utils/util';
import Image from "next/image";
import { getImgPath } from "@/utils/image";

// const Partners = () => {
//   return (
//     <section className='bg-section dark:bg-darklight' id='partners'>
//       <div className='container mx-auto max-w-6xl px-4'>
//         <div
//           className='flex gap-2 items-center justify-center'
//           data-aos='fade-up'
//           data-aos-delay='200'
//           data-aos-duration='1000'>
//           <span className='w-3 h-3 rounded-full bg-success'></span>
//           <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
//             Nossos Parceiros
//           </span>
//         </div>
//         <h2
//           className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white'
//           data-aos='fade-up'
//           data-aos-delay='200'
//           data-aos-duration='1000'>
//             Temos parcerias com empresas renomadas, que compartilham nosso compromisso com a excelência.
//         </h2>
//         <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
//           {/* {Servicebox.map((item, index) => (
//             <div
//               key={index}
//               data-aos='fade-up'
//               data-aos-delay={`${index * 200}`}
//               data-aos-duration='1000'
//               data-aos-offset='300'
//               className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
//               <Image
//                 src={item.icon}
//                 alt='Service Box'
//                 width={0}
//                 height={0}
//                 className='w-10 h-10 bg-no-repeat inline-block bg-contain'
//               />
//               <h3 className='max-w-44 mx-auto text-2xl font-bold'>
//                 {item.title}
//               </h3>
//               <p className='dark:text-white/50 text-base font-normal'>
//                 {item.description}
//               </p>
//               <Link
//                 href='#'
//                 className='hover:text-blue-700 text-lg font-medium text-primary group flex items-center'>
//                 Get Started
//                 <span>
//                   <Icon
//                     icon='ei:chevron-right'
//                     width='30'
//                     height='30'
//                     className=''
//                   />
//                 </span>
//               </Link>
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Partners


const Partners = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='text-center' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <h2 className="text-midnight_text text-2xl font-semibold">Conheça nossos parceiros</h2>
                <div className="py-14 border-b ">
                    <Slider {...settings}>
                        {TruestedPartners.map((item, i) =>
                            <div key={i}>
                                <Image src={getImgPath(item.imgSrc)} alt={item.imgSrc} width={116} height={36} />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    )

}

export default Partners