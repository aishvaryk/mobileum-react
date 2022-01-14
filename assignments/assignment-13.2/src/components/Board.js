import React from 'react';
import Cell from './Cell';

class Board extends React.Component {


    render=()=>{

        return (
                <div className='board'>
                    <div className='cells'>
                        <Cell value={this.props.cells[0]} 
                        onCellClick={this.props.onCellClick} id={0} />
                        <Cell value={this.props.cells[1]} onCellClick={this.props.onCellClick} id={1} />
                        <Cell value={this.props.cells[2]} onCellClick={this.props.onCellClick} id={2} />
                        <Cell value={this.props.cells[3]} onCellClick={this.props.onCellClick} id={3} />
                        <Cell value={this.props.cells[4]} onCellClick={this.props.onCellClick} id={4} />
                        <Cell value={this.props.cells[5]} onCellClick={this.props.onCellClick} id={5} />
                        <Cell value={this.props.cells[6]} onCellClick={this.props.onCellClick} id={6} />
                        <Cell value={this.props.cells[7]} onCellClick={this.props.onCellClick} id={7} />
                        <Cell value={this.props.cells[8]} onCellClick={this.props.onCellClick} id={8} />
                  </div>
                </div>
                );
                
    }  
    

}

export default Board;