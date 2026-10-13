import React, { Component } from 'react'

export default class MenuComponent extends Component {
    render() {
        return (
        <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/tabla/21">Tabla multiplicar 21</a>
                </li>
                <li>
                    <a href="/tabla/14">Tabla multiplicar 14</a>
                </li>
                <li>
                    <a href="/tabla/7">Tabla multiplicar 7</a>
                </li>  
                <li>
                    <a href="/collatz/21">Collatz 21</a>
                </li>              
            </ul>
        </div>
        )
    }
}
