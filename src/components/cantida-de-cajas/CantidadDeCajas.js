import React from "react";

export default function CantidadDeCajas({MensajeDeResultadoNull, cajas, horarios}) {
  return (
    <div className="cajas-informacion bg-secondary">
      <div className="cajas-informacion__cantidad-cajas">
        <div className="cantidad-cajas__titulo">Cantidad de cajas:</div>
        <span className="cantidad-cajas__items">{cajas}</span>
      </div>
      <div className="cajas-informacion__titulo">Horarios Ocupados</div>
      <div className="cajas-informacion__cantidad-horarios">
        {horarios.map((horario, indice) =>
          horario.activo ? (
            <span className="cantidadhorarios__item" key={indice}>
              pedido tomado {horario.hora}
            </span>
          ) : null
        )}

        {MensajeDeResultadoNull}
      </div>
    </div>
  );
}
