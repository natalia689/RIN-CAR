
import React, { Component } from "react";

import {Form, Input, Label, Button, FormGroup,Nav, NavItem, NavLink,FormFeedback} from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:8080/Rest_application_java/webresources/entity.usuario";
const cookies = new Cookies();
class App extends React.Component {
constructor(props){
super(props);

  
  this.state = {
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
        usuario: '',
        password: '',
        mensajeNombre: '',
        mensajeTelefono:'',
        mensajeDireccion:'',
        mensajeEmail:'',
        mensajeUsuario:'',
        mensajePassword:'',
        invalidNombre: false,
       invalidTelefono:false,
        invalidDireccion:false,
        invalidEmail:false,
        invalidUsuario:false,
        invalidPassword:false,
    }
   this.onChange = this.onChange.bind(this);
   this.enviaralaBD=this.enviaralaBD.bind(this); 
}
onChange (e){
   let name= e.target.name;  
 let value=  e.target.name;
 this.setState({ [name]:value,

});

}
aceeso(e){
   axios.get(baseUrl,{params:{nombre_completo:this.state.nombre,telefono:this.state.telefono,
    direccion:this.state.direccion,email:this.state.email,usuario_ingreso:this.state.usuario,
    contrasenha_ingreso:this.state.password}})
    .then(response=>{
      console.log(response.data)
      return response.data;

      
  })
}
enviaralaBD(e){
  e.preventDefault();
  let valido=true;
  if(this.state.nombre=== ''){
    this.setState({
      invalidNombre: true,
      mensajeNombre: 'Los campos no deben estar vacios',
    });
    valido=false;
  }
  if(this.state.telefono=== ''){
    this.setState({
      invalidTelefono: true,
      mensajeTelefono: 'Los campos no deben estar vacios',
    });
    valido=false;
  }
  if(this.state.direccion=== ''){
    this.setState({
      invalidDireccion: true,
      mensajeDireccion: 'Los campos no deben estar vacios',
    });
    valido=false;
  }
  if(this.state.email=== ''){
    this.setState({
      invalidEmail: true,
      mensajeEmail: 'Los campos no deben estar vacios',
    });
    
  }
  if(this.state.usuario=== ''){
    this.setState({
      invalidUsuario: true,
      mensajeUsuario: 'Los campos no deben estar vacios',
    });
    valido=false;
  }
  if(this.state.password=== ''){
    this.setState({
      invalidPassword: true,
      mensajePassword: 'Los campos no deben estar vacios',
    });
    valido=false;
  }
  if(valido){
      console.log("se envian los datos"+JSON.stringify(this.state));
      // segunda forma de envio de datos
     // axios.prototype(baseUrl.this.state).then(res=>{
      //})
    }
}
  render() {
    return (
      
      <div>
        <div>
        <Nav className=" navbar navbar-expand-lg navbar navbar-dark bg-dark"  >
        <NavItem>
          <NavLink disabled href="/index">RinCar</NavLink>
        </NavItem>
        </Nav>
        </div>
        <div>
        <div className="container">
      <div className="row">
        <div class="col-2">
        </div>
        <div class="col-8">
        
               <h2>Registro de Administradores</h2>
                 <Form onSubmit={this.enviaralaBD}>
                   <FormGroup>
                        <Label >Nombre: </Label>
                          <Input name="nombre" type="text" placeholder="Ingresa tu nombre" value={this.state.nombre} onChange={this.onChange} invalid={this.state.invalidNombre}/>
                           <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
                    </FormGroup>
                      <FormGroup>
                      <Label>Telefono: </Label>
                          <Input name="telefono"  type="text" placeholder="Ingresa tu telefono" value={this.state.telefono}  onChange={this.onChange} invalid={this.state.invalidTelefono}/>
                          <FormFeedback>{this.state.mensajeTelefono}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
      
                      <Label>Direccion</Label>
                         <Input   name="direccion" type="text" placeholder="Ingresa tu direccion" value={this.state.direccion}  onChange={this.onChange} invalid={this.state.invalidDireccion} />
                         <FormFeedback>{this.state.mensajeDireccion}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                       <Label>Correo Electrónico</Label>
                           <Input  name="email" type="email"  placeholder="ejemplo@gmail.com" value={this.state.email}  onChange={this.onChange} invalid={this.state.invalidEmail}/>
                           <FormFeedback>{this.state.mensajeEmail}</FormFeedback>
                     </FormGroup>
                     <FormGroup>
                       <Label >Usuario</Label>
                          <Input  name="usuario" type="text" placeholder="Ingresa tu usuario" value={this.state.usuario} onChange={this.onChange} invalid={this.state.invalidUsuario}/>
                          <FormFeedback>{this.state.mensajeUsuario}</FormFeedback>
                      </FormGroup>
                      <FormGroup>
                          <Label >Password</Label>
                               <Input name="password" type="password" placeholder="Ingresa tu password" value={this.state.password}  onChange={this.onChange} invalid={this.state.invalidPassword}/>
                               <FormFeedback>{this.state.mensajePassword}</FormFeedback>
                    </FormGroup>
                    <FormGroup><Button color="info">Guardar</Button></FormGroup>
                 </Form>
                 </div>
                 <div class="col-2"> 
                 </div>
                 </div>
                 </div>
          </div>
         </div>
       
    );
  }
}

export default App

  


