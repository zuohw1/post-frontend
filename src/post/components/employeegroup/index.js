import React from 'react';
import {
  Col, Row, Layout, Breadcrumb,
} from 'antd';
import OrgTree from './org-tree';
import GroupList from './group-list';
import PersonList from './person-list';
import '../../../assets/styles/module.less';
import '../assets/styles/org-prof-map.less';

const { Content } = Layout;

const EmployeeGroup = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>员工分组</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content className="org-prof-map">
        <Row gutter={8}>
          <Col span={8}>
            <OrgTree {...state} />
          </Col>
          <Col span={8}>
            <GroupList {...state} />
          </Col>
          <Col span={8}>
            <PersonList {...state} />
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default EmployeeGroup;
