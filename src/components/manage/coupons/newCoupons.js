import React,{Component} from 'react'
import {Modal} from 'antd';
import CouponsFrom from './common/from.js';
export default class CreateCoupons extends Component{
    render(){
            const { visible, onCancel, onCreate} = this.props;
            return(<div>
                <Modal
                    visible={visible}
                    title="创建卡卷"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                    className="coupons-layer"
                    >
                    <CouponsFrom />
                </Modal>
            </div>
            )
    }
}

