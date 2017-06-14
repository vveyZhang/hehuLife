import React,{Component} from 'react';
import { Card,Icon,Button} from 'antd';
export default class MyMessage extends Component{
    render(){
        return(
            <div>
                <Card title="Card title" extra={<Button icon="delete"></Button>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}
