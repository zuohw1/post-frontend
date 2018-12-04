import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Form, Row, Button, Col, DatePicker,
} from 'antd';

const FormItem = Form.Item;
class StopPostList extends Component {
  props;

  render() {
    const { form, begindate } = this.props;
    const { getFieldDecorator } = form;

    /* 字段 */
    const showCols = [
      {
        itemName: '开始日期', itemKey: 'test_def3', itemType: 'BeginDate', disabled: true,
      },
      {
        itemName: '结束日期', itemKey: 'test_def4', itemType: 'Date', disabled: false, required: true,
      },
    ];
    function getFields() {
      const dateFormat = 'YYYY-MM-DD';
      const children = [];
      for (let i = 0; i < showCols.length; i += 1) {
        if (showCols[i].itemType === 'BeginDate') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={showCols[i].itemName} labelCol={{ span: 6 }}>
                {getFieldDecorator(showCols[i].itemKey, {
                  rules: [{
                    required: showCols[i].required,
                    message: '不能为空',
                  }],
                })(
                  <DatePicker
                    style={{ width: 220, marginLeft: 5 }}
                    defaultValue={moment(begindate, dateFormat)}
                    initialValue={moment(begindate, dateFormat)}
                    value={moment(begindate, dateFormat)}
                    format={dateFormat}
                  />,
                )
                }
              </FormItem>
            </Col>,
          );
        } else if (showCols[i].itemType === 'Date') {
          children.push(
            <Col span={8} key={i} style={{ display: 'block' }}>
              <FormItem label={showCols[i].itemName} labelCol={{ span: 8 }}>
                {getFieldDecorator(showCols[i].itemKey, {
                  rules: [{
                    required: showCols[i].required,
                    message: '不能为空',
                  }],
                })(
                  <DatePicker
                    style={{ width: 220, marginLeft: 5 }}
                    onChange={onDateChange}
                    format={dateFormat}
                  />,
                )
                }
              </FormItem>
            </Col>,
          );
        }
      }
      return children;
    }
    const handleSaveStopPost = (e) => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    };
    const handleCancelStopPost = () => {
    };
    const onDateChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
      <div>
        <Form className="ant-advanced-search-form">
          <Row gutter={24}>{getFields()}</Row>
          <Row gutter={24}>
            <Button htmlType="button" type="primary" style={{ marginLeft: 0 }} onClick={handleSaveStopPost}>保存</Button>
            <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleCancelStopPost}>取消</Button>
          </Row>
        </Form>
      </div>
    );
  }
}
const StopPost = Form.create()(StopPostList);

StopPost.propTypes = {
  begindate: PropTypes.string.isRequired,
};
export default StopPost;
