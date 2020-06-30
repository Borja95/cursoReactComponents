import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../img/loginImage.svg';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies= new Cookies();

class Login extends Component {
    state={
        username:"",
        password:""
    }

    iniciarSesion=async()=>{
       await axios.get('https://localhost:44395/api/usuarios',{params:{username: this.state.username, password: this.state.password}} ).
        then(response=>{
           return response.data
        }).then(response=>{
           if(response[0].codigo==0){
               alert('Bienvenido '+response[0].nombre);
               cookies.set('id', response[0].id, {path: '/'});
               cookies.set('apellido_paterno', response[0].apellido_paterno, {path: '/'});
               cookies.set('apellido_materno', response[0].apellido_materno, {path: '/'});
               cookies.set('nombre', response[0].nombre, {path: '/'});
               cookies.set('correo', response[0].correo, {path: '/'});
               cookies.set('username', response[0].username, {path: '/'});
               cookies.set('password', response[0].password, {path: '/'});
               window.location.href='./menu/';
           }
           else{
               alert('El Usuario o la Contraseña no son correctos');
            }
        }).
        catch(error=>{
            console.log(error.message);
        })
    }

    handleChange=async e=>{
       await this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return (
            <div className="divPrincipalCentrado">
                <div className="divHijo">
                    <img src={Image} width="200px" height="200px"/>
                    <br /><br />
                    <h4>Usuario</h4>
                    <input className="form-control" name="username" type="text" onChange={this.handleChange}/>
                    <br /> 
                    <h4>Contraseña</h4>
                    <input className="form-control" type="password" name="password" onChange={this.handleChange}/>
                    <br /><br />
                    <button className="btn btn-primary btnIniciarSesion" onClick={()=>this.iniciarSesion()}>INICIAR SESIÓN</button>
                </div>
            </div>
        );
    }
}

export default Login;