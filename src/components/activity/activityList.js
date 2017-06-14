import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Table, Button,Icon,Popconfirm} from 'antd';
import {Link} from 'react-router'
const columns = [{
    title: '活动标题',
    dataIndex: 'title',
    className:'title',
    width:'200px'
},{
    title: '状态',
    dataIndex: 'status',
    width:'100px',
    filters: [{
        text: '未发布',
        value: '未发布',
    },{
        text: '发布中',
        value: '发布中',
    }
    ],
    onFilter: (value, record) =>{
        if(value==record.status) return record
    }
}, {
    title: '点赞数',
    dataIndex: 'like',
    sorter: (a, b) => a.like - b.like,
    width:'80px'
},
    {
        title:"操作",
        dataIndex:"setting",
        render: (text, record) =>{
            const  status=record.status=="发布中"?"下架":"发布";
            return(
            <span>
                <Popconfirm placement="top" title="确认删除？" onConfirm={confirm} okText="删除" cancelText="再想想">
                    <Button  type="primary" size="small">{status}</Button>
                </Popconfirm>
                <span className="ant-divider" />
                <Popconfirm placement="top" title="确认删除？" onConfirm={confirm} okText="删除" cancelText="再想想">
                    <Button  type="primary" size="small">删除</Button>
                </Popconfirm>
                <span className="ant-divider" />
                 <Button  type="primary" size="small" className="activity-edit-btn"><Link to="/manage/activity/edit/1">编辑</Link></Button>
    </span>
        )},
        width:'190px'

    }
];

const data = [];
for (let i = 0; i <30; i++) {
    data.push({
        key: i,
        title: "有优惠",
        status: i%2==0?"发布中":'未发布',
        like:i+5
    });
}

export default class ActivityList extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        console.log(1)
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys,tits) => {
        this.setState({ selectedRowKeys });
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div style={{padding:20}}>
                <div style={{ marginBottom: 16 }}>
                    <Popconfirm placement="top" title="确认删除所选中活动？" onConfirm={confirm} okText="删除" cancelText="再想想">
                        <Button type="primary" className="table-btn" onClick={this.start}disabled={!hasSelected} loading={loading}
                            >删除</Button>
                    </Popconfirm>
                    <Popconfirm placement="top" title="确认删除所选中活动？" onConfirm={confirm} okText="删除" cancelText="再想想">
                        <Button type="primary" className="table-btn" onClick={this.start}disabled={!hasSelected} loading={loading}
                            >发布</Button>
                    </Popconfirm>
                    <Popconfirm placement="top" title="确认删除所选中活动？" onConfirm={confirm} okText="删除" cancelText="再想想">
                        <Button type="primary" className="table-btn" onClick={this.start}disabled={!hasSelected} loading={loading}
                            >下架</Button>
                    </Popconfirm>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择 ${selectedRowKeys.length}` : ''}</span>
                </div>
                <Table className="activity-table" rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

