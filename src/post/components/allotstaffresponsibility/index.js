import React from 'react';
import {
  Layout, Breadcrumb, Col, Row,
} from 'antd';
import '../../../assets/styles/module.less';
import LeftCard from './left-card';
import CenterCard from './center-card';
import RightCard from './right-card';

const { Content } = Layout;


const AllotStaffResponsibility = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>分配员工关键职责</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="divisionMap"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Row gutter={8}>
          <Col span={8}>
            <LeftCard {...state} />
          </Col>
          <Col span={8}>
            <CenterCard {...state} />
          </Col>
          <Col span={8}>
            <RightCard {...state} />
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default AllotStaffResponsibility;
