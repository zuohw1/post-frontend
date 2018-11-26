/* eslint-disable indent,max-len */
import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';


const FormItem = Form.Item;
const { Option } = Select;
let vflag = false;
let vadd = false;
let vass = false;
const postList = [];
const subList = [];
const micList = [];
export default (state) => {
  const {
    form,
    actions,
    expand,
    postSeq,
    subSeq,
    menSeq,
  } = state;
  const { getFieldDecorator } = form;
  const {
    listTable, setToggle, getPostRangeRef, getRespRangeRef, getMeatRangeRef,
  } = actions;

  const handleSearch = () => {
    // e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const recordNum = 10;
        const currentPageNum = 1;
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };
  // 动态获取 岗位序列
  if (vflag === false) {
    getPostRangeRef();
    vflag = true;
  }
  if (postList.length === 0) {
    for (let i = 0; i < postSeq.length; i += 1) {
      const respV = {
        id: postSeq[i].elementId,
        title: postSeq[i].elementName,
      };
      postList.push(respV);
    }
  }

  // 动态获取 子序列
  if (vadd === false) {
    getRespRangeRef();
    vadd = true;
  }
  console.log('subSeq', subSeq);
  if (subList.length === 0) {
    for (let i = 0; i < subSeq.length; i += 1) {
      const respV = {
        id: subSeq[i].sid,
        title: subSeq[i].sname,
      };
      subList.push(respV);
    }
  }

  // 动态获取 学历要求
  if (vass === false) {
    getMeatRangeRef();
    vass = true;
  }
  console.log('menSeq', menSeq);
  if (micList.length === 0) {
    for (let i = 0; i < menSeq.length; i += 1) {
      const pageV = {
        id: menSeq[i].lookupCode,
        title: menSeq[i].meaning,
      };
      micList.push(pageV);
    }
  }
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
    itemName: '岗位序列', itemKey: 'posCateId', itemType: 'PostSelect', required: false, list: [],
  },
    {
      itemName: '子序列', itemKey: 'posSubcateId', itemType: 'SubSelect', required: false, list: [],
    },
    {
      itemName: '关键词', itemKey: 'posName', itemType: 'String', required: false,
    },
    {
      itemName: '', itemKey: 'state', itemType: 'Checkbox', required: false, list: [{ label: '展示有效岗位', value: 'effectivepos' }, { label: '展示无效岗位  ', value: 'invalidpos' }],
    },
    {
      itemName: '组织层级', itemKey: 'levelCode', itemType: 'Checkbox', required: false, list: [{ label: '省', value: 's' }, { label: '市', value: 'd' }, { label: '区/县', value: 'x' }],
    },
    {
      itemName: '是否核心', itemKey: 'coreFlag', itemType: 'Select', required: false, list: [{ id: 'Y', title: '是' }, { id: 'N', title: '否' }],
    },
    {
      itemName: '学历要求', itemKey: 'educationDegree', itemType: 'MenSelect', required: false, list: [],
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
      } else if (queryCols[i].itemType === 'PostSelect') { // 岗位序列
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    postList.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'SubSelect') { // 子序列
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    subList.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'MenSelect') { // 学历要求
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                    micList.map(apply)
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
