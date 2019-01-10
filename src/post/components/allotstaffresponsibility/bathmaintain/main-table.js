import React from 'react';
import {
  Table,
  Pagination,
  Button,
} from 'antd';


export default ({
  actions,
  form,
  tableData,
  loading,
}) => {
  const {
    listTable,
  } = actions;


  const data = tableData.records;

  const onChange = (pageNum, pageSzie) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, pageSzie, pageNum };
        listTable(select);
      }
    });
  };

  const onChangePageSize = (current, size) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, pageSzie: size, pageNum: current };
        listTable(select);
      }
    });
  };

  const { current, size, total } = tableData;


  /* 列表字段 */
  const tableCols = [{
    title: '部门名称',
    dataIndex: 'groupName',
    key: 'groupName',
    align: 'center',
    width: 250,
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 100,
  }, {
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'center',
    width: 100,
  }, {
    title: '专业',
    dataIndex: 'profession',
    key: 'profession',
    align: 'center',
    width: 150,
  }, {
    title: '关键职责',
    dataIndex: 'keyResp',
    key: 'keyResp',
    align: 'center',
    width: 150,
  }, {
    title: '工作量',
    dataIndex: 'work',
    key: 'work',
    align: 'center',
    width: 100,
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
      <Button htmlType="button" type="primary" style={{ marginRight: 20 }}>
        导出
      </Button>
      <Button htmlType="button" type="primary">
        导入
      </Button>
      <Table
        columns={getFields()}
        loading={loading}
        dataSource={data}
        onChange={onChange}
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
