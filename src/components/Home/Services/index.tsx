import React from 'react'
// import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
// import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Nossos Serviços
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Temos serviços especializados para atender às necessidades do seu negócio.
        </h2>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
              <Image
                src={item.icon}
                alt='Service Box'
                width={0}
                height={0}
                className='w-15 h-15 bg-no-repeat inline-block bg-contain'
              />
              <h3 className='max-w-44 mx-auto text-2xl font-bold'>
                {item.title}
              </h3>
              <p className='dark:text-white/50 text-base font-normal'>
                {item.description}
              </p>         
            </div>
          ))}

          <div
            data-aos='fade-up'
            data-aos-delay={'200'}
            data-aos-duration='1000'
            data-aos-offset='300'
            className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
            <Image
              src={'images/services/social_network.svg'}
              alt='Service Box'
              width={80}
              height={80}
              className='w-24 h-24 bg-no-repeat inline-block bg-contain'
            />
            <h3 className='max-w-44 mx-auto text-2xl font-bold'>
              {'Midias Sociais'}
            </h3>
            <p className='dark:text-white/50 text-base font-normal'>
              {'Criamos e gerenciamos perfis nas principais mídias sociais, conectando seu público-alvo.'}
            </p>           
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={'200'}
            data-aos-duration='1000'
            data-aos-offset='300'
            className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
            <Image
              src={'images/services/youtec_design.svg'}
              alt='Service Box'
              width={80}
              height={80}
              className='w-24 h-24 bg-no-repeat inline-block bg-contain'
            />
            <h3 className='max-w-44 mx-auto text-2xl font-bold'>
              {'Design'}
            </h3>
            <p className='dark:text-white/50 text-base font-normal'>
              {'Criamos designs únicos e funcionais de acordo com a identidade visual do seu negócio. '}
            </p>        
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={'200'}
            data-aos-duration='1000'
            data-aos-offset='300'
            className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
            <Image
              src={'images/services/youtec_api.svg'}
              alt='Service Box'
              width={80}
              height={80}
              className='w-24 h-24 bg-no-repeat inline-block bg-contain'
            />
            <h3 className='max-w-60 mx-auto text-2xl font-bold'>
              {'APIs, Integrações e Banco de dados'}
            </h3>
            <p className='dark:text-white/50 text-base font-normal'>
              {'Desenhamos e implementamos APIs e integrações para conectar seus sistemas e bancos de dados.'}
            </p>         
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
