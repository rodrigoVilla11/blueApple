'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Partners = () => {
  const logos = [
    { src: "/logo-notion.png", alt: "Notion" },
    { src: "/logo_loom.png", alt: "Loom" },
    { src: "/logo-ZapSign.png", alt: "ZapSign" },
    { src: "/logo-discord.png", alt: "Discord" },
    { src: "/logo-calendly.png", alt: "Calendly" },
    { src: "/logo-zoom.jpeg", alt: "Zoom" },
    { src: "/logo-meta.jpeg", alt: "Meta" },
    { src: "/logo-webflow.png", alt: "Webflow" },
    { src: "/logo-premier.png", alt: "Premier" },
    { src: "/logo-miro.png", alt: "Miro" },
    { src: "/logo-hopin.png", alt: "Hopin" },
  ];

  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center text-blue-blueApple font-bold gap-4 pb-10">
      <Image
        alt="logo"
        src="/logo-blueApple-onlyApple.png"
        width={130}
        height={130}
      />

      <h4 className="font-bold text-lg">Trusted by +20 partners</h4>

      <div className="hidden lg:flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, index) => (
          <Image key={index} alt={logo.alt} src={logo.src} width={100} height={100} />
        ))}
      </div>

      <div className="lg:hidden w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[150px]">
                <Image alt={logo.alt} src={logo.src} width={100} height={100} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
