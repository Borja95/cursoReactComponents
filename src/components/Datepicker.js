import React, { Component } from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Datepicker.css';

registerLocale("es", es);

class Datepicker extends Component {
    state = {
        startDate: new Date(),
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

      mostrarFecha = ()=>{
       const fechaCapturada=this.state.startDate.toLocaleDateString();
       const fechaSustituida=fechaCapturada.replace(/[/]/g, "-");
        alert(fechaSustituida);
      }

      render() {
        return (
          <div align="center">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            locale="es"
            dateFormat="dd 'de' MMMM 'de' yyyy"
            withPortal
          />
          <br />
          <button className="btn btn-primary" onClick={()=>this.mostrarFecha()}>Mostrar Fecha Capturada</button>
          </div>
        );
      }
    }

export default Datepicker;