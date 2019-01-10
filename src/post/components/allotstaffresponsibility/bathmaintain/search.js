import React from 'react';
import {
  Form, Row, Col, Button, TreeSelect,
} from 'antd';
import { Link } from 'dva/router';
// import SyncTreeSelect from '../../../../components/sync-tree-select';

const FormItem = Form.Item;


export default (props) => {
  const {
    form,
    actions,
  } = props;

  const { getFieldDecorator } = form;
  const { listTable } = actions;

  // const refUrl = 'postionmanage/getChildrenTree?topId=';
  //
  // const treeSelectChange = (value, label, extra) => {
  //   form.setFieldsValue({
  //     orgid: parseInt(`${extra.triggerNode.props.id}`, 10),
  //   });
  // };
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

  /* 查询条件字段 */
  const queryCols = [
    {
      itemName: '部门', itemKey: 'orgId', itemType: 'OrgSelect', required: false,
    },
  ];

  const treeData = [{
    title: '沧州市分公司',
    value: '0-0',
    key: '0-0',
    children: [{
      title: '沧州市分公司本部',
      value: '0-0-1',
      key: '0-0-1',
      children: [{
        title: '沧州市分公司办公室',
        value: '0-0-1-1',
        key: '0-0-1-1',
      }, {
        title: '沧州市分公司网优与客响中心',
        value: '0-0-1-2',
        key: '0-0-1-2',
      },
      ],
    }, {
      title: '沧州市区县分公司',
      value: '0-0-2',
      key: '0-0-2',
    }],
  }];
  function getFields() {
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName} labelCol={{ span: 4 }}>
              {getFieldDecorator(queryCols[i].itemKey)(
                /* <SyncTreeSelect
                  treeId={37839}
                  treeSelectChange={treeSelectChange}
                  refUrl={refUrl}
                  placeholder="请选择"
                  allowClear
                />, */
                <TreeSelect
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                  placeholder="请选择"
                  treeDefaultExpandAll
                  // onChange={onChange}
                />,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={18} key={6} style={{ marginTop: 5 }}>
        <Button htmlType="button">查询</Button>
        <Button htmlType="button" style={{ marginLeft: 8 }}>查询并排序</Button>
        <Button htmlType="button" style={{ marginLeft: 8 }}><Link to="/post/allotStaffResponsibility">返回</Link>
        </Button>
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
