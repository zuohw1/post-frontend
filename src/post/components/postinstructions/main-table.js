import React, { Component } from 'react';
import {
  Table, Pagination, Divider, Modal, Form, Drawer, message,
} from 'antd';
import CheckPostInstructions from './check-post-instructions';
import ModifyPostInstructions from './modify-post-instructions';

const { confirm } = Modal;
const WrappedCheckPostInstructions = Form.create()(CheckPostInstructions);
const WrappedModifyPostInstructions = Form.create()(ModifyPostInstructions);

class TableInstructions extends Component {
  render() {
    const {
      records,
      current,
      total,
      actions,
      loading,
      visibleCheckPost,
      visibleModifyPost,
      loginName,
      respId,
      rangeId,
      recordNum,
      executeOnce,
    } = this.props;
    const {
      listTable,
      getCheckPost,
      closeCheckPost,
      getModifyPost,
      closeModifyPost,
      isExecuteOnce,
      checkDetail,
      changePageNumberSize,
      changeSortList,
    } = actions;
    if (executeOnce === true) {
      listTable(loginName, respId, rangeId, current, recordNum);
      isExecuteOnce();
    }
    const onChangePage = (pageNumber, pageSize) => {
      console.log(pageNumber, pageSize);
      changePageNumberSize(pageNumber, pageSize);
      listTable(loginName, respId, rangeId, pageNumber, pageSize);
    };
    const onClickView = (_, row) => {
      console.log(row);
      getCheckPost();
      checkDetail(row.POSDES_ID);
    };
    const onClickModify = () => {
      getModifyPost();
    };
    const onClickExport = (row) => {
      console.log(row);
      confirm({
        title: '确定要导出本条记录为doc文件吗?',
        onOk() {
          console.log(row.POSDES_ID);
          window.location.href = `http://10.0.210.93/post/api/posPosdes/world?posdesId=${row.POSDES_ID}`;
          message.success('导出world成功');
        },
      });
    };
    /* 列表字段 */
    const tableCols = [{
      title: '岗位名称',
      dataIndex: 'POS_NAME',
      key: 'POS_NAME',
      align: 'center',
      width: 240,
    }, {
      title: '所属部门',
      dataIndex: 'NAME',
      key: 'NAME',
      align: 'center',
      width: 200,
    }, {
      title: '岗位序列',
      dataIndex: 'ELEMENT_NAME',
      key: 'ELEMENT_NAME',
      align: 'center',
      width: 150,
    }, {
      title: '职级带宽',
      align: 'center',
      width: 110,
      render: (text, record) => (
        <span>{record.POS_LEVEL_LOW} -- {record.POS_LEVEL_HIGH}</span>
      ),
    }, {
      title: '开始日期',
      dataIndex: 'ACTIVE_START_DATE',
      key: 'ACTIVE_START_DATE',
      align: 'center',
      width: 240,
    }, {
      title: '结束日期',
      dataIndex: 'ACTIVE_END_DATE',
      key: 'ACTIVE_END_DATE',
      align: 'center',
      width: 150,
    }];
    const sort = [];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        for (let i = 0; i < selectedRows.length; i += 1) {
          sort.push(selectedRows[i].POSDES_ID);
        }
        console.log(sort);
        changeSortList(sort);
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
          render: (text, recordsOperation) => (
            <span>
              <a href=" javascript:;" onClick={() => onClickView(text, recordsOperation)}>查看</a>
              <Divider type="vertical" />
              <a href=" javascript:;" onClick={() => onClickModify(text, recordsOperation)}>修改</a>
              <Divider type="vertical" />
              <a href=" javascript:;" onClick={() => onClickExport(recordsOperation)}>导出</a>
            </span>
          ),
        },
      );
      return children;
    }
    return (
      <div>
        <Drawer title="岗位说明书" width={880} placement="right" onClose={closeCheckPost} maskClosable={false} visible={visibleCheckPost} style={{ height: 'calc(100% - 55px)', overflow: 'auto', paddingBottom: 53 }}>
          <WrappedCheckPostInstructions {...this.props} />
        </Drawer>
        <Drawer title="岗位说明书" width={880} placement="right" onClose={closeModifyPost} maskClosable={false} visible={visibleModifyPost} style={{ height: 'calc(100% - 55px)', overflow: 'auto', paddingBottom: 53 }}>
          <WrappedModifyPostInstructions {...this.props} />
        </Drawer>
        <Table
          columns={getFields()}
          loading={loading}
          dataSource={records}
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
          onChange={onChangePage}
          showTotal={tota => `共 ${tota} 条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
export default TableInstructions;
