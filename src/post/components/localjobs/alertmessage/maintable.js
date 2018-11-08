import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

class MainTable extends Component {

  render() {
    const columns = [{
      title: '主要岗位职责',
      dataIndex: 'name',
      key: 'name',
      align:'center',
      width:100,
    },{
      title: '',
      dataIndex: 'age',
      key: 'age',
    }];

    const data = [{
      name:'1',
      age:'系统建设.架构设计.技术评审的组织'
    }, {
      name:'1',
      age:'系统建设.架构设计.技术评审的组织'
    }, {
      name:'1',
      age:'系统建设.架构设计.技术评审的组织'
    },{
      name:'1',
      age:'系统建设.架构设计.技术评审的组织'
    }, {
      name:'1',
      age:'系统建设.架构设计.技术评审的组织'
      }
    ];
    return (
      <Table columns={columns} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} />
    );
  }
}

export default MainTable;
