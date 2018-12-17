import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Col, Row, Input, Table, Pagination, // Pagination,
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

    function getFields() {
      const children = [];
      for (let i = 0; i < queryCols.length; i += 1) {
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
      return children;
    }


    const tableCols = [{
      title: '岗位序列名称',
      dataIndex: 'gwxlName',
      key: 'gwxlName',
      align: 'center',
      width: 150,
    }, {
      title: '子序列名称',
      dataIndex: 'zxlName',
      key: 'zxlName',
      align: 'center',
      width: 150,
    }, {
      title: '专业名称',
      dataIndex: 'zyName',
      key: 'zyName',
      align: 'center',
      width: 150,
    }, {
      title: '关键职责名称',
      dataIndex: 'gjzzName',
      key: 'gjzzName',
      align: 'center',
      width: 150,
    }];
    /* 列表信息 */
    const data = [{
      gwxlName: '技术序列',
      zxlName: '计划规划',
      zyName: '市场研究与策略',
      gjzzName: '市场策略研究',
    }, {
      gwxlName: '支撑序列',
      zxlName: '技术研发与管理',
      zyName: '经营分析与管理',
      gjzzName: '市场总体规划',
    }, {
      gwxlName: '管理序列',
      zxlName: '工程设计',
      zyName: '品牌与传播',
      gjzzName: '经营计划执行',
    }, {
      gwxlName: 'test1',
      zxlName: '采购管理',
      zyName: '经营监控',
      gjzzName: '市场信息研究',
    },
    ];
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
        >
          {respType}, {respSelectDivName}
          <Row gutter={24}>{getFields()}</Row>
        </Form>
        <Table columns={tableCols} dataSource={data} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />
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
  respType: PropTypes.string.isRequired,
  respSelectDivName: PropTypes.string.isRequired,
};
