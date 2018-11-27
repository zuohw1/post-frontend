import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

export default (props) => {
  const {
    form,
    actions,
    expand,
  } = props;
  const { getFieldDecorator } = form;
  const { listTable } = actions;

  const handleSearch = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const recordNum = 10;
        const currentPageNum = 1;
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  /* 查询条件字段 */
  const queryCols = [
    {
      itemName: '部门', itemKey: 'sequence', itemType: 'RespSelect', required: false, list: [{ id: '0', title: '中国联通总部' }, { id: '1', title: '北京市昌平区分公司' }, { id: '2', title: '北京市第八分区' }],
    },
    {
      itemName: '关键职责', itemKey: 'status', itemType: 'Select', required: false, list: [{ id: '0', title: '集团本部门正职' }, { id: '1', title: '集团本部门副职' }, { id: '2', title: '其他' }],
    },
  ];

  function getFields() {
    const count = expand ? queryCols.length : 4;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <Input placeholder="请输入" style={{ marginLeft: 5 }} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col
            span={7}
            key={i}
            style={{ display: i < count ? 'block' : 'none' }}
          >
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select placeholder="请选择" allowClear>
                  {
                    queryCols[i].list.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'RespSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select placeholder="请选择" allowClear>
                  {
                    queryCols[i].list.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Date') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <DatePicker />,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={4} key={count + 6} style={{ marginTop: 5, marginLeft: 12 }}>
        <Button htmlType="submit">查询</Button>
      </Col>,
    );
    return children;
  }

  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
      style={{ padding: 10 }}
      layout="inline"
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>);
};
