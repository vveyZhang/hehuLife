import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
export default class PhoneLayer extends Component{
    close(){
        this.props.closePreview()
    }
    render(){
        return(
            <div className="phone-layer" style={{display:this.props.status?'block':'none'}}>
                <div className="phone-layer-content">
                    <div className="phone-layer-close" onClick={()=>this.close()}>
                        <Icon type="close"/>关闭
                    </div>
                    <div className="preview-content">
                        <div className="preview-header">
                            <h1 className="preview-title">文章的标题文字</h1>
                            <p className="preview-source">店铺——好喝奶行</p>
                        </div>
                        <div className="preview-editor" dangerouslySetInnerHTML={{__html: "<p>预览文字</p>"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}