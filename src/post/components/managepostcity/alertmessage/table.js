import React from 'react';
import {
  Table,
} from 'antd';

export default () => {
  const tableCols = [{
    title: '开始日期',
    dataIndex: 'starDate',
    key: 'starDate',
    align: 'center',
    width: 300,
  }, {
    title: '结束日期',
    dataIndex: 'endStart',
    key: 'endStart',
    align: 'center',
    width: 300,
  }, {
    title: '关键职责',
    dataIndex: 'keyDuty',
    key: 'keyDuty',
    align: 'center',
    width: 450,
  },
  ];
    /* 列表信息 */
  const data = [{
    starDate: '2018-04-01',
    endStart: '',
    keyDuty: '集团本部门正职',
  }, {
    starDate: '2015-04-01',
    endStart: '2017-04-01',
    keyDuty: '集团本部门副职',
  }, {
    starDate: '2015-12-01',
    endStart: '2018-03-01',
    keyDuty: '其他',
  },
  ];
  return (
    <div>
      <Table columns={tableCols} dataSource={data} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />
    </div>
  );
};
