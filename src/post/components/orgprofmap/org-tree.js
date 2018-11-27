import React, { Component } from 'react';
import { Layout } from 'antd';
import './less/org-prof-map.less';

const { Content } = Layout;

export default class OrgTree extends Component {
  render() {
    return (
      <Layout className="layout">
        <nav>组织树</nav>
        <Content>
          <div>Content</div>
        </Content>
      </Layout>
    );
  }
}
