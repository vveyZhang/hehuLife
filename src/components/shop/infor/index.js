import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tooltip,Upload,Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
class InforForm extends Component {
    state={
        uerName:'vvey',
        shopName:'好喝奶行',
        shopUrl:null,
        wxUrl:null,
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render() {
        const { getFieldDecorator,getFieldValue,getFieldsValue} = this.props.form;
        const itemLayout={
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
        }
        getFieldValue('shopName');
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
                    <FormItem className="infor-row" label="店铺名：" {...itemLayout}>
                        {getFieldDecorator('shopImg', {
                            valuePropName: 'shopImage',
                            getValueFromEvent: this.normFile
                        })(
                            <Upload
                                className="avatar-uploader"
                                name="avatar"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                >
                                {
                                    this.state.shopUrl ?
                                        <img src={imageUrl} alt="" className="avatar" /> :
                                        <Icon type="plus" className="avatar-uploader-trigger" />
                                }
                            </Upload>
                        )}
                    </FormItem>
                </Form>
            </div>

        )
    }
}

const ShopInfor= Form.create()(InforForm);
export default ShopInfor