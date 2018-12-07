import React from 'react';
import {
  Table,
} from 'antd';

export default ({
  record,
}) => {
  const tableCols = [{
    title: '开始日期',
    dataIndex: 'startDate',
    key: 'startDate',
    align: 'center',
    width: 300,
  }, {
    title: '结束日期',
    dataIndex: 'endDate',
    key: 'endDate',
    align: 'center',
    width: 300,
  }, {
    title: '关键职责',
    dataIndex: 'kname',
    key: 'kname',
    align: 'center',
    width: 450,
  },
  ];

  return (
    <div>
      <Table columns={tableCols} dataSource={record.attachData} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />
    </div>
  );
};
