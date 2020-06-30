import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/ReactPlayer.css';

class Reactplayer extends Component {

    terminarVideo=()=>{
        alert('Se terminó el vídeo')
    }
    render() {
        return (
            <div className="containerVideo">
                <ReactPlayer 
                    url="https://youtu.be/2HoqpVwj_sw"
                    width="100%"
                    height="100%"
                    controls
                  
                    muted
                    playbackRate={0.50}
                   
                    onEnded={()=>this.terminarVideo()}
                />
            </div>
        );
    }
}

export default Reactplayer;