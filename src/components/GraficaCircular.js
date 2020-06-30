import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import '../css/GraficaCircular.css';
import axios from 'axios';
import 'chart.piecelabel.js';


class GraficaCircular extends Component {
    state={
        respuesta:[],
        navegadores:[],
        porcentaje:[],
        colores:[],
        data:[],
        opciones:[]
    }
    componentDidMount=async()=> {
      await this.peticionApi();
      this.generarColores();
      this.configurarGrafica();
    }

    peticionApi=async ()=>{
        await axios.get('https://localhost:44361/api/navegadores').then(response=>{
            this.setState({respuesta: response.data});
            var navegadores=[], porcentaje=[];
            this.state.respuesta.map(elemento=>{
                navegadores.push(elemento.nombre);
                porcentaje.push(elemento.porcentaje);
            });
            this.setState({navegadores: navegadores, porcentaje: porcentaje});
        }).catch(error=>{
            console.log(error.message);
        })
    }

    configurarGrafica=()=>{
        const data={
            labels:this.state.navegadores,
            datasets:[{
                data:this.state.porcentaje,
                backgroundColor: this.state.colores
            }]
        }
        
        const opciones={
            responsive: true,
            maintainAspectRatio:false,
            pieceLabel:{
                render: function(args){
                    return args.label+": "+args.value+"%"
                },
                fontSize: 15,
                fontColor: '#fff',
                fontFamily: 'Arial'
            }
        }

        this.setState({data: data, opciones: opciones});
    }

    
    generarCaracter=()=>{
        var caracter = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        var numero = (Math.random()*15).toFixed(0);
        return caracter[numero];
    }
    
    colorHEX=()=>{
        var color = "";
        for(var i=0;i<6;i++){
            color = color + this.generarCaracter();
        }
        return "#" + color;
    }

    generarColores=()=>{
        var colores=[];
        for(var i=0; i<this.state.respuesta.length; i++){
            colores.push(this.colorHEX());
        }
        this.setState({colores: colores});
    }
    
    render() {
        return (
            <div className="contenedorGraficarCircular">
                <h1>Navegadores Web más utilizados</h1>
                <Pie data={this.state.data} options={this.state.opciones}/>
            </div>
        );
    }
}

export default GraficaCircular;