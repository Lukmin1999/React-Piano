import React from 'react';
import Octave from '../components/octave'
function Keyboard(props){
    const octavesToRender = [2,3,4,5];
    const map = num =><Octave onTouchStart={props.onTouchStart} number={num} onMouseOut={props.onMouseOut} onMouseOver={props.onMouseOver} key={num} 
    onMouseDown={props.onPianoPress}
    onMouseUp={props.onMouseUp}/>
    return (<div className='Keyboard'>
        {octavesToRender.map(map)}</div>);
}

export default Keyboard;
