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
        if(!this.state.running) 
            return alert('Hit Start to Continue');
        
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

    getInitialState=(next='-',running=false,previousStart)=>{
        const s={

            cells:[  '_','_','_',
                    '_','_','_',
                    '_','_','_'
                ],
            previousStart:previousStart,
            next:next,
            running:running,
            moves:[ ]  //{player:'O', position:2}

        }
        s.result=checkGame(s.cells); 
        //default result {over:false, movesLeft:9, winner:null, winningSequence:null}

        return s;

    }

    handleStart=(id)=>{
        console.log('previous start',this.state.previousStart);

        let next=this.state.previousStart==='O'?'X':'O';
        console.log('next start',next);
        if(this.state.result.over || this.state.result.movesLeft===9){
            this.setState(this.getInitialState(next,true,next));           
        }
            

    }

    render=()=>{


        return (
                <div className='game'>
                    
                    <div className='column-layout game-header'>
                    <StopWatch label="O"  
                        running={this.state.next==='O'} 
                        />
                    <Status result={this.state.result} next={this.state.next} />
                    <StopWatch  label="X" 
                        running={this.state.next==='X'} />

                    </div>
                    <div className="column-layout">
                        <Board cells={this.state.cells} 
                                result={this.state.result}
                                onCellClick={this.handleCellClick}/>

                        <MovesBoard moves={this.state.moves}/>
                    </div>
                    <div>
                       
                    
                    </div>
                    
                    <If condition={this.state.result.over|| this.state.result.movesLeft===9} >
                        <button
                        className="reset-button"
                        onClick={this.handleStart}
                        >Start</button>  
                    </If>

                   
                    
                </div>
                );
                
    }

}





export default Game;