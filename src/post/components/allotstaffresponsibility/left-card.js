import React from 'react';
import { Card, Tree, Button } from 'antd';
import { Link } from 'dva/router';
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
  recordDataOne,
  recordDataTwo,
}) => {
  const {
    getPeopleTitle, setClickRespId, onUpdateCheck, onExpandKeys, selectKeyDuty,
  } = actions;
  /* 选中人员 */
  const select = (selectedKeys, info) => {
    const peopleTitle = info.node.props.title;
    getPeopleTitle(peopleTitle);
    const peopleId = info.node.props.respType;
    setClickRespId(peopleId);
    if (peopleId === '10') {
      selectKeyDuty(recordDataOne);
      onUpdateCheck(['0-0-0']);
      onExpandKeys(['0'], true);
    } else if (peopleId === '20') {
      selectKeyDuty(recordDataTwo);
      onUpdateCheck(['1-1-0']);
      onExpandKeys(['1'], true);
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

  return (
    <div>
      <Card title="人员列表">
        <Tree defaultExpandParent onSelect={select} defaultExpandAll>
          {renderTreeNodes(peopleTree)}
        </Tree>
        <Button className="allot-staff-part-left-btn">
          <Link to="/post/allotStaffResponsibility/batchMaintain">批量维护</Link>
        </Button>
      </Card>
    </div>
  );
};


export default LeftCard;
