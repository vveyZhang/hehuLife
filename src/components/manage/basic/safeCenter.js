
import React,{Component} from 'react';
import { Steps, Button, message,Row,Col,Input} from 'antd';
const Step = Steps.Step;
const phoneSteps = [{
    title: '密码验证',
    content: <div>
        <Row className="infor-row">
            <Col span={10} ><p className='infor-label'>密码：</p></Col>
            <Col span={12}><Input style={{width:"50%"}} type="password" placeholder="请输入密码"/></Col>
        </Row>
    </div>
},{
    title: '短信验证',
    content: <div>
        <Row className="infor-row">
            <Col span={10} ><p className='infor-label'>新手机号：</p></Col>
            <Col span={12}><Input style={{width:"50%"}}  placeholder="请输入的手机号"/><Button style={{marginLeft:"15px"}}>立即验证</Button></Col>
        </Row>
        <Row className="infor-row">
            <Col span={10} ><p className='infor-label'>验证码：</p></Col>
            <Col span={12}><Input style={{width:"25%"}}  placeholder="输入验证码"/></Col>
        </Row>
    </div>
}];
export default class SafeCenter extends Component{
    state={
        phone:{
            current:0,
            showContent:false
        },
        password:{
            showContent:false
        }
    }
    phoneNext(){
        const phone=this.state.phone;
        this.setState({
            phone:{...phone,current:1}
        });
    }
    showPhone(){
        const phone=this.state.phone;
        this.setState({
             phone:{...phone,showContent:true}
        });
    }
    showPassword(){
        const phone=this.state.password;
        this.setState({
            password:{...phone,showContent:true}
        });
    }
    render(){
        const phoneShow=this.state.phone.showContent;
        const passwordShow=this.state.password.showContent;
        return(
            <div className="safe-center">
                <div className="safe-center-panel">
                    <p className="name">手机验证</p>
                    <p className="tips">您验证的手机：<span>136*****665</span>若已丢失或停用，请立即更换</p>
                    <p className="btn">{!phoneShow?<span onClick={()=>this.showPhone()}>更换</span>:null}</p>
                </div>
                <div className="safe-center-content" style={{display:phoneShow?"block":'none'}}>
                    <div className="safe-content-steps">
                        <Steps current={this.state.phone.current}>
                            {phoneSteps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                    </div>
                    <div className="steps-content">{phoneSteps[this.state.phone.current].content}</div>
                    <div className="steps-action">
                        {
                            this.state.phone.current < phoneSteps.length - 1
                            &&
                            <Button type="primary" onClick={() => this.phoneNext()}>下一步</Button>
                        }
                        {
                            this.state.phone.current === phoneSteps.length - 1
                            &&
                            <Button type="primary">完成</Button>
                        }
                    </div>
                </div>
                <div className="safe-center-panel" style={{marginTop:"20px"}}>
                    <p className="name">更改密码</p>
                    <p className="tips">互联网账号存在被盗风险，若发现问题，建议您更换密码保护账号</p>
                    <p className="btn">{!passwordShow?<span onClick={()=>this.showPassword()}>修改密码</span>:null}</p>
                </div>
                <div className="safe-center-content" style={{display:passwordShow?'block':'none'}}>
                  <div className="steps-content">
                      <Row className="infor-row">
                          <Col span={10} ><p className='infor-label'>旧密码：</p></Col>
                          <Col span={12}><Input style={{width:"50%"}} type="password" placeholder="请输入旧密码"/></Col>
                      </Row>
                      <Row className="infor-row">
                          <Col span={10} ><p className='infor-label'>新密码：</p></Col>
                          <Col span={12}><Input style={{width:"50%"}} type="password" placeholder="请输入新密码"/></Col>
                      </Row>
                      <Row className="infor-row">
                          <Col span={10} ><p className='infor-label'>确认密码：</p></Col>
                          <Col span={12}><Input style={{width:"50%"}} type="password" placeholder="请确认密码"/></Col>
                      </Row>
                  </div>
                    <div className="steps-action">
                        <Button type="primary">完成</Button>
                    </div>

                </div>
            </div>
        )
    }
}