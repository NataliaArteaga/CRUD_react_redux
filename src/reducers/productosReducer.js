import {
    MOSTRAR_PRODUCTOS, CREAR_PRODUCTOS, ELIMINAR_PRODUCTOS, EDITAR_PRODUCTOS
} from "../actions/types";
const estadoInicial = {
    productos: []
}
export default function (state=estadoInicial, action) {

    switch (action.type) {

        case MOSTRAR_PRODUCTOS:
            return {...state, productos: action.payload};
            break;

        case ELIMINAR_PRODUCTOS:
              let product=state.productos.filter(producto=>
                producto.id!==action.payload
            )
          return {...state, productos:product};
          break;

          case EDITAR_PRODUCTOS:
            let actuales=state.productos;
                       actuales.filter((item)=>{
                            if(action.payload == item.id){
                                item.id=action.payload.id
                                item.name = action.payload.nombre
                                item.gender = action.payload.precio
                                }
                            return item           
                        })
                            this.setState({productos:actuales})
                    
            return {...state, productos:actuales};
            break;

          case CREAR_PRODUCTOS:
            return {...state, productos:[...state.productos, action.payload]};
          break;

        default:
            return state;
            break;
    }
}