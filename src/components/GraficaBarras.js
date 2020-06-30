import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import '../css/GraficaBarras.css';
import axios from 'axios';



class GraficaBarras extends Component {
    state={
        cantUsuarios:[],
        redesSociales:[],
        data:[],
        opciones:[]
    }

    peticionApi=async()=>{
        var cantUsuarios=[], redesSociales=[];
        await axios.get('http://localhost:5000/redesSociales').then(response=>{
            console.log(response.data); 
            response.data.map(elemento=>{
                cantUsuarios.push(elemento.usuarios);
                redesSociales.push(elemento.red_social);
            })
        }).catch(error=>{console.log(error.message)});

        this.setState({cantUsuarios: cantUsuarios, redesSociales: redesSociales});
        console.log(this.state);
    }

    configurarGrafica=()=>{
        const data={
            labels:this.state.redesSociales,
            datasets:[{
                label: 'Millones de Usuarios',
                backgroundColor: 'rgba(0,0,255, 1)',
                borderColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255, 0.2)',
                hoverBorderColor: '#FF0000',
                data: this.state.cantUsuarios
            }]
        }
        
        const opciones={
            responsive: true,
            maintainAspectRatio: false
        }

        this.setState({data: data, opciones: opciones});
    }

    componentDidMount=async()=> {
        await this.peticionApi();
        this.configurarGrafica();
    }
    
    render() {
        return (
            <div className="contenedorGrafica">
                <h1>Redes Sociales con Mayor Número de Usuarios en el Mundo (Millones)</h1>
                <Bar data={this.state.data} options={this.state.opciones}/>
            </div>
        );
    }
}

export default GraficaBarras;