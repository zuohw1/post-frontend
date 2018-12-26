import React from 'react';
import { Card, Tree } from 'antd';

const KeyRespStore = ({ actions, keyCheckedKeys, keyExpandedKeys }) => {
  const { setKeyRespList, setKeyCheckedKeys, setKeyExpandedKeys } = actions;
  const { TreeNode } = Tree;
  const libtree = [
    {
      title: '222222',
      key: '0',
      children: [
        { title: 'z2222', key: '0-0' },
      ],
    },
    {
      title: 'test1204',
      key: '1',
      children: [
        { title: ' test-gjzz001', key: '1-0' },
      ],
    },
    {
      title: '管理序列',
      key: '2',
      children: [
        { title: '集团本部部门正职', key: '2-0' },
        { title: '市本部部门正职', key: '2-1' },
        { title: '其他', key: '2-2' },
        { title: '市公司副职', key: '2-3' },
        { title: '区县公司副职', key: '2-4' },
        { title: '市本部部门副职', key: '2-5' },
        { title: '省公司正职', key: '2-6' },
        { title: '集团本部部门副职', key: '2-7' },
        { title: '省本部部门正职', key: '2-8' },
        { title: '省本部部门副职', key: '2-9' },
      ],
    },
    {
      title: '技术序列.工程设计',
      key: '3',
      children: [
        { title: '工程设计', key: '3-0' },
      ],
    },
    {
      title: '技术序列.技术研发与管理',
      key: '4',
      children: [
        { title: '技术管理', key: '4-0' },
        { title: '研究咨询', key: '4-1' },
        { title: '技术研发', key: '4-2' }],
    },
    {
      title: '技术序列.技术规划',
      key: '5',
      children: [
        { title: '计划管理', key: '5-0' },
        { title: '规划管理', key: '5-1' },
      ],
    },
    {
      title: '技术序列.网络运维',
      key: '6',
      children: [
        { title: '网管支撑专业', key: '6-0' },
        { title: '网络安全管理', key: '6-1' },
        { title: '动力环境及配套专业', key: '6-2' },
      ],
    },
    {
      title: '技术序列.信息化',
      key: '7',
      children: [
        { title: '系统集成', key: '7-0' },
        { title: 'IT项目管理', key: '7-1' },
        { title: '电子商务系统开发与支撑', key: '7-2' },
      ],
    },
  ];
  const onCheck = (checkedKeys, info) => {
    setKeyCheckedKeys(checkedKeys);
    const arrFilter = info.checkedNodes.filter(value => value.key.indexOf('-') > -1);
    const arr = arrFilter.map(value => value.props.title);
    // 设置关键职责列表
    setKeyRespList(arr);
  };
  const onExpand = (expandedKeys) => {
    setKeyExpandedKeys(expandedKeys);
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
    <Card
      title="关键职责库（请勾选映射至专业的职责）"
    >
      <Tree
        checkable
        showLine
        onCheck={onCheck}
        onExpand={onExpand}
        checkedKeys={keyCheckedKeys}
        expandedKeys={keyExpandedKeys}
      >
        {renderTreeNodes(libtree)}
      </Tree>
    </Card>
  );
};


export default KeyRespStore;
