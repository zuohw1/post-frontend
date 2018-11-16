import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';
import request from '../../../utils/request';

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

  const handleReset = () => {
    form.resetFields();
    request.get('posElement/export');
  };

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  /* 组织下拉查询地址 */
  const refUrl = 'posElement/list';

  /* 组织下拉选择后事件 */
  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };

  /* 查询条件字段 */
  const queryCols = [
    {
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
    },
  ];

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
    children.push(
      <Col span={4} key={count + 6} style={{ textAlign: 'right', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
          导出
        </Button>
      </Col>,
    );
    return children;
  }

  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>);
};
