import React, { createRef, useRef } from "react";

export default function Referencias() {
  //Create ref para class component, con hooks useRef
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
    /*  const $menu = document.getElementById("menu");
    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    } */
  };

  return (
    <>
      <h2>Referencias</h2>

      <nav style={{ display: "none" }} ref={refMenu}>
        <a href="#1">Sección 1</a>
        <br />
        <a href="#2">Sección 2</a>
        <br />
        <a href="#3">Sección 3</a>
        <br />
        <a href="#4">Sección 4</a>
        <br />
        <a href="#5">Sección 5</a>
        <br />
      </nav>
      <button onClick={handleToggleMenu} ref={refMenuBtn}>
        Menú
      </button>
    </>
  );
}
