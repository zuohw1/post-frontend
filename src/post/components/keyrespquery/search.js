import React from 'react';
import {
  Form, Row, Col, Input, Button, Select, DatePicker,
} from 'antd';

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
  const { listTable, getRespRangeRef } = actions;

  const handleSearch = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const recordNum = 10;
        const currentPageNum = 1;
        const select = { ...values, recordNum, currentPageNum };
        listTable(select);
      }
    });
  };

  if (vflag === true) {
    getRespRangeRef();
    handleSearch(); // 进入节点展示无条件的默认查询结果
    vflag = false;
  }

  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) { // 首次可能请求后还没拿到数据，放此位置会执行多次，只当获取到数据后会进行处理；
      const respV = {
        id: respRange[i].menuId,
        title: respRange[i].menuName,
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
      itemName: '职责范围', itemKey: 'sequence', itemType: 'RespSelect', required: false, list: [],
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
      } else if (queryCols[i].itemType === 'RespSelect') {
        children.push(
          <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryCols[i].itemName}>
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
