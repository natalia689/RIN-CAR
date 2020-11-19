import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "http://localhost:8080/Rest_application_java/webresources/entity.usuario/";

class App extends Component {
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
    val: ''
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
    this.peticionGet();
  }




  render() {
    const { form } = this.state;
    const { showing } = this.state;


    if (showing == false) {
      this.val = 'Mostar usuarios y contraseñas'
    }
    else {
      this.val = 'Ocultar usuarios y contraseñas'
    }

    return (
      <div className="App">
        <br />
        <div className="container">
          <button className="btn btn-success" onClick={() => this.modalInsertar()}>Agregar Administrador</button>
          <br /> <br />
          <button onClick={() => this.setState({ showing: !showing })} className="btn btn-secondary">{this.val}</button>
          <br /><br />
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
                    <td>{usuario.usuarioID}</td>
                    <td>{usuario.nombreCompleto}</td>
                    <td>{usuario.direccion}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.estado}</td>
                    <td>{usuario.rol}</td>
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
              <input className="form-control" type="text" name="email" id="email" onChange={this.handleChange} value={form.email} />
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

export default App;
