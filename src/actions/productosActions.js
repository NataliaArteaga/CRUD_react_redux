import { MOSTRAR_PRODUCTOS, CREAR_PRODUCTOS, ELIMINAR_PRODUCTOS, EDITAR_PRODUCTOS } from "./types";
import axios from "axios";

export const mostrarProductos=()=>async dispatch =>{
    // return {type: MOSTRAR_PRODUCTOS, payload:[]};
    const respuesta= await axios.get('https://my-json-server.typicode.com/NataliaArteaga/productosBootcamp/productos/');
    console.log(respuesta)

    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const eliminarProductos=(id)=>async dispatch =>{
    const respuesta = await axios.delete('https://my-json-server.typicode.com/NataliaArteaga/productosBootcamp/productos/'+id);
    
    dispatch({
        type: ELIMINAR_PRODUCTOS,
        payload: id
    })
}

export const editarProductos=(id, producto)=>async dispatch =>{
    const respuesta = await axios.put('https://my-json-server.typicode.com/NataliaArteaga/productosBootcamp/productos/'+id, producto);
    
    dispatch({
        type: EDITAR_PRODUCTOS,
        payload: id
    })
}



export const crearProducto=(producto)=>async dispatch =>{
    // return {type: MOSTRAR_PRODUCTOS, payload:[]};
    const respuesta= await axios.post('https://my-json-server.typicode.com/NataliaArteaga/productosBootcamp/productos', producto);
    console.log(respuesta)
    dispatch(
    {
        type: CREAR_PRODUCTOS,
        payload: respuesta.data
    }
    )
}