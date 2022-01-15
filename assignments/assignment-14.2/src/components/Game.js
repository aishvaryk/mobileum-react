import React from "react";
import Status from "./Status";
import Board from "./Board";
import ScoreBoard from "./Scoreboard";
import Moves from "./Moves";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    
    handleCellClick = (id) => {
        const cells = [...this.state.cells];
        if (cells[id] !== "_") return; //this value had  earlier.

        cells[id] = this.state.next;
        let gameOver = this.state.gameOver;
        
        var moveNo = 1
        if (!gameOver) {
            moveNo = this.state.moveNo+1;
        }
        let move = {
            move:moveNo,
            player: cells[id],
            position: id
        }
        const next = this.state.next === "O" ? "X" : "O";

        let gameStatus = this.checkGameStatus(cells);
        let scoreboard = this.state.scoreboard;
        let moves = this.state.moves;
        moves.push(move);
        if (gameStatus[0] !== null) {
            gameOver = true;
            scoreboard.totalGames +=1;

            if (gameStatus[0] === "Winner is O") {
                scoreboard.oWins +=1;
            }
            else if (gameStatus[0] === "Winner is X") {
                scoreboard.xWins+=1;
            }
            else {
                scoreboard.drewGames+=1;
            }
        }
        else {
            gameOver = false;
        }

        this.setState({ cells, next, gameStatus,scoreboard, gameOver,moves, moveNo});
    };

    checkGameStatus = (cells) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let combination of winningCombinations) {
            if (
                cells[combination[0]] === cells[combination[1]] &&
                cells[combination[1]] === cells[combination[2]]
            ) {
                if (cells[combination[0]] === "X") {
                    return ["Winner is X", combination];
                } else if (cells[combination[0]] === "O") {
                    return ["Winner is O", combination];
                }
            }
        }

        for (let cell of cells) {
            if (cell === "_") {
                return [null, []];
            }
        }
        return ["Stalemate", []];
    };
    getInitialState = (id) => {
        return {
            cells: ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
            
            next: "O",
            gameStatus: [null,[]],
            scoreboard: {
                totalGames: 0,
                drewGames: 0,
                oWins: 0,
                xWins: 0,
            },
            gameOver: false,
            moves:[],
            moveNo:0,
        };
    };

    getScoreboard = (id) => {
        return this.state.scoreboard;
    }
    getResetState = (id) => {
        return {
            cells: ["_", "_", "_", "_", "_", "_", "_", "_", "_"],

            next: "O",
            gameStatus: [null,[]],
            scoreboard: this.getScoreboard(),
            gameOver: false,
            moves: [],
            moveNo: 0,
        };
    };


    handleReset = (id) => {
        if (this.state.gameOver) {   
            this.setState(this.getResetState());
        }
    };

    render = () => {
        return (
            <div className="screen">
            <div className="game">
                <Status next={this.state.next} status={this.state.gameStatus[0]}/>
                <Board cells={this.state.cells} combination={this.state.gameStatus} onCellClick={this.handleCellClick} />
                <button className="reset-button" onClick={this.handleReset}>
                    Reset
                </button>
            </div>
            <div className="move">
                <Moves moves={this.state.moves}/>
            </div>
            <div className="scoreboard">
                <ScoreBoard value={this.state.scoreboard}/>
            </div>
            </div>
        );
    };
}

export default Game;
