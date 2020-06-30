import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const cookie = new Cookies();

class ReactCookies extends Component {

    cerrarSesion=()=>{
        cookie.remove('id', {path: '/'});
        cookie.remove('apellido_paterno', {path: '/'});
        cookie.remove('apellido_materno', {path: '/'});
        cookie.remove('nombre', {path: '/'});
        cookie.remove('correo', {path: '/'});
        cookie.remove('username', {path: '/'});
        cookie.remove('password', {path: '/'});
        window.location.href='../../';
    }

    render() {
        return (
            <div>
                <h2>El usuario que inició sesión es: </h2>
<br />
<h5>ID de Usuario: {cookie.get('id')}</h5>
                <br />
                <h5>Apellido Paterno: {cookie.get('apellido_paterno')}</h5>
                <br />
                <h5>Apellido Materno: {cookie.get('apellido_materno')}</h5>
                <br />
                <h5>Nombre: {cookie.get('nombre')}</h5>
                <br />
                <h5>Correo: {cookie.get('correo')}</h5>
                <br />
                <h5>Username: {cookie.get('username')}</h5>
                <br />
                <h5>Password: {cookie.get('password')}</h5>

                <button className="btn btn-primary" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        );
    }
}

export default ReactCookies;