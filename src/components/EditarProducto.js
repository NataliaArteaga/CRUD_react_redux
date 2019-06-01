import React, { Component } from 'react'
import {connect} from "react-redux"
import {editarProductos} from "../actions/productosActions"
import { mostrarProductos } from './../actions/productosActions';

class EditarProducto extends Component {
    state={nombre: "", precio:0};

    changeInput =(e)=> {
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
        this.props.mostrarProductos()
        const {productos}=this.props;
        const productoModificar=productos.filter(producto=> producto.id==this.props.match.params.id)
        console.log(productos,productoModificar[0].nombre)
        this.setState({ ["nombre"] : productoModificar[0].nombre,["precio"]:productoModificar[0].precio});
    }
    

    guardarCambios=(id)=>{
        console.log("Guardando")
        this.props.editarProductos(id,this.state).then(()=>{this.props.history.push('/');})
    }
    
    render() {
        return (
            <div>
               <h2>Editar Producto</h2> 
               <div>
                <label htmlFor="">Nombre</label>
                <input className="form-control" value={this.state.nombre} onChange={this.changeInput}  name="nombre" type="text"></input>
               </div>
               <div>
                <label htmlFor="">Precio</label>
                <input className="form-control" value={this.state.precio} onChange={this.changeInput} name="precio" type="text"></input>
               </div>

               <div>
                   <br></br>
                   <button  className="btn btn-success btn-lg" onClick={()=>{this.guardarCambios(this.props.match.params.id)}} >Actualizar</button>
               </div>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
      productos: state.productos.productos
    }
}

export default connect(mapStateToProp, {editarProductos, mostrarProductos}) (EditarProducto);