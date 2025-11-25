import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
              <Link href='/' className='md:block flex justify-center'>
                <Image
                  src={getImgPath("/images/logo/youtec-logo.svg")}
                  alt="logo"
                  width={100}
                  height={20}
                  style={{ width: '700', height: 'auto' }}
                  quality={100}
                  className='dark:block hidden'
                />
              </Link>
              <h2 className='text-white py-10 text-[40px] leading-tight font-bold'>
                Entre em contato conosco
              </h2>
              {/* <Link
                href='#'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none'>
                Get Started
              </Link> */}
            </div>
          </div>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Fale conosco
              </span>
              <div className='pb-5 sm:block flex'>
                <p className='text-base font-bold text-white'>Telefone</p>
                <span
                  className='text-2xl text-white/50 hover:text-white'>
                  +55 (21) 98634-2478
                </span>
              </div>
              <div className='sm:block flex items-center gap-3'>
                <p className='text-base font-bold text-white'>Email</p>
                <Link
                  href='mailto:curtytech@gmail.com'
                  className='text-2xl text-white/50 hover:text-white'>
                  curtytech@gmail.com
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-[1.875rem]'>
                  <li className='group'>
                    <Link href='https://www.facebook.com/phelipe.curty' className=''>
                       <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-facebook transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.instagram.com/phelipecurty/' className=''>
                       <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-instagram transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.linkedin.com/in/phelipecurty' target="_blank">
                      <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-linkedin-in transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://wa.me/5521986342478' target="_blank">
                      <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-whatsapp transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.github.com/curtytech' target="_blank">
                      <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-github transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.youtube.com/@Phelipe-Curty' target="_blank">
                      <span className='p-1 bg-blue-900 rounded-lg hover:bg-blue-700'>
                        <i className="fa-brands fa-youtube transition-colors"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            {/* <div className='md:w-3/4 w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-4 inline-block text-2xl'>
                Subscribe newsletter
              </span>
              <p className='text-MistyBlue text-base pb-7 text-white/50'>
                To be updated with all the latest trends and product
              </p>
              <form className='newsletter-form flex rounded-lg sm:w-full w-3/4 sm:mx-0 mx-auto'>
                <input
                  type='email'
                  placeholder='Email*'
                  className='p-4 text-base border-transparent rounded-s-lg rounded-e-none! outline-0 focus:border-primary dark:focus:border-primary w-[calc(100%_-_137px)] flex bg-white dark:bg-midnight_text dark:text-white dark:border-solid dark:border dark:border-border_color'
                />
                <button
                  type='submit'
                  className='p-[0.625rem] text-base font-medium bg-primary text-white border-none cursor-pointer rounded-e-lg outline-0 text-center w-[8.5625rem] hover:bg-blue-700 hover:shadow-none'>
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#services' className='hover:text-primary'>
                Services
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>
                Portfolio
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/blog' className='hover:text-primary'>
                Blog
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-primary'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
            © 2025 <a href="https://www.phelipecurty.vercel.app" target="_blank" className="hover:text-primary">Phelipe Curty</a>
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
