import React from 'react';
import {
  Form, Input, Radio, Select, Button, Alert,
} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;


const AddProfDivision = ({
  form, isPrimaryShow, leftCardTree, actions, primaryBusinessData, showAlert,
}) => {
  const {
    primaryBusinessShow, isAddprofModalShow, updateLeftCardTree, isAlertShow,
  } = actions;
  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const { getFieldDecorator } = form;
  // 点击radio2 显示一级业务划分
  const handleRadioChange = (e) => {
    if (e.target.value * 1 === 2) {
      primaryBusinessShow(true);
    } else {
      primaryBusinessShow(false);
    }
  };
  const addProfModalOk = (e) => {
    e.preventDefault();
    // 获取左树
    const newTree = [...leftCardTree];
    // 设置新的树节点
    const newTreeNode = {};
    form.validateFields((err, values) => {
      if (!err) {
        const { businessname, radiogroup, select } = values;
        newTreeNode.title = businessname.trim();
        // newTreeNode.key = businessname.trim();
        if (radiogroup === 1) {
          // 避免重复添加
          const index = newTree.findIndex((ele) => {
            return ele.title === businessname.trim();
          });
          if (index >= 0) {
            isAlertShow(true);
            return;
          }
          newTreeNode.key = newTree.length;
          newTree.push(newTreeNode);
        } else if (radiogroup === 2) {
          // 找到与select名字相同的一级业务划分
          const index = newTree.findIndex((ele) => {
            return ele.title === select;
          });
          console.log(11111, index);
          // 如果她没有children,就让她有children，再push进去
          if (typeof newTree[index].children === 'undefined') {
            newTreeNode.key = `${index}-0`;
            newTree[index].children = [];
            newTree[index].children.push(newTreeNode);
          } else {
            const { children } = newTree[index];
            const innerIndex = children.findIndex(ele => ele.title === businessname.trim());
            if (innerIndex >= 0) {
              isAlertShow(true);
              return;
            }
            newTreeNode.key = `${index}-${children.length}`;
            children.push(newTreeNode);
          }
        }
        updateLeftCardTree(newTree);
        isAlertShow(false);
        isAddprofModalShow(false);
      }
    });
  };
  const addProfModalCancel = () => {
    isAlertShow(false);
    isAddprofModalShow(false);
  };
  return (
    <div className="addProfDivision">
      <Alert style={showAlert ? { display: 'block' } : { display: 'none' }} message="已有该分组，请重新添加！" type="warning" showIcon />
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
                {primaryBusinessData.map(ele => <Option key={ele} value={ele}>{ele}</Option>)}
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
                type: 'string', whitespace: true, pattern: new RegExp(/(^\s*)|(\s*$)/g),
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
