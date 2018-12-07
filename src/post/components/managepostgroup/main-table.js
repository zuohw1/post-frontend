import React from 'react';
import {
  Table,
  Modal,
  Pagination,
  Select,
} from 'antd';
import Model from './card';

const { Option } = Select;
const respList = [];

export default ({
  tableData,
  actions,
  respRange,
  record,
  modal,
  form,
  loading,
}) => {
  const {
    getRecord,
    listTable,
  } = actions;

  const onClickView = (_, row) => {
    getRecord(row, true, false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    getRecord({}, false, true);
  };
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

  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) {
      const respV = {
        id: respRange[i].kid,
        title: respRange[i].kname,
      };
      respList.push(respV);
    }
  }
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };
  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 50,
  }, {
    title: '部门',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 250,
  }, {
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'center',
    width: 100,
  }, {
    title: '员工姓名',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
    width: 100,
  }, {
    title: '员工职务',
    dataIndex: 'jobName',
    key: 'jobName',
    align: 'center',
    width: 200,
  }, {
    title: '关键职责',
    dataIndex: 'kname',
    key: 'kname',
    align: 'center',
    width: 300,
    render: () => (
      <Select
        placeholder="请选择"
        defaultValue={respList.map((item) => { return (item.id); })}
        allowClear
        style={{ width: 250 }}
      >
        {
          respList.map(apply)
        }
      </Select>
    ),
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    align: 'center',
    width: 100,
    render: (text, records) => (
      <span>
        <a href=" javascript:;" onClick={() => onClickView(text, records)}>全部记录</a>
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
      <Modal
        title="全部记录"
        visible={modal}
        onCancel={onCancel}
        maskClosable={false}
        destroyOnClose
        width={1000}
        footer={null}
      >
        <Model
          record={record}
        />
      </Modal>
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
