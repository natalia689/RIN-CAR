import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmericanSignLanguageInterpreting, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const url = "http://localhost:8080/Rest_application_java/webresources/entity.usuario/";


class Registro extends React.Component {
    state = {
        data: [],
        modalInsertar: false,
        form: {
            contrasenhaIngreso: '',
            direccion: '',
            email: '',
            estado: 'Activo',
            nombreCompleto: '',
            rol: 'Administrador',
            telefono: '',
            usuarioID: '',
            usuarioIngreso: ''
        },
        showing: false,
        val: '',
        Noclient: true,
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        delete this.state.form.usuarioID;
        await axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
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
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
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
        this.peticionGet();
    }

    cerrarsesion = () => {
        cookies.remove('usuarioIngreso', { path: "/" });
        cookies.remove('contrasenhaIngreso', { path: "/" });
        window.location.href = '/login';
    }


    render() {
        const { form } = this.state;
        const { showing } = this.state;


        if (showing === false) {
            this.val = 'Mostar usuarios y contraseñas'
        } else if (this.state.form.rol === 'Cliente') {
            Noclient = false

        }
        else {
            this.val = 'Ocultar usuarios y contraseñas'
        }

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
                    <button className="btn btn-success" onClick={() => this.modalInsertar()}>Agregar Administrador</button>
                    <br /> <br />
                    <button onClick={() => this.setState({ showing: !showing })} className="btn btn-secondary">{this.val}</button>
                    <br /><br />
                    <h3>Listado de usuarios...</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>usuarioID </th>
                                <th>nombreCompleto</th>
                                <th>direccion</th>
                                <th>telefono</th>
                                <th>email</th>
                                <th>estado</th>
                                <th>rol</th>
                                <th style={{ display: (showing ? "block" : "none") }} >usuarioIngreso</th>
                                <th style={{ display: (showing ? "block" : "none") }} >contrasenhaIngreso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(usuario => {
                                return (
                                    <tr>
                                        <td >{usuario.usuarioID}</td>
                                        <td >{usuario.nombreCompleto}</td>
                                        <td >{usuario.direccion}</td>
                                        <td >{usuario.telefono}</td>
                                        <td >{usuario.email}</td>
                                        <td >{usuario.estado}</td>
                                        <td >{usuario.rol}</td>
                                        <td style={{ display: (showing ? "block" : "none") }} ><p><strong>Usuario:</strong></p>{usuario.usuarioIngreso}</td>
                                        <td style={{ display: (showing ? "block" : "none") }} ><p><strong>Contraseña:</strong></p>{usuario.contrasenhaIngreso}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{ display: 'block' }}>
                        <span style={{ float: 'right' }}>            <button className="btn btn-light" onClick={() => this.modalInsertar()}>
                            X
                      </button></span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="usuarioID ">usuarioID</label>
                            <input className="form-control" type="text" name="usuarioID" id="usuarioID" readOnly onChange={this.handleChange} value={this.state.data.length + 1} />
                            <br />
                            <label htmlFor="nombreCompleto">nombreCompleto</label>
                            <input className="form-control" type="text" name="nombreCompleto" id="nombreCompleto" onChange={this.handleChange} value={form.nombreCompleto} />
                            <br />
                            <label htmlFor="direccion">direccion</label>
                            <input className="form-control" type="text" name="direccion" id="direccion" onChange={this.handleChange} value={form.direccion} />
                            <br />
                            <label htmlFor="telefono">telefono</label>
                            <input className="form-control" type="number" name="telefono" id="telefono" onChange={this.handleChange} value={form.telefono} />
                            <br />
                            <label htmlFor="email">email</label>
                            <input className="form-control" type="email" name="email" id="email" onChange={this.handleChange} value={form.email} />
                            <br />
                            <label htmlFor="estado">estado</label>
                            <input className="form-control" type="text" name="estado" id="estado" readOnly onChange={this.handleChange} value={'Activo'} />
                            <br />
                            <label htmlFor="usuarioIngreso">usuarioIngreso</label>
                            <input className="form-control" type="text" name="usuarioIngreso" id="usuarioIngreso" onChange={this.handleChange} value={form.usuarioIngreso} />
                            <br />
                            <label htmlFor="contrasenhaIngreso">contrasenhaIngreso</label>
                            <input className="form-control" type="password" name="contrasenhaIngreso" id="contrasenhaIngreso" onChange={this.handleChange} value={form.contrasenhaIngreso} />
                            <br />
                            <label htmlFor="rol">rol</label>
                            <input className="form-control" type="text" name="rol" id="rol" readOnly onChange={this.handleChange} value={'Administrador'} />
                            <br />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" onClick={() => this.peticionPost()}>
                            Insertar
                      </button>
                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>
                            Cancelar
                      </button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default Registro