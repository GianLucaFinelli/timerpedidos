import React, { useState } from "react";
import Horarios from "./horarios/Horarios";

// import Caja from "./components/caja/Caja";
import CajaDeHorarios from "./components/horario/CajaDeHorarios";
import CantidadDeCaja from './components/cantida-de-cajas/CantidadDeCajas';

export default function App() {
  const [cajas, setCajas] = useState(8);
  const [horarios, setHorarios] = useState(Horarios(25, 8, 0));

  function MensajeDeResultadoNull() {
    var count = 0;
    horarios.map((horario) => {
      if(horario.activo){
        count++;
      }
    })
    return count > 0 ? null : <span clasName="text-center">Sin pedidos seleccionados</span>
  }

  return (
    <div className="timer-contenedor bg-secondary">
      <div className="bg-grey br-left">
        <CajaDeHorarios
          horarios={horarios}
          setHorarios={setHorarios}
          cajas={cajas}
          setCajas={setCajas}
        ></CajaDeHorarios>
      </div>
      <CantidadDeCaja mensaje={MensajeDeResultadoNull()} cajas={cajas} horarios={horarios}/>
    </div>
  );
}
