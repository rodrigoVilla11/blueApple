import React from "react";

const Philosophy = () => {
  return (
    <div className="w-full lg:h-96 bg-white flex flex-col justify-center items-center gap-4 p-10" id="philosophy">
      <h3 className="font-bold text-4xl text-blue-darkBlueApple pb-10">
        Nuestra Filosofia
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h5 className="text-2xl text-blue-blueApple">Deliverada y analitica</h5>
        <p className="text-black text-md max-w-60">
          Nos impulsamos 100% por los datos. Con informes del desempeño
          periódicos, auditorias semanales, y mas
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h5 className="text-2xl text-blue-blueApple">Rentabilidad</h5>
        <p className="text-black text-md max-w-60">
          Es NUESTRA responsabilidad ayudarte a que tu producto esté en la mayor
          cantidad de personas posible, de la manera mas rápida y rentable
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h5 className="text-2xl text-blue-blueApple">Adaptabilidad</h5>
        <p className="text-black text-md max-w-60">
          Navegamos con facilidad por el mundo en línea y reaccionamos con
          rapidez al panorama cambiante de las redes sociales
        </p>
      </div>
      </div>
    </div>
  );
};

export default Philosophy;
