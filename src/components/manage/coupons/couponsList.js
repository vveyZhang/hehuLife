import React,{Component} from 'react'
import { Table, Badge, Dropdown, Icon } from 'antd';
import CreateCoupons from './newCoupons.js';
const expandedRowRender = (test) => {
    const columns = [
        { title: '领取用户', dataIndex: 'name', key: 'name' },
        { title: '领取时间', dataIndex: 'getTime', key: 'getTime' },
        { title:'用户手机号',key:"phone",dataIndex:"phone"},
        { title: '是否使用', key: 'status', dataIndex: 'status', filters: [{
            text: '是',
            value: '是'
        },{
            text: '否',
            value: '否'
        }
        ],
            onFilter: (value, record) =>{
                if(value==record.status) return record
            }}
    ];

    const data = [];
    for (let i = 0; i < 1; ++i) {
        data.push({
            id: i,
            name: test.key==1?100:i,
            phone: 'This is production name',
            status: 'Upgraded: 56',
        });
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            />
    );
};

const data = [];
for (let i = 0; i < 3; ++i) {
    data.push({
        key: i,
        type: '礼品卡',
        startTime: '2017-6-11',
        overTime: '2017-6-13',
        total: 500,
        residue: 100,
        createdAt: '2014-12-24 23:12:00',
    });
}
const columns = [
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '开始时间', dataIndex: 'startTime', key: 'startTime' },
    { title: '结束时间', dataIndex: 'overTime', key: 'overTime' },
    { title: '总共张数', dataIndex: 'total', key: 'total' },
    { title: '剩余张数', dataIndex: 'residue', key: 'residue' },
    { title: '操作', key: 'operation', render: () => <a href="javascript:void(0)">编辑</a> },
];
export default  class CouponsList extends Component{

    handleCancel(){}
    handleCreate(){}
    render(){
        return (
            <div>
                <CreateCoupons
                    visible={true}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    />
                <Table
                    className="components-table-demo-nested"
                    columns={columns}
                    expandedRowRender={expandedRowRender}
                    dataSource={data}
                    />
            </div>

        )
    }
}

