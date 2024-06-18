import React from "react";

const Process = () => {
  return (
    <div className="w-full h-auto bg-gradient-blueApple flex justify-center items-center gap-4 p-24 text-blue-blueApple" id="services">
      <div className="bg-white rounded-xl w-2/5 h-96 flex flex-col justify-start items-center text-center gap-4 p-10">
        <div className="bg-gradient-blueApple h-16 w-16 rounded-xl text-white text-6xl font-bold flex justify-center items-center">
          1
        </div>
        <h4 className="font-bold text-2xl">14 dias - Optimizacion</h4>
        <p className="text-sm">
          Todo lo que necesitamos de su empresa son fotos y como luce su cliente
          ideal
        </p>
        <p className="text-sm">
          Aquí testeamos creativos y la respuesta de la audiencia con el menor
          presupuesto
        </p>
      </div>
      <div className="bg-white rounded-xl w-2/5 h-96 flex flex-col justify-start items-center text-center gap-4 p-10">
        <div className="bg-gradient-blueApple h-16 w-16 rounded-xl text-white text-6xl font-bold flex justify-center items-center">
          2
        </div>
        <h4 className="font-bold text-2xl">30 días - Nuevos creativos</h4>
        <p className="text-sm">
          Luego lanzamos y probamos los anuncios de mayor conversión
        </p>
        <p className="text-sm">
          Si se obtiene un correcto funcionamiento, continuamos con mayor
          certeza
        </p>
        <p className="text-sm">
          Todo lo que no haya funcionado se descarta de forma inmediata
        </p>
      </div>
      <div className="bg-white rounded-xl w-2/5 h-96 flex flex-col justify-start items-center text-center gap-4 p-10">
        <div className="bg-gradient-blueApple h-16 w-16 rounded-xl text-white text-6xl font-bold flex justify-center items-center">
          3
        </div>
        <h4 className="font-bold text-2xl"> 90 días - Crecimiento</h4>
        <p className="text-sm">
          Una vez encontrado el sistema que de los mejores resultados, doblamos
          la inversión en la fórmula ganadora
        </p>
        <p className="text-sm">
          Por ende, escalamos agresivamente mientras maximizamos las ganancias
        </p>
      </div>
    </div>
  );
};

export default Process;
