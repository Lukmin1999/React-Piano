import React, {useState} from 'react';
import WhiteKeys from '../components/whiteKeys'
import BlackKeys from '../components/blackKeys'




function Octave(props) {
    const [number, ] = useState(props.number)
    return (
    <div className ='Octave'>
        <BlackKeys onTouchStart={props.onTouchStart} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onPianoPress={props.onMouseDown} onMouseUp={props.onMouseUp} number={number} />
        <WhiteKeys onTouchStart={props.onTouchStart} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onPianoPress={props.onMouseDown} onMouseUp={props.onMouseUp} number={number} />
    </div>
    );
}

export default Octave;
