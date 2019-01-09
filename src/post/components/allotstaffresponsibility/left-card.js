import React from 'react';
import { Card, Tree, Button } from 'antd';
import '../assets/styles/allot-staff-responsibility.less';


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
  const { getPeopleTitle, setClickRespId, onUpdateCheck } = actions;
  /* 选中人员 */
  const select = (selectedKeys, info) => {
    const peopleTitle = info.node.props.title;
    getPeopleTitle(peopleTitle);
    const peopleId = info.node.props.respType;
    setClickRespId(peopleId);
    if (peopleId === '10') {
      onUpdateCheck(['0-0-0']);
    } else if (peopleId === '20') {
      onUpdateCheck(['1-1-0']);
    }
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
  const OnClick = () => {
  };
  return (
    <div>
      <Card
        title="人员列表"
      >
        <Tree defaultExpandParent onSelect={select} defaultExpandAll>
          {renderTreeNodes(peopleTree)}
        </Tree>
        <Button className="allot-staff-part-left-btn" onClick={OnClick}>批量维护</Button>
      </Card>
    </div>
  );
};


export default LeftCard;
