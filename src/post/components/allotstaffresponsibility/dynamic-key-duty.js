/* eslint-disable */
import React from 'react';
import {
  Form, Input, Icon, Button,
} from 'antd';

const FormItem = Form.Item;

let id = 0;

class DynamicKeyDuty extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  render() {
    const { initialValueKey } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: initialValueKey });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <FormItem
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
          <span className="key-duty-list-execute">
            <Input style={{ width: '60%', marginRight: 8 }} />
            <Icon className="dynamic-delete-button" type="close" onClick={() => this.remove(k)}/>
          </span> 
          <span className="key-duty-list-workload"><Input style={{ width: '60%', marginRight: 8 }} /></span>
      </FormItem>
    ));
    return (
      <Form>
        {formItems}
      </Form>
    );
  }
}

export default DynamicKeyDuty;