import React, { useState} from 'react';

function BlackKeys(props) {
    const [number, ] = useState(props.number)
    const COLOR = "black";

    const notesToRender = ["C#"+number,"D#"+number,"F#"+number,"G#"+number,"A#"+number];
    const map = note => 
    <button onTouchStart={props.onTouchStart}
            onMouseOut={props.onMouseOut} onMouseOver={props.onMouseOver} key={note}
            className={COLOR+'Key'} value={note} type="button"
            onMouseDown={props.onPianoPress}
            onMouseUp={props.onMouseUp}
            onTouchEnd={props.onMouseUp}>
    </button>;
    return (
    <div className='keyContainer'>
      {notesToRender.map(map)}
    </div>
    );
}

export default BlackKeys;
