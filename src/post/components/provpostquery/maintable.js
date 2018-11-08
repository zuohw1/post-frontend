/* eslint-disable indent,comma-spacing,no-redeclare,space-infix-ops,quote-props,no-sequences,react/self-closing-comp,spaced-comment,no-unused-vars */
import React from 'react';
import {
  Table,
  Pagination, Button, Drawer,Modal
} from 'antd';
import Detail from "./messages/index";

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
                  tableData,
                  actions,
                  search,
                  loading,
                }) => {
  const {
    listTable,
  } = actions;

  // const data = tableData.records;
  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const { current, size, total } = tableData;


  const showModal = () => {
    this.setState({
      visible: true,
    });
  }
  const handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  const handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width:150,
  }, {
    title: '基准岗位名称',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width:150,
  }, {
    title: '所属子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width:150,
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
    align: 'center',
    width:150,
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
    width:150,
  }, {
    title: '学历要求',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
    width:150,
  }, {
    title: '开始日期',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
    width:150,
  },{
    title: '结束日期',
    dataIndex: 'JHTRIBUTE10',
    key: 'JHTRIBUTE10',
    align: 'center',
    width:150,
  },
    {
    title: '操作',
    dataIndex: 'def5',
    key: 'def5',
    align: 'center',
      width:150,
      render: () =><Detail/>
  }];
  //列表数据
  const data= [
    {
    key: '系统测试',
    DOC_CODE: '测试序列',
    ATTRIBUTE8: '支撑序列',
    ATTRIBUTE13: '集团',
    ATTRIBUTE11: '是',
    DOC_STATUS: '本科',
    ATTRIBUTE10: '2018-1-1',
    JHTRIBUTE10: '2019-1-3',
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
    <div>
      <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }}></Table>
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

