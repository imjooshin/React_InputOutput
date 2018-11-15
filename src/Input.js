import React from 'react';

function Input(props){
    return <div>
            <h2>Input Component</h2>
            <input id="input" onChange={props.changeHandler} placeholder="change this input text"></input>
        </div>
}

export default Input;