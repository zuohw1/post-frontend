import React, { Component } from 'react';
import { Layout, Tree } from 'antd';

const { Content } = Layout;
const { TreeNode } = Tree;
const orgtree = [{
  title: '中国联合网络通信集团有限公司',
  children: [
    {
      title: '中国联通总部管理部门',
      children: [
        {
          title: '中国联通总部-管理层',
          children: [
            {
              title: '中国联通总部-管理层-集团公司领导',
              children: [],
            },
            {
              title: '中国联通总部-管理层-科技委办公室主任',
              children: [],
            },
            {
              title: '中国联通总部-管理层-运营公司领导',
              children: [],
            },
          ],
        },
        {
          title: '中国联通总部-办公厅',
          children: [],
        },
        {
          title: '中国联通总部-综合部',
          children: [],
        },
        {
          title: '中国联通总部-财务部',
          children: [],
        },
        {
          title: '中国联通总部-人力资源部（党组织部）',
          children: [],
        },
        {
          title: '中国联通总部-人力资源部',
          children: [],
        },
        {
          title: '中国联通总部-市场部',
          children: [],
        },
        {
          title: '中国联通总部-政企客户事业部',
          children: [],
        },
        {
          title: '中国联通总部-国际业务部',
          children: [],
        },
        {
          title: '中国联通总部-客户服务部',
          children: [],
        },
        {
          title: '中国联通总部-技术部',
          children: [],
        },
        {
          title: '中国联通总部-物资采购与管理',
          children: [],
        },
      ],
    },
  ],
}];

export default class OrgTree extends Component {
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }

  render() {
    return (
      <Layout className="layout">
        <nav>组织树</nav>
        <Content>
          <Tree checkable>
            {this.renderTreeNodes(orgtree)}
          </Tree>
        </Content>
      </Layout>
    );
  }
}
