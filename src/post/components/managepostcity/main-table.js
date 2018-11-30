import React from 'react';
import {
  Table,
  Pagination,
  Select,
} from 'antd';
import Modall from './alertmessage/index';

const { Option } = Select;
const respList = [];

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

  const respRange = [{ id: '0', title: '集团本部部门正职' }, { id: '1', title: '集团本部部门副职' }, { id: '2', title: '分公司副职' }, { id: '3', title: '其他' }];
  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) { // 首次可能请求后还没拿到数据，放此位置会执行多次，只当获取到数据后会进行处理；
      const respV = {
        id: respRange[i].id,
        title: respRange[i].title,
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
    dataIndex: 'BOO',
    key: 'BOO',
    align: 'center',
    width: 250,
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
    width: 200,
  }, {
    title: '关键职责',
    dataIndex: 'DOC_VERIFIER',
    key: 'DOC_VERIFIER',
    align: 'center',
    width: 300,
    render: () => (
      <Select placeholder="请选择" allowClear style={{ width: 250 }}>
        {
          respList.map(apply)
        }
      </Select>
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
