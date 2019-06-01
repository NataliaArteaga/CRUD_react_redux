import React from 'react';
import {Provider} from "react-redux"
import store from "./store"
import Productos from "./components/Productos"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import NoRuta from "./components/NoRuta"
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

class App extends React.Component {
 render() { 
   return   (<Provider store={store}>
     <div className="container">
       <center>
     <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Productos}></Route>
       <Route exact path="/agregarproducto" component={NuevoProducto}></Route>
       <Route exact path="/editarproducto/:id" component={EditarProducto}></Route>
       <Route  component={NoRuta}></Route>
       </Switch>
       </BrowserRouter>
       </center>
       </div>
   </Provider>);
  
}
}

export default App;
