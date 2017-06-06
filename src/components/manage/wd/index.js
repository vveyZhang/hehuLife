import React,{Component} from 'react';

export default class WdContainer extends Component{
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}
