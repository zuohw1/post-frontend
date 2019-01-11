import React from 'react';
import {
  Card, Button, Icon, Modal, Tree, message,
} from 'antd';
import AddProfDivision from './add-prof-division';

const { TreeNode } = Tree;
let vFlag = true;
const LeftCard = ({
  actions, addProfModal, leftCardTree, isPrimaryShow, primaryBusinessData, showAlert, selectedKey,
  keyRespList,
}) => {
  const {
    isAddprofModalShow, setPrimaryBusinessData,
    isAlertShow, setSelectedKey,
    setListTitle,
    getLeftCardTree,
    deleteTreeNode,
    getLibTree,
    setLibTreeSpinning,
    primaryBusinessShow,
  } = actions;
  if (vFlag) {
    getLeftCardTree({ majorId: '' });
    vFlag = false;
  }
  const addProf = () => {
    const newprimaryBusinessData = leftCardTree.map(
      ele => ele.majorName,
    );
    setPrimaryBusinessData(newprimaryBusinessData);
    isAddprofModalShow(true);
  };
  const deleteProf = () => {
    if (selectedKey.length === 0) {
      return;
    }
    if (keyRespList.length !== 0) {
      message.config({
        duration: 2,
        maxCount: 1,
        top: 400,
      });
      message.warning('请先删除关联映射');
      return;
    }
    removeTreeNode(leftCardTree);
  };
  const addProfModalCancel = () => {
    isAlertShow(false);
    isAddprofModalShow(false);
    primaryBusinessShow(false);
  };
  const onselect = (keySelected, e) => {
    // 点击更新关键指责库树 异步请求
    setLibTreeSpinning(true);
    getLibTree(keySelected[0]);
    const { selected } = e;
    // 设置要删除的元素
    setSelectedKey(keySelected);
    // 设置右边card的title
    const { title } = e.node.props;
    setListTitle(title, selected);
  };

  const removeTreeNode = (nodes) => {
    nodes.forEach((ele) => {
      if (typeof ele.children !== 'undefined') {
        removeTreeNode(ele.children);
      }
      if (selectedKey.indexOf(ele.majorId) >= 0) {
        const { majorId, majorType } = ele;
        deleteTreeNode(majorType, majorId);
      }
    });
  };
  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.majorName} key={item.majorId} dataRef={item}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return (
      <TreeNode
        title={item.majorName}
        key={item.majorId}
        dataRef={item}
      />
    );
  });
  const onLoadData = treeNode => new Promise((resolve) => {
    console.log(33333, treeNode);
    if (treeNode.props.children) {
      resolve();
      return;
    }
    const { dataRef } = treeNode.props;
    getLeftCardTree(dataRef, leftCardTree);
    resolve();
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
        loadData={onLoadData}
        showLine
        defaultExpandedKeys={['a']}
        onSelect={onselect}
      >
        {renderTreeNodes(leftCardTree)}
      </Tree>
      <Modal
        title="新增专业划分"
        destroyOnClose
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
