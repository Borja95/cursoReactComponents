import React, { Component } from 'react';
import Datatable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'; //iconos solidos
import '../css/Datatable.css';

const tablaPaisesMasPoblados = [
    { id: 1, pais: "China", poblacion: 1433783686, continente: "Asia"},
    { id: 2, pais: "India", poblacion: 1398417754, continente: "Asia"},
    { id: 3, pais: "Estados Unidos", poblacion: 329064917, continente: "América"},
    { id: 4, pais: "Indonesia", poblacion: 270625568, continente: "Asia"},
    { id: 5, pais: "Pakistán", poblacion: 216565318, continente: "Asia"},
    { id: 6, pais: "Brasil", poblacion: 211049527, continente: "América"},
    { id: 7, pais: "Nigeria", poblacion: 206139589, continente: "África"},
    { id: 8, pais: "Bangladesh", poblacion: 163046161, continente: "Asia"},
    { id: 9, pais: "Rusia", poblacion: 145872256, continente: "Europa y Asia"},
    { id: 10, pais: "México", poblacion: 127575529, continente: "América"},
    { id: 11, pais: "Japón", poblacion: 126860301, continente: "Asia"},
    { id: 12, pais: "Etiopía", poblacion: 114963588, continente: "África"},
    { id: 13, pais: "Filipinas", poblacion: 108116615, continente: "Asia"},
    { id: 14, pais: "Egipto", poblacion: 102334404, continente: "África"},
    { id: 15, pais: "Vietnam", poblacion: 96462106, continente: "Asia"},
  ];

  const columnas=[
      {
          name: "ID",
          selector: "id",
          sortable: true,
          maxWidth: "30px"
      },
      {
        name: "País",
        selector: "pais",
        sortable: true,
        minWidth: "300px"
        },
        {
            name: "Continente",
            selector: "continente",
            sortable: true,
            hide: 540
        },
        {
            name: "Población",
            selector: "poblacion",
            sortable: true,
            right: true,
            cell: row => row.poblacion.toLocaleString("en-EN")
        }
  ];

  const paginacionOpciones={
      rowsPerPageText : "Filas por Página",
      rangeSeparatorText: "de",
      selectAllRowsItem: true,
      selectAllRowsItemText: "Todos"
  }

class Datatables extends Component {
    state={
        busqueda: '',
        paisesMasPoblados:[]
    }

    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarElementos();
    }

    filtrarElementos=()=>{
        var search=tablaPaisesMasPoblados.filter(item=>{
            if(item.id.toString().includes(this.state.busqueda) ||
            item.pais.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
            item.continente.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
            ){
                return item;
            }
        });
        this.setState({paisesMasPoblados: search});
    }

    componentDidMount() {
        this.setState({paisesMasPoblados: tablaPaisesMasPoblados});
    }
    

    render() {
        return (
            <div>

<div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="inputBuscar"
              onChange={this.onChange}
              value={this.state.busqueda} 
            />
            <button type="button" className="btnBuscar">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
            <br />

                <Datatable 
                    data={this.state.paisesMasPoblados}
                    columns={columnas}
                    title="Países más poblados del mundo"
                    pagination
                    paginationComponentOptions={paginacionOpciones}
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                />
            </div>
        );
    }
}

export default Datatables;