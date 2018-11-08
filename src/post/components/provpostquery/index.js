/* eslint-disable no-unused-vars,object-curly-spacing,react/jsx-tag-spacing,jsx-a11y/label-has-for,react/jsx-indent,key-spacing,spaced-comment,comma-spacing,max-len,react/self-closing-comp,no-multi-spaces,react/jsx-props-no-multi-spaces */
import React from 'react';
import {
  Layout, Breadcrumb,
} from 'antd';
import Search from './search';
import Table from './maintable';
import '../../../assets/styles/module.less';


const { Content } = Layout;

const GroupPosStandardList = (state) => {
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>
          职位管理
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>省基准岗位列表</strong>
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

export default GroupPosStandardList;
