import React,{Component} from 'react';
import {Input,Icon,message,Button} from 'antd';
export default class Introduce extends Component{
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
        const {introduce}=this.props
        return(<div style={{ padding: "30px 120px",background:!this.state.editor?'none':'#fefef2',borderTop:'1px solid #ececec'}} >
            {
                !this.state.editor?
                    <div>
                        <p className="shop-introduce">{introduce}</p>
                    </div>
                    :
                    <div className="shop-introduce-input" >
                        <Input  defaultValue={introduce} type="textarea" placeholder="说点什么介绍自己的店铺" />
                    </div>
            }
            {
                !this.state.editor?
                <div className="shop-introduce-btn shop-introduce-editor">
                    <Button onClick={()=>this.editor()}>编辑</Button>
                </div>
                    :
                <div className="shop-introduce-btn">
                    <Button type="primary">保存</Button> <Button style={{marginLeft:"15px"}} onClick={()=>this.cancel()}>取消</Button>
                </div>
            }
        </div>)

    }
}
