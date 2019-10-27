import React, { Component } from 'react'

export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addItem(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    
    render(){
        return(
            <div>
                <div>
                    <input name="inp" onKeyDown={this.handleInput} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }

}
