import React from 'react';
import If from './If';

class StopWatch extends React.Component {

    state={
        cs:0, //1/100 of  a second;
        running:true,
    }

    componentDidMount(){
        this.id=setInterval(() =>{
            if(this.state.running)
                this.setState({cs: this.state.cs+1});
        },10);
    }

    componentWillUnmount(){
        if(this.id)
            clearInterval(this.id);
        this.id=null;
    }

    getTime(){
        let result={}; 
        let cs=this.state.cs; //13550
       
        let seconds= Math.floor(cs/100); //135
        let min=Math.floor(seconds/60); //2
        seconds-= min*60;  //15
        
        const twoDigit=(value)=>{
            if(value>9)
                return value;
            else
                return "0"+value;
        }

        return {
            cs:twoDigit(cs%100),
            seconds:twoDigit(seconds),
            min:twoDigit(min)
        }

        
    }

    toggleState=()=>{
        console.log('toggleing state...');
        this.setState({running: !this.state.running})
    }

    render(){
     
      const {cs,seconds,min}=this.getTime();
      return (
            <div className='stop-watch'>
                <p>{this.props.label}</p>
                <p className='stop-watch-time'>
                    <span className='stop-watch-min'>
                        {min}:
                    </span>
                    <span className='stop-watch-second'>
                        {seconds}
                    </span>
                    <If condition={this.props.fraction}>
                        <span className='stop-watch-cs'>
                            .{cs}
                        </span>
                    </If>
                </p>     
                <If condition={this.props.controls}>      
                    <button onClick={this.toggleState}>
                        {this.state.running?"PAUSE":"RESUME"}
                    </button>
                </If>
          </div> );
    
    }

}
export default StopWatch;