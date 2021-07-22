// import React, { Component } from "react";

//Componente funcional expresado
const Componente = (props) => <h3>{props.msg}</h3>;

//Componente funcional declarado
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

//Componente por clase
/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

export default Componente;
