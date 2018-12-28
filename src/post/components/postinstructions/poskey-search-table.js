import React, { Component } from 'react';
import {
  Table, Pagination, Select, Input, Button,
} from 'antd';

const { Option } = Select;

class TableposKey extends Component {
  render() {
    const {
      actions,
      posKeyrecords,
      posKeycurrent,
      posKeyrecordNum,
      posKeytotal,
      posKeyExecuteOnce,
      professionList,
    } = this.props;
    const {
      posKeyTable,
      isposKeyExecuteOnce,
      posKeychangePageNumberSize,
    } = actions;
    if (posKeyExecuteOnce === true) {
      posKeyTable(posKeycurrent, posKeyrecordNum);
      isposKeyExecuteOnce();
    }
    const onChangePage = (pageNumber, pageSize) => {
      console.log(pageNumber, pageSize);
      posKeychangePageNumberSize(pageNumber, pageSize);
      posKeyTable(pageNumber, pageSize);
    };
    const handleChangeResponse = (value) => {
      console.log(`selected ${value}`);
    };
    const ResponseChildren = [];
    for (let i = 0; i < professionList.length; i += 1) {
      ResponseChildren.push(
        <Option key={professionList[i].elementId}>{ professionList[i].elementName }</Option>,
      );
    }
    const tableCols = [{
      title: '关键职责',
      dataIndex: 'elementName',
      key: 'elementName',
      align: 'left',
      width: 360,
    }];
    return (
      <div>
        <div className="instructions-model-top">
          <span className="instructions-model-top-one">专业：<Select style={{ width: 200, marginRight: '60px' }} onChange={handleChangeResponse}>{ResponseChildren}</Select></span>
          <span className="instructions-model-top-two"><span>名称：</span><Input /></span>
          <span className="instructions-model-top-three"><Button type="primary" icon="search">查询</Button></span>
        </div>
        <Table
          columns={tableCols}
          dataSource={posKeyrecords}
          pagination={false}
          size="small"
          scroll={{ y: document.body.scrollHeight - 460 }}
          bordered
        />
        <Pagination
          showQuickJumper
          current={posKeycurrent}
          total={posKeytotal}
          onChange={onChangePage}
          showTotal={posKeytota => `共 ${posKeytota} 条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
export default TableposKey;
