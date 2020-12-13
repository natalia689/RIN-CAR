import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmericanSignLanguageInterpreting, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { findAllByPlaceholderText } from '@testing-library/react';
import { Link } from 'react-router-dom'

class RegistroUsuarioAdmin extends Component{
    popup= ()=>{
        alert("Usuario Registrado ")
    }
    render(){
        return(
            <div>
            <nav className="navbar navbar-dark bg-dark">
                    <h3 className="text-light">RinesApp</h3>    
                </nav> 
            <div class="container"> 
            <div class="col-5">
                            <div>
                                <h1>Registrar Usuario</h1>
                                <div className="form-group">
                                    <label htmlFor="nombreCompleto">Nombre completo:</label>
                                    <input className="form-control" type="text" name="nombreCompleto" id="nombreCompleto"  value="" />
                                    <br />
                                    <label htmlFor="direccion">Dirección:</label>
                                    <input className="form-control" type="text" name="direccion" id="direccion"  value="" />
                                    <br />
                                    <label htmlFor="telefono">Telefono:</label>
                                    <input className="form-control" type="number" name="telefono" id="telefono"  value="" />
                                    <br />
                                    <label htmlFor="email">Email:</label>
                                    <input className="form-control" type="email" name="email" id="email"  value="" />
                                    <br />
                                    <label htmlFor="usuarioIngreso">Usuario </label>
                                    <input className="form-control" type="text" name="usuarioIngreso" id="usuarioIngreso"  value="" />
                                    <br />
                                    <label htmlFor="contrasenhaIngreso">Contraseña [*]</label>
                                    <input className="form-control" type="password" name="contrasenhaIngreso" id="contrasenhaIngreso" maxLength="6" value="" />
                                    <br />
                                    
                                    <button type="button" class="btn btn-success" onClick={this.popup}>Registrar Cliente</button>
                                        
                                
                                </div>
                            </div>
                            </div>  
                        </div>
    </div>
        )
    }
}
export default RegistroUsuarioAdmin