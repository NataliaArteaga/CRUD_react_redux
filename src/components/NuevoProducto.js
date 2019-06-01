import React, { Component } from 'react'
import {connect} from "react-redux"
import {crearProducto} from "../actions/productosActions"

class NuevoProducto extends Component {
    state={nombre: "", precio:0};

    changeInput =(e)=> {
        this.setState({[e.target.name]:e.target.value})
    }

    guardarCambios=()=>{
        console.log("Guardando")
        this.props.crearProducto(this.state)
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
               <h2>Agregar Producto</h2> 
               <div>
                <label htmlFor="">Nombre</label>
                <input className="form-control" onChange={this.changeInput} name="nombre" type="text"></input>
               </div>
               <div>
                <label htmlFor="">Precio</label>
                <input className="form-control" onChange={this.changeInput} name="precio" type="text"></input>
               </div>

               <div>
                   <br></br>
                   <button className="btn btn-primary btn-lg" onClick={this.guardarCambios} >Agregar Producto</button>
               </div>
            </div>
        )
    }
}

export default connect(null, {crearProducto}) (NuevoProducto);