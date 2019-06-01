import React, { Component } from 'react'
import {connect} from "react-redux";
import {mostrarProductos} from "../actions/productosActions"
import Producto from './Producto';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Productos extends Component {
    componentDidMount(){
        this.props.mostrarProductos();
        
    }
    render() {
        const {productos}=this.props;
        return (
            <div>
                <h1>Productos</h1>
                {productos.map((producto, index)=>{
                    return (<Producto key={index} producto={producto}/>)
                })}
                <Link to="/agregarproducto">
                    <br></br>
                <Button type="button" className="btn btn-success btn-lg">Agregar Producto</Button>
                </Link>
            </div>
        )
    }
}

const mapStateToProp=(state)=>{
    return{
        productos: state.productos.productos
    }
}
export default connect(mapStateToProp,{mostrarProductos})(Productos);
