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
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width: 100,
  }, {
    title: '子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: 100,
  }, {
    title: '专业',
    dataIndex: 'ATTRIBUTE9',
    key: 'ATTRIBUTE9',
    align: 'center',
    width: 200,
  }, {
    title: '关键职责',
    dataIndex: 'DOC_VERIFIER',
    key: 'DOC_VERIFIER',
    align: 'center',
    width: 200,
  }, {
    title: '学历',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
    width: 50,
  }, {
    title: '工作经验',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
    width: 200,
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
    width: 70,
  }, {
    title: '子职责',
    dataIndex: 'ATTRIBUTE12',
    key: 'ATTRIBUTE12',
    align: 'center',
    width: 100,
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
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
