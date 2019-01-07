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
    primaryBusinessShow,
    isAddprofModalShow, isAlertShow, addTreeNode,
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
  const addProfModalOk = () => {
    // 获取input值
    form.validateFields((err, values) => {
      if (!err) {
        const {
          businessname, radiogroup, select, businessdescript,
        } = values;
        if (radiogroup === 1) {
          // 查找一级树中有没有同名的节点
          const index = leftCardTree.findIndex((ele) => {
            return ele.majorName === businessname.trim();
          });
          if (index >= 0) {
            isAlertShow(true);
            return;
          }
          addTreeNode(businessname, businessdescript, 'M', '');
        } else if (radiogroup === 2) {
          // 找到与select名字相同的一级业务划分的id
          const index = leftCardTree.findIndex((ele) => {
            return ele.majorName === select;
          });
          const parentId = leftCardTree[index].majorId;
          addTreeNode(businessname, businessdescript, 'S', parentId);
        }
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
            {getFieldDecorator('select')(
              <Select placeholder="运维" style={{ width: 150 }}>
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
