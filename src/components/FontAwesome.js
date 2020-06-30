import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons'; //iconos solidos
import {faApple, faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons'; //icono de marca o brand
import '../css/FontAwesome.css';

function FontAwesome() {
    return (
        <div>
            <h1>Marcas exitosas en los últimos años</h1>
            <ul>
                <li><FontAwesomeIcon icon={faApple} className="iconoApple" fixedWidth flip="both"/>  Apple</li>
                <li><FontAwesomeIcon icon={faFacebook} className="iconoFacebook" fixedWidth rotation={270}/>  Facebook</li>
                <li><FontAwesomeIcon icon={faGoogle} className="iconoGoogle" fixedWidth/>  Google</li>
                <li><FontAwesomeIcon icon={faSpinner} className="iconoCargando" fixedWidth spin/>  Cargando</li>
                <li><FontAwesomeIcon icon={faSpinner} className="iconoCargando" fixedWidth pulse/>  Cargando</li>
            </ul>
        </div>
    );
}

export default FontAwesome;