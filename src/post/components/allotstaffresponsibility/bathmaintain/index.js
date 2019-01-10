import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Search from './search';
import Table from './main-table';
import '../../../../assets/styles/module.less';

const { Content } = Layout;

const BatchMaintain = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理/分配员工关键职责
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>批量维护</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Search {...state} />
        <Table {...state} />
      </Content>
    </React.Fragment>
  );
};

export default BatchMaintain;
