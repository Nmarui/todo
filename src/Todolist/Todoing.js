import React, { Component } from 'react'

export default class Todoing extends Component {
    render(){
        return(
            <div>
                <h1>正在进行-----<span>{this.props.num1}</span></h1>
                <ul>
                    {
                        this.props.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.props.changeChecked.bind(this, key)}/>
                                        {value.title}
                                        <button onClick={this.props.delItem.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                            return ''
                        })
                    }
                </ul>
                <h1>已经完成-----<span>{this.props.num2}</span></h1>
                <ul>
                    {
                        this.props.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked}  onChange={this.props.changeChecked.bind(this, key)}/>
                                        {value.title}
                                        <button onClick={this.props.delItem.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                            return ''
                        })
                    }
                </ul>
            </div>
            
        )
    }

}
