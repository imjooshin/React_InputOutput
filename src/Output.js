import React, { Component } from 'react';
import Input from './Input';

class Output extends Component{
    state = {output: ""};
    changeHandler = () => {
        var x = document.getElementById("input")
        this.setState({output: x.value})
    }
    render(){
        return (
            <div>
                <Input changeHandler={this.changeHandler}/>
                <h2>Output Component</h2>
                <p>User Name</p>
                <p>{this.state.output}</p>
            </div>
        )
    }
}

export default Output;