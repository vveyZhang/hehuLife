import React,{Component} from 'react';
import BasicFrom from './from.js'
import {Icon} from 'antd'
export default class Basic extends Component{
    state={
        editor:false
    }
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
    render(){
        return(<div>
            {
                !this.state.editor?<div className="shop-basic-container">
                    <p className="shop-basic-row">联系人：张先生<span></span>座机号码：13678077665</p>
                    <p className="shop-basic-row">营业时间：9：00—17：00<span></span>地址：上升街101号</p>
                    <p className="shop-basic-row">经营范围：外套、内衣、牛奶</p>
                    <span className="shop-editor" onClick={()=>this.editor()}><Icon type="edit" className="icon"  />编辑</span>
                </div>
                    :
                    <div className="shop-basic-from">
                        <BasicFrom cancel={()=>this.cancel()} />
                    </div>
            }

        </div>)
    }

}
