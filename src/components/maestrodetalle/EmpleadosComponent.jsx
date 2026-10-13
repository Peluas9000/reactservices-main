import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
export default class EmpleadosComponent extends Component {
    componentDidMount = () => {
        this.loadEmpleados();
    }

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let id = this.props.iddepartamento;
        let request = "api/empleados/empleadosdepartamento/" + id;
        axios.get(Global.urlApiEmpleados + request).then((response) => {
            console.log("Leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        //oldProps son los valores anteriores a props
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento);
        //SOLAMENTE ACTULIZAMOS STATE SI PROPS HA CAMBIADO
        if (oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
    }

    render() {
        return (
        <div>
            <h1>Empleados Component</h1>
            <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return (<li key={index}>
                            {emp.apellido}, Oficio: {emp.oficio}
                        </li>)
                    })
                }
            </ul>            
        </div>
        )
    }
}
