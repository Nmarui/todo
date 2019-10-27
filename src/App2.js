import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Sider from './Sider';
import { Button } from 'antd';
import UserInfor from './UserInfor';
import Hooks from './hooks';
//antd使用：
//1、下载安装antd框架： npm i antd
//2、在某个css里引入antd 的css：@import ‘~antd/dist,
//3、在需要的组建内的import相应的组件，然后使用

function Login(props){
    console.log(props);
    return <button>登录</button>
}
let loginwithRouter = withRouter(Login);

export default class App extends Component {
    render() {
        //所有的组件都要放在BrowserRouter里面
        //Router只能有一个子元素
        return (
            <Router>
                <div>
                    <Sider/>
                    {/*<Button type="primary">Primary</Button>*/}
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <Route exact path='/' render={()=><Todilist/>}/>
                        <Route path='/hoc' component={Hoc} />
                        <Route path='/request' component={Request}/>
                        <Route path='/usrinfor' component={UserInfor}></Route>
                        <Route path='/hooks/:id' component={Hooks}></Route>
                        <Redirect from='/old' to='hoc'/>
                        <Route path='*' component={NoMatch}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}