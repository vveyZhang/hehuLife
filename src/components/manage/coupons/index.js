import React,{Component} from 'react';

export default  class Coupons extends Component{
    render(){
        return(<div>
            {this.props.children}
        </div>)
    }
}