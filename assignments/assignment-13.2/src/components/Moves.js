import React from 'react';

const Moves=(props)=>{
    console.log(props)
    return (
            <div className="movesTable">
                <table>
                    <thead>
                <tr>
                    <th>Move</th>
                    <th>Player</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                    {props.moves.map((move)=><tr key={move.move}>
                        <td>{move.move}</td>
                        <td>{move.player}</td>
                        <td>{move.position}</td>
                    </tr>)}
                </tbody>
                </table>
            </div>
            );
            
}


export default Moves;