import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Steps, Button, message,Row,Col,Input,Upload,Select,Icon} from 'antd';
import wangEditor  from 'wangeditor';
import PhoneLayer from './phone.js'
const Step = Steps.Step;
const Option = Select.Option;
let editor=null;
function StartEditor(){
    editor = new wangEditor('editor');
    editor.create();
}
export default class PushArticle extends React.Component {
    state = {
        current: 0,
        preview:false
    };
    componentDidMount(){
        StartEditor();
    }
    closePreview=()=>{
        this.setState({
            preview:false
        })
    }
    render() {
        const { current } = this.state;
        const imageUrl='';

        return (
            <div className="publish-container">
                <Row className="push-row">
                    <Col className="push-title" span={8} ><p >文章标题：</p></Col>
                    <Col span={10}><Input placeholder="标题..."/></Col>
                </Row>
                <Row className="push-row">
                    <Col className="push-title" span={8} ><p >文章标题：</p></Col>
                    <Col span={10}>
                        <Select defaultValue="1" style={{ width: 120 }} onChange={(value)=>console.log(value)}>
                        <Option value="1">美食</Option>
                        <Option value="2">美文</Option>
                        <Option value="2">每周记</Option>
                        </Select>
                    </Col>
                </Row>
                <div id="editor"></div>
                <div className="push-article-btn" style={{textAlign:'center',margin:"20px auto"}}>
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                    <Button style={{ marginLeft: 8 }} onClick={()=>{
                        this.setState({
                           preview:true
                        })
                        }}>
                        预览
                    </Button>
                </div>

                <PhoneLayer status={this.state.preview} closePreview={this.closePreview}/>
            </div>
        );
    }
}
