'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'



const Hero = () => {
  return (
    <>

      <section className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('images/hero/you_hero.avif')" }}></div>

        <div className="absolute inset-0 bg-blue-900 opacity-5"></div>

        <div className="relative max-w-7xl mx-auto w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center">

          <span className='animate-pulse' style={{ animationDuration: '4s' }}>
            <div className="inline-block mb-5 ">
              <span className="font-medium text-white rounded-lg p-4 bg-blue-600">Soluções digitais</span>
              {/* <Image
                src={getImgPath("/images/logo/youtec-logo.svg")}
                alt="logo"
                width={150}
                height={20}
                style={{ width: '1000', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
              /> */}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight ">

              <span className="text-white block mt-2">Construindo experiências digitais que conectam</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Sistemas Web Sites, Apps, Marcas com performance e design com a sua identidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href='#contato' className='group inline-flex items-center gap-2 py-3 px-6 rounded-md bg-primary text-white hover:bg-blue-700 transition duration-300'>
                Começar agora
              </Link>
              <Link href='#portfolio' className='inline-flex items-center gap-2 py-3 px-6 rounded-md border border-border text-midnight_text dark:text-white hover:border-primary transition duration-300'>
                Ver portfólio
              </Link>
            </div>
          </span>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#services" className="">
            <div className="inline-flex flex-col items-center text-white">
              <span className="text-xs sm:text-sm mb-2">Veja mais</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </a>

        </div>
      </section>
    </>
  )
}

export default Hero
