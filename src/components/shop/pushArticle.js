import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Steps, Button, message,Row,Col,Input,Upload,Select,Icon} from 'antd';
import wangEditor  from 'wangeditor';
import PhoneLayer from './phone.js'
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
export default class PushActivity extends React.Component {
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
            editor.undestroy();
        };
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
            <div>
                <Row className="push-row">
                    <Col className="push-title" span={8} ><p >文章标题：</p></Col>
                    <Col span={10}><Input placeholder="标题..."/></Col>
                </Row>
                <div id="editor"></div>
                <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                <Button style={{ marginLeft: 8 }} onClick={()=>{
                        this.setState({
                           preview:true
                        })
                        }}>
                    预览
                </Button>
                <PhoneLayer status={this.state.preview} closePreview={this.closePreview}/>
            </div>
        );
    }
}
