import React, { Component } from 'react';
import { Layout, Tree } from 'antd';
import PropTypes from 'prop-types';

const { TreeNode } = Tree;

const { Content } = Layout;
export default class ProfLib extends Component {
  state = {
    libTree: [
      {
        title: '管理序列.管理',
        children: ['省管理人员', '市管理人员', '集团管管理人员'],
      },
      {
        title: '技术序列.采购管理',
        children: ['采购管理', '物资管理'],
      },
      {
        title: '技术序列.工程建设',
        children: ['平台工程', '交换工程', '接入网工程', ' 国际工程', '局房建设', '集团客户工程',
          '动力、环境及配套工程', '数据工程', '传输工程', '移动工程'],
      },
      {
        title: '技术序列.工程设计',
        children: ['工程设计'],
      },
      {
        title: '技术序列.技术研发与管理',
        children: ['技术管理', '研究咨询', '技术研发'],
      },
      {
        title: '技术序列.技术规划',
        children: ['计划管理', '规划管理'],
      },
      {
        title: '技术序列.网络运维',
        children: ['网管支撑专业', '网络安全管理', '动力环境及配套专业'],
      },
      {
        title: '技术序列.信息化',
        children: ['系统集成', 'IT项目管理', '电子商务系统开发与支撑'],
      },
    ],
  };

  static propTypes = {
    setArr: PropTypes.func.isRequired,
  };

  onCheck = (checkedKeys, info) => {
    const arrFilter = info.checkedNodes.filter(value => value.key.indexOf('-') > -1);
    const arr = arrFilter.map(value => value.props.title);
    const { setArr } = this.props;
    setArr(arr);
  };

  render() {
    const { libTree } = this.state;
    return (
      <Layout className="layout">
        <nav>专业库(请勾选映射至组织的专业)</nav>
        <Content>
          <Tree checkable showLine onCheck={this.onCheck}>
            {libTree.map((ele, index) => {
              const rootIndex = index;
              return (
                <TreeNode title={ele.title} key={rootIndex}>
                  {ele.children.map((node, indexS) => {
                    const sonIndex = indexS;
                    return <TreeNode key={`${rootIndex}-${sonIndex}`} title={node} />;
                  })}
                </TreeNode>
              );
            })}
          </Tree>
        </Content>
      </Layout>
    );
  }
}
