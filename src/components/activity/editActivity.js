import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Steps, Button, message,Row,Col,Input,Upload,Select,Icon} from 'antd';
import wangEditor  from 'wangeditor';
import PhoneLayer from './../common/phone.js'
const Step = Steps.Step;
const Option = Select.Option;
let editor=null;
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('图片只能为jpg!');
    }
    const isLt1M = file.size/1024 <1024;
    if (!isLt1M) {
        message.error('图片大小不能超过1M!');
    }
    return isJPG && isLt1M;
}
function StartEditor(){
    editor = new wangEditor('editor');
    editor.create();
}
export default class EditorActivity extends React.Component {
    state = {
        current: 0,
        preview:false
    };
    componentDidUpdate(){
        if(this.state.current==1){
            if(!editor){
                StartEditor();
                return
            };
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });

    }
    prev() {
        editor.destroy()
        const current = this.state.current - 1;
        this.setState({ current });
    };
    closePreview=()=>{
        this.setState({
            preview:false
        })
    }
    render() {
        const { current } = this.state;
        const imageUrl='';
        const steps = [{
            title: '活动基本信息',
            content: <div>
                <Row className="push-row">
                    <Col className="push-title" span={4} ><p >活动标题：</p></Col>
                    <Col span={18}><Input placeholder="标题..."/></Col>
                </Row>
                <Row className="push-row">
                    <Col className="push-title" span={4} ><p >所属店铺1：</p></Col>
                    <Col span={18}>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={(value)=>console.log(value)}>
                            <Option value="1">发布</Option>
                            <Option value="2">不发布</Option>
                        </Select></Col>
                </Row>
                <Row className="push-row">
                    <Col className="push-title" span={4} ><p >活动头像：</p></Col>
                    <Col span={18}>
                        <Upload
                            className="push-upload"
                            name="avatar"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={beforeUpload}>
                            {
                                imageUrl?<img src={ imageUrl } alt="" className="avatar" /> :
                                    <Icon type="plus" className="avatar-uploader-trigger" />
                            }
                        </Upload></Col>
                </Row>
                <Row className="push-row">
                    <Col className="push-title" span={4} ><p >备注：</p></Col>
                    <Col span={18}><Input type='textarea' placeholder="比如：注意事项、时间、参加条件等等"/></Col>
                </Row>
            </div>
        }, {
            title: '活动内容',
            content:''
        }];
        return (
            <div className="publish-container">
                <Steps current={current} style={{margin:"30px auto",width:'450px'}}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content" >{steps[this.state.current].content}
                    <div id="editor" style={{display:this.state.current==1?'block':'none'}}></div>
                </div>
                <div className="steps-action" style={{"textAlign":'center'}}>
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    }
                    {
                        this.state.current ==1
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={()=>{
                        this.setState({
                           preview:true
                        })
                        }}>
                            预览
                        </Button>
                    }
                </div>
                <PhoneLayer status={this.state.preview} closePreview={this.closePreview}/>
            </div>
        );
    }
}
