import React from 'react'
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom'
import './css/dueño.css';


const cookies= new Cookies();
class panelDueño extends React.Component{
    cerrarsesion=()=>{
        cookies.remove('usuarioIngreso', {path:"/"});
        cookies.remove('contrasenhaIngreso', {path:"/"});
        window.location.href='/login';
    }
    componentDidMount(){
        if(!cookies.get('usuarioIngreso')){
            window.location.href="/login"
        }
    }
    render(){
        console.log('usuarioIngreso: '+cookies.get('usuarioIngreso'));
        console.log('contrasenhaIngreso: '+cookies.get('contrasenhaIngreso'));
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <p className="nombreapp">RinesApp</p>
                    
                    <button type="button" className="btn btn-light" id="btnlogout"onClick={()=>this.cerrarsesion()}>Cerrar sesion</button>
                    
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-3">
                        </div>
                         
                        <div className="col-6">
                            <div className="card" id="cardorg">
                                <div className="card-body" id="cardbodyorg">
                                <Link to="/registro">
                                    <button type="button" className="btn btn-primary" id="btnRegistrar">Registrar admin</button>
                                </Link>
                                <Link to="/registroRin">
                                    <button type="button" className="btn btn-primary" id="btnRin">Registrar Rin</button>
                                </Link>
                                <Link to="/registroCliente">
                                    <button type="button" className="btn btn-primary" id="btnRin">Registrar Cliente</button>
                                </Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default panelDueño