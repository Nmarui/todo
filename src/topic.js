import React from 'react'

export default class Topic extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    ComponentDidMount(){
        if(prevProps.match.params.page!=this.props.match.params){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?page=4')
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
        
            
    }
    render(){
        return(
            <div>
                this.state.data.map((item)=>{

                })
            </div>
           
        )
    }
}