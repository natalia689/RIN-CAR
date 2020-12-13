import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmericanSignLanguageInterpreting, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { findAllByPlaceholderText } from '@testing-library/react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
const url = "http://localhost:8080/Rest_application_java/webresources/entity.productorin/";

class registroRin extends React.Component {
    state = {
        data: [],
        form: {
            cantidadStock: '',
            categoria: '',
            colorRin: '',
            estadoRin: '',
            fechaIngreso: '',
            marca: '',
            precioUnitario: '',
            productorinID: ''
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

        this.state.form.fechaIngreso = new Date()
        await axios.post(url, this.state.form).then(response => {
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })

        if (this.state.form.colorrin === '') {
            alert('El campo color debe estar lleno')
        }
        else if (this.state.form.estadorin === '') {
            alert('El campo estado debe estar lleno')
        }
        else if (this.state.form.cantidadstock === '') {
            alert('El campo cantidad stock debe estar lleno')
        }
        else if (this.state.form.preciounitario === '') {
            alert('El campo precio debe estar lleno')
        }
        else if (this.state.form.categoria === '') {
            alert('El campo categoria debe estar lleno')
        }
        else if (this.state.form.marca === '') {
            alert('El campo marca debe estar lleno')
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

    componentDidMount() {
        if (!cookies.get('usuarioIngreso')) {
            window.location.href = "/login"
        }
    }

    cerrarsesion = () => {
        cookies.remove('usuarioIngreso', { path: "/" });
        cookies.remove('contrasenhaIngreso', { path: "/" });
        window.location.href = '/login';
    }

    refreshPage() {
        window.location.reload(false);
    }


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <Link to="/dueño">
                        <p className="nombreapp">RinesApp</p>
                    </Link>

                    <button type="button" className="btn btn-light" id="btnlogout" onClick={() => this.cerrarsesion()}>Cerrar sesion</button>
                </nav>


                <br />
                <div className="container">
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col-5">
                            <div style={{ display: (this.state.showReg ? "block" : "none") }} >
                                <h1>Registrar rin...</h1>
                                <div className="form-group">
                                    <label htmlFor="cantidadStock">cantidad Stock:</label>
                                    <input className="form-control" type="number" name="cantidadStock" id="cantidadStock" onChange={this.handleChange} value={this.state.form.cantidadStock} />
                                    <br />
                                    <label htmlFor="categoria">Categoría:</label>
                                    <input className="form-control" type="text" name="categoria" id="categoria" onChange={this.handleChange} value={this.state.form.categoria} />
                                    <br />
                                    <label htmlFor="colorRin">Color rin:</label>
                                    <input className="form-control" type="text" name="colorRin" id="colorRin" onChange={this.handleChange} value={this.state.form.colorRin} />
                                    <br />
                                    <label htmlFor="estadoRin">Estado rin:</label>
                                    <input className="form-control" type="text" name="estadoRin" id="estadoRin" onChange={this.handleChange} value={this.state.form.estadoRin} />
                                    <br />
                                    <label htmlFor="marca">Marca:</label>
                                    <input className="form-control" type="text" name="marca" id="marca" onChange={this.handleChange} value={this.state.form.marca} />
                                    <br />
                                    <label htmlFor="precioUnitario">Precio unitario:</label>
                                    <input className="form-control" type="number" name="precioUnitario" id="precioUnitario" onChange={this.handleChange} value={this.state.form.precioUnitario} />
                                    <br />
                                    <button className="btn btn-success" onClick={() => this.peticionPost()}>
                                        Publicar rin
                      </button>
                                </div>
                            </div>
                            <div style={{ display: (this.state.showMod ? "block" : "none") }}>
                                <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Rin registrado con exito...!</h4>
                                    <p>El producto fue registrado en la base de datos con exito...</p>
                                    <hr />
                                    <p className="mb-0">¿Qué desea hacer?</p>
                                    <br />
                                    <Link to="/dueño">
                                        <p><button type="button" class="btn btn-success">Ir a la pagina principal</button></p>
                                    </Link>
                                    <p><button type="button" class="btn btn-success" onClick={() => window.location.reload(false)}>Seguir registrando</button></p>
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
} export default registroRin;