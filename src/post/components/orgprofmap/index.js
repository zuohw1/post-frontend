import React, { Fragment } from 'react';
import {
  Col, Row, Breadcrumb, Layout,
} from 'antd';
import OrgTree from './org-tree';
import ProfLib from './prof-lib';
import ProfList from './prof-list';
import '../assets/styles/org-prof-map.less';

const { Content } = Layout;


const OrgProfMap = (state) => {
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
            <OrgTree {...state} />
          </Col>
          <Col span={8}>
            <ProfLib {...state} />
          </Col>
          <Col span={8}>
            <ProfList {...state} />
          </Col>
        </Row>
      </Content>
    </Fragment>
  );
};
export default OrgProfMap;
