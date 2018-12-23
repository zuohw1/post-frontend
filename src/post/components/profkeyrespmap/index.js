import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import '../../../assets/styles/module.less';

const { Content } = Layout;

const ProfKeyRespMap = (state) => {
  console.log(state);
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>专业划分和关键职责映射</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      />
    </React.Fragment>
  );
};

export default ProfKeyRespMap;
