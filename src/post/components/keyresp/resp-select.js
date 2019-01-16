import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Col, Row, Input, Table, Pagination, Button, // Pagination,
} from 'antd';

const FormItem = Form.Item;
class Search extends Component {
  props;

  render() {
    const { form, resptype, getRespSelectData } = this.props;// tableData, respSelectDivName
    const { getFieldDecorator } = form;

    /* 查询字段 */
    const queryCols = [
      {
        itemName: '岗位序列', itemKey: 'posCateName', itemType: 'String',
      },
      {
        itemName: '子序列', itemKey: 'posSubCateName', itemType: 'String',
      },
      {
        itemName: '专业', itemKey: 'majorName', itemType: 'String',
      },
      {
        itemName: '关键职责', itemKey: 'keyDutyName', itemType: 'String',
      },

    ];

    const onChange = (pageNumber, pageSize) => {
      form.validateFields((err, values) => {
        if (!err) {
          const select = {
            ...values, pageSize, pageNumber, resptype,
          };
          getRespSelectData(select);
        }
      });
    };

    const onChangePageSize = (pageNumber, pageSize) => {
      form.validateFields((err, values) => {
        if (!err) {
          const select = {
            ...values, pageSize, pageNumber, resptype,
          };
          getRespSelectData(select);
        }
      });
    };

    const handleSearch = () => {
      form.validateFields((err, values) => {
        if (!err) {
          const pageSize = 10;
          const pageNumber = 1;
          const select = {
            ...values, pageSize, pageNumber, resptype,
          };
          getRespSelectData(select);
        }
      });
    };

    const count = (resptype !== 'undefined') ? (resptype / 10) : 0;
    function getFields() {
      let vvt = count;
      if (queryCols.length < count) {
        vvt = queryCols.length;
      }
      const children = [];
      for (let i = 0; i < vvt; i += 1) {
        if (queryCols[i].itemType === 'String') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                    message: '不能为空!',
                  }],
                })(
                  <Input placeholder="请输入" style={{ width: 220, marginLeft: 5 }} />,
                )}
              </FormItem>
            </Col>,
          );
        }
      }
      children.push(
        <Col span={6} key={vvt + 5} style={{ textAlign: 'right', marginTop: 5 }}>
          <Button htmlType="submit">查询</Button>
        </Col>,
      );
      return children;
    }

    const tableCols = [{
      title: '岗位序列名称',
      key: 'posCateName',
      dataIndex: 'posCateName',
      align: 'center',
      width: 150,
    }, {
      title: '子序列名称',
      key: 'posSubCateName',
      dataIndex: 'posSubCateName',
      align: 'center',
      width: 150,
    }, {
      title: '专业名称',
      key: 'majorName',
      dataIndex: 'majorName',
      align: 'center',
      width: 150,
    }, {
      title: '关键职责名称',
      key: 'keyDutyName',
      dataIndex: 'keyDutyName',
      align: 'center',
      width: 150,
    }, {
      title: 'topCateId', // 隐藏字段 待处理；TODO
      key: 'topCateId',
      dataIndex: 'topCateId',
      align: 'center',
      width: 150,
    }, {
      title: 'posCateID', // 隐藏字段 待处理；TODO
      key: 'posCateID',
      dataIndex: 'posCateID',
      align: 'center',
      width: 150,
    }, {
      title: 'majorId', // 隐藏字段 待处理；TODO
      key: 'majorId',
      dataIndex: 'majorId',
      align: 'center',
      width: 150,
    }, {
      title: 'keyDutyId', // 隐藏字段 待处理；TODO
      key: 'keyDutyId',
      dataIndex: 'keyDutyId',
      align: 'center',
      width: 150,
    }];

    let vvtt = count;
    if (queryCols.length < count) {
      vvtt = queryCols.length;
    }

    const tableColsI = [];
    for (let i = 0; i < vvtt; i += 1) {
      tableColsI.push(tableCols[i]);
    }

    const { handleRespSelect, setRespRowClassName, tableData } = this.props;
    const { current, size, total } = tableData;
    const data = tableData.records;
    return (
      <div style={{ height: 500 }}>
        <Form
          className="ant-advanced-search-form"
          onSubmit={handleSearch}
          style={{ padding: 10 }}
          layout="inline"
        >
          <Row gutter={24}>{getFields()}</Row>
        </Form>
        <Table
          columns={tableColsI}
          dataSource={data}
          pagination={false}
          size="middle"
          bordered
          scroll={{ y: document.body.scrollHeight - 80 }}
          onRow={handleRespSelect}
          rowClassName={setRespRowClassName}
        />
        <Pagination
          showQuickJumper
          current={current}
          total={total}// {}
          pageSize={size}// {}
          onChange={onChange}
          onShowSizeChange={onChangePageSize}
          showTotal={tota => `共 ${tota} 条`}
          pageSizeOptions={['10', '50', '100', '200']}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}

const RespSelect = Form.create()(Search);
export default RespSelect;

RespSelect.propTypes = {
  resptype: PropTypes.number.isRequired,
  tableData: PropTypes.array.isRequired,
  respSelectDivName: PropTypes.string.isRequired,
  getRespSelectData: PropTypes.func.isRequired,
  handleRespSelect: PropTypes.func.isRequired,
  setRespRowClassName: PropTypes.func.isRequired,
};
