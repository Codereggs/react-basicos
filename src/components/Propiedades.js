import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " " + props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

//Esta es una propiedad que se puede cargar por defecto - Luego se puede utilizar solamente con props.
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};
//Libreria prop-type (npm i -S prop-types) Es para validar que esté la propiedad
Propiedades.propTypes = {
  //Se puede validar así
  cadena: PropTypes.string,
  //O se puede colocar como requerido
  numero: PropTypes.number.isRequired,
};
