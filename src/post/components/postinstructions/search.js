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
    treeSelectData,
    keyDutyDisplay,
    searchDateDisplay,
    stationNameDisplay,
    divisionValue,
    sequenceValue,
    rankValue,
    keyDutyValue,
    searchDateValue,
    stationNameValue,
  } = props;
  const { getFieldDecorator } = form;
  const { setToggle, getInstructions, toggleDisplay, changeDutyValue, handleResetValue, changeDivisionValue, changeSequenceValue, changeRankValue, changeSearchDateValue, changeStationNameValue } = actions;
  const sequenceChildren = [];
  const rankChildren = [];
  console.log(duty);
  for (let i = 0; i < duty.length; i += 1) {
    sequenceChildren.push(<Option key={duty[i].elementId}>{duty[i].elementName}</Option>);
  }
  for (let i = 1; i < 23; i += 1) {
    rankChildren.push(<Option key={i.toString()}>{i.toString()}</Option>);
  }
  const onInstructionsView = () => {
    getInstructions();
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleReset = () => {
    form.resetFields();
    handleResetValue();
  };
  const handleChangeDuty = (value) => {
    console.log(`selected ${value}`);
    changeDutyValue(value);
  };
  const onChangeDivisionValue = (value, label, extra) => {
    console.log(value, label, extra);
    changeDivisionValue(value);
  }
  const onChangeSequence = (value, option) => {
    console.log(value, option);
    if(option === undefined){
      changeSequenceValue(undefined);
    }else{
      changeSequenceValue(option.props.children);
    };
  }
  const onChangeRank = (value, option) => {
    console.log(value, option);
    if(option === undefined){
      changeRankValue(undefined);
    }else{
      changeRankValue(option.props.children);
    };
  }
  const onChangeSearchDate = (date, dateString) => {
    console.log(date, dateString);
    if(dateString === undefined){
      changeSearchDateValue(undefined);
    }else{
      changeSearchDateValue(dateString);
    };
  }
  const onChangeStationName = (e) => {
    console.log(e.target.value);
    changeStationNameValue(e.target.value);
  }
  const toggle = () => {
    setToggle(!expand);
      toggleDisplay(expand);
  };
  const queryCols = [1,2,3,4,5,6];
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
              <TreeSelect allowClear showSearch={false} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} value={divisionValue} onChange={onChangeDivisionValue} treeData={treeSelectData} placeholder="请选择" />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="岗位序列" labelCol={{ span: 6 }}>
              <Select style={{ width: 200, marginLeft: 5, marginRight: 8 }} placeholder="请选择" allowClear onChange={onChangeSequence} value={sequenceValue}>{ sequenceChildren }</Select>
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="职级" labelCol={{ span: 6 }}>
              <Select style={{ width: 200, marginLeft: 5, marginRight: 8 }} placeholder="请选择" allowClear onChange={onChangeRank} value={rankValue}>{ rankChildren }</Select>
          </FormItem>
        </Col>
        <Col span={6} style={{ display: keyDutyDisplay }}>
          <FormItem label="关键职责" labelCol={{ span: 6 }}>
              <Input placeholder="请输入" style={{ width: 196, marginLeft: 5 }} readOnly="readonly" value={keyDutyValue} suffix={<Icon type="check-square" style={{ color: "rgba(0,0,0,.25)" }} onClick={onInstructionsView} />} />
          </FormItem>
        </Col>
        <Col span={6} style={{ display: searchDateDisplay }}>
          <FormItem label="查询日期" labelCol={{ span: 6 }}>
              <DatePicker style={{ width: 200, marginLeft: 5, marginRight: 20 }} onChange={onChangeSearchDate} />
          </FormItem>
        </Col>
        <Col span={6} style={{ display: stationNameDisplay }}>
          <FormItem label="岗位名称" labelCol={{ span: 6 }}>
              <Input placeholder="请输入" style={{ width: 196, marginLeft: 5 }} value={stationNameValue} onChange={onChangeStationName} />
          </FormItem>
        </Col>
        <Col span={6} style={{ textAlign: 'right', marginTop: 5, float: 'right' }}>
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
