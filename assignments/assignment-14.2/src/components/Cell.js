import React from 'react';


const Cell = (props) => {


    var style = {
        border: '1px solid black'
    }
    if (props.id ===0 || props.id ===3 || props.id ===6) {
        style.borderLeft = '0';
    }
    if (props.id ===0 || props.id ===1 || props.id ===2) {
        style.borderTop = '0';
    }
    if (props.id ===2 || props.id===5 || props.id===8) {
        style.borderRight = '0';
    }

    if (props.id===6 || props.id===7 || props.id===8) {
        style.borderBottom = '0';
    }

    if (props.value==="_") {
        style.color = 'white';
    }

    if (props.isGreen) {
        style.backgroundColor = 'lightgreen';
    }


    return (
        <button className='cell' style={style}
            onClick={() => props.onCellClick(props.id)}>
            {props.value}
        </button>
    );

}


export default Cell;