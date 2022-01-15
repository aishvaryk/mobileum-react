import React from 'react';

const Status=(props)=>{
    var style = {
        display: 'block'
    }
    if (props.status) {
        
        style.display = 'none';
    }
    
    return (
            <div>
            <div className="status1" style={style}>
                Next Move : {props.next}
            </div>
            <div className="status1"> 
                {props.status}
                </div>
            </div>
            );
            
}


export default Status;