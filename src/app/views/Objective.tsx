'use client'
import React from 'react';
import { Image } from '@nextui-org/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';


const Objective = () => {
  const services = [
    {
      title: 'Paid Media',
      subtitle: 'Consiga mas potenciales clientes',
      description: 'Obtenga una fuente predecible de nuevos clientes cada mes mediante la publicidad digital.',
      image: '/megafono.png',
    },
    {
      title: 'Content And Design',
      subtitle: 'Impulsa tu imagen',
      description: 'Estrategia de contenido para una marca solida, con mas alcance y que genere confianza',
      image: '/content-manager.png',
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="text-2xl text-black text-center pt-4">
          2 Servicios,
          <br /> 1 Objetivo:
        </p>
        <h3 className="text-2xl font-bold text-blue-darkBlueApple text-center">
          aumentar tus ingresos
        </h3>
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-4 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-blueApple rounded-xl flex-1 h-72 flex flex-col justify-center items-center text-center gap-4 m-4 p-4"
          >
            <div className="flex flex-col justify-center items-center">
              <Image alt="logo" src={service.image} width={80} height={80} />
              <h3 className="text-2xl">{service.title}</h3>
            </div>
            <h4 className="font-bold">{service.subtitle}</h4>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-blueApple rounded-xl h-72 flex flex-col justify-center items-center text-center gap-4 p-8">
                <div className="flex flex-col justify-center items-center">
                  <Image alt="logo" src={service.image} width={80} height={80} />
                  <h3 className="text-2xl">{service.title}</h3>
                </div>
                <h4 className="font-bold">{service.subtitle}</h4>
                <p className="text-sm">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Objective;
