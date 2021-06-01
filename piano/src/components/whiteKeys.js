import React, { useState} from 'react';
// import Key from '../components/key'


function WhiteKeys(props) {
    const [number, ] = useState(props.number)

    const COLOR = "white";

    const notesToRender = ["C"+number,"D"+number,"E"+number,"F"+number,"G"+number,"A"+number,"B"+number];
    const map = note =>  <button onTouchStart={props.onTouchStart} 
                                 onTouchEnd={props.onMouseUp}
                                 onMouseUp={props.onMouseUp} 
                                 onMouseOver={props.onMouseOver} 
                                 onMouseOut={props.onMouseOut} 
                                 key={note} className={COLOR+'Key'} 
                                 value={note} 
                                 type="button" 
                                 onMouseDown={props.onPianoPress}>
                            </button>

    return (
        <div className='keyContainer'>
          {notesToRender.map(map)}
        </div>
        );
}

export default WhiteKeys
