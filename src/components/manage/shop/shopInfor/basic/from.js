import React,{Component} from  'react'
import { Form, Input, Tooltip,Upload,Icon,message , Cascader, Select, Row, Col, Checkbox, Button} from 'antd';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const itemLayout={
    labelCol: { span: 4 },
    wrapperCol: { span: 18 }
}
const BtnLayout={
    wrapperCol: { span: 18,offset:4}
}
const plainOptions = ['吃', '喝', '玩','旅游'];
 class InforForm extends Component{
    render(){
        const { getFieldDecorator,getFieldsError,getFieldsValue} = this.props.form;
        return(
            <div>
                <FormItem className="infor-row" label="联系人：" {...itemLayout}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '联系人不能为空' }]
                    })(
                        <Input style={{width:"55%"}} placeholder="填写联系人姓名" />
                    )}
                </FormItem>
                <FormItem className="infor-row" label="店铺电话：" {...itemLayout}>
                    {getFieldDecorator('shopPhone')(
                        <Input style={{width:"55%"}} placeholder="店铺电话（座机）" />
                    )}
                </FormItem>
                <FormItem className="infor-row" label="营业时间：" {...itemLayout}>
                    {getFieldDecorator('shopTime')(
                        <Input style={{width:"55%"}} placeholder="时间格式，如：9:00-17:00" />
                    )}
                </FormItem>
                <FormItem className="infor-row" label="地址：" {...itemLayout}>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: '地址不能为空' }]
                    })(
                        <Input  placeholder="地址..." />
                    )}
                </FormItem>
                <FormItem className="infor-row" label="经营范围：" {...itemLayout}>
                    {getFieldDecorator('range')(
                        <CheckboxGroup className="shop-checkbox" options={plainOptions}  />
                    )}
                </FormItem>
                <FormItem className="infor-row" {...BtnLayout}>
                    <Button type="primary"  className="infor-submit"  size="large">保存</Button>
                    <Button type="primary" onClick={()=>{this.props.cancel()}} className="infor-submit"  size="large">取消</Button>
                </FormItem>
            </div>
        )
    }
}
const BasicFrom= Form.create()(InforForm);
export default BasicFrom