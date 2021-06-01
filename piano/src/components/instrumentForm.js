import React from 'react';

function instrumentForm({setInstrumentType}) {
    return (
        <form className='instrumentForm'>
            <label htmlFor="instrument">Instrument:</label>
            <select onChange={e=>setInstrumentType(e.target.value)} id="instrument" name="instrument">
                <option value="Piano">Piano</option>
                <option value="Synth">Synth</option>
                <option value="FMSynth">FMSynth</option>
            </select>
        </form>
        );
}

export default instrumentForm;