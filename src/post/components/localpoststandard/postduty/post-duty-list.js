import React, { Component } from 'react';
import { Table } from 'antd';

class PostListTable extends Component {
  render() {
    /* 列表字段 */
    const tableCols = [{
      title: '序号',
      key: 'key',
      dataIndex: 'key',
      align: 'center',
      width: 150,
    }, {
      title: '职责',
      key: 'post',
      dataIndex: 'post',
      align: 'center',
      width: 950,
    }];
    const data = [{
      key: '001',
      post: '实体渠道管理.渠道策略与规划.创新渠道模式拓展',
    }, {
      key: '002',
      post: '实体渠道管理.渠道策略与规划.创新渠道模式拓展',
    }, {
      key: '003',
      post: '实体渠道管理.渠道策略与规划.创新渠道模式拓展',
    }];
    return (
      <Table columns={tableCols} dataSource={data} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />
    );
  }
}

export default PostListTable;
