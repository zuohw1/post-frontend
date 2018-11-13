/* eslint-disable indent,comma-spacing,no-redeclare,space-infix-ops,quote-props,no-sequences,react/self-closing-comp,spaced-comment,no-unused-vars,max-len,quotes,react/no-this-in-sfc,react/jsx-tag-spacing,comma-dangle,no-multiple-empty-lines,react/jsx-closing-tag-location,react/jsx-indent,import/no-useless-path-segments */
import React, { Component } from 'react';
import {
  Table,
  Pagination, Button,
} from 'antd';
import Popup from "./messages/index";

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/

class Table1 extends Component {
  render() {
    const {
      tableData, actions, search, loading,
    } = this.props;
    const { listTable } = actions;

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
      title: '结束日期',
      dataIndex: 'JHTRIBUTE10',
      key: 'JHTRIBUTE10',
      align: 'center',
      width: 150,
    }, {
        title: '操作',
        dataIndex: 'def5',
        key: 'def5',
        align: 'center',
        width: 150,
        render: (text, record) => (
          <span>
          {record.def5.map(tag => <Popup posKey={record.key} posName={tag}/>)}
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
      <div style={{ marginTop: 10 }}>
        <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExportProvPos}>
          导出省岗位
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
  }
}
export default Table1;
