import React from 'react';
import { Tree } from 'antd';

const { TreeNode } = Tree;
const orgtree = [
  {
    title: '中国联通总部管理部门',
    key: '0',
    orgType: '10',
    orgCode: 'glbm',
    orgId: 'glbm01',
    children: [
      {
        title: '中国联通总部-办公厅',
        key: '0-1',
        orgType: '20',
        orgCode: 'ltzb-01',
        orgId: 'ltzb001',
        children: [],
      },
      {
        title: '中国联通总部-综合部',
        key: '0-2',
        orgType: '30',
        orgCode: 'ltzb-02',
        orgId: 'ltzb002',
        children: [],
      },
      {
        title: '中国联通总部-财务部',
        key: '0-3',
        orgType: '40',
        orgCode: 'ltzb-01',
        orgId: 'ltzb003',
        children: [],
      },
    ],
  },
];

export default (state) => {
  const {
    actions,
  } = state;
  const {
    setClickOrgIdCode,
  } = actions;

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

  const handleTreeSelect = (selectedKeys, info) => {
    const orgType = `${info.node.props.dataRef.orgType}`;
    const orgId = `${info.node.props.dataRef.orgId}`;
    const orgCode = `${info.node.props.dataRef.orgCode}`;
    setClickOrgIdCode(orgType, orgId, orgCode);
  };

  return (
    <div style={{
      height: 700,
      border: 10,
      borderColor: 'blue',
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 10,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <p>组织树</p>
      <Tree onSelect={handleTreeSelect}>
        {renderTreeNodes(orgtree)}
      </Tree>
    </div>
  );
};