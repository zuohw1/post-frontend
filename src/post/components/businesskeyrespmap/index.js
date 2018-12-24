import React from 'react';
import {
  Layout, Breadcrumb, Col, Row,
} from 'antd';
import '../../../assets/styles/module.less';
import LeftCard from './left-card';
import KeyRespStore from './key-resp-store';
import KeyRespList from './key-resp-list';
import '../assets/styles/business-key-resp-map.less';

const { Content } = Layout;


const BusinessKeyRespMap = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>业务划分和关键职责映射</strong>
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
            <KeyRespStore {...state} />
          </Col>
          <Col span={8}>
            <KeyRespList {...state} />
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default BusinessKeyRespMap;
