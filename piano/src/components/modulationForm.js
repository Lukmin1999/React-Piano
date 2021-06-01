import React from 'react';

function ModulationForm({setModulationType}) {
    return (
        <form className='modulationForm'>
            <label htmlFor="modulation">Modulation:</label>
            <select onChange={e=>setModulationType(e.target.value)} id="modulation" name="modulation">
                <option value="sine">Sine</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="triangle">Triangle</option>
                <option value="square">Square</option>
            </select>
        </form>
        );
}

export default ModulationForm;