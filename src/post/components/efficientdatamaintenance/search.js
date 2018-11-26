import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
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
        const pageSize = 10;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
  };

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  const refUrl = 'org/allData?id=';

  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };
  /* 查询字段 */
  const queryCols = [{
    itemName: '组织', itemKey: 'test_def1', itemType: 'Select', required: false, list: [{ id: '0', title: '中国联合网络集团通信有限公司' }, { id: '1', title: '省分公司' }],
  },
  {
    itemName: '期间', itemKey: 'ATTRIBUTE8', itemType: 'Date', required: false,
  },
  {
    itemName: '效率指标', itemKey: 'test_def3', itemType: 'String', required: false,
  }];

  function getFields() {
    const count = expand ? queryCols.length : 3;
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
                <Input placeholder="请输入" style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    queryCols[i].list.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <SyncTreeSelect
                  treeId={37838}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  checkbox
                />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Date') {
        children.push(
          <Col span={7} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <RangePicker />,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={5} key={count + 5} style={{ textAlign: 'center', marginTop: 5 }}>
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
    </Form>

  );
};
