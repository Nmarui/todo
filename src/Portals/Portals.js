import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Portals extends Component {
    cli = ()=>{
        console.log('portals click');
    }
    render(){
        return(
            ReactDOM.createPortals(
                <div onClick={this.cli}>{this.props.children}
                    <Portals />
                </div>
                
            )
             
        )
    }
}