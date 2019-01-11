import React from 'react';
import {
  Card, Tree, Spin, Icon,
} from 'antd';

let vFlag = true;
const { TreeNode } = Tree;


const KeyRespStore = ({
  actions, keyCheckedKeys, keyExpandedKeys, libTree, currentMajorId, libTreeSpinning,
}) => {
  const {
    setKeyExpandedKeys, getLibTree, getCheckedTreeNodes, setLibTreeSpinning,
  } = actions;
  if (vFlag) {
    getLibTree('-9999');
    vFlag = false;
  }
  const onCheck = (checkedKeys, info) => {
    // if (currentMajorId !== '-9999') {}
    setLibTreeSpinning(true);
    const { dataRef } = info.node.props;
    let newRespId = '';
    libTree.forEach((ele) => {
      const index = ele.children.findIndex(item => item === dataRef);
      if (index > -1) {
        newRespId = ele.respId.toString();
      }
    });
    console.log(7777777777, currentMajorId);
    getCheckedTreeNodes(newRespId, dataRef.subRespId, currentMajorId);
  };
  const onExpand = (expandedKeys) => {
    setKeyExpandedKeys(expandedKeys);
  };
  // BUSINESS 109042  109053 40001
  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode
            icon={<Icon type="minus-square" />}
            disableCheckbox
            title={item.respName}
            key={item.respId}
            dataRef={item}
          >
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          title={item.subRespName}
          key={item.subRespId}
          dataRef={item}
        />
      );
    });
  };
  return (
    <Card
      className="keyRespStore"
      title="关键职责库（请勾选映射至专业的职责）"
    >
      <Spin spinning={libTreeSpinning}>
        <Tree
          checkable
          checkStrictly
          showLine
          onCheck={onCheck}
          onExpand={onExpand}
          checkedKeys={keyCheckedKeys}
          expandedKeys={keyExpandedKeys}
        >
          {renderTreeNodes(libTree)}
        </Tree>
      </Spin>
    </Card>
  );
};


export default KeyRespStore;
