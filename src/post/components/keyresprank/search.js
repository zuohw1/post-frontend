import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import SyncTreeSelect from '../../../components/SyncTreeSelect';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';

const FormItem = Form.Item;
const { Option } = Select;

export default (props) => {
  const {
    form,
    actions,
    expand,
  } = props;
  const { getFieldDecorator } = form;
  const { listTable, setToggle } = actions;

  const handleSearch = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
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

  /* 组织下拉查询地址 */
  const refUrl = 'org/allData?id=';

  /* 组织下拉选中后事件 */
  const treeSelectChange = (value, label, extra) => {
    form.setFieldsValue({
      orgid: `${extra.triggerNode.props.id}`,
    });
  };

  const handleonchangeckbx = () => {

  };

  /* 查询条件 */
  const queryCols = [{
    itemName: '职责范围', itemKey: 'sequenceName', itemType: 'OrgSelect', required: true,
  },
  {
    itemName: '关键职责', itemKey: 'respName', itemType: 'String', required: false,
  },
  {
    itemName: '组织层级', itemKey: 'cRespName', itemType: 'Checkbox', required: false, list: [{ label: '集团', value: 'J' }, { label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '区/县', value: 'X' }],
  },
  ];

  function getFields() {
    const count = expand ? queryCols.length : 4;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
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
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <CheckboxGroup options={queryCols[i].list} onChange={handleonchangeckbx} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'OrgSelect') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
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
      <Col span={6} style={{ textAlign: 'right' }}>
        <Button htmlType="submit">查询</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
          导出
        </Button>
        {collapse}
      </Col>,
    );
    return children;
  }

  let collapse = null;
  if (queryCols.length > 4) {
    collapse = (
      <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggle}>
      更多 <Icon type={expand ? 'up' : 'down'} />
      </a>
    );
  }

  return (
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>);
};
