import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Search from './search';
import Table from './maintable';
import '../../../assets/styles/module.less';

const { Content } = Layout;

const LocalJobs = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>本地基础岗位查询</strong>
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

export default LocalJobs;
