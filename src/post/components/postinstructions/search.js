/* eslint-disable */
import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';

const FormItem = Form.Item;
const { Option } = Select;

export default (props) => {
  const {
    form,
    actions,
    expand,
  } = props;
  const { getFieldDecorator } = form;
  const { setToggle, getInstructions } = actions;
  const onInstructionsView = () => {
    console.log(666);
    getInstructions();
  };
  const handleSearch = (e) => {
    e.preventDefault();
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
  /* 查询字段 */
  const queryCols = [
    {
      itemName: '部门',
      itemKey: 'test_def1', 
      itemType: 'TreeSelect',
      required: false,
    },
    {
      itemName: '岗位序列',
      itemKey: 'test_def2',
      itemType: 'Select',
      required: false,
      list: [{ id: '0', title: '测试序列' }, { id: '1', title: '管理序列' }, { id: '2', title: '技术序列' }, { id: '3', title: '支撑序列' }],
    },
    {
      itemName: '职级',
      itemKey: 'ATTRIBUTE8',
      itemType: 'Select',
      required: false,
      list: [{ id: '0', title: 1 }, { id: '1', title: 2 }, { id: '2', title: 3 }, { id: '3', title: 4 }, { id: '4', title: 5 }, { id: '5', title: 6 }],
    },
    {
      itemName: '关键职责',
      itemKey: 'cRespName',
      itemType: 'String',
      required: false,
    },
    {
      itemName: '查询日期',
      itemKey: 'cRespName',
      itemType: 'Date',
      required: false,
      list: [{ label: '集团', value: 'J' }, { label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '区/县', value: 'X' }],
    },
    {
      itemName: '岗位名称',
      itemKey: 'def4',
      itemType: 'String',
      required: false,
    },
  ];

  let collapse = null;
  if (queryCols.length > 3) {
    collapse = (
      <a style={{ marginLeft: 8, fontSize: 14 }} onClick={toggle}>
        更多 <Icon type={expand ? 'up' : 'down'} />
      </a>
    );
  }

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
                <Input placeholder="请输入" style={{ width: 196, marginLeft: 5 }} suffix={<Icon type="check-square" style={{ color: "rgba(0,0,0,.25)" }} onClick={onInstructionsView} />} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'TreeSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <SyncTreeSelect showSearch={false} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 200, marginLeft: 5, marginRight: 8 }} placeholder="请选择" allowClear>
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
                <DatePicker style={{ width: 200, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    if (expand) {
      for (let i = 0; i < 7 - count; i += 1) {
        children.push(
          <Col span={6} key={count + i} style={{ display: 'block' }} />,
        );
      }
    }
    children.push(
      <Col span={6} key={count + 5} style={{ textAlign: 'right', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
        <Button htmlType="button" style={{ marginLeft: 8 }} onClick={handleReset}>
          重置
        </Button>
        {collapse}
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
