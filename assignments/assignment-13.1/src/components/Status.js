import React from 'react';

import GameStat from './GameStat';
const Status=(props)=>{


    return (
            <div className="scoreCard">
                <h2 className="scoreHeading">Game Stats</h2>
                <GameStat heading="Total Games" stat="10" />
                <GameStat heading="Drew Games" stat="10" />
                <h3 className="scoreHeading">Player 1</h3>
                <GameStat heading="Games Won" stat="10" />
                <GameStat heading="Games Lost" stat="10" />
                <h3 className="scoreHeading">Player 2</h3>
                <GameStat heading="Games Won" stat="10" />
                <GameStat heading="Games Lost" stat="10" />
            </div>
            );           
}


export default Status;