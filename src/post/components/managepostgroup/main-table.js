import React from 'react';
import {
  Table,
  Pagination,
  Select,
} from 'antd';
import Modall from './alertmessage/index';

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  tableData,
  actions,
  form,
  loading,
}) => {
  const {
    listTable,
  } = actions;

  const data = tableData.records;

  const onChange = (currentPageNum, recordNum) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };

  const onChangePageSize = (current, size) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, recordNum: size, currentPageNum: current };
        listTable(select);
      }
    });
  };

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 80,
  }, {
    title: '部门',
    dataIndex: 'BOO',
    key: 'BOO',
    align: 'center',
    width: 400,
  }, {
    title: '员工编号',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width: 100,
  }, {
    title: '员工姓名',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: 100,
  }, {
    title: '员工职务',
    dataIndex: 'ATTRIBUTE9',
    key: 'ATTRIBUTE9',
    align: 'center',
    width: 400,
  }, {
    title: '关键职责',
    dataIndex: 'DOC_VERIFIER',
    key: 'DOC_VERIFIER',
    align: 'center',
    width: 400,
    render: () => (
      <Select placeholder="请选择" allowClear style={{ width: 300 }} />
    ),
  }, {
    title: '操作',
    dataIndex: 'ATTRIBUTE12',
    key: 'ATTRIBUTE12',
    align: 'center',
    width: 100,
    render: (text, record) => (
      <span>
        { record.ATTRIBUTE12.map(tag => <Modall posKey={record.key} posName={tag} />)}
      </span>
    ),
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
    <div style={{ marginTop: '10px' }}>
      <Table
        columns={getFields()}
        loading={loading}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{ y: document.body.scrollHeight - 460 }}
        style={{ marginTop: '10px' }}
        bordered
      />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        pageSizeOptions={['10', '50', '100', '200']}
        showTotal={tota => `共 ${tota} 条`}
        showSizeChanger
        style={{ marginTop: 10, float: 'right' }}
      />
    </div>
  );
};
