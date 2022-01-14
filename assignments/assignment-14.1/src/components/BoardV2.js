import React from 'react';
import Cell from './Cell';

class Board extends React.Component {

    constructor(props){
        super(props);

        this.state={

            cells:[  '_','_','_',
                    '_','_','_',
                    '_','_','_'
                ],

            next:'O'

        }

    }

    handleCellClick=(id)=>{
        //console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells= [...this.state.cells];
        if(cells[id]!=='_')
            return ; //this value had  earlier.
        
        cells[id]=this.state.next;

       
        const next=this.state.next==='O'?'X':'O';
        
        //update the state
        this.setState({cells,next});
        console.log('cell clicked', id);
    }


    render=()=>{

        return (
                <div className='board'>
                    <div className='cells'>
                        <Cell value={this.state.cells[0]} 
                        onCellClick={this.handleCellClick} id={0} />
                        <Cell value={this.state.cells[1]} onCellClick={this.handleCellClick} id={1} />
                        <Cell value={this.state.cells[2]} onCellClick={this.handleCellClick} id={2} />
                        <Cell value={this.state.cells[3]} onCellClick={this.handleCellClick} id={3} />
                        <Cell value={this.state.cells[4]} onCellClick={this.handleCellClick} id={4} />
                        <Cell value={this.state.cells[5]} onCellClick={this.handleCellClick} id={5} />
                        <Cell value={this.state.cells[6]} onCellClick={this.handleCellClick} id={6} />
                        <Cell value={this.state.cells[7]} onCellClick={this.handleCellClick} id={7} />
                        <Cell value={this.state.cells[8]} onCellClick={this.handleCellClick} id={8} />
                  </div>
                </div>
                );
                
    }  
    

}

export default Board;