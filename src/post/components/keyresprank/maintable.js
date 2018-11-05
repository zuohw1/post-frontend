import React from 'react';
import {
  Table,
  Pagination,
} from 'antd';

export default ({
  tableData,
  actions,
  search,
  loading,
}) => {
  const {
    listTable,
  } = actions;

  const data = tableData.records;

  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const { current, size, total } = tableData;

  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 50,
  }, {
    title: '岗位序列',
    dataIndex: 'SEQ',
    key: 'SEQ',
    align: 'center',
    width: 100,
  }, {
    title: '子序列',
    dataIndex: 'CSEQ',
    key: 'CSEQ',
    align: 'center',
    width: 100,
  }, {
    title: '专业',
    dataIndex: 'MAJOR',
    key: 'MAJOR',
    align: 'center',
    width: 150,
  }, {
    title: '关键职责',
    dataIndex: 'KEYRESP',
    key: 'KEYRESP',
    align: 'center',
    width: 150,
  }, {
    title: '基准职级',
    dataIndex: 'JZRANK',
    key: 'JZRANK',
    align: 'center',
    width: 100,
  }, {
    title: '集团职级',
    dataIndex: 'JTRANK',
    key: 'JTRANK',
    align: 'center',
    width: 100,
  }, {
    title: '省份职级',
    dataIndex: 'SFRANK',
    key: 'SFRANK',
    align: 'center',
    width: 100,
  }, {
    title: '地市职级',
    dataIndex: 'DSRANK',
    key: 'DSRANK',
    align: 'center',
    width: 100,
  }, {
    title: '区县职级',
    dataIndex: 'QXRANK',
    key: 'QXRANK',
    align: 'center',
    width: 100,
  }, {
    title: '组织层级',
    dataIndex: 'LEVELTYPE',
    key: 'LEVELTYPE',
    align: 'center',
    width: 100,
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }

  return (
    <div>
      <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共 ${tota} 条`}
        showSizeChanger
        style={{ marginTop: 10, float: 'right' }}
      />
    </div>
  );
};
