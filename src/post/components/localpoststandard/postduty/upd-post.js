/* eslint-disable prefer-destructuring */
import React from 'react';
import { Row, Col } from 'antd';
import UpdPostTree from './upd-post-tree';
import UpdPostList from './upd-post-list';

class UpdPost extends React.Component {
  constructor(props) {
    super(props);
    // noinspection JSAnnotator
    this.state = {
      isAddFlag: false,
      listDataSource: [{
        key: '0',
        subposname: '实体渠道管理.渠道策略与规划.创新渠道模式扩展',
      }, {
        key: '1',
        subposname: '实体渠道管理.渠道策略与规划.渠道策略研究，制定渠道规划',
      }, {
        key: '2',
        subposname: '实体渠道管理.渠道策略与规划.渠道发展策略方案监督落实',
      }, {
        key: '3',
        subposname: '实体渠道管理.渠道策略与规划.渠道建设原则、标准以及渠道引入',
      }],
      listCount: 4, // 界面右侧列表条数
      groupPostCount: 4, // 集团基准岗位数
    };
  }

  handleListDelete = (key) => {
    const { listCount, listDataSource } = this.state;
    this.setState({
      listDataSource: listDataSource.filter(item => item.key !== key),
      listCount: listCount - 1,
    });
  };

  handleCheckTreeNode = (checkedKeys, info) => {
    const { listCount, listDataSource } = this.state;
    // const nodeName = info.node.props.title;
    const postId = `${info.node.props.postId}`;
    const nodeName = info.node.props.value;
    const isChecked = info.checked;
    if (isChecked === true) {
      if (info.node.props.children === undefined) { // 选叶子节点
        const newData = {
          key: postId,
          subposname: nodeName,
        };
        this.setState({
          // checkTreeNodeName: nodeName,
          isAddFlag: true,
          listDataSource: [...listDataSource, newData],
          listCount: listCount + 1,
        });
      } else { // 选 非叶子节点
        const postChidren = info.node.props.children;
        const newDatas = [];
        for (let j = 0; j < postChidren.length; j += 1) {
          const pId = postChidren[j].props.postId;
          const pvalue = postChidren[j].props.value;
          const newData = {
            key: pId,
            subposname: pvalue,
          };
          newDatas.push(newData);
        }
        this.setState({
          // checkTreeNodeName: pvalue,
          isAddFlag: true,
          listDataSource: listDataSource.concat(newDatas),
          listCount: listCount + 2,
        });
      }
    }
  };

  render() {
    const {
      listDataSource, listCount, groupPostCount, isAddFlag,
    } = this.state;
    return (
      <div>
        <div style={{ height: 500, border: 10, borderColor: 'blue' }}>
          <Row gutter={5}>
            <Col span={10}>
              <UpdPostTree handleCheckTreeNode={this.handleCheckTreeNode.bind(this)} />
            </Col>
            <Col span={14}>
              <UpdPostList
                isAddFlag={isAddFlag}
                listDataSource={listDataSource}
                listCount={listCount}
                groupPostCount={groupPostCount}
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
