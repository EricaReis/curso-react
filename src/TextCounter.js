import React, { Component } from 'react'; 

class TextCounter extends Component{
    static defaultProps = {
        limit: 15
    }

    constructor(props){
        super(props);
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        /* O bind mostra pra função quem é o this (no caso o this vai apontar p o proprio componente) */
    }

    handleChange(event){
        const element = event.target,
        text = element.value;


        if(text.length <= this.props.limit){
        this.setState({
            totalChars:  text.length,
            text
        });
        }
    }

    render(){
        const {state, props} = this;
        return (
            <div>
                <h1>Meu Contador</h1>
                <textarea onChange={this.handleChange} value={state.text}/> 
                <div>
                    <strong>Total:</strong> { state.totalChars } / { props.limit }
                </div>
            </div>
        )
    }
}

export default TextCounter;