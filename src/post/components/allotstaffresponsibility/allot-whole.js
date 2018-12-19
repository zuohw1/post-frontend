/* eslint-disable */
import React, { Component } from 'react';
import { Layout, Tree } from 'antd';
import PropTypes from 'prop-types';

const { TreeNode } = Tree;
const wholetree = [
  {
    title: '工会',
    key: '0',
    children: [
      { title: '市本部部门正职', 
        key: '0-0',
        children: [
          { title: '市本部部门正职', key: '0-0-0' }
        ], 
      },
      { title: '其他', 
        key: '0-1',
        children: [
          { title: '其他', key: '0-1-0' }
        ], 
      }
    ],
  },
  {
    title: 'IT规划',
    key: '1',
    children: [
      { title: 'IT规划', 
        key: '1-0',
        children: [
          { title: '系统架构设计', key: '1-0-0' },
          { title: '行动计划制定', key: '1-0-1' },
          { title: 'IT系统战略制定', key: '1-0-2' }
        ],
      },
      { title: '技术支援', 
        key: '1-1',
        children: [
          { title: '行动计划制定', key: '1-1-0' },
          { title: 'IT系统战略制定', key: '1-1-1' }
        ], 
      },
      { title: '立项评估', 
        key: '1-2',
        children: [
          { title: '行动计划制定', key: '1-2-0' },
          { title: 'IT系统战略制定', key: '1-2-1' }
        ], 
      }
    ],
  },
  {
    title: '平台工程',
    key: '2',
    children: [
      { title: '其他', 
        key: '1-1',
        children: [
          { title: '其他', key: '1-1-0' }
        ], 
      }
    ],
  }
];

const { Content } = Layout;
class AllotWhole extends Component {
  static propTypes = {
    setArr: PropTypes.func.isRequired,
  };

  onCheck = (checkedKeys, info) => {
    const arrFilter = info.checkedNodes.filter(value => value.key.indexOf('-') > -1);
    const arr = arrFilter.map(value => value.props.title);
    const { setArr } = this.props;
    //setArr(arr);
  };

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  };

  render() {
    return (
        <div>
          <Tree showLine checkable onCheck={this.onCheck}>
            {this.renderTreeNodes(wholetree)}
          </Tree>
        </div>
    )
  }
}

export default AllotWhole;
