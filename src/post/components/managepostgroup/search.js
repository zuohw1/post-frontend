import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker, TreeSelect, Tree,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TreeNode } = Tree;

export default (props) => {
  const {
    form,
    actions,
    expand,
  } = props;

  const renderTreeNodes = () => {
    return (
      <TreeNode value="parent 1" title="中国联合网络通信集团有限公司" key="0-1">
        <TreeNode value="parent 1-0" title="中国联通总部管理部门" key="0-1-1">
          <TreeNode value="leaf1" title="中国联通总部-综合部" key="random" />
          <TreeNode value="leaf2" title="中国联通总部-办公厅" key="random1" />
          <TreeNode value="leaf2" title="中国联通总部-财务部" key="random1" />
        </TreeNode>
      </TreeNode>
    );
  };
  const { getFieldDecorator } = form;
  const { listTable } = actions;

  const refUrl = 'org/allData?id=';

  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };
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

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  /* 查询条件字段 */
  const queryCols = [
    {
      itemName: '部门', itemKey: 'sequence', itemType: 'OrgSelect', required: false,
    },
    {
      itemName: '关键职责', itemKey: 'status', itemType: 'Select', required: false, list: [{ id: '0', title: '集团本部门正职' }, { id: '1', title: '集团本部门副职' }, { id: '2', title: '其他' }],
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
                <TreeSelect
                  treeId={37838}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  placeholder="请选择"
                  allowClear
                >
                  {renderTreeNodes()}
                </TreeSelect>,
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
