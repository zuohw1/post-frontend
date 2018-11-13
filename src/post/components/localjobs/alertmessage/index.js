import React, { Component } from 'react';
import { Modal } from 'antd';
import FormTable from './form-table';

class Modall extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <a href=" javascript:;" onClick={this.showModal.bind(this)}>详细信息</a>
        <Modal
          title="基本信息"
          width={1000}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormTable />
        </Modal>
      </div>
    );
  }
}
export default Modall;
