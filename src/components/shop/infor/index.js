import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tooltip,Upload,Icon,message , Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
function beforeUpload(file) {
    console.log(file);
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('图片只能为jpg!');
    }
    console.log()
    const isLt2M = file.size/1024 <200;

    if (!isLt2M) {
        message.error('图片大小不能超过200KB!');
    }
    console.log(isLt2M);
    console.log(isJPG);
    return isJPG && isLt2M;
}
class InforForm extends Component {


    state={
        uerName:'vvey',
        shopName:'好喝奶行',
        shopUrl:'http://localhost:8080/images/image.jpg',
        wxUrl:null
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    changess(){
        console.log(2)
    }
    render() {
        const { getFieldDecorator,getFieldValue,getFieldsValue} = this.props.form;
        const itemLayout={
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
        }

        return(
            <div className="infor-container ">
                <Row className="infor-row">
                    <Col span={4} ><p className='wx-label'>微信名：</p></Col>
                    <Col span={14}><p className="wx-name">{this.state.uerName}</p></Col>
                </Row>
                <Form onSubmit={this.handleSubmit} className="infor-form" layout='horizontal'>
                    <FormItem className="infor-row" label="店铺名：" {...itemLayout}>
                        {getFieldDecorator('shopName', {
                            rules: [{ required: true, message: '店铺名不能为空' }]
                        })(
                            <Input  placeholder="真实店铺名" />
                        )}
                    </FormItem>
                    <FormItem className="infor-row infor-upload-row" label="店铺照片：" {...itemLayout}>
                        {getFieldDecorator('shopImg', {
                            valuePropName: 'shopImage',
                            getValueFromEvent: this.normFile
                        })(
                            <Upload
                                className="shop-uploader"
                                name="avatar"
                                showUploadList={false}
                                multiple={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={()=>this.changess()}
                                >
                                {
                                    this.state.shopUrl?
                                        <div className="test">
                                            <img src={this.state.shopUrl} alt="" className="shop-img" />
                                            <p className="shop-uploader-tips">修改</p>
                                        </div>
                                         :
                                        <Icon type="plus" className="shop-uploader-trigger" />
                                }
                                <span className="upload-tips">图片格式为jpg,且大小不能超过200KB</span>

                            </Upload>
                        )}
                    </FormItem>
                    <FormItem className="infor-row infor-upload-row" label="微信二维码：" {...itemLayout}>
                        {getFieldDecorator('wxCode', {
                            valuePropName: 'shopImage',
                            getValueFromEvent: this.normFile
                        })(
                            <Upload
                                className="shop-uploader"
                                name="avatar"
                                showUploadList={false}
                                multiple={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={()=>this.changess()}
                                >
                                {
                                    this.state.shopUrl?
                                        <div className="test">
                                            <img src={this.state.shopUrl} alt="" className="shop-img" />
                                            <p className="shop-uploader-tips">修改</p>
                                        </div>
                                         :
                                        <Icon type="plus" className="shop-uploader-trigger" />
                                }
                                <span className="upload-tips">图片格式为jpg,且大小不能超过200KB</span>

                            </Upload>
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="地址：" {...itemLayout}>
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: '地址不能为空' }]
                        })(
                            <Input  placeholder="真实地址" />
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="店铺简介：" {...itemLayout}>
                        {getFieldDecorator('introduce', {
                            rules: [{ required: true, message: '简介不能为空' }]
                        })(
                            <Input type="textarea"  placeholder="说点什么吧..." />
                        )}
                    </FormItem>
                </Form>
            </div>

        )
    }
}

const ShopInfor= Form.create()(InforForm);
export default ShopInfor