import React, { Component } from 'react';
import { Modal } from 'antd';
import FormTable from './table';

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
        <a href=" javascript:;" onClick={this.showModal.bind(this)}>全部记录</a>
        <Modal
          title="全部记录"
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
