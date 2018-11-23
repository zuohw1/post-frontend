/* eslint-disable indent,comma-spacing,no-redeclare,space-infix-ops,quote-props,no-sequences,react/self-closing-comp,spaced-comment,no-unused-vars,max-len,quotes,react/no-this-in-sfc,react/jsx-tag-spacing,comma-dangle,no-multiple-empty-lines,react/jsx-closing-tag-location,react/jsx-indent,import/no-useless-path-segments */
import React, { Component } from 'react';
import {
  Table,
  Pagination, Button,
} from 'antd';
import Popup from "./messages/index";
import config from "../../../env.config";

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/

class Table1 extends Component {
  render() {
    const {
      tableData, actions, search, loading,form
    } = this.props;
    const { listTable } = actions;

    const data = tableData.records;


    const onChange = (currentPageNum, recordNum,) => {
      const searchF = { ...search, recordNum ,currentPageNum };
      listTable(searchF);
    };

    const onChangePageSize = (current, size) => {
      const searchF = { ...search, recordNum: size, currentPageNum: current };
      listTable(searchF);
    };
    const handleExportProvPos = () => {
      form.validateFields((err, values) => {
        if (!err) {
          const recordNum = 10;
          const currentPageNum = 1;
          const select = {
            ...values, recordNum, currentPageNum,
          };
          let expUrl = `${config.api}/api/posJposV/outExl?currentPageNum=${select.currentPageNum}&recordNum=${select.recordNum}`;
          if (select.posCateId && select.posCateId !== '') {
            expUrl += `&posCateId=${select.posCateId}`;
          }
          if (select.posSubcateId && select.posSubcateId !== '') {
            expUrl += `&posSubcateId=${select.posSubcateId}`;
          }
          if (select.posName && select.posName !== '') {
            expUrl += `&posName=${select.posName}`;
          }
          if (select.levelCode && select.levelCode !== '') {
            const levelcode = select.levelCode;
            levelcode.forEach((value) => {
              if (value==='s') {
                expUrl += `&orgLevelS=s`;
              } else if (value==='s') {
                expUrl += `&orgLevelD=d`;
              } else if (value==='s') {
                expUrl += `&orgLevelX=x`;
              }
            });
          }
          if (select.orgLevelS && select.orgLevelS !== '') {
            expUrl += `&orgLevelS=${select.orgLevelS}`;
          }
          if (select.orgLevelD && select.orgLevelD !== '') {
            expUrl += `&orgLevelD=${select.orgLevelD}`;
          }
          if (select.orgLevelX && select.orgLevelX !== '') {
            expUrl += `&orgLevelX=${select.orgLevelX}`;
          }
          if (select.coreFlag && select.coreFlag !== '') {
            expUrl += `&coreFlag=${select.coreFlag}`;
          }
          if (select.educationDegree && select.educationDegree !== '') {
            expUrl += `&educationDegree=${select.educationDegree}`;
          }
          window.open(expUrl, '_self');
        }
      });
    };
    const { current, size, total } = tableData;
    /* 列表字段 */
    const tableCols = [{
      title: '集团基准岗位名称',
      dataIndex: 'parentPosName',
      key: 'parentPosName',
      align: 'center',
      width: 150,
    }, {
      title: '省基准岗位名称',
      dataIndex: 'posName',
      key: 'posName',
      align: 'center',
      width: 150,
    }, {
      title: '所属子序列',
      dataIndex: 'sname',
      key: 'sname',
      align: 'center',
      width: 150,
    }, {
      title: '组织层级',
      dataIndex: 'orgLevel',
      key: 'orgLevel',
      align: 'center',
      width: 150,
    }, {
      title: '是否核心',
      dataIndex: 'coreFlag',
      key: 'coreFlag',
      align: 'center',
      width: 150,
    }, {
      title: '学历要求',
      dataIndex: 'educationDegree',
      key: 'educationDegree',
      align: 'center',
      width: 150,
    }, {
      title: '开始日期',
      dataIndex: 'activeStartDate',
      key: 'activeStartDate',
      align: 'center',
      width: 150,
    },];
    function getFields() {
      const children = [];
      for (let i = 0; i < tableCols.length; i += 1) {
        children.push(tableCols[i]);
      }
      children.push(
        {
          title: '结束日期',
          dataIndex: 'activeEndDate',
          key: 'activeEndDate',
          align: 'center',
          width: 150,
        },
      );
      children.push(
        {
          title: '操作',
          dataIndex: 'def5',
          key: 'def5',
          align: 'center',
          width: 150,
          // render: (text, record) => (
          //   <span>
          //    { record.def5.map(tag => <Popup posKey={record.key} posName={tag}/>)}
          //   </span>
          // ),
        },
      );
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
          style={{ marginTop: '10px' }}
        />
        <Pagination
          showQuickJumper
          current={current}
          total={total}
          pageSize={size}
          onChange={onChange}
          onShowSizeChange={onChangePageSize}
          pageSizeOptions={['10','50','100','200']}
          showTotal={tota => `共 ${tota} 条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
export default Table1;
