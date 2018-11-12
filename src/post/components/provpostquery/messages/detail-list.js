/* eslint-disable no-unused-vars,react/destructuring-assignment,no-useless-constructor,react/jsx-indent,max-len,no-trailing-spaces,spaced-comment,lines-between-class-members,no-undef */
import React, { Component } from 'react';
import {
  Form, Col, Row, Input, Select, Checkbox, Table, DatePicker,
} from 'antd';
import CheckboxGroup from '../../../../../node_modules/antd/es/checkbox/Group';

const FormItem = Form.Item;
const { Option } = Select;

class Search extends Component {
  constructor(...props) {
    super(...props);
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
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
    const queryCols = [
      {
        itemName: '岗位名称', itemKey: 'test_def3', itemType: 'String', disabled: true, // TODO 不可用
      },
      {
        itemName: '所属子序列', itemKey: 'test_def3', itemType: 'String', disabled: true, // TODO 不可用
      },
      {
        itemName: '是否核心', itemKey: 'def4', itemType: 'Select', required: false, list: [{ id: '0', title: '是' }, { id: '1', title: '否' }],
      },
      {
        itemName: '学历要求', itemKey: 'def5', itemType: 'Select', required: false, list: [{ id: '0', title: '博士' }, { id: '1', title: '硕士' }, { id: '2', title: '本科' }, { id: '3', title: '大专' }],
      },
      {
        itemName: '组织层级', itemKey: 'cRespName', itemType: 'Checkbox', required: false, list: [{ label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '区/县', value: 'X' }],
      },
      {
        itemName: '开始日期', itemKey: 'test_def3', itemType: 'Date', disabled: true, // TODO 不可用
      },
      {
        itemName: '结束日期', itemKey: 'test_def4', itemType: 'Date', disabled: true, // TODO 不可用
      },
    ];
    function getFields(isOneLine) {
      const children = [];
      let beginI = 0;
      let endI = queryCols.length;

      if (isOneLine === undefined) {
        endI = 3;
      } else if (isOneLine === 2) {
        beginI = 3;
      }
      for (let i = beginI; i < endI; i += 1) {
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
                  <Input style={{ width: 220, marginLeft: 5 }} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'Select') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey)(
                  <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} allowClear disabled>
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
            <Col span={10} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey)(
                  <CheckboxGroup options={queryCols[i].list} defaultChecked={false} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'Date') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                    message: '不能为空!',
                  }],
                })(
                  <DatePicker style={{ width: 220, marginLeft: 5 }} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        }
      }
      return children;
    }
    const columns = [{
      title: '主要岗位职责',
      dataIndex: 'major',
      key: 'major',
      align: 'center',
      width: 100,
    }, {
      title: ' ',
      dataIndex: 'content',
      key: 'content',
    }];
    /*表格测试数据*/
    const data = [{
      major: '1',
      content: '人力资源，企业年金管理，按照规定向上级汇报业务',
    }, {
      major: '2',
      content: '人力资源，企业年金管理，按照规定向上级汇报业务',
    }, {
      major: '3',
      content: '人力资源，企业年金管理，按照规定向上级汇报业务',
    }, {
      major: '4',
      content: '人力资源，企业年金管理，按照规定向上级汇报业务',
    }, {
      major: '5',
      content: '人力资源，企业年金管理，按照规定向上级汇报业务',
    }];
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>{getFields()}</Row>
          <Row gutter={24}>{getFields(2)}</Row>
        </Form>
        <Table columns={columns} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} />
      </div>
    );
  }
}
const DetailList = Form.create()(Search);
export default DetailList;
