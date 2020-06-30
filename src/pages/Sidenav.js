import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter, Route} from 'react-router-dom';
import FontAwesome from '../components/FontAwesome';
import Borja from '../img/brandingYoutube.png';
import '../css/estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faVideo, faFilePdf, faChartBar, faChartPie, faTable, faWindowRestore, faCookieBite} from '@fortawesome/free-solid-svg-icons';
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'; //icono de marca o brand
import Datepicker from '../components/Datepicker';
import ReactPlayer from '../components/ReactPlayer';
import ArchivoPdf from '../components/ArchivoPdf';
import Datatable from '../components/Datatable';
import GraficaBarras from '../components/GraficaBarras';
import GraficaCircular from '../components/GraficaCircular';
import VentanaModal from '../components/VentanaModal';
import ReactCookies from '../components/ReactCookies';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Sidenav extends Component {
    state={
        expanded: false,
        selected: 'font-awesome'
    }

    onToggle=expanded=>{
        this.setState({expanded: expanded})
    }

    componentDidMount() {
        if(cookies.get('nombre')==null){
            window.location.href='../';
        }
    }
    

    render() {
        const {expanded}=this.state;
        return (
            <div style={{marginLeft: expanded ? 240: 64}}>
                <BrowserRouter>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
                onToggle={this.onToggle}
            >
                <img src={Borja} width={expanded ? 200: 64} height={expanded ? 200: 64} className="imgBorja"/>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="menu/font-awesome">
                    <NavItem eventKey="menu/font-awesome">
                        <NavIcon>
                        <FontAwesomeIcon icon={faFontAwesome} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Font Awesome
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/selector-de-fechas">
                        <NavIcon>
                            <FontAwesomeIcon icon={faCalendarAlt} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Selector de Fechas
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/reproductor-de-video">
                        <NavIcon>
                        <FontAwesomeIcon icon={faVideo} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Reproductor de Vídeo
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/archivos-pdf">
                        <NavIcon>
                        <FontAwesomeIcon icon={faFilePdf} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Archivos PDF
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/datatables">
                        <NavIcon>
                        <FontAwesomeIcon icon={faTable} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Datatables
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/grafica-de-barras">
                        <NavIcon>
                        <FontAwesomeIcon icon={faChartBar} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Gráfica de Barras
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="menu/grafica-circular">
                        <NavIcon>
                        <FontAwesomeIcon icon={faChartPie} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Gráfica Círcular
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="menu/ventana-modal">
                        <NavIcon>
                        <FontAwesomeIcon icon={faWindowRestore} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Modal (Pop-up)
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="menu/cookies">
                        <NavIcon>
                        <FontAwesomeIcon icon={faCookieBite} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Cookies
                        </NavText>
                    </NavItem>
                    
                    
                </SideNav.Nav>
            </SideNav>
            <main style={{padding: '30px'}}>
                <Route path="/menu/font-awesome" exact component={props => <FontAwesome />} />
                <Route path="/menu/selector-de-fechas" exact component={props => <Datepicker />} />
                <Route path="/menu/reproductor-de-video" exact component={props => <ReactPlayer/>} />
                <Route path="/menu/archivos-pdf" exact component={props => <ArchivoPdf/>} />
                <Route path="/menu/datatables" exact component={props => <Datatable/>} />
                <Route path="/menu/grafica-de-barras" exact component={props => <GraficaBarras/>} />
                <Route path="/menu/grafica-circular" exact component={props => <GraficaCircular/>} />
                <Route path="/menu/ventana-modal" exact component={props => <VentanaModal/>} />
                <Route path="/menu/cookies" exact component={props => <ReactCookies/>} />
            </main>
        </React.Fragment>
    )}
    />
</BrowserRouter>
            </div>
        );
    }
}

export default Sidenav;