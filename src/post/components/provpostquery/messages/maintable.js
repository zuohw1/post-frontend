/* eslint-disable no-unused-vars,react/destructuring-assignment,no-useless-constructor,no-undef,indent,max-len */
import React, { Component } from 'react';
import {
  Form, Select, Modal,
} from 'antd';
import Search from './search';

const FormItem = Form.Item;
const { Option } = Select;

class MainTable extends Component {
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
          <Search />
        </Modal>
      </div>
    );
  }
}
export default MainTable;
