import React from 'react';
import {
  Card, Button, Icon, Modal, Tree,
} from 'antd';
import AddProfDivision from './add-prof-division';

const { TreeNode } = Tree;

const LeftCard = ({
  actions, addProfModal, leftCardTree, isPrimaryShow, primaryBusinessData, showAlert, checkedKeys,
}) => {
  const {
    isAddprofModalShow, setPrimaryBusinessData, isAlertShow, updateLeftCardTree, setCheckedKeys,
  } = actions;
  const addProf = () => {
    const newLeftCardTree = [...leftCardTree];
    const newprimaryBusinessData = newLeftCardTree.map(ele => ele.title);
    setPrimaryBusinessData(newprimaryBusinessData);
    isAddprofModalShow(true);
  };
  const deleteProf = () => {
    const newLeftTree = [...leftCardTree];
    console.log(333333, newLeftTree);
    removeTreeNode(newLeftTree);
    updateLeftCardTree(newLeftTree);
  };
  const addProfModalCancel = () => {
    isAlertShow(false);
    isAddprofModalShow(false);
  };
  const onCheck = (checkedKey) => {
    setCheckedKeys(checkedKey);
  };

  const removeTreeNode = (nodes) => {
    console.log(11111, nodes);
    nodes.forEach((ele, index) => {
      if (typeof ele.children !== 'undefined') {
        removeTreeNode(ele.children);
      }
      console.log(checkedKeys);
      if (checkedKeys.indexOf(ele.key) >= 0) {
        console.log(2222, ele.key);
        nodes.splice(index, 1);
      }
    });
  };

  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  });
  return (
    <Card
      title={(
        <div>
          <Button onClick={(e) => { addProf(e); }}> <Icon type="file-add" />新增</Button>
          &nbsp;
          <Button onClick={() => { deleteProf(); }}> <Icon type="file-excel" />删除</Button>
        </div>
      )}
    >
      <Tree
        showLine
        checkable
        onCheck={onCheck}
      >
        {renderTreeNodes(leftCardTree)}
      </Tree>
      <Modal
        title="新增专业划分"
        visible={addProfModal}
        onCancel={addProfModalCancel}
        footer={null}
      >
        <AddProfDivision
          isPrimaryShow={isPrimaryShow}
          actions={actions}
          leftCardTree={leftCardTree}
          primaryBusinessData={primaryBusinessData}
          showAlert={showAlert}
        />
      </Modal>
    </Card>
  );
};


export default LeftCard;
