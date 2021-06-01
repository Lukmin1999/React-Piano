import React,{useEffect, useState} from 'react';
import * as Tone from 'tone';

function Metronome({stopMetronome,startMetronome}) {

    const [tempo,setTempo] = useState(60)
    const [playing,setPlaying] = useState(false)

    useEffect(()=>{
        // console.log("Changing Tempo to " + tempo + "BPM")
        Tone.Transport.bpm.rampTo(tempo,0.5)
    },[tempo])

    useEffect(()=>{
        console.log(playing)
        if(playing){
            document.getElementById('metronomeButton').innerHTML= '&#9612;&#9612;';  
            startMetronome()
        }
        else{
            document.getElementById('metronomeButton').innerHTML='&#9654;';
            stopMetronome()
        }
    },[playing,startMetronome,stopMetronome]);



    return (
        <form className='metronome'>
            <input type="range" onChange={(e)=>setTempo(e.target.value)} id="tempo" name="tempo" min="30" max="160" defaultValue="60"></input>
            <button id="metronomeButton" type="button" onClick={()=>{setPlaying(!playing)}}></button>

            <span>Tempo: {tempo} BPM</span>
        </form>
        );
}




export default Metronome;