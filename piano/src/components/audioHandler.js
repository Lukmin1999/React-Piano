import React, { useEffect, useState, useRef} from 'react';
import * as Tone from 'tone';

function AudioHandler(props) {
    const [isLoaded,setLoaded] = useState(false)
    const [number, ] = useState(props.number)
    const sampler = useRef(null);
    useEffect(()=>{
        sampler.current = new Tone.Sampler(
            {
                'C4' : 'https://tonejs.github.io/audio/salamander/C4.mp3',
                'D#4': 'https://tonejs.github.io/audio/salamander/Ds4.mp3',
                "F#4": 'https://tonejs.github.io/audio/salamander/Fs4.mp3',
                "A4": "https://tonejs.github.io/audio/salamander/A4.mp3",
            },
            {
                onload: () => {
                    setLoaded(true)
                    Tone.start()
                    console.log(sampler)
                }


            }
        )
    });

    const onMouseDown = (note) => {
        Tone.start()
        console.log(sampler)
        console.log("hello")
        sampler.triggerAttack(note);
    }

    const onMouseUp = (note) => {

        
            sampler.triggerRelease(note)
        

    };

    return (!isLoaded ? <div>Loading</div> :
    <div className = 'Octave'>
        <BlackKeys onMouseDown={onMouseDown} onMouseUp={onMouseUp} sampler={sampler.current} number={number} isLoaded={isLoaded} />
        <WhiteKeys onMouseDown={onMouseDown} onMouseUp={onMouseUp} sampler={sampler.current} number={number} isLoaded={isLoaded} />
    </div>
    );
}

export default AudioHandler;