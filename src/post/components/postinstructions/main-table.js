/* eslint-disable */
import React, { Component } from 'react';
import { Table, Pagination, Button, Divider, Modal, Form, Drawer, } from 'antd';
import CheckPostInstructions from './check-post-instructions';

const { confirm } = Modal;
const WrappedCheckPostInstructions = Form.create()(CheckPostInstructions);

class TableInstructions extends Component {
  render() {
    const {
      tableData, actions, search, loading, visibleCheckPost,
    } = this.props;
    const { listTable, getCheckPost, closeCheckPost, } = actions;
    const data = tableData.records;
    const onChange = (pageNumber, pageSize) => {
      const searchF = { ...search, pageSize, pageNumber };
      listTable(searchF);
    };
    const onChangePageSize = (current, size) => {
      const searchF = { ...search, pageSize: size, pageNumber: current };
      listTable(searchF);
    };
    const handleExportProvPos = () => {
    };
    const onClickView = (e) => {
      e.preventDefault();
      getCheckPost();
    };
    const onClickEdit = (_, row) => {
      console.log(8888);
    };
    const onClickDelete = (row) => {
      confirm({
        title: '确定要导出本条记录为doc文件吗?',
        onOk() {
        },
      });
    };
    const { current, size, total } = tableData;
    /* 列表字段 */
    const tableCols = [{
      title: '岗位名称',
      dataIndex: 'DOC_CODE',
      key: 'DOC_CODE',
      align: 'center',
      width: 150,
    }, {
      title: '所属部门',
      dataIndex: 'ATTRIBUTE8',
      key: 'ATTRIBUTE8',
      align: 'center',
      width: 150,
    }, {
      title: '岗位序列',
      dataIndex: 'ATTRIBUTE13',
      key: 'ATTRIBUTE13',
      align: 'center',
      width: 150,
    }, {
      title: '职级带宽',
      dataIndex: 'ATTRIBUTE11',
      key: 'ATTRIBUTE11',
      align: 'center',
      width: 150,
    }, {
      title: '开始日期',
      dataIndex: 'DOC_STATUS',
      key: 'DOC_STATUS',
      align: 'center',
      width: 150,
    }, {
      title: '结束日期',
      dataIndex: 'ATTRIBUTE10',
      key: 'ATTRIBUTE10',
      align: 'center',
      width: 150,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    function getFields() {
      const children = [];
      for (let i = 0; i < tableCols.length; i += 1) {
        children.push(tableCols[i]);
      }
      children.push(
        {
          title: '操作',
          dataIndex: 'JHTRIBUTE10',
          key: 'JHTRIBUTE10',
          align: 'center',
          width: 240,
          render: (text, records) => (
            <span>
              <a href=" javascript:;" onClick={onClickView}>查看</a>
              <Divider type="vertical" />
              <a href=" javascript:;" onClick={() => onClickEdit(text, records)}>修改</a>
              <Divider type="vertical" />
              <a href=" javascript:;" onClick={() => onClickDelete(records)}>导出</a>
            </span>
          ),
        },
      );
      return children;
    }
    return (
      <div>
        <Drawer title="岗位说明书" width={880} placement="right" onClose={closeCheckPost} maskClosable={false} visible={visibleCheckPost} style={{ height: 'calc(100% - 55px)',overflow: 'auto',paddingBottom: 53, }} >
          <WrappedCheckPostInstructions {...this.props} />
        </Drawer>
        <Table
          columns={getFields()}
          loading={loading}
          dataSource={data}
          pagination={false}
          size="small"
          scroll={{ y: document.body.scrollHeight - 460 }}
          bordered
          rowSelection={rowSelection}
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
  }
}
export default TableInstructions;
