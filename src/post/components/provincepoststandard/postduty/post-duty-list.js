import React, { Component } from 'react';
import {
  Table,
} from 'antd';

class PostListTable extends Component {
  render() {
    /* 列表字段 */
    const tableCols = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 150,
    }, {
      title: '职责',
      dataIndex: 'post',
      key: 'post',
      align: 'center',
      width: 950,
    }];

    const data = [{
      key: '0001',
      post: '实体渠道管理.渠道策略与规划.创新渠道模式拓展',
    }, {
      key: '0002',
      post: '实体渠道管理.渠道策略与规划.渠道策略研究，制定渠道规划',
    }, {
      key: '0003',
      post: '实体渠道管理.渠道策略与规划.渠道发展策略方案落实',
    },
    ];

    return (
      <Table columns={tableCols} dataSource={data} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />

    );
  }
}

export default PostListTable;
