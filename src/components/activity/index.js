import React,{Component} from 'react';
export default class Activity extends Component{
    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}

