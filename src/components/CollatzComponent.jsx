import React, { Component } from 'react'

export default class CollatzComponent extends Component {

    state={
        tabla:[]
    }




    generarTablaCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        while (numero > 1) {
            aux.push(numero);   
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = 3 * numero + 1;
            }   
        }
        aux.push(numero);
        this.setState({
            tabla: aux
        })
    }
    componentDidMount = () => {
        this.generarTablaCollatz();
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.numero !== this.props.numero) {
            this.generarTablaCollatz();
        }
    }

  render() {

    return (
      <div>
            <h1>Tabla Collatz Routing</h1>
            <h3 style={{color:"blue"}}>
                Número: {this.props.numero}
            </h3>
            <ul>
                {
                    this.state.tabla.map((num, index) => {
                        return (<li key={index}>{num}</li>)
                    })
                }
            </ul>
        </div>
    )
  }
}
