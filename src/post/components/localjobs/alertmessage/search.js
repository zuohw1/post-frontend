import React, { Component } from 'react';
import { Form, Col, Row, Input, Select, DatePicker,Divider, Icon,Checkbox,Modal } from 'antd';
import MainTable from './maintable';
import SyncTreeSelect from '../../../../components/SyncTreeSelect';
import CheckboxGroup from '../../../../../node_modules/antd/es/checkbox/Group';

const FormItem = Form.Item;
const { Option } = Select;

class Search extends Component {
  constructor(...props) {
    super(...props);
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
    const { form,expand, } = this.props;
    const { getFieldDecorator,getFieldError, isFieldTouched } = form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');


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
      const count = expand ? queryCols.length : 3;
      const children = [];
      let beginI = 0;
      let endI = queryCols.length;

      if (isOneLine === undefined) {
        endI = 3;
      } else if (isOneLine === 2) {
        beginI = 3;
      }
      // for (let i = 0; i < queryCols.length; i += 1) {
      for (let i = beginI; i < endI; i += 1) {
        if (queryCols[i].itemType === 'String') {
          children.push(
            /*  {<Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>}  */
            <Col span={8} key={i} style={{ display: 'block' }} >
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                    message: '不能为空!',
                  }],
                })(
                  <Input placeholder="请输入" style={{width:220,marginLeft:5}}/>,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'Select') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
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
            <Col span={10} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey)(
                  <CheckboxGroup options={queryCols[i].list} onChange={handleonchangeckbx} />,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'OrgSelect') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
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
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                    message: '不能为空!',
                  }],
                })(
                  <DatePicker style={{width:220,marginLeft:5}}/>,
                )}
              </FormItem>
            </Col>,
          );
        }
      }
      return children;
    }

    return (
      <div>
        <a onClick={this.showModal}>
          详细信息
        </a>
        <Modal
          title="基本信息"
          width={1000}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            className="ant-advanced-search-form"
          >
            <Row gutter={24}>{getFields()}</Row>
            <Row gutter={24}>{getFields(2)}</Row>
          </Form>
          <MainTable></MainTable>
        </Modal>
      </div>
    );
  }
}
const App = Form.create()(Search);
export default App;
