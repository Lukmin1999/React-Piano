import './App.css';
import React, {useState,useEffect,useCallback} from 'react';
import Header from './components/header';
import Metronome from "./components/metronome";
import Keyboard from './components/keyboard';
import * as Tone from 'tone';
import Toggle from "./components/toggle"
import InstrumentForm from "./components/instrumentForm"
import soundFile from './components/sound.mp3'
import ModulationForm from "./components/modulationForm"


    // Create four requests for 4 notes. Because of a Sampler's ability to 
    // change playback rate, we only need 4 notes to cover an entire octave.
    // Therefore, we only make 4 requests for 4 recordings.
    
const A = ['C','D#','F#','A'];
const pitchSpace = {};
for(let i = 2; i < 5; i++){
  for(const [,note] of A.entries()){
      const n = note.replace('#','s');
      pitchSpace[note+i] = `https://tonejs.github.io/audio/salamander/${n+i}.mp3`;
  }
}

const synthJSON = {
  "harmonicity":.01,
  "modulationIndex":.2,
  "oscillator" : {
      "type": "square"
  },
  "envelope": {
      "attack": .001,
      "decay": .1,
      "sustain": 0.5,
  },
  "modulation" : {
      "type" : "sine"
  },
  "modulationEnvelope" : {
    "attack": 0.001,
    "decay": .1,
    "sustain": 0.5,

  }
}

const piano = new Tone.Sampler(pitchSpace).unsync();
piano.set({"curve":"linear"})
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const FMSynth = new Tone.PolySynth(Tone.FMSynth).toDestination();
FMSynth.set(synthJSON)
const osc = new Tone.Player(soundFile).toDestination();
Tone.Transport.scheduleRepeat(time=>{
  osc.start(time).stop(time+.1);},"4n");



function App() {
  const [instrumentType,setInstrumentType] = useState("Piano")
  const [isLoaded,setLoaded] = useState(false);
  const [sampler,setSampler] = useState(null);
  const [modulationType,setModulationType] = useState("sine");
    useEffect(()=>{
      setLoaded(false)
      FMSynth.set({
        "modulation": {
          "type": modulationType
        }
      })
      setLoaded(true)
  },[modulationType]);


    useEffect(()=>{
        console.log("UseEffect:Set Instrument")
        setLoaded(false)
        switch(instrumentType){
          case "Synth":
            setSampler(synth.unsync().toDestination());
            break;
          case "FMSynth":
            setSampler(FMSynth.unsync().toDestination());
            break;
          default: 
            setSampler(piano.unsync().toDestination());
        }
        setLoaded(true)
    },[instrumentType]);



    // Metronome Functions

    const startMetronome = () => {
      if(Tone.Transport.state !== "started"){      
        Tone.start();
        Tone.Transport.start();}
    }

    const stopMetronome = () => {
      if(Tone.Transport.state !== "stopped"){
        Tone.Transport.stop();
      }
    }

    // A note only plays if the mouse is over it AND the mouse is being held down.
    // So, if you hold the mouse down and move over a note, the note will play.
    const onMouseOver = useCallback(event => {
        //console.log(event.target)
        //console.log(event.target.getAttribute('note'))
        if(event.buttons === 1){
            // playNote(sampler,)
            Tone.start();
            sampler.triggerAttack(event.target.value);
        }
    },[sampler])

    // Handles the case when a user explicitly clicks on a note.
    const onMouseDown = useCallback(event => {
        event.preventDefault()
        playNote(sampler,event.target.value)
    },[sampler])

    const onMouseUp = useCallback((event) => {
      event.preventDefault();
      event.target.style.background = null;
      if(!document.getElementById('toggle').checked){
        releaseNote(sampler,event.target.value);
      }
    },[sampler]); 

    const onMouseOut = useCallback((event) => {
      if(event.buttons === 1 && !document.getElementById('toggle').checked){
        releaseNote(sampler,event.target.value);
      }
    },[sampler]); 


    const onToggleChange = useCallback((event) => {
      if(!event.target.checked){
        releaseAll(sampler);
      }
    },[sampler])


    
    const onTouchStart = useCallback((event)=>{
      event.target.style.background = "darkgray"
      playNote(sampler,event.target.value)
    },[sampler])

    const keyBoardSection = !isLoaded? <div>Loading</div>:
      <div className="Keyboard-section">
        <Metronome stopMetronome={stopMetronome} startMetronome={startMetronome} ></Metronome>
        <Keyboard onTouchStart={onTouchStart} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onPianoPress={onMouseDown} onMouseUp={onMouseUp}/>
      </div>

    return (!isLoaded? <div>Loading</div>:
      <div className="App">

        {/* HEADER  */}
        <Header setInstrumentType={setInstrumentType} onToggleChange = {onToggleChange}/>
        {/* HEADER */}
        {keyBoardSection}

            <div className='Instrument'>
                <InstrumentForm instrumentType={instrumentType} setInstrumentType={setInstrumentType}/>
                <ModulationForm setModulationType={setModulationType}></ModulationForm>
                <span><b>Sustaining Pedal:</b><Toggle onToggleChange = {onToggleChange}/></span>
                
            </div>

      </div>

    );
}

export default App;

function playNote(instrument,note){
  Tone.start();
  instrument.triggerAttack(note);
}

function releaseNote(instrument,note){
  instrument.triggerRelease(note,"+.05")
}

function releaseAll(instrument){
  instrument.releaseAll();
}

