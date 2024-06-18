import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center bg-gradient-blueApple text-sm p-20" id="aboutUs">
      <h2 className="text-3xl">Sobre Nosotros</h2>
      <div className="flex justify-center items-center p-10">
        <Image
          alt="first-pic"
          src="/first-pic.jpg"
          width={462}
          height={500}
          className="rounded-lg"
        />
        <div className="w-1/2 flex flex-col justify-center items-center gap-4    text-center ">
          <p className="w-2/3">
            Ponemos a las personas al frente de todo lo que hacemos. Abordamos
            la estrategia con practicidad, humildad y empatía.
          </p>
          <p className="w-2/3">
            Al empezar, ambos pasamos por el mismo dolor por el que pasa todo
            propietario de un negocio: descubrir cómo funcionan las redes
            sociales.
          </p>
          <p className="w-2/3">
            Cosas como &quot;Meta Ads&quot; o &quot;Usar Instagram para darse a conocer&quot; nos
            parecieron una pesadilla al principio.Es exactamente por eso que
            decidimos convertirnos en profesionales en esto.
          </p>
          <p className="w-2/3">
            Nos enorgullecemos de nuestra capacidad de pensar de forma
            innovadora y proponer soluciones creativas que nos diferencian de la
            competencia.
          </p>
          <p className="w-2/3">
            Nuestra pasión por lo que hacemos es evidente en cada proyecto que
            emprendemos y estamos comprometidos a brindar el más alto nivel de
            servicio y resultados a nuestros clientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
