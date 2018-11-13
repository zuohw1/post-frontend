/* eslint-disable no-unused-vars,react/destructuring-assignment,no-useless-constructor,no-undef,indent,max-len */
import React, { Component } from 'react';
import {
  Form, Select, Modal,
} from 'antd';
import DetailList from './detail-list';

const FormItem = Form.Item;
const { Option } = Select;

class Popup extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <a href=" javascript:;" onClick={this.showModal.bind(this)}>详细信息</a>
        <Modal
          title="基本信息"
          width={1000}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <DetailList />
        </Modal>
      </div>
    );
  }
}
export default Popup;
