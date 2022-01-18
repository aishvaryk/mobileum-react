import React from 'react';

const Cell=(props)=>{

    let value=props.value;

    const handleClick=()=>{
        console.log('cell clicked');
        value= value==="O"?"X":"O";
        console.log('value changed to ',value);
    }

    return (
            <button className='cell' onClick={handleClick}>
                {value}
            </button>
            );
            
}


export default Cell;