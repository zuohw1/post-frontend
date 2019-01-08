import React from 'react';
import { Tree, Card } from 'antd';

const { TreeNode } = Tree;
let vFlag = true;
const OrgTree = ({ actions, orgTree }) => {
  const {
    getOrgTree, getProfLibTree, setLibTreeLoading,
  } = actions;
  if (vFlag) {
    getOrgTree();
    vFlag = false;
  }

  const onSelect = (selectedKeys) => {
    console.log(555555555, selectedKeys);
    getProfLibTree(selectedKeys[0]);
    setLibTreeLoading(true);
  };
  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.id} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.title} key={item.id} dataRef={item} />;
    });
  };

  return (
    <Card title="组织树">
      <Tree
        showLine
        onSelect={onSelect}
      >
        {renderTreeNodes(orgTree)}
      </Tree>
    </Card>
  );
};
export default OrgTree;
