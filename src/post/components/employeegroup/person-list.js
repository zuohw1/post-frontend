import React from 'react';
import {
  Layout,
  Table,
  Icon,
} from 'antd';

const { Content } = Layout;

export default ({
  loading,
}) => {
  /* 列表字段 */
  const change = () => {
    alert('hha');
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
    render: () => {
      return (
        <Icon type="check" style={{ color: '#409030' }} onClick={change} />
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
    <Layout className="layout">
      <nav>人员列表</nav>
      <Content>
        <Table
          columns={getFields()}
          dataSource={data}
          loading={loading}
          size="middle"
          bordered
          scroll={{ y: document.body.scrollHeight - 160 }}
        />
      </Content>
    </Layout>
  );
};
