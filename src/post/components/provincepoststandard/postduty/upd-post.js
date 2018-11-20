import React from 'react';
import {
  Row, Col,
} from 'antd';
import UpdPostTree from './upd-post-tree';
import UpdPostList from './upd-post-list';

// 基准岗位维护
class UpdPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkTreeNodeName: '',
      isAddFlag: false,
      listDataSource: [{
        key: '0',
        subposname: '实体渠道管理.渠道策略与规划.创新渠道模式拓展',
      }, {
        key: '1',
        subposname: '实体渠道管理.渠道策略与规划.渠道策略研究，指定渠道规划',
      }, {
        key: '2',
        subposname: '实体渠道管理.渠道策略与规划.渠道发展策略方案监督落实',
      }, {
        key: '3',
        subposname: '实体渠道管理.渠道策略与规划.渠道见识源自、标准以及渠道引入、合作管理等',
      }],
      listCount: 4,
    };
  }

  handleCheckTreeNode = (checkedKeys, info) => {
    const { listCount, listDataSource } = this.state;
    const nodeName = info.node.props.title;
    const isChecked = info.checked;
    if (isChecked === true) {
      const newData = {
        key: listCount,
        subposname: nodeName,
      };
      this.setState({
        checkTreeNodeName: nodeName,
        isAddFlag: true,
        listDataSource: [...listDataSource, newData],
        listCount: listCount + 1,
      });
    }
  }

  handleListDelete = (key) => {
    const { listCount, listDataSource } = this.state;
    this.setState({
      listDataSource: listDataSource.filter(item => item.key !== key),
      listCount: listCount - 1,
    });
  }

  render() {
    const {
      checkTreeNodeName, isAddFlag, listDataSource, listCount,
    } = this.state;
    return (
      <div>
        <div style={{ height: 400, border: 10, borderColor: 'blue' }}>
          <Row gutter={50}>
            <Col span={10}>
              <UpdPostTree handleCheckTreeNode={this.handleCheckTreeNode.bind(this)} />
            </Col>
            <Col span={14}>
              <UpdPostList
                addPosToList={checkTreeNodeName}
                isAddFlag={isAddFlag}
                listDataSource={listDataSource}
                listCount={listCount}
                handleListDelete={this.handleListDelete.bind(this)}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default UpdPost;
