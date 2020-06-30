import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ArchivoPdf.css';

class ArchivoPdf extends Component {
    state={
        
    lenguajes: [
        { id: "1", nombre: "Rust", porcentaje: "86.1%" },
        { id: "2", nombre: "TypeScript", porcentaje: "67.1%" },
        { id: "3", nombre: "Python", porcentaje: "66.7%" },
        { id: "4", nombre: "Kotlin", porcentaje: "62.9%" },
        { id: "5", nombre: "Go", porcentaje: "62.3%" },
        { id: "6", nombre: "Julia", porcentaje: "62.2%" },
        { id: "7", nombre: "Dart", porcentaje: "62.1%" },
        { id: "8", nombre: "C#", porcentaje: "59.7%" },
        { id: "9", nombre: "Swift", porcentaje: "59.5%" },
        { id: "10", nombre: "JavaScript", porcentaje: "58.3%" },
      ],
    }

    exportarAPdf=()=>{

        var configuracion={
            margin: 1,
            filename: "que es react.pdf",
            jsPDF: {unit: 'in', format: 'legal'}
        }

        var documento=document.getElementById('pdf react');
        html2pdf(documento, configuracion);
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger botonPdf" onClick={()=>this.exportarAPdf()}>Exportar a PDF</button>
                
                <div className="ocultarContenedor">
                <div className="container" id="pdf react">
                    <h1 className="tituloPdf">¿Qué es React?</h1>

                    <p className="parrafoPdf">React o ReactJS es una librería JavaScript de código abierto
              creada por Facebook para desarrollar interfaces de usuarios
              mediante componentes. Estos componentes pueden ser tanto, cada una
              de las piezas que forman la interfaz, como la propia interfaz
              completa. Cada componente contiene tanto la lógica como la parte
              visual, de este modo podemos reutilizarlo dentro de otros
              componentes. Para entenderlo mejor, podemos verlo como si fueran
              muñecas rusas donde cada muñeca sería un componente que a su vez
              está dentro de otro. Otra de las características más relevantes de
              React es la unión de HTML y JavaScript dentro de un mismo archivo
              con extensión .jsx, que permite escribir código más legible y
              compacto. Aquí tenemos un ejemplo de las diferencias entre .jsx y
              .js:</p>
              <br/>
            <h5>JSX</h5>
            <img src={require('../img/jsx pdf.png')} className="imagenesPdf"/>

            <div className="html2pdf__page-break"></div>

            <h5>JS</h5>
            <img src={require('../img/js pdf.png')} className="imagenesPdf"/>

            <div className="html2pdf__page-break"></div>

            <table className="table table-bordered">
                <thead className="table-primary">
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Porcentaje</th>
                </thead>
                <tbody>
                    {this.state.lenguajes.map(lenguaje=>{
                        return(
                            <tr>
                                <td>{lenguaje.id}</td>
                                <td>{lenguaje.nombre}</td>
                                <td>{lenguaje.porcentaje}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="html2pdf__page-break"></div>

            <img src={require('../img/brandingYoutube.png')} className="logoPdf"/>


                </div>
            </div>
            </div>
        );
    }
}

export default ArchivoPdf;