/* eslint-disable */
import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker, TreeSelect,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const treeData = [{
  title: 'Node1',
  value: 'Node1',
  key: '0-0',
  children: [{
    title: 'Child Node1',
    value: 'Child Node1',
    key: '0-0-1',
  }, {
    title: 'Child Node2',
    value: 'Child Node2',
    key: '0-0-2',
  }],
}, {
  title: 'Node2',
  value: 'Node2',
  key: '0-1',
}];

export default (props) => {
  const {
    form,
    actions,
    expand,
    duty,
    divisionValue,
    treeSelectData,
  } = props;
  const { getFieldDecorator } = form;
  const { setToggle, getInstructions, changeDivisionValue } = actions;
  const dutyChildren = [];
  for (let i = 0; i < duty.length; i += 1) {
    dutyChildren.push(<Option key={duty[i].elementId}>{duty[i].elementName}</Option>);
  }
  const onInstructionsView = () => {
    getInstructions();
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleReset = () => {
    form.resetFields();
  };
  const onChangeDivisionValue = (value, label, extra) => {
    console.log(value, label, extra);
    changeDivisionValue(value);
  }
  const toggle = () => {
    setToggle(!expand);
  };
  const queryCols = [1,2,3,4,5,6];
  const count = expand ? queryCols.length : 3;
  let collapse = null;
  if (queryCols.length > 3) {
    collapse = (
      <a style={{ marginLeft: 8, fontSize: 14 }} onClick={toggle}>
        更多 <Icon type={expand ? 'up' : 'down'} />
      </a>
    );
  }
  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
      style={{ padding: 10 }}
      layout="inline"
    >
      <Row gutter={24}>
        <Col span={6}>
          <FormItem label="部门" labelCol={{ span: 6 }}>
              <TreeSelect allowClear showSearch={false} value={divisionValue} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} treeData={treeSelectData} placeholder="请选择" onChange={onChangeDivisionValue} />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="岗位序列" labelCol={{ span: 6 }}>
              <Select style={{ width: 200, marginLeft: 5, marginRight: 8 }} placeholder="请选择" allowClear>{ dutyChildren }</Select>
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="职级" labelCol={{ span: 6 }}>
              <Select style={{ width: 200, marginLeft: 5, marginRight: 8 }} placeholder="请选择" allowClear>{ dutyChildren }</Select>
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="关键职责" labelCol={{ span: 6 }}>
              <Input placeholder="请输入" style={{ width: 196, marginLeft: 5 }} suffix={<Icon type="check-square" style={{ color: "rgba(0,0,0,.25)" }} onClick={onInstructionsView} />} />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="查询日期" labelCol={{ span: 6 }}>
              <DatePicker style={{ width: 200, marginLeft: 5, marginRight: 20 }} />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="岗位名称" labelCol={{ span: 6 }}>
              <Input placeholder="请输入" style={{ width: 196, marginLeft: 5 }} />
          </FormItem>
        </Col>
        <Col span={6} key={count + 5} style={{ textAlign: 'right', marginTop: 5 }}>
          <Button htmlType="submit">查询</Button>
          <Button htmlType="button" style={{ marginLeft: 8 }} onClick={handleReset}>
            重置
          </Button>
          {collapse}
        </Col>
      </Row>
    </Form>
  );
};
