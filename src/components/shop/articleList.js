import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Table, Button,Icon,Popconfirm} from 'antd';
import {Link} from 'react-router'
const columns = [{
    title: '标题',
    dataIndex: 'title',
    width:'15%'
}, {
    title: '内容',
    dataIndex: 'content',
    width:'25%'
},{
    title: '类型',
    dataIndex: 'type',
    width:'15%',
    filters: [{
        text: '好喝奶行',
        value: '好喝奶行',
    },{
        text: '呵护生活',
        value: '呵护生活',
    }
    ],
    onFilter: (value, record) =>{
        if(value==record.type) return record
    }
},{
    title: '状态',
    dataIndex: 'status',
    width:'10%',
    filters: [{
        text: '审核中',
        value: "审核中"
    },{
        text: '已通过',
        value: "已通过"
    }, {
            text: '未通过',
            value: "未通过"
        }
    ],
    onFilter: (value, record) =>{
        if(value==record.status) return record
    }
},
    {
    title: '点赞数',
    dataIndex: 'like',
    sorter: (a, b) => a.like - b.like,
    width:'10%'
}, {
    title: '创建时间',
    dataIndex: 'time',
    sorter: (a, b) => a.time - b.time,
    width:'10%'
},
    {
        title:"操作",
        dataIndex:"setting",
        render: (text, record) => (
            <span>
                <Popconfirm placement="top" title="确认删除？" onConfirm={confirm} okText="删除" cancelText="再想想">
                    <Button  type="primary" size="small" icon="delete">删除</Button>
                </Popconfirm>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link"><Icon type="edit" />编辑</a>
    </span>
        ),
        width:'25%'

    }
];

const data = [];
for (let i = 0; i <30; i++) {
    data.push({
        key: i,
        title: "有优惠",
        content: "好喝",
        type: i%2==0?"好喝奶行":'呵护生活',
        like:i+5,
        status:i%2==0?"审核中":"已通过",
        time:'2015'
    });
}

export default class ArticleList extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
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
                    <Popconfirm placement="top" title="确认删除所选中文章？" onConfirm={confirm} okText="删除" cancelText="再想想">
                        <Button type="primary" onClick={this.start}disabled={!hasSelected} loading={loading}
                            >删除</Button>
                    </Popconfirm>
                    <span style={{ marginLeft: 8 }}>{hasSelected ? `选择 ${selectedRowKeys.length}` : ''}</span>
                    <Button type="primary" className="push-btn"><Link to="/shop/particle"><Icon type="upload"></Icon><span>写文章</span></Link></Button>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}


