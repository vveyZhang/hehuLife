import React,{Component} from 'react';
export default class Basic extends Component{
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}