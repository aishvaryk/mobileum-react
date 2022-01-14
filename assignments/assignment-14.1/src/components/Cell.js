import React from 'react';


const Cell = (props) => {

    return (
        <button className='cell'
            onClick={() => props.onCellClick(props.id)}>
            {props.value}
        </button>
    );

}


export default Cell;