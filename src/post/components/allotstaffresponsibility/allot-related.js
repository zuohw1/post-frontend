import React, { Component } from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;
const relatedtree = [
  {
    title: '省管管理人员',
    key: '0',
    children: [
      {
        title: '市本部部门正职',
        key: '0-0',
        children: [
          { title: '市本部部门正职', key: '0-0-0' },
        ],
      },
      {
        title: '其他',
        key: '0-1',
        children: [
          { title: '其他', key: '0-1-0' },
        ],
      },
    ],
  },
  {
    title: '市管管理人员',
    key: '1',
    children: [
      {
        title: '市公司正职',
        key: '1-0',
        children: [
          { title: '市公司正职', key: '1-0-0' },
        ],
      },
      {
        title: '其他',
        key: '1-1',
        children: [
          { title: '其他', key: '1-1-0' },
        ],
      },
    ],
  },
  {
    title: '集团管理人员',
    key: '2',
    children: [
      {
        title: '其他',
        key: '2-1',
        children: [
          { title: '其他', key: '2-1-0' },
        ],
      },
    ],
  },
];

class AllotRelated extends Component {
  onCheck = (checkedKeys, info) => {
    console.log(checkedKeys, info);
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
      <div className="related-tree">
        <Tree showLine checkable onCheck={this.onCheck}>
          {this.renderTreeNodes(relatedtree)}
        </Tree>
      </div>
    );
  }
}

export default AllotRelated;
