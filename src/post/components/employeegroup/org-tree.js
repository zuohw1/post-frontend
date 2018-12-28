import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;
let vflag = true;

export default (state) => {
  const {
    actions,
    orgList,
  } = state;
  const {
    getOrgTree,
    getGroupList,
  } = actions;

  if (vflag === true) {
    getOrgTree();
    vflag = false;
  }
  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  };

  const handleTreeSelect = (selectedKeys, info) => {
    const orgId = `${info.node.props.pid}`;
    getGroupList(orgId);
  };

  return (
    <div style={{
      height: 700,
      border: 10,
      borderColor: 'blue',
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 10,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <p>组织树</p>
      <Tree onSelect={handleTreeSelect}>
        {renderTreeNodes(orgList)}
      </Tree>
    </div>
  );
};
