import React from 'react'
import './css/inicio.css'
import {Link} from 'react-router-dom'
 

class Inicio extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <p className="nombreapp">RinesApp</p>
                    
                    
                    
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                        </div>
                         
                        <div className="col-6">
                            <div className="card" id="cardorg">
                                <div className="card-body" id="cardbodyorg">
                                <Link to="/login">
                                    <button type="button" className="btn btn-primary" >Login Admin</button>
                                </Link>
                                <Link to="/loginCliente">
                                    <button type="button" className="btn btn-primary" id="btnlc">Login Clientes</button>
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
export default Inicio