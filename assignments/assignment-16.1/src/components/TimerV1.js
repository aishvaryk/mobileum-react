
import {Component} from 'react';

export class Timer extends Component {

    state={
        time:new Date()
    }

    componentDidMount(){
        console.log('timer based component mounted');
        this.timer=setInterval(() =>{
            this.setState({time:new Date()});
        },1000);
    }

    componentWillUnmount(){
        console.log('timer based component unmounted');
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    render(){

        const TargetComponent=this.props.component;
        return <TargetComponent {...this.props} now={this.state.time} />

    }
};
export const withTimer= (TargetComponent)=>{
    //HOC component
    let TimerComponent= (props)=>{
        return <Timer {...props} component={TargetComponent} />    }

    return TimerComponent;
};