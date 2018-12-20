import React from 'react';
import '../assets/styles/business-key-resp-map.less';
import {
  Form, Input, Radio, Select, Button,
} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;


const AddProfDivision = (props) => {
  console.log('division', props);
  const {
    form, isPrimaryShow, leftCardTree, actions,
  } = props;
  const { primaryBusinessShow, isAddprofModalShow, updateLeftCardTree } = actions;
  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const { getFieldDecorator } = form;
  const handleRadioChange = (e) => {
    if (e.target.value * 1 === 2) {
      primaryBusinessShow(true);
    } else {
      primaryBusinessShow(false);
    }
  };
  const addProfModalOk = (e) => {
    e.preventDefault();
    const newTree = [...leftCardTree];
    const newTreeNode = {};
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.radiogroup === 1) {
          newTreeNode.title = values.businessname;
          newTreeNode.key = values.businessname;
        } else if (values.radiogroup === 2) {
          console.log(222);
        }
        console.log(111, newTreeNode);
        newTree.push(newTreeNode);
        updateLeftCardTree(newTree);
      }
    });
    // isAddprofModalShow(false);
  };
  const addProfModalCancel = () => {
    isAddprofModalShow(false);
  };
  return (
    <div className="addProfDivision">
      <ul className="addProfList">
        <li>
          <FormItem
            {...formItemLayout}
            label="业务划分类型"
            help=""
          >
            {getFieldDecorator('radiogroup', {
              initialValue: 1,
            })(
              <RadioGroup onChange={handleRadioChange}>
                <Radio value={1}>一级业务划分</Radio>
                <Radio value={2}>二级业务划分</Radio>
              </RadioGroup>,
            )}
          </FormItem>
        </li>
        <li style={isPrimaryShow ? { display: 'block' } : { display: 'none' }} className="isPrimaryShow">
          <FormItem
            {...formItemLayout}
            label="一级业务划分"
            help=""
          >
            {getFieldDecorator('select', {
              initialValue: 'china',
            })(
              <Select placeholder="china" style={{ width: 150 }}>
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
              </Select>,
            )}
          </FormItem>
        </li>
        <li>
          <FormItem
            hasFeedback
            {...formItemLayout}
            label="业务划分名称"
            help=""
          >
            {getFieldDecorator('businessname', {
              rules: [{
                type: 'string', whitespace: true,
              }, {
                required: true,
              }],
            })(
              <Input />,
            )}
          </FormItem>
        </li>
        <li>
          <FormItem
            {...formItemLayout}
            label="业务划分描述"
            help=""
          >
            {getFieldDecorator('businessdescript', {
              rules: [{
                type: 'string',
              }],
            })(
              <Input />,
            )}
          </FormItem>
        </li>
      </ul>
      <Button key="back" onClick={addProfModalCancel}>取消</Button>
      <Button key="submit" type="primary" onClick={e => addProfModalOk(e)}>
        提交
      </Button>
    </div>
  );
};

const WrappedAddProfDivision = Form.create()(AddProfDivision);
export default WrappedAddProfDivision;
