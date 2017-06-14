import React,{Component} from 'react';
import {Input,Icon,message,Button} from 'antd';
export default class Name extends Component{
    state={
        editor:false
    };
    editor(){
        this.setState({
            editor:true
        })
    }
    cancel(){
        this.setState({
            editor:false
        })
    }
    save(){
        this.setState({
            editor:false
        })
    }
    render(){
        const {name}=this.props
        return(<div className="shop-infor">
            {
                !this.state.editor?
                    <div className="infor-show-content">
                        <p className="shop-name">{name}</p><span className="shop-editor"
                                                                 onClick={()=>this.editor()}>
                            <Icon type="edit" className="icon"  />编辑</span>
                    </div>
                    :
                    <div className="shop-name-input" >
                        <Input  defaultValue={name} placeholder="请输入店铺名" />
                        <span className="shop-editor save" onClick={()=>this.save()}>保存</span>
                        <span className="shop-editor" onClick={()=>this.cancel()}>取消</span>
                    </div>
            }
        </div>)

    }
}
