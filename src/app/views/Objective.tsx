import React from "react";

const Objective = () => {
  return (
    <div className="w-full h-96 bg-white flex justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-black">
          2 Servicios,
          <br /> 1 Objetivo:
        </p>
        <h3 className="text-2xl font-bold text-blue-darkBlueApple">
          aumentar tus ingresos
        </h3>
      </div>
      <div className="bg-gradient-blueApple rounded-xl w-1/5 h-72 flex flex-col justify-center items-center text-center gap-4">
        <div>
          <p>logo</p>
          <h3 className="text-2xl">Paid Media</h3>
        </div>
        <h4 className="font-bold">Consiga mas potenciales clientes</h4>
        <p className="text-sm">
          Obtenga una fuente predecible de nuevos clientes cada mes mediante la
          publicidad digital.
        </p>
      </div>
      <div className="bg-gradient-blueApple rounded-xl w-1/5 h-72 flex flex-col justify-center items-center text-center gap-4">
        <div>
          <p>logo</p>
          <h3 className="text-2xl">Content And Design</h3>
        </div>
        <h4 className="font-bold">Impulsa tu imagen</h4>
        <p className="text-sm">
          Estrategia de contenido para una marca solida, con mas alcance y que
          genere confianza
        </p>
      </div>
    </div>
  );
};

export default Objective;