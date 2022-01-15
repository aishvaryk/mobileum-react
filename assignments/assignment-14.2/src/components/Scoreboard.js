import React from 'react';
import GameStat from './GameStat';

const ScoreBoard=(props)=>{


    return (
            <div className="scoreCard">
                <h2 className="scoreHeading">Game Stats</h2>
                <GameStat heading="Total Games" stat={props.value.totalGames} />
                <GameStat heading="Drew Games" stat={props.value.drewGames} />
                <h3 className="scoreHeading">Player O</h3>
                <GameStat heading="Games Won" stat={props.value.oWins} />
                <GameStat heading="Games Lost" stat={props.value.xWins} />
                <h3 className="scoreHeading">Player X</h3>
                <GameStat heading="Games Won" stat={props.value.xWins} />
                <GameStat heading="Games Lost" stat={props.value.oWins} />
            </div>
            );           
}


export default ScoreBoard;