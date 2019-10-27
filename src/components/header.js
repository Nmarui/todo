import React from 'react'
import {Link} from 'react-router-dom';
import {BrowserRouter} from BrowserRouter;

export default function Header(){

    return <div className='headerwrap'>
        <header>
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
            <div style={{float:'right',lineHeight:50 }}>
                <Link to='/home'>首页</Link>
                <Link to='/srart'>新手入门</Link>
                <Link to='/api'>API</Link>
                <Link to='/about'>关于</Link>
                <Link>注册</Link>
                <Link to='login'>登录</Link>
                <Link></Link>
            </div>
        </header>
    </div>
}