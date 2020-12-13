import React from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';



const baseUrl = "http://localhost:8080/Rest_application_java/webresources/entity.usuario";
const cookies = new Cookies();
class loginCliente extends React.Component {


    state = {
        form: {
            usuario: '',
            password: '',


        }


    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        });
        console.log(this.state.form);
    }
    accessLogin = async () => {
        await axios.get(baseUrl, { params: { usuarioIngreso: this.state.form.usuario, contrasenhaIngreso: this.state.form.password } })
            .then(response => {
                console.log(response.data)

                return response.data;




            })
            .then(response => {

                if (response.length > 0) {


                    var respuesta = response[12];


                    cookies.set('usuarioIngreso', respuesta.usuarioIngreso, { path: "/" });
                    cookies.set('contrasenhaIngreso', respuesta.contrasenhaIngreso, { path: "/" });





                    if (this.state.form.usuario === respuesta.usuarioIngreso && this.state.form.password === respuesta.contrasenhaIngreso) {
                        alert('Inicio de sesion correcto');


                        window.location.href = '/menuCliente';



                    } else if (this.state.form.usuario === "" && this.state.form.password === "") {
                        alert('el campo usuario y contraseña no puede estar vacio')
                    } else if (this.state.form.usuario === respuesta.usuarioIngreso && this.state.form.password === "") {
                        alert('el campo contraseña no puede estar vacio')
                    } else if (this.state.form.usuario === "" && this.state.form.password === respuesta.contrasenhaIngreso) {
                        alert('el campo usuario no puede estar vacio')
                    } else if (this.state.form.usuario !== respuesta.usuarioIngreso && this.state.form.password === "") {
                        alert('el campo contraseña no puede estar vacio')
                    } else if (this.state.form.usuario === "" && this.state.form.password !== respuesta.contrasenhaIngreso) {
                        alert('el campo usuario no puede estar vacio')
                    }
                    else if (this.state.form.usuario !== respuesta.usuarioIngreso || this.state.form.password !== respuesta.contrasenhaIngreso) {
                        alert('El usuario o contrasena es incorrecto')
                    }





                }
            })


    }
    componentDidMount() {
        if (cookies.get('usuarioIngreso')) {
            window.location.href = "/menuCliente"
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link to="/index">
                        <p className="nombreapp">RinesApp</p>
                    </Link>
                    <Link to="/registrocliente">
                        <button type="button" className="btn btn-light" >Registrarse</button>
                    </Link>
                </nav>



                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-6" id="medio">
                            <h3 id="login">Login</h3>

                            <form>
                                <div className="form-group">

                                    <label id="usuariocss">Usuario</label>
                                    <input type="text" className="form-control" name="usuario" placeholder="Inserte su usuario" onChange={this.handleChange}></input>
                                    <label id="passwordcss">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Inserte su contrasena" onChange={this.handleChange}></input>
                                    <button type="button" className="btn btn-primary" id="botonIngLog" onClick={() => this.accessLogin()}>Ingresar</button>
                                </div>
                            </form>


                        </div>
                        <div className="col-3">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default loginCliente;