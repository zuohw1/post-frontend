import React from 'react';
import {
  Table,
  Icon,
} from 'antd';


export default ({
  loading,
}) => {
  /* 列表字段 */
  const OnDistribution = (_, row) => {
    console.log(row);
  };
  const tableCols = [{
    title: '员工',
    dataIndex: 'employee',
    key: 'employee',
    align: 'center',
    width: '33.3%',
  }, {
    title: '分配至改组',
    dataIndex: 'distribution',
    key: 'distribution',
    align: 'center',
    width: '33.3%',
    render: (text, record) => {
      return (
        <Icon
          type="check"
          style={{ color: '#409030' }}
          onClick={() => OnDistribution(text, record)}
        />
      );
    },
  }, {
    title: '组负责人',
    dataIndex: 'responsible',
    key: 'responsible',
    align: 'center',
    width: '33.3%',
    render: () => {
      return (
        <Icon type="user" />
      );
    },
  },
  ];

  const data = [
    {
      key: '1',
      employee: '包小雪',
    },
    {
      key: '2',
      employee: '薄炜红',
    },
    {
      key: '3',
      employee: '白广川',
    },
    {
      key: '4',
      employee: '蔡雅婷',
    },
    {
      key: '5',
      employee: '曹银权',
    },
  ];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }

  return (
    <div style={{
      height: 700,
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 10,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <p>人员列表</p>
      <Table
        columns={getFields()}
        dataSource={data}
        loading={loading}
        size="middle"
        bordered
        pagination={false}
      />
    </div>
  );
};
