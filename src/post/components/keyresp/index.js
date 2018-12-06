import React from 'react';
import {
  Layout, Breadcrumb, Row, Col, // Tree, Button, Input,
} from 'antd';
import '../../../assets/styles/module.less';
import '../assets/styles/index.less';
import EditableTable from './editable-table';
import RespTree from './resp-tree';

const { Content } = Layout;
// const { TreeNode } = Tree;

// <div className="setting-authorization">
const KeyResp = (state) => {
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
