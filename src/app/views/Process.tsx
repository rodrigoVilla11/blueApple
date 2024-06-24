'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';

const Process = () => {
  const steps = [
    {
      step: 1,
      title: '14 dias - Optimizacion',
      description1: 'Todo lo que necesitamos de su empresa son fotos y como luce su cliente ideal',
      description2: 'Aquí testeamos creativos y la respuesta de la audiencia con el menor presupuesto',
    },
    {
      step: 2,
      title: '30 días - Nuevos creativos',
      description1: 'Luego lanzamos y probamos los anuncios de mayor conversión',
      description2: 'Si se obtiene un correcto funcionamiento, continuamos con mayor certeza',
      description3: 'Todo lo que no haya funcionado se descarta de forma inmediata',
    },
    {
      step: 3,
      title: '90 días - Crecimiento',
      description1: 'Una vez encontrado el sistema que de los mejores resultados, doblamos la inversión en la fórmula ganadora',
      description2: 'Por ende, escalamos agresivamente mientras maximizamos las ganancias',
    },
  ];

  return (
    <div className="w-full h-auto bg-gradient-blueApple flex flex-col justify-center items-center gap-4 p-4 sm:p-24 text-blue-blueApple" id="services">
      <div className="hidden lg:flex flex-row justify-center items-center gap-4 w-full">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl sm:w-2/5 sm:h-96 flex flex-col justify-start items-center text-center gap-4 p-4 sm:p-10">
            <div className="bg-gradient-blueApple h-16 w-16 rounded-xl text-white text-6xl font-bold flex justify-center items-center">
              {step.step}
            </div>
            <h4 className="font-bold text-2xl">{step.title}</h4>
            <p className="text-sm">{step.description1}</p>
            <p className="text-sm">{step.description2}</p>
            {step.description3 && <p className="text-sm">{step.description3}</p>}
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
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl h-96 flex flex-col justify-start items-center text-center gap-4 p-8">
                <div className="bg-gradient-blueApple h-16 w-16 rounded-xl text-white text-6xl font-bold flex justify-center items-center">
                  {step.step}
                </div>
                <h4 className="font-bold text-2xl">{step.title}</h4>
                <p className="text-sm">{step.description1}</p>
                <p className="text-sm">{step.description2}</p>
                {step.description3 && <p className="text-sm">{step.description3}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Process;
