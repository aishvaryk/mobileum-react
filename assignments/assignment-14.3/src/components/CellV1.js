import React from 'react';

class Cell extends React.Component {

    constructor(props){
        super(props);
        
        //this.handleClick = this.handleClick.bind(this);
        this.state={value: this.props.value}

    }


    handleClick=()=>{
        console.log('cell clicked');
        const value=this.state.value==='X'?'O':'X';
        this.setState({ value: value});
        console.log('value changed to ',this.state.value);

    }

    render(props){

        
    
        return (
                <button className='cell' onClick={this.handleClick}>
                    {this.state.value}
                </button>
        );
                
    }

}


export default Cell;