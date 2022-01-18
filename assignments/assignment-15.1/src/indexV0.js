import React from 'react';
import ReactDOM from 'react-dom';

//const component=React.createElement('h1',null,'Hello World');
const headerStyle={
    color:"blue"
}

const component=<div style={headerStyle}>
                    <h1>Hello World</h1>
                    <p>Welcome to React</p>
                    <p>2+2 = {2+2} </p>
                    <p>Date is {new Date().toLocaleDateString()}</p>
                    <p>Time is {new Date().toLocaleTimeString()}</p>                    
                </div>


const root=document.getElementById("root");

//root.innerHTML=component;

ReactDOM.render(component,root);