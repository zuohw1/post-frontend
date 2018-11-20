import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import PostListTable from './post-duty-list';
import UpdPost from './upd-post';

class PosDuty extends React.Component {
  state = {
    posListVisiable: false,
    updPosListVisiable: false,
  };

  showModal = () => {
    const { posName } = this.props;
    if (posName === '查看职责') {
      this.setState({
        posListVisiable: true,
      });
    } else if (posName === '更改职责') {
      this.setState({
        updPosListVisiable: true,
      });
    }
  };

  handleOk = () => {
    this.setState({
      posListVisiable: false,
      updPosListVisiable: false,
    });
  };

  handleCancel = () => {
    this.setState({
      posListVisiable: false,
      updPosListVisiable: false,
    });
  };

  render() {
    const { posName } = this.props;
    const { posListVisiable, updPosListVisiable } = this.state;
    return (
      <div>
        <a href=" javascript:;" onClick={this.showModal.bind(this)}> {posName}</a>

        <Modal
          title="岗位职责列表"
          visible={posListVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 400 }}>
            <PostListTable />
          </div>
        </Modal>

        <Modal
          title="基准岗位维护"
          visible={updPosListVisiable}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <UpdPost />
          {/* <div style={{ height: 400 }}>
            <Row>
              <Col span={10}>关键职责库</Col>
              <Col span={14}>岗位职责列表</Col>
            </Row>
          </div> */}
        </Modal>
      </div>
    );
  }
}

PosDuty.propTypes = {
  posName: PropTypes.string.isRequired,
};
export default PosDuty;
