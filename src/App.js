import React, {component} from 'react'
import Header from './component/header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './component/home';
import api from './component/Api';
import start from './component/start';
import about from './component/about';

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div classNamr="content"> 
                            <Route path='home' coponent={Home}/>
                            <Route path='api' coponent={Api}/>
                            <Route path='start' coponent={Start}/>
                            <Route path='about' coponent={About}/>
                        </div>
                        <div className="sider">

                        </div>
                    </div>

                </div>
            </Router>
            
        )
    }
}