import React from 'react';
import {
  Card, Button, Icon, Modal, Tree,
} from 'antd';
import AddProfDivision from './add-prof-division';

const { TreeNode } = Tree;

const LeftCard = ({
  actions, addProfModal, leftCardTree, isPrimaryShow,
}) => {
  const { isAddprofModalShow } = actions;
  const addProf = () => {
    isAddprofModalShow(true);
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
          <Button> <Icon type="file-excel" />删除</Button>
        </div>
      )}
    >
      <Tree
        checkable
      >
        {renderTreeNodes(leftCardTree)}
      </Tree>
      <Modal
        title="新增专业划分"
        visible={addProfModal}
        okText="提交"
        footer={null}
      >
        <AddProfDivision
          isPrimaryShow={isPrimaryShow}
          actions={actions}
          leftCardTree={leftCardTree}
        />
      </Modal>
    </Card>
  );
};


export default LeftCard;
