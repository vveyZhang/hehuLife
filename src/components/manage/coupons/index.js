import React,{Component} from 'react';

export default  class Coupons extends Component{
    render(){
        return(<div className="coupons-container">
            {this.props.children}
        </div>)
    }
}