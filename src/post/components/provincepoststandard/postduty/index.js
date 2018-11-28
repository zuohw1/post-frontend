import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import PostListTable from './post-duty-list';
import UpdPost from './upd-post';
import StopPost from './stp-post';

class PosDuty extends React.Component {
  state = {
    posListVisiable: false,
    updPosListVisiable: false,
    stpPosListVisiable: false,
  };


  showModal = () => {
    const {
      posName, posKey, posRecord, handleTableData,
    } = this.props;
    if (posName === '查看职责') {
      this.setState({
        posListVisiable: true,
      });
    } else if (posName === '更改职责') {
      this.setState({
        updPosListVisiable: true,
      });
    } else if (posName === '终止') {
      this.setState({
        stpPosListVisiable: true,
      });
    } else if (posName === '定制') {
      handleTableData(posRecord, posKey);
    }
  };

  handleOk = () => {
    this.setState({
      posListVisiable: false,
      updPosListVisiable: false,
      stpPosListVisiable: false,
    });
  };

  handleCancel = () => {
    this.setState({
      posListVisiable: false,
      updPosListVisiable: false,
      stpPosListVisiable: false,
    });
  };

  render() {
    const {
      posName, // posKey, posRecord,
      posBegindate,
    } = this.props;
    const { posListVisiable, updPosListVisiable, stpPosListVisiable } = this.state;
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
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <UpdPost />
        </Modal>

        <Modal
          title="省基准岗位维护-终止"
          visible={stpPosListVisiable}
          width={1000}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 400 }}>
            <StopPost begindate={posBegindate} />
          </div>
        </Modal>

      </div>
    );
  }
}

PosDuty.propTypes = {
  posName: PropTypes.string.isRequired,
  posKey: PropTypes.string.isRequired,
  posRecord: PropTypes.array.isRequired,
  posBegindate: PropTypes.array.isRequired,
  handleTableData: PropTypes.func.isRequired,
};
export default PosDuty;
