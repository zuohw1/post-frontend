import React, { Fragment, Component } from 'react';
import {
  Col, Row, Layout, Breadcrumb,
} from 'antd';
import OrgTree from './org-tree';
import ProfLib from './prof-lib';
import ProfList from './prof-list';
import './less/org-prof-map.less';

const { Content } = Layout;

export default class OrgProfMap extends Component {
  state = {
    orgLibArr: [],
  };

  setArr = (arr) => {
    this.setState({ orgLibArr: arr });
  };

  render() {
    const { orgLibArr } = this.state;
    return (
      <Fragment>
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>
            职位管理
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <strong>组织和专业映射</strong>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Content className="org-prof-map">
          <Row gutter={8}>
            <Col span={8}>
              <OrgTree />
            </Col>
            <Col span={8}>
              <ProfLib setArr={this.setArr} />
            </Col>
            <Col span={8}>
              <ProfList orgLibArr={orgLibArr} />
            </Col>
          </Row>
        </Content>
      </Fragment>
    );
  }
}
