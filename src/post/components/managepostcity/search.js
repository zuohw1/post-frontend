import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';

const FormItem = Form.Item;
const { Option } = Select;
let vflag = true;
const respList = [];


export default (props) => {
  const {
    form,
    actions,
    expand,
    respRange,
  } = props;

  const { getFieldDecorator } = form;
  const { listTable, getKeyResp } = actions;

  const refUrl = 'postionmanage/getChildrenTree?topId=';

  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: parseInt(`${extra.triggerNode.props.id}`, 10),
    });
  };
  const handleSearch = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const pageSzie = 10;
        const pageNum = 1;
        const select = { ...values, pageSzie, pageNum };
        listTable(select);
      }
    });
  };

  if (vflag === true) {
    getKeyResp();
    vflag = false;
  }

  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) { // 首次可能请求后还没拿到数据，放此位置会执行多次，只当获取到数据后会进行处理；
      const respV = {
        id: respRange[i].kid,
        title: respRange[i].kname,
      };
      respList.push(respV);
    }
  }

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  /* 查询条件字段 */
  const queryCols = [
    {
      itemName: '部门', itemKey: 'orgid', itemType: 'OrgSelect', required: false,
    },
    {
      itemName: '关键职责', itemKey: 'kid', itemType: 'Select', required: false, list: [],
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
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select placeholder="请选择" allowClear>
                  {
                    respList.map(apply)
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
                  treeId={37839}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  placeholder="请选择"
                  allowClear
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
