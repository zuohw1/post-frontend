import React from 'react';
import {
  Layout, Breadcrumb, Select, Button, Modal, Drawer, Form,
} from 'antd';
import '../assets/styles/post-instructions.less';
import TableInstructions from './main-table';
import TableposKey from './poskey-search-table';
import AddPostInstructions from './add-post-instructions';
import Search from './search';

const { Content } = Layout;
const { Option } = Select;
const WrappedAddPostInstructions = Form.create()(AddPostInstructions);
const data = ['jack', 'lucy', 'disabled', 'Yiminghe'];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sequenceChildren = [];
const rankChildren = [];
for (let i = 0; i < data.length; i += 1) {
  sequenceChildren.push(<Option key={data[i]}>{ data[i] }</Option>);
}
for (let i = 0; i < data2.length; i += 1) {
  rankChildren.push(<Option key={data2[i]}>{ data2[i] }</Option>);
}
const PostInstructions = (state) => {
  const {
    actions, sortList, loginName, respId, rangeId, current, recordNum,
  } = state;
  const {
    closeInstructions, getInsDrawer, closeInsDrawer, deleteSortList, listTable, showMajor,
  } = actions;
  const InstructionsSubmit = (e) => {
    e.preventDefault();
    closeInstructions();
  };
  const InstructionsCancel = (e) => {
    e.preventDefault();
    closeInstructions();
  };
  const showDrawer = () => {
    getInsDrawer();
    showMajor();
  };
  const deleteSomeData = () => {
    deleteSortList(sortList);
    if (sortList.length > 0) {
      listTable(loginName, respId, rangeId, current, recordNum);
    }
  };
  const closeDrawer = () => {
    closeInsDrawer();
  };
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>职位管理</Breadcrumb.Item>
        <Breadcrumb.Item>
          <strong>岗位说明书维护</strong>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="page-module"
        style={{
          background: '#fff', padding: '15px', margin: 0, minHeight: 280,
        }}
      >
        <Modal
          title="选择框"
          onOk={InstructionsSubmit}
          onCancel={InstructionsCancel}
          maskClosable={false}
          destroyOnClose
          width={780}
          visible={state.InstructionsModal}
          centered
          className="instructions-model"
        >
          <TableposKey {...state} />
        </Modal>
        <Drawer title="岗位说明书" width={880} placement="right" onClose={closeDrawer} maskClosable={false} visible={state.visibleDrawer} style={{ height: 'calc(100% - 55px)', overflow: 'auto', paddingBottom: 53 }}>
          <WrappedAddPostInstructions {...state} />
        </Drawer>
        <div className="post-instructions">
          <Search {...state} />
          <div>
            <Button htmlType="button" type="primary" style={{ marginTop: '10px', marginBottom: '10px' }} onClick={showDrawer}>新增</Button>
            <Button htmlType="button" type="primary" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }} onClick={deleteSomeData}>删除</Button>
            <Button htmlType="button" type="primary" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>导入</Button>
          </div>
          <TableInstructions {...state} />
        </div>
      </Content>
    </React.Fragment>
  );
};

export default PostInstructions;
