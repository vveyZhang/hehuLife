import React,{Component} from 'react';
import PropsTypes from 'prop-types';
import { Form, Input,Upload,Icon,message, Button,Row,Col,Radio,DatePicker} from 'antd';
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
            labelCol: { span: 4 },
            wrapperCol: { span: 18 }
        }
        const BtnLayout={
            wrapperCol: { span: 18,offset:4}
        }
        return(
            <div className="infor-container ">
                <Row className="infor-row">
                    <Col span={4} ><p className='wx-label'>微信名：</p></Col>
                    <Col span={18}><p className="wx-name">vvey</p></Col>
                </Row>
                <Row className="infor-row">
                    <Col span={4} ><p className='wx-label'>用户类型：</p></Col>
                    <Col span={18}><p className="wx-name">店主</p></Col>
                </Row>
                <Form onSubmit={this.handleSubmit} className="infor-form" layout='horizontal'>
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
                    <FormItem className="infor-row" label="生日：" {...itemLayout}>
                        {getFieldDecorator('date-picker')(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem className="infor-row" label="手机号：" {...itemLayout}>
                        {getFieldDecorator('phone',{
                            rules: [{type:'string',required: true, message: '请填写你的手机号'}]
                        })(
                            <Input  style={{width:"40%"}}  placeholder="你的手机号"/>
                        )}
                    </FormItem>
                    <FormItem className="infor-row" {...BtnLayout}>
                        <Button type="primary" onClick={()=>this.submit(getFieldsError(['shopName','address','introduce']))} className="infor-submit" htmlType="submit" size="large">保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const MyInfor= Form.create()(InforForm);
export default MyInfor
