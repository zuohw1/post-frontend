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

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
  }, {
    title: '基准岗位名称',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
  }, {
    title: '所属子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
    align: 'center',
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
  }, {
    title: '学历要求',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
  }, {
    title: '开始日期',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
  }, {
    title: '操作',
    dataIndex: 'def5',
    key: 'def5',
    align: 'center',
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
