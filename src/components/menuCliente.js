import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

const cookies= new Cookies();

class menuCliente extends React.Component{
    cerrarsesion=()=>{
        cookies.remove('usuarioIngreso', {path:"/"});
        cookies.remove('contrasenhaIngreso', {path:"/"});
        window.location.href='/loginCliente';
    }
    componentDidMount(){
        if(!cookies.get('usuarioIngreso')){
            window.location.href="/loginCliente"
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
                    <Link to="/perfilCliente">
                        <button type="button" className="btn btn-primary" id="btnRin">Perfil</button>
                    </Link>
                </nav>
                
            </div>
        )
    }
} export default menuCliente