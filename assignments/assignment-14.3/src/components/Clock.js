import React from 'react';

class Clock extends React.Component {
   
    state={
        time:0
    }

    currentTimer = () => {
        if(this.props.player === this.props.currentPlayer)
            this.setState({time: this.state.time + 1});
    }

    
    componentDidMount(){
        this.timer= setInterval(() =>{
            this.currentTimer();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


    render(){
        return <div className="clock">
            <span className="timerPlayer">{this.props.player}</span>
            <span className="timer">{this.state.time}</span>
        </div>
    }
}

export default Clock;

