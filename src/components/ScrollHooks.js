import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  //Acá se repite solo cuando el scrollY se modifica
  useEffect(() => {
    //console.log("Moviendo el scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  //Si quieres solo en fase de montaje se deja array vacío
  useEffect(() => {
    //console.log("Fase de Montaje");
  }, []);

  //Acá se actualiza cada vez que cambia cualquier cosa
  useEffect(() => {
    //console.log("Fase de Actualización");
  });

  //La fase desmontaje para desuscribirte de servicios, limpiar variables de tiempo, interrumpir solicitudes a API's, etc
  useEffect(() => {
    return () => {
      //console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll y scroll del navegador {scrollY}px</p>
    </>
  );
}
