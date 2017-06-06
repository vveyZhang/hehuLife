import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Input,Upload,Icon,message,Button} from 'antd';
import {connect} from 'react-redux'
import Name from './name.js';
import Basic from './basic/basic.js'
import Introduce  from './introduce.js'
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('图片只能为jpg!');
    }
    const isLt2M = file.size/1024 <200;
    if (!isLt2M) {
        message.error('图片大小不能超过200KB!');
    }
    return isJPG && isLt2M;
}
class MyShop extends Component {
    render() {
        const {name,url,introduce,codeUrl}=this.props.shop;
        return(
            <div className="infor-container ">
                <div className="shop-photo-container">
                    <Upload
                        className="shop-uploader-picture"
                        name="avatar"
                        showUploadList={false}
                        multiple={false}
                        beforeUpload={beforeUpload}
                        >
                        <div className="shop-picture-container">
                            <img src={url} alt="" className="shop-picture" />
                            <p className="shop-uploader-tips"><Icon type="upload" /></p>
                        </div>
                    </Upload>
                </div>
                <Name name={name}></Name>
                <p className="shop-level">经验等级：砖石<span></span>职位：店长</p>
                <Basic />
                <div className="shop-photo-container" style={{margin:"50px auto"}}>
                    <Upload
                        className="shop-uploader-code"
                        name="avatar"
                        showUploadList={false}
                        multiple={false}
                        beforeUpload={beforeUpload}
                        >
                        {
                            codeUrl?<img src={codeUrl} alt="" width="150" height="150"/>:
                                <Icon type="plus" className="uploader-code-trigger" />
                        }
                    </Upload>
                </div>
                <p className="shop-introduce-title">店铺简介</p>
                <Introduce introduce={introduce}></Introduce>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        shop:state.shopInfor
    }
}
export default connect(mapStateToProps)(MyShop)