import React, { Component } from "react";

//Componentes de clase ES6
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    //En componentes de clase hay que bindear el this para que aparezca en los métodos
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    //console.log("Sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    //console.log("Restar");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase en ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

//Eventos en componentes de clase ES7
//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow function para evitar el bind, ya que heredan del contexto
  sumar = (e) => {
    //console.log("Sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    //console.log("Restar");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase en ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

//Componente inicio:
/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const Boton = (props) => {
  <button onClick={props.myOnClick}>Botón hecho componente</button>;
}; */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);
//Eventos nativos y sinteticos
export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Más sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, este es un parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola, este es un parámetro desde un evento")
          }
        />
        Se le cambia el nombre al evento y se coloca dentro del componente como una props */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola, este es un parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
