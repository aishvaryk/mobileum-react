import React from 'react';
import Cell from './Cell';

class Board extends React.Component {


    render=()=>{
        var cc = this.props.combination[1];
        if (this.props.combination[0]==="Stalemate") {
            cc = [0,1,2,3,4,5,6,7,8]
        }
        return (
                <div className='board'>
                    <div className='cells'>
                        {this.props.cells.map((cell, cellId)=> <Cell value={cell} onCellClick={this.props.onCellClick} id={cellId} key={cellId} isGreen={cc.includes(cellId)}/>)}
                  </div>
                </div>
                ); 
    }  
    

}

export default Board;