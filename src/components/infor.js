import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
class InforForm extends Component {
    state={
        uerName:'vvey',
        shopName:{
            name:'好喝奶行',
            isEdited:false
        }
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
                <Row className="row">
                    <Col span={4} ><p className='wx-label'>微信名：</p></Col>
                    <Col span={14}><p className="wx-name">{this.state.uerName}</p></Col>
                </Row>
                <Form onSubmit={this.handleSubmit} className="infor-form" layout='horizontal'>
                    <FormItem className="row" label="店铺名：" {...itemLayout}>
                        {getFieldDecorator('shopName', {
                            rules: [{ required: true, message: '店铺名不能为空' }]
                        })(
                            <div>

                                {
                                    this.state.shopName.isEdited?<Input  className="infor-input" onChange={(e)=>{
                                     this.setState({
                                       shopName:{
                                          name:e.target.value,
                                          isEdited:true
                                       }
                                     })
                                    }} defaultValue={this.state.shopName.name}  placeholder="真实店铺名" />:null
                                }
                                {
                                    !this.state.shopName.isEdited?<span className="infor-value">{this.state.shopName.name}</span>:null
                                }
                                <label className="editor-btn" style={{color:this.state.shopName.isEdited?'#f12020':"#000"}} onClick={()=>{
                                this.setState({
                                   shopName:{
                                       name:this.state.shopName.name,
                                       isEdited:!this.state.shopName.isEdited
                                   }
                                })
                                }}>{this.state.shopName.isEdited?'保存':"修改"}</label>
                            </div>

                        )}
                    </FormItem>
                </Form>
            </div>

        )
    }
}

const ShopForm = Form.create()(InforForm);
console.log(ShopForm)
export default ShopForm

