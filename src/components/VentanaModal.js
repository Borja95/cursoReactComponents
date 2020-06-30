import React, { Component } from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/VentanaModal.css';

class VentanaModal extends Component {
    state={
        estaAbierto: false,
        inputModal: ''
    }

    handleChange=e=>{
        this.setState({
            inputModal: e.target.value
        })
    }

    abrirCerrarModal=()=>{
        this.setState({estaAbierto: !this.state.estaAbierto});
    }

    mostrarValorInput=()=>{
        alert(this.state.inputModal);
    }

    render() {
        return (
            <>
            <div className="containerPrincipal">
               <button className="btn btn-primary btnPrincipal" onClick={()=>this.abrirCerrarModal()}>Abrir Modal</button>
            </div>


            <Modal isOpen={this.state.estaAbierto}
            size="lg"
            centered>
                <ModalHeader className="modalHeader">
                    <h2 className="tituloModal">Este es el título del Modal</h2>
                    <span onClick={()=>this.abrirCerrarModal()} className="btnCerrar">x</span>
                </ModalHeader>
                <ModalBody>
                <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are 
                        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the 
                        Internet tend to repeat predefined chunks as necessary, making this the first 
                        true generator on the Internet. It uses a dictionary of over 200 Latin words, 
                        combined with a handful of model sentence structures, to generate Lorem Ipsum 
                        which looks reasonable. The generated Lorem Ipsum is therefore always free from 
                        repetition, injected humour, or non-characteristic words etc.</p>

                        <input type="text" className="form-control" name="inputModal" placeholder="Soy el Input del Modal" value={this.state.inputModal} onChange={this.handleChange}/>
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-success" onClick={()=>this.mostrarValorInput()}>Mostrar</button>
                    <button className="btn btn-secondary" onClick={()=>this.abrirCerrarModal()}>Cerrar</button>
                </ModalFooter>
            </Modal>

            </>
        );
    }
}

export default VentanaModal;