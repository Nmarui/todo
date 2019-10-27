import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';



export default class Todolist extends Component {
    constructor() {
        super()
        this.state = {
            list: JSON.parse(localStorage.getItem('todolist'))||[],
            num1:0,
            num2:0
        }
    }
    addItem = (msg) => {
        const temp = {
            title: msg,
            checked: false
        }
        const list = this.state.list
        list.push(temp)
        this.setState({
            list: list
        },()=>{
            this.Num();
        })
        localStorage.setItem('todolist', JSON.stringify(list))
    }
    delItem = (msg) => {
        const list = this.state.list
        list.splice(msg, 1)
        this.setState({
            list: list
        },()=>{
            this.Num();
        })
        localStorage.setItem('todolist', JSON.stringify(list))

    }
    changeChecked = (msg) => {
        const list = this.state.list
        list[msg].checked = !list[msg].checked
        this.setState({
            list: list
        },()=>{
            this.Num();
        })
        localStorage.setItem('todolist', JSON.stringify(list))
    }
    Num=()=>{
        const list = this.state.list;
        let num1=0,num2=0
        for(var i in this.state.list){
            if(!list[i].checked){
                num1++;
            }else{
                num2++;
            }
        }
        this.setState({
            num1:num1,num2:num2
        })
    }
    //生命周期函数
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('todolist'))
        if (list) {
            this.setState({
                list: list
            })
        }
        this.Num();
    }
    render(){
        return (
            <div>
                <Todoinput addItem={this.addItem}/>
                <Todoing delItem={this.delItem} list={this.state.list} num1={this.state.num1} num2={this.state.num2} addItem={this.addItem} changeChecked={this.changeChecked}/>
            </div>
        )
    }


}
