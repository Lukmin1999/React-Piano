import React from 'react';

function Toggle({onToggleChange}){
    return (<label className="switch"> 
    <input id="toggle" type="checkbox" onChange={onToggleChange}></input>
    <span className="slider"></span>
    </label>);
}

export default Toggle;