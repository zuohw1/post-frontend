/* eslint-disable */
import React from 'react';
import { Route, Switch, Link } from 'dva/router';
import { Layout, Button, Tree, Menu, Input, } from 'antd';
import '../assets/styles/allot-staff-responsibility.less';

const { Content } = Layout;
const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

const AllotStaffResponsibility = (state) => {
	const { actions, current, chooseIndex, relatedDisplay, wholeDisplay, checklistDisplay, currentDisplay, allDisplay, name } = state;
	const { onhandleClickMajor, onhandleClickRecord, switchMajor, switchRecord } = actions;
	const select = (selectedKeys, info) => {
	    console.log('selected', selectedKeys, info);
	}
	const handleClickMajor = (e) => {
	    console.log('click ', e);
	    onhandleClickMajor(e.key);
	    switchMajor(e.key);
	}
	const handleClickRecord = (e) => {
	    console.log('click ', e);
	    onhandleClickRecord(e.key);
	    switchRecord(e.key);
	}
	return (
	    <React.Fragment>
	      	<Content className="page-module" style={{background: '#fff', padding: '15px', margin: 0, minHeight: 280, height: '100%'}}>
	      		<div className="allot-staff-part">
	      			<div className="allot-staff-part-one">
	      				<div className="allot-staff-part-one-top">人员列表</div>
						<div className="allot-staff-part-one-content">
							<Tree defaultExpandParent onSelect={select} treeData={treeData} />
						</div>
						<div className="allot-staff-part-one-bottom"><Button>批量维护</Button></div>
		      		</div>
					<div className="allot-staff-part-two">
						<Menu onClick={handleClickMajor} selectedKeys={[state.currentMajor]} mode="horizontal">
					        <Menu.Item key="related">相关专业</Menu.Item>
					        <Menu.Item key="whole">全部专业</Menu.Item>
					        <Menu.Item key="checklist">按岗位勾选</Menu.Item>
					    </Menu>
					    <Layout style={{ padding: '5px' }}>
					    	<div style={{display: relatedDisplay}} className="related-major">
					    		<p>请勾选<Input value={name} className="related-major-name"/>的关键职责</p>
					    	</div>
						    <div style={{display: wholeDisplay}} className="whole-major">
						    	<p>请勾选<Input value={name} className="whole-major-name"/>的关键职责</p>
						    </div>
						    <div style={{display: checklistDisplay}} className="checklist-major">
						    	<p>请勾选<Input value={name} className="checklist-major-name"/>的关键职责</p>
						    </div>
				        </Layout>
					</div>
					<div className="allot-staff-part-three">
						<Menu onClick={handleClickRecord} selectedKeys={[state.currentRecord]} mode="horizontal">
					        <Menu.Item key="currentrecord">当前记录</Menu.Item>
					        <Menu.Item key="allrecords">全部记录</Menu.Item>
					    </Menu>
					    <Layout style={{ padding: '5px' }}>
					    	<div style={{display: currentDisplay}} className="current-record"><h3>当前记录</h3></div>
						    <div style={{display: allDisplay}} className="all-record"><h3>全部记录</h3></div>
				        </Layout>
					</div>
				</div>
	      	</Content>
	    </React.Fragment>
	);
};

export default AllotStaffResponsibility;
