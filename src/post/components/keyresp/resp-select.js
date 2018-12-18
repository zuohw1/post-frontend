import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Col, Row, Input, Table, Pagination, Button, // Pagination,
} from 'antd';

const FormItem = Form.Item;
class Search extends Component {
  props;

  render() {
    const { form, respType, respSelectDivName } = this.props;// tableData
    const { getFieldDecorator } = form;
    // const { current, size, total } = tableData;

    /* 查询字段 */
    const queryCols = [
      {
        itemName: '岗位序列', itemKey: 'searchGwxlName', itemType: 'String',
      },
      {
        itemName: '子序列', itemKey: 'searchZxlName', itemType: 'String',
      },
      {
        itemName: '专业', itemKey: 'searchZyName', itemType: 'String',
      },
      {
        itemName: '关键职责', itemKey: 'searchGjzzName', itemType: 'String',
      },

    ];

    const onChange = (pageNumber, pageSize) => {
      console.log(pageNumber, pageSize);
      // const searchF = { ...search, pageSize, pageNumber };
      // listTable(searchF);
    };

    const onChangePageSize = () => {
      console.log('onChangePageSize');
      // console.log(current, size);
      // const searchF = { ...search, pageSize: size, pageNumber: current };
      // listTable(searchF);
    };

    const handleSearch = (e) => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          const pageSize = 10;
          const pageNumber = 1;
          const select = { ...values, pageSize, pageNumber };
          console.log('select', select);
          // listTable(select);
        }
      });
    };

    const count = (respType !== 'undefined') ? (respType / 10) : 0;
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
      key: 'gwxlName',
      dataIndex: 'gwxlName',
      align: 'center',
      width: 150,
    }, {
      title: '子序列名称',
      key: 'zxlName',
      dataIndex: 'zxlName',
      align: 'center',
      width: 150,
    }, {
      title: '专业名称',
      key: 'zyName',
      dataIndex: 'zyName',
      align: 'center',
      width: 150,
    }, {
      title: '关键职责名称',
      key: 'gjzzName',
      dataIndex: 'gjzzName',
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

    /* 列表信息 */
    const data = [{
      key: '000800',
      gwxlName: '技术序列0',
      zxlName: '计划规划0',
      zyName: '市场研究与策略0',
      gjzzName: '市场策略研究0',
    }, {
      key: '000801',
      gwxlName: '支撑序列',
      zxlName: '技术研发与管理',
      zyName: '经营分析与管理',
      gjzzName: '市场总体规划',
    }, {
      key: '000802',
      gwxlName: '管理序列',
      zxlName: '工程设计',
      zyName: '品牌与传播',
      gjzzName: '经营计划执行',
    }, {
      key: '000803',
      gwxlName: 'test1',
      zxlName: '采购管理',
      zyName: '经营监控',
      gjzzName: '市场信息研究',
    },
    ];

    const { handleRespSelect, setRespRowClassName } = this.props;
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
          onSubmit={handleSearch}
          style={{ padding: 10 }}
          layout="inline"
        >
          {respType}, {respSelectDivName}
          <Row gutter={24}>{getFields()}</Row>
        </Form>
        <Table
          columns={tableColsI}
          dataSource={data}
          pagination={false}
          size="middle"
          bordered
          scroll={{ y: document.body.scrollHeight - 160 }}
          onRow={handleRespSelect}
          rowClassName={setRespRowClassName}
        />
        <Pagination
          showQuickJumper
          // current={current}
          total={20}// {total}
          pageSize={10}// {size}
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
  respType: PropTypes.number.isRequired,
  respSelectDivName: PropTypes.string.isRequired,
  handleRespSelect: PropTypes.func.isRequired,
  setRespRowClassName: PropTypes.func.isRequired,
};
