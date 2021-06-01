// import React, { useState,useCallback, useEffect,useRef} from 'react'
// import * as Tone from 'tone'



// function Key(props){
//     const [isLoaded, ] = useState(props.isLoaded);
//     const [note, ] = useState(props.note)
//     const [color, ] = useState(props.color)
//     console.log(props.onMouseDown)

//     //const synth = new Tone.Synth().toDestination();
//     //const sampler = useRef(null);

//     // useEffect(() => {
//     //     sampler.current = new Tone.Sampler(
//     //         {
//     //             'C4' : 'https://tonejs.github.io/audio/salamander/C4.mp3',
//     //             'D#4': 'https://tonejs.github.io/audio/salamander/Ds4.mp3',
//     //             "F#4": 'https://tonejs.github.io/audio/salamander/Fs4.mp3',
//     //             "A4": "https://tonejs.github.io/audio/salamander/A4.mp3",},
//     //         {
//     //             onload: () => {
//     //                 setLoaded(true);
//     //             }
//     //         }
//     //     ).toDestination();
//     // },[]);
    



//     const key = <div className={color} note={note}>
//     <button
//             className={color+'Key'} note={note} type="button"
//             onMouseDown={console.log(props.sampler)}
//             onMouseUp={console.log(props.sampler)}>
//     </button>
// </div>  

//     return (key);
// }



// export default Key;