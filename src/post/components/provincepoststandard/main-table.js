import React from 'react';
import {
  Table,
  Button,
  Pagination,
} from 'antd';
import PosDuty from './postduty/index';

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


  const handleExportGroupPos = () => {
  };
  const handleExportProvPos = () => {
  };

  const handleSave = () => {

  };

  const handleViewProvPos = () => {
  };

  const handleImportProvPos = () => {
  };

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 150,
  }, {
    title: '基准岗位名称',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width: 150,
  }, {
    title: '所属子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: 150,
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
    align: 'center',
    width: 150,
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
    width: 150,
  }, {
    title: '学历要求',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
    width: 150,
  }, {
    title: '开始日期',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
    width: 150,
  }, {
    title: '省基准岗位维护',
    dataIndex: 'def5',
    key: 'def5',
    align: 'center',
    width: 150,

    render: (text, record) => (

      <span>
        {record.def5.map(tag => <PosDuty posKey={record.key} posName={tag} />)}
      </span>
    ),

  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <Button htmlType="button" type="primary" style={{ marginLeft: '0' }} onClick={handleExportGroupPos}>
        导出集团岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExportProvPos}>
        导出省岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleSave}>
        保存
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleViewProvPos}>
        查看省基准岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleImportProvPos}>
        导入省基准岗位
      </Button>
      <Table
        columns={getFields()}
        loading={loading}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{ y: document.body.scrollHeight - 460 }}
        bordered
        style={{ marginTop: '10px' }}
      />
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
