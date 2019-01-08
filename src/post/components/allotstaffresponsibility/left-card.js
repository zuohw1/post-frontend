import React from 'react';
import { Card, Tree } from 'antd';


const { TreeNode } = Tree;
const peopleTree = [
  {
    title: '沧州市分公司',
    key: '0',
    children: [
      {
        title: '沧州市分公司本部',
        key: '0-0',
        children: [
          { title: '高志杰', key: '0-0-0', respType: '10' },
          { title: '陈剑飞', key: '0-0-1', respType: '20' },
        ],
      },
    ],
  },
];

const LeftCard = ({
  actions,
}) => {
  const { getPeopleTitle, setClickRespId } = actions;
  /* 选中人员 */
  const select = (selectedKeys, info) => {
    const peopleTitle = info.node.props.title;
    getPeopleTitle(peopleTitle);
    const peopleId = info.node.props.respType;
    setClickRespId(peopleId);
  };
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
  return (
    <div>
      <Card
        title="人员列表"
      >
        <Tree defaultExpandParent onSelect={select}>
          {renderTreeNodes(peopleTree)}
        </Tree>
      </Card>
    </div>
  );
};


export default LeftCard;
