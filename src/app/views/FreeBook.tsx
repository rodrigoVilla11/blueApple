'use client'
import { Button } from "@nextui-org/react";
import React from "react";

const FreeBook = () => {
    const handleClick = () => {
        window.open('https://calendly.com/fran-brandalise', '_blank');
      };

  return (
    <div className="lg:h-screen w-full flex flex-col justify-center items-center bg-gradient-blueApple text-sm md:p-8 gap-10" id="workWithUs">
      <h3 className="text-white text-4xl text-bold p-8">
        Programe su consulta gratuita de 15 minutos hoy
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:p-4 ">
        <div className="flex flex-col w-full lg:h-72 border-2 border-white md:rounded-xl p-4 md:p-8 bg-white text-blue-darkBlueApple ">
          <h5 className=" text-3xl text-bold mb-4">
            Esta demo call es perfecta para...
          </h5>
          <ul className="text-md">
            <li>
              -Empresas que buscan tener un{" "}
              <span className="font-bold">
                flujo constante de nuevos clientes
              </span>{" "}
              cada mes.
            </li>
            <li>
              -Empresas que buscan convertir su sitio web actual en un formato
              de{" "}
              <span className="font-bold">
                embudo optimizado y de alta calidad
              </span>
            </li>
            <li>
              -Empresas que buscan{" "}
              <span className="font-bold">
                comprender su mayor potencial de ingresos{" "}
              </span>
              con embudos y optimización del flujo de clientes
            </li>
            <li>
              -Empresas que buscan{" "}
              <span className="font-bold">maximizar sus tasas de agendas</span>{" "}
              y el{" "}
              <span className="font-bold">
                alcance a nuevos potenciales clientes
              </span>
            </li>
            <li>
              -Empresa que busca una{" "}
              <span className="font-bold">agencia confiable</span> que pueda
              hacer de su{" "}
              <span className="font-bold">empresa una prioridad</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:h-72 border-2 border-white md:rounded-xl p-4 md:p-8 bg-white text-blue-darkBlueApple mb-10 md:mb-0">
          <h5 className="text-3xl text-bold mb-4">Recibirás</h5>
          <ul className="text-md">
            <li>
              -Una {" "}
              <span className="font-bold">
                auditoría detallada y personalizada
              </span>{" "}
              de su estrategia de crecimiento actual
            </li>
            <li>
            -Un conjunto  {" "}
              <span className="font-bold">
              probado de estrategias
              </span>para aplicar a sus ofertas de marketing actuales
            </li>
            <li>
            -Dominio del crecimiento en Facebook e Instagram,{" "}
              <span className="font-bold">
              esquema que cubre tácticas líderes en la industria {" "}
              </span>
              para hacer crecer su negocio
            </li>
            
          </ul>
        <Button className='font-bold bg-blue-blueApple text-white mt-8' onClick={handleClick}>BOOK A FREE DEMO</Button>

        </div>
      </div>
    </div>
  );
};

export default FreeBook;
