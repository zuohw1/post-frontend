import React from 'react';
import {
  Layout, Breadcrumb, Row, Col,
} from 'antd';
import '../../../assets/styles/module.less';
import '../assets/styles/index.less';
import EditableTable from './editable-table';
import RespTree from './resp-tree';

let initFlag = 0;
const { Content } = Layout;

const KeyResp = (state) => {
  const { actions } = state;
  const { getDataSource } = actions;
  if (initFlag === 0) {
    getDataSource(0, '');
    initFlag = 1;
  }
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>职位管理</Breadcrumb.Item>
        <Breadcrumb.Item><strong>关键职责库维护</strong></Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{
        background: '#fff', padding: '15px', margin: 0, minHeight: 280,
      }}
      >
        <Row gutter={0}>
          <Col span={6}>
            <RespTree {...state} />
          </Col>
          <Col span={18}>
            <EditableTable {...state} />
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default KeyResp;
