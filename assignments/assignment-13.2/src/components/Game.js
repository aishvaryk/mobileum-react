import React from "react";
import Status from "./Status";
import Board from "./Board";
import ScoreBoard from "./Scoreboard";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    handleCellClick = (id) => {
        //console.log('cell',id,'clicked');
        //never change original value directly
        //always work on a duplicate
        const cells = [...this.state.cells];
        if (cells[id] !== "_") return; //this value had  earlier.

        cells[id] = this.state.next;

        const next = this.state.next === "O" ? "X" : "O";
        console.log(cells);
        //update the state
        let gameStatus = this.checkGameStatus(cells);
        let scoreboard = this.state.scoreboard;
        let gameOver = this.state.gameOver;
        if (gameStatus !== null) {
            gameOver = true;
            scoreboard.totalGames +=1;

            if (gameStatus === "Winner is O") {
                scoreboard.oWins +=1;
            }
            else if (gameStatus === "Winner is X") {
                scoreboard.xWins+=1;
            }
            else {
                scoreboard.drewGames+=1;
            }
        }
        else {
            gameOver = false;
        }
        this.setState({ cells, next, gameStatus,scoreboard, gameOver });
        console.log("cell clicked", id);
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
                    return "Winner is X";
                } else if (cells[combination[0]] === "O") {
                    return "Winner is O";
                }
            }
        }

        for (let cell of cells) {
            if (cell === "_") {
                return null;
            }
        }
        return "Stalemate";
    };
    getInitialState = (id) => {
        return {
            cells: ["_", "_", "_", "_", "_", "_", "_", "_", "_"],

            next: "O",
            gameStatus: null,
            scoreboard: {
                totalGames: 0,
                drewGames: 0,
                oWins: 0,
                xWins: 0,
            },
            gameOver: false,
        };
    };

    getScoreboard = (id) => {
        return this.state.scoreboard;
    }
    getResetState = (id) => {
        return {
            cells: ["_", "_", "_", "_", "_", "_", "_", "_", "_"],

            next: "O",
            gameStatus: null,
            scoreboard: this.getScoreboard(),
            gameOver: false,
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
                <Status next={this.state.next} status={this.state.gameStatus}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
                <button className="reset-button" onClick={this.handleReset}>
                    Reset
                </button>
            </div>
            <div className="scoreboard">
                <ScoreBoard value={this.state.scoreboard}/>
            </div>
            </div>
        );
    };
}

export default Game;
