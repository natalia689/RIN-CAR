import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Inicio from './inicio';
import Login from './login';
import loginCliente from './loginCliente';
import menuCliente from './menuCliente';
import panelDueño from './panel_dueño';
import Registro from './registro';
import registroCliente from './registroCliente';
import registroRin from './registroRin';
import EditarCliente from './editarCliente'
import RegistroUsuarioAdmin from "./registroUsuarioAdmin";




class Rutas extends React.Component {

    state = { redirect: null };

    render(){
        
        return(
            
            <BrowserRouter>
                    {/* <Redirect to="/index"></Redirect>  */}
                <Switch>
                     
                    <Route path="/index" component={Inicio}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/dueño" component= {panelDueño}></Route>
                    <Route exact path="/registro" component= {Registro}></Route>
                    <Route exact path="/loginCliente" component= {loginCliente}></Route>
                    <Route exact path="/registrocliente" component= {registroCliente}></Route>
                    <Route exact path="/menuCliente" component= {menuCliente}></Route>
                    <Route exact path="/registroRin" component= {registroRin}></Route>
                    <Route exact path="/perfilCliente" component= {EditarCliente}></Route>
                    <Route exact path="/registroAdminCliente" component= {RegistroUsuarioAdmin}></Route>
                    
                    

                </Switch>
                
            </BrowserRouter>
        )
    }

}

export default Rutas