/* eslint-disable */
import React, { Component } from 'react';
import { Layout, Tree } from 'antd';
import PropTypes from 'prop-types';

const { TreeNode } = Tree;
const libtree = [
  {
    title: '省管管理人员',
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
    title: '市管管理人员',
    key: '1',
    children: [
      { title: '市公司正职', 
        key: '1-0',
        children: [
          { title: '市公司正职', key: '1-0-0' }
        ], 
      },
      { title: '其他', 
        key: '1-1',
        children: [
          { title: '其他', key: '1-1-0' }
        ], 
      }
    ],
  },
  {
    title: '集团管理人员',
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
class AllotRelated extends Component {
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
            {this.renderTreeNodes(libtree)}
          </Tree>
        </div>
    )
  }
}

export default AllotRelated;
