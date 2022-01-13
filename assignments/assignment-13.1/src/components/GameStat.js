import React from 'react';

const Status=(props)=>{
    
    return (
            <div className="status">
                <div className="statHeading">{props.heading}</div>
                <div className="stat">{props.stat}</div>
            </div>
            );           
}


export default Status;