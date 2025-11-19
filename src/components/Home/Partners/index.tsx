'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedPartners } from "@/app/api/dataPartners";
import { getImagePrefix } from '@/utils/util';
import Image from "next/image";
import { getImgPath } from "@/utils/image";

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
    <section className='text-center dark:bg-darkmode' >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pb-4">
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          Conheça nossos parceiros
        </h2>
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