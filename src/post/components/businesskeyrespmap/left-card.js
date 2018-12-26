import React from 'react';
import {
  Card, Button, Icon, Modal, Tree, message,
} from 'antd';
import AddProfDivision from './add-prof-division';

const { TreeNode } = Tree;

const LeftCard = ({
  actions, addProfModal, leftCardTree, isPrimaryShow, primaryBusinessData, showAlert, selectedKeys,
  keyRespList,
}) => {
  const {
    isAddprofModalShow, setPrimaryBusinessData, isAlertShow, updateLeftCardTree, setSelectedKeys,
    setListTitle, setKeyCheckedKeys, setKeyExpandedKeys,
  } = actions;
  const addProf = () => {
    const newLeftCardTree = [...leftCardTree];
    const newprimaryBusinessData = newLeftCardTree[0].children.map(
      ele => ele.title,
    );
    setPrimaryBusinessData(newprimaryBusinessData);
    isAddprofModalShow(true);
  };
  const deleteProf = () => {
    if (selectedKeys.length === 0) {
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
    console.log(1111);
    const newLeftTree = [...leftCardTree];
    removeTreeNode(newLeftTree);
    updateLeftCardTree(newLeftTree);
  };
  const addProfModalCancel = () => {
    isAlertShow(false);
    isAddprofModalShow(false);
  };
  const onselect = (selectedKey, e) => {
    const { selected } = e;
    if (selectedKey.indexOf('0-1') > -1) {
      setKeyCheckedKeys(['0', '0-0', '1', '1-0', '2-0', '2-1', '2-2']);
      setKeyExpandedKeys(['0', '1', '2']);
    } else {
      setKeyCheckedKeys([]);
      setKeyExpandedKeys([]);
    }
    // 设置要删除的元素
    setSelectedKeys(selectedKey);
    // 设置右边card的title
    const { title } = e.node.props;
    setListTitle(title, selected);
  };

  const removeTreeNode = (nodes) => {
    nodes.forEach((ele, index) => {
      if (typeof ele.children !== 'undefined') {
        removeTreeNode(ele.children);
      }
      if (selectedKeys.indexOf(ele.key) >= 0) {
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
