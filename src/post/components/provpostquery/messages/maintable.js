import React, { Component } from 'react';
import { Table } from 'antd';

class MainTable extends Component {
  render() {
    const columns = [{
      title: '主要岗位职责',
      dataIndex: 'name',
      width: 150,
    }, {
      title: '',
      dataIndex: 'address',
    }];

    const data = [];
    for (let i = 1; i < 20; i++) {
      data.push({
        key: i,
        name: ` ${i}`,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return (
      <Table columns={columns} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} />
    );
  }
}

export default MainTable;



