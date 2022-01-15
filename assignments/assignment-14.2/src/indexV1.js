import React from 'react';
import ReactDOM from 'react-dom';

//const component=React.createElement('h1',null,'Hello World');

const Title =(arg)=>{
    //write your logic before returning JSX
    console.log('arg',arg);
    const titleStyle={
        color: arg.color || "black"
    };   

    return <h1 style={titleStyle}>{arg.children}</h1>;
} 

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render(){ 
        
        return  <div><Title color='brown'  >{this.props.title}</Title></div>;
    }
}

class App extends React.Component {

    render(){
        return (
            <div >
                <Header title="Tic Tac Toe Extreme"/>
                <Game/>
            </div>
        );
    }
}


function ScoreBoard (){
    return  <p>score board</p>
}

class Game extends React.Component {

    render(){
        return <div>
        <h2>Game</h2>
        <ScoreBoard/>
    </div>
    }

}




const root = document.getElementById("root");
ReactDOM.render(<App/>, root);