import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom'
import Good from './Good';
import All from './All'
export default class Home extends Component{
    render(){
        this.props.match.url;
        return(
            <div>
                <div>
                    <Link to='/all'>全部</Link>
                    <Link to='/good'>精华</Link>
                    <Link to='/share'>分享</Link>
                    <Link to='/job'>招聘</Link>
                </div>
                <div>
                    <Route path='/all' component={All} />
                    <Route path='/good' component={Good}/>
                    <Route path='/share' component={share}/>
                    <Route path='/job' component={job}/> 
                </div>
            </div>
            
        )
    }
}