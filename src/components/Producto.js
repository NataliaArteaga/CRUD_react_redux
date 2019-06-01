import React, { Component } from 'react'
import {connect} from "react-redux";
import {eliminarProductos} from "../actions/productosActions"
import {editarProductos} from "../actions/productosActions"
import {Link} from 'react-router-dom'
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap'

class Producto extends Component {

eliminarProducto=(id)=>{
        this.props.eliminarProductos(id)
    }

editarProducto=(id)=>{
    this.props.editarProductos(id)
}

    render() {
        const {producto}=this.props;
        return (
            
            <ListGroup as="ul">
                
            <ListGroup.Item as="li">
                <div className="row">
                    <div className="col">{producto.nombre}
            </div>
            <div className="col">{producto.precio}
            </div>
            <div className="col">
            <Link to={`/editarproducto/${producto.id}`}>
                <button type="button" className="btn btn-primary btn-lg">Editar</button>
                </Link>
                </div>
                <div className="col"> 
            <button className="btn btn-danger btn-lg" onClick={()=>{ this.eliminarProducto(producto.id)}}>Eliminar</button>
            </div>
            </div>
            </ListGroup.Item>
            </ListGroup>
            
                
        )
    }
}

const mapStateToProp=(state)=>{
    return {
        productos: state.productos.productos
    }
}

export default connect (mapStateToProp,{eliminarProductos})(Producto)
