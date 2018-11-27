import React, { Component } from 'react';
import { Layout, Icon, Button } from 'antd';
import PropTypes from 'prop-types';

const { Content } = Layout;


export default class ProfList extends Component {
  static propTypes = {
    orgLibArr: PropTypes.array.isRequired,
  };

  render() {
    const { orgLibArr } = this.props;
    return (
      <Layout className="layout">
        <nav>
          <div className="nav_l">专业列表</div>
          <div className="nav_r">
            <Icon type="select" />
            <a href="#">导入</a>
            <Icon type="export" />
            <a href="#">导出</a>
            <a href="#">用户手册</a>
          </div>
        </nav>
        <Content>
          <ul className="list">
            {orgLibArr.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
          <Button size="small">复制至下属组织</Button>
        </Content>
      </Layout>
    );
  }
}