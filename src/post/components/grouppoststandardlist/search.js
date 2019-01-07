import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';


const FormItem = Form.Item;
const { Option } = Select;
let postflag = true;
let subflag = true;
let eduflag = true;
const postSeqList = [];
let subSeqList = [];
const eduRequireList = [];

export default (props) => {
  const {
    form,
    actions,
    expand,
    postSeqData,
    subSeqData,
    eduRequireData,
  } = props;
  const { getFieldDecorator } = form;
  const {
    listTable, setToggle, getPostSeqRef, getSubSeqRef, getEduRequireRef,
  } = actions;

  const handleSearch = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
  };

  const handleSubflagSearch = () => {
    form.validateFields((err, values) => {
      if (!err) {
        getSubSeqRef(values);
      }
    });
  };

  // 动态获取 岗位序列
  if (postflag === true) {
    getPostSeqRef();
    handleSearch(); // 进入节点展示无条件的默认查询结果
    postflag = false;
  }
  if (subflag === true) {
    getSubSeqRef();
    // handleSubflagSearch();
    subflag = false;
  }
  if (eduflag === true) {
    getEduRequireRef();
    eduflag = false;
  }
  if (postSeqList.length === 0) {
    for (let i = 0; i < postSeqData.length; i += 1) { // 首次可能请求后还没拿到数据，放此位置会执行多次，只当获取到数据后会进行处理；
      const respV = {
        id: postSeqData[i].elementId,
        title: postSeqData[i].elementName,
      };
      postSeqList.push(respV);
    }
  }
  subSeqList = [];
  if (subSeqList.length === 0) {
    for (let i = 0; i < subSeqData.length; i += 1) {
      const respV = {
        id: subSeqData[i].elementId,
        title: subSeqData[i].elementName,
      };
      subSeqList.push(respV);
    }
  }

  if (eduRequireList.length === 0) {
    for (let i = 0; i < eduRequireData.length; i += 1) {
      const respV = {
        id: eduRequireData[i].lookupCode,
        title: eduRequireData[i].description,
      };
      eduRequireList.push(respV);
    }
  }

  const handlePostChange = (posCateId) => {
    subSeqList = [];
    form.setFieldsValue({
      posCateId,
      posSubcateId: null,
    });
    handleSubflagSearch();
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

  const handleonchangeckbx = () => {

  };

  /* 查询字段 */
  const queryCols = [{
    itemName: '岗位序列', itemKey: 'posCateId', itemType: 'CateSelect', required: false, list: [],
  },
  {
    itemName: '子序列', itemKey: 'posSubcateId', itemType: 'SubSeqSelect', required: false, list: [],
  },
  {
    itemName: '关键词', itemKey: 'posName', itemType: 'String', required: false,
  },
  {
    itemName: '组织层级', itemKey: 'orgLevel', itemType: 'Checkbox', required: false, list: [{ label: '集团', value: 'J' }, { label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '区/县', value: 'X' }],
  },
  {
    itemName: '是否核心', itemKey: 'coreFlag', itemType: 'Select', required: false, list: [{ id: '是', title: '是' }, { id: '否', title: '否' }],
  },
  {
    itemName: '学历要求', itemKey: 'educationDegree', itemType: 'EduSelect', required: false, list: [],
  }];

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
                <Input placeholder="请输入" />,
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
      } else if (queryCols[i].itemType === 'Checkbox') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <CheckboxGroup options={queryCols[i].list} onChange={handleonchangeckbx} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
      } else if (queryCols[i].itemType === 'CateSelect') { // 岗位序列
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" onChange={handlePostChange} allowClear>
                  {
                    postSeqList.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'SubSeqSelect') { // 子序列
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    subSeqList.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'EduSelect') { // 学历要求
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    eduRequireList.map(apply)
                  }
                </Select>,
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
    </Form>);
};
