import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmericanSignLanguageInterpreting, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { findAllByPlaceholderText } from '@testing-library/react';
import { Link } from 'react-router-dom'


const url = "http://localhost:8080/Rest_application_java/webresources/entity.usuario/";


class registroCliente extends React.Component {
    state = {
        data: [],
        form: {
            contrasenhaIngreso: '',
            direccion: '',
            email: '',
            estado: 'Activo',
            nombreCompleto: '',
            rol: 'Cliente',
            telefono: '',
            usuarioID: '',
            usuarioIngreso: ''
        },
        showReg: true,
        showMod: false

    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }


    peticionPost = async () => {
        await axios.post(url, this.state.form).then(response => {
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })

        if (this.state.form.nombreCompleto === '') {
            alert('El campo nombre debe estar lleno')
        }
        else if (this.state.form.direccion === '') {
            alert('El campo direccion debe estar lleno')
        }
        else if (this.state.form.telefono === '') {
            alert('El campo telefono debe estar lleno')
        }
        else if (this.state.form.email === '') {
            alert('El campo email debe estar lleno')
        }
        else if (this.state.form.usuarioIngreso === '') {
            alert('El campo usuario debe estar lleno')
        }
        else if (this.state.form.contrasenhaIngreso === '') {
            alert('El campo contraseña debe estar lleno')
        }
        else if (this.state.form.contrasenhaIngreso < 8) {
            this.state.form.contrasenhaIngreso = ''
            alert('La contraseña debe tener más de 8 caracteres')
        }
        else {
            alert('Registro completo')
        }

        this.state.showReg = false
        this.state.showMod = true
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render() {
        return (
            <div className="App">
                            <nav className="navbar navbar-dark bg-dark">
                    <Link to="/index">
                    <p className="nombreapp">RinesApp</p>
                    </Link>                   
                </nav>

                <br />
                <div className="container">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col-5">
                            <div style={{ display: (this.state.showReg ? "block" : "none") }} >
                                <h1>Registro cliente...</h1>
                                <div className="form-group">
                                    <label htmlFor="nombreCompleto">Nombre completo:</label>
                                    <input className="form-control" type="text" name="nombreCompleto" id="nombreCompleto" onChange={this.handleChange} value={this.state.form.nombreCompleto} />
                                    <br />
                                    <label htmlFor="direccion">Dirección:</label>
                                    <input className="form-control" type="text" name="direccion" id="direccion" onChange={this.handleChange} value={this.state.form.direccion} />
                                    <br />
                                    <label htmlFor="telefono">Telefono:</label>
                                    <input className="form-control" type="number" name="telefono" id="telefono" onChange={this.handleChange} value={this.state.form.telefono} />
                                    <br />
                                    <label htmlFor="email">Email:</label>
                                    <input className="form-control" type="email" name="email" id="email" onChange={this.handleChange} value={this.state.form.email} />
                                    <br />
                                    <label htmlFor="usuarioIngreso">Usuario ingreso:</label>
                                    <input className="form-control" type="text" name="usuarioIngreso" id="usuarioIngreso" onChange={this.handleChange} value={this.state.form.usuarioIngreso} />
                                    <br />
                                    <label htmlFor="contrasenhaIngreso">Contraseña ingreso:</label>
                                    <input className="form-control" type="password" name="contrasenhaIngreso" id="contrasenhaIngreso" onChange={this.handleChange} value={this.state.form.contrasenhaIngreso} />
                                    <br />
                                    <button className="btn btn-success" onClick={() => this.peticionPost()}>
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: (this.state.showMod ? "block" : "none") }}>
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Exito al registrarse!</h4>
                                    <p>Gracias por registrarse en la plataforma...</p>
                                    <hr />
                                    <p className="mb-0">Apartir de ahora podra usar todos los servicios y productos de la misma.</p>
                                    <br />
                                    <Link to="/loginCliente">
                                        <p><button type="button" class="btn btn-success">Ir a la pagina principal</button>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default registroCliente