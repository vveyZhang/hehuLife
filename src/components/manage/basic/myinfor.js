import React,{Component} from 'react';
import PropsTypes from 'prop-types';
import { Form, Input,Upload,Icon,message, Button,Row,Col,Radio,DatePicker} from 'antd';
import {Link} from 'react-router'
const FormItem = Form.Item;
const RadioGroup=Radio.Group;
class InforForm extends Component {
    state={
        shopName:'好喝奶行'
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    submit(data){
        console.log(data)
    }
    render() {
        const { getFieldDecorator,getFieldsError,getFieldsValue} = this.props.form;
        const itemLayout={
            labelCol: { span: 8 },
            wrapperCol: { span: 14 }
        }
        const BtnLayout={
            wrapperCol: { span: 8,offset:14}
        }
        return(
            <div className="infor-container">
                <div className="basic-photo">
                    <img src="https://qlogo1.store.qq.com/qzone/759625328/759625328/100?1394768297" alt="" width="120" height="120"/>
                </div>
                <div className="basic-infor">
                    用户名：<span>vvey</span>用户等级：专属会员222
                </div>
                <Form className="basic-infor-form " layout='horizontal'>
                    <FormItem className="infor-row" label="昵称：" {...itemLayout}>
                        {getFieldDecorator('name',{
                            rules: [
                                {type:'string',required: true,message: '昵称不能为空'},
                                {type:'string',max:12,message: '昵称不能超过12个字符'}
                            ]
                        })(
                            <Input style={{width:"60%"}} placeholder="输入昵称"/>
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="性别：" {...itemLayout}>
                        {getFieldDecorator('gender',{
                            required: true
                        })(
                            <RadioGroup>
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                                <Radio value="3">保密</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="简介：" {...itemLayout}>

                        {getFieldDecorator('gender',{
                            rules: [{type:'string',max:25,message: '介绍不能多超过25字符'}]
                        })(
                            <Input placeholder="说点什么介绍自己..." />
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="生日：" {...itemLayout}>
                        {getFieldDecorator('date-picker')(
                            <DatePicker  style={{width:"70%"}} />
                        )}
                    </FormItem>
                    <Row className="infor-row">
                        <Col span={8} ><p className='infor-label'>微信名：</p></Col>
                        <Col span={14}><p className="infor-name">13678077665 <Link className="change-phone-btn">更改</Link></p></Col>
                    </Row>
                    <div className="infor-row infor-row-submit">
                        <Button type="primary"  htmlType="submit" size="large">保存</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
const MyInfor= Form.create()(InforForm);
export default MyInfor
