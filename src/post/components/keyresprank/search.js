import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, DatePicker,
} from 'antd';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';

const FormItem = Form.Item;
const { Option } = Select;
let vflag = true;
const respList = [];

export default (state) => {
  const {
    form,
    actions,
    expand,
    respRange,
  } = state;
  const { getFieldDecorator } = form;
  const {
    listTable, setToggle, getRespRangeRef,
  } = actions;

  const handleSearch = () => {
    // e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
  };

  // 动态获取 职责范围
  if (vflag === true) {
    getRespRangeRef();
    handleSearch(); // 进入节点展示无条件的默认查询结果
    vflag = false;
  }
  // const respList = [];
  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) { // 首次可能请求后还没拿到数据，放此位置会执行多次，只当获取到数据后会进行处理；
      const respV = {
        id: respRange[i].menuId,
        title: respRange[i].menuName,
      };
      respList.push(respV);
    }
  }


  const handleReset = () => {
    form.resetFields();
  };


  const handleExport = () => {
    handleReset();
  };

  const toggle = () => {
    setToggle(!expand);
  };

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  const handleonchangeckbx = () => {

  };

  /* 查询条件 */
  const queryCols = [{
    itemName: '职责范围', itemKey: 'sequence', itemType: 'RespSelect', required: false, list: [],
  },
  {
    itemName: '关键职责', itemKey: 'respName', itemType: 'String', required: false,
  },
  {
    itemName: '组织层级', itemKey: 'levelType', itemType: 'Checkbox', required: false, list: [{ label: '集团', value: 'J' }, { label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '区/县', value: 'X' }],
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
      } else if (queryCols[i].itemType === 'RespSelect') { // 职责范围
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select style={{ width: 220, marginLeft: 5, marginRight: 20 }} placeholder="请选择" allowClear>
                  {
                      respList.map(apply)
                    }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    children.push(
      <Col span={6} style={{ textAlign: 'right' }}>
        <Button htmlType="submit">查询</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleExport}>
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
