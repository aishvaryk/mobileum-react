import React from 'react';
import Cell from './Cell';

class Board extends React.Component {


    render=()=>{

        return (
                <div className='board'>
                    <div className='cells'>
                        {this.props.cells.map((cell, cellId)=> <Cell value={cell} onCellClick={this.props.onCellClick} id={cellId} key={cellId} />)}
                  </div>
                </div>
                ); 
    }  
    

}

export default Board;