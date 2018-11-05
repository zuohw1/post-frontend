import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/SyncTreeSelect';

const FormItem = Form.Item;
const { Option } = Select;

export default (props) => {
  const {
    form,
    actions,
    expand,
  } = props;
  const { getFieldDecorator } = form;
  const { listTable, setToggle } = actions;

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

  const handleReset = () => {
    form.resetFields();
  };

  const toggle = () => {
    setToggle(!expand);
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

  const queryCols = [{
    itemName: '职责范围', itemKey: 'sequenceName', itemType: 'OrgSelect', required: true,
  },
  {
    itemName: '关键职责', itemKey: 'respName', itemType: 'String', required: false,
  },
  {
    itemName: '子职责', itemKey: 'cRespName', itemType: 'String', required: false,
  },
  {
    itemName: '状态', itemKey: 'status', itemType: 'Select', required: false, list: [{ id: '0', title: '全部' }, { id: '1', title: '有效' }, { id: '2', title: '过期' }],
  }];

  function getFields() {
    const count = expand ? queryCols.length : 4;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <SyncTreeSelect treeId={37838} treeSelectChange={treeSelectChange} refUrl={refUrl} checkbox />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Date') {
        children.push(
          <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
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
    if (expand) {
      for (let i = 0; i < 9 - count; i += 1) {
        children.push(
          <Col span={5} key={count + i} style={{ display: 'block' }} />,
        );
      }
    }
    children.push(
      <Col span={4} key={count + 6} style={{ textAlign: 'right', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
          导出
        </Button>
        {collapse}
      </Col>,
    );
    return children;
  }

  let collapse = null;
  if (queryCols.length > 4) {
    collapse = (
      <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggle}>
      更多 <Icon type={expand ? 'up' : 'down'} />
      </a>
    );
  }

  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>);
};
