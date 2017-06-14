import React,{Component} from 'react';
import { Button, DatePicker, Form, Input, Radio,Select} from 'antd';
const FormItem = Form.Item;
const Option=Select.Option;
const formItemLayout={
    labelCol: { span: 6},
    wrapperCol: { span: 14 }
};
var date=new Date();
class CouponsInforFrom extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form layout="vertical">
                <FormItem label="名称：" {...formItemLayout}>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: '名称不能为空' }]
                    })(
                        <Input placeholder="卡卷名称" />
                    )}
                </FormItem>
                <FormItem
                    label="类型："
                    {...formItemLayout}
                    >
                    {
                        getFieldDecorator('type',{
                            rules: [{ required: true,message:'请选择类型'}]
                        })(
                            <Select
                                style={{ width: '45%' }}
                                placeholder="选择类型"
                                >
                                <Option value="优惠券">优惠券</Option>
                                <Option value="礼品卡">礼品卡</Option>
                                <Option value="红包">红包</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="名称：" {...formItemLayout}>
                    {getFieldDecorator('total', {
                        rules: [{ required: true, message: '数量不能为空' }]
                    })(
                        <Input style={{width:"45%"}} placeholder="数量" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="开始时间："
                    >
                    {getFieldDecorator('start-date')(
                        <DatePicker  disabledDate={this.startDate} placeholder="不填,默认立即开始"  />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="结束时间："
                    >
                    {getFieldDecorator('end-date')(
                        <DatePicker  placeholder="不填,默认一直进行"  />
                    )}
                </FormItem>
                <FormItem {...formItemLayout}
                    label="重复领取：">
                    {getFieldDecorator('modifier', {
                        initialValue: '1',
                    })(
                        <Radio.Group>
                            <Radio value="1">是</Radio>
                            <Radio value="2">否</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
                <FormItem label="备注：" {...formItemLayout}>
                    {getFieldDecorator('other')(
                        <Input placeholder="使用条件，范围等等" type="textarea" style={{resize:"none"}}/>
                    )}
                </FormItem>
            </Form>
        )
    }
}
const  CouponsFrom=Form.create()(CouponsInforFrom);
export default CouponsFrom