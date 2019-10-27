import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return (
            <ul style={{float: 'left'}}>
                <li><NavLink to='/'>Todolist</NavLink></li> 
                <li><NavLink to='/hoc'>Hoc</NavLink></li>
                <li><NavLink to='/request'>Request</NavLink></li>  
                <li><Link to={
                    {
                        pathname:'/userinfor',
                        search:'?id=100',            
                        state:200
                    }
                }>userinfor1</Link></li> 

            </ul>
        )
    }
}