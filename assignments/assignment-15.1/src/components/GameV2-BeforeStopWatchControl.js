import React from 'react';
import Status from './Status';
import Board from './Board';
import {checkGame} from '../services/TicTacToe.js'
import If from './If.js';
import MovesBoard from './MovesBoard';
import StopWatch from './StopWatch';


class Game extends React.Component {

    constructor(props){
        super(props);

        this.state=this.getInitialState();


    }

    handleCellClick=(id)=>{
        console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells= [...this.state.cells];
        // if(cells[id]!=='_')
        //     return ; //this value had  earlier.
        
        cells[id]=this.state.next;
        const newResult= checkGame(cells);
        this.setState({result:newResult});

        if(newResult.over){
            this.props.onGameOver(newResult); //inform app game is over.
        }

        const move={player:this.state.next, position:id+1};

        const moves=[...this.state.moves,move];
        this.setState({moves});
       
        const next=this.state.next==='O'?'X':'O';
        
        
        //update the state
        this.setState({cells,next});
       // console.log('cell clicked', id);
    }

    getInitialState=(id)=>{
        const s={

            cells:[  '_','_','_',
                    '_','_','_',
                    '_','_','_'
                ],
            next:'O',
            moves:[ ]  //{player:'O', position:2}

        }
        s.result=checkGame(s.cells); 
        //default result {over:false, movesLeft:9, winner:null, winningSequence:null}

        return s;

    }

    handleReset=(id)=>{
        if(this.state.result.over)
            this.setState(this.getInitialState());

    }


    render=()=>{


        return (
                <div className='game'>
                    
                    <div className='column-layout game-header'>
                    <StopWatch label="O" />
                    <Status result={this.state.result} next={this.state.next} />
                    <StopWatch  label="X" />

                    </div>
                    <div className="column-layout">
                        <Board cells={this.state.cells} 
                                onCellClick={this.handleCellClick}/>

                        <MovesBoard moves={this.state.moves}/>
                    </div>
                    <div>
                       
                    
                    </div>
                    
                    <If condition={this.state.result.over} >
                        <button
                        className="reset-button"
                        onClick={this.handleReset}
                        >Reset</button>  
                    </If>

                   
                    
                </div>
                );
                
    }

}





export default Game;