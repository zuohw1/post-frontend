/* eslint-disable */
import React from 'react';
import { Route, Switch, Link } from 'dva/router';
import { Layout, Button, Tree, Menu, Input, Checkbox, Form, Icon } from 'antd';
import '../assets/styles/allot-staff-responsibility.less';
import AllotRelated from './allot-related';
import AllotWhole from './allot-whole';
import DynamicKeyDuty from './dynamic-key-duty';

const { Content } = Layout;
const FormItem = Form.Item;
const WrappedDynamicKeyDuty = Form.create()(DynamicKeyDuty);
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
	const { actions, current, chooseIndex, relatedDisplay, wholeDisplay, checklistDisplay, currentDisplay, allDisplay, name, wholeKeyword, checklistKeyword, datas } = state;
	const { onhandleClickMajor, onhandleClickRecord, switchMajor, switchRecord } = actions;
	let list = [];
	datas.map( (item, index) => {
	    list.push(
	    	<div className="allot-staff-part-one-bottom-content">
	    		<span className="key-duty-list-execute">
		            <Input style={{ width: '60%', marginRight: 8 }} value={item.dutyExecute} />
		            <Icon className="dynamic-delete-button" type="close" onClick={(k) => remove(k)}/>
		        </span> 
		        <span className="key-duty-list-workload"><Input style={{ width: '60%', marginRight: 8 }} value={item.proportion} />%</span>
	    	</div> 
	    )
	} )
	const remove = (k) => {
		console.log(k);
	}
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
	const changeWholeKeyword = (e) => {
	    console.log(e);
	}
	const changeChecklistKeyword = (e) => {
	    console.log(e);
	}
	const changeBearDuty = (e) => {
	    console.log(`checked = ${e.target.checked}`);
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
					    		<AllotRelated />
					    	</div>
						    <div style={{display: wholeDisplay}} className="whole-major">
						    	<p>请勾选<Input value={name} className="whole-major-name"/>的关键职责</p>
						    	<div className="whole-major-search">
						    		关键词：<Input value={wholeKeyword} onChange={changeWholeKeyword}/>
						    		<Button type="primary" icon="search" style={{marginRight: '12px'}}>查询</Button>
						    		<Button type="primary" icon="reload">全部</Button>
					    		</div>
						    	<AllotWhole />
						    </div>
						    <div style={{display: checklistDisplay}} className="checklist-major">
						    	<p>请勾选<Input value={name} className="checklist-major-name"/>的关键职责</p>
						    	<div className="checklist-major-search">
						    		关键词：<Input value={checklistKeyword} onChange={changeChecklistKeyword}/>
						    		<Button type="primary" icon="search" style={{marginRight: '12px'}}>查询</Button>
						    		<Button type="primary" icon="reload">全部</Button>
					    		</div>
						    </div>
				        </Layout>
					</div>
					<div className="allot-staff-part-three">
						<Menu onClick={handleClickRecord} selectedKeys={[state.currentRecord]} mode="horizontal">
					        <Menu.Item key="currentrecord">当前记录</Menu.Item>
					        <Menu.Item key="allrecords">全部记录</Menu.Item>
					    </Menu>
					    <Layout style={{ padding: '5px' }}>
					    	<div style={{display: currentDisplay}} className="current-record">
					    		<p><Input value={name} className="current-record-name"/>的关键职责(工作量之和：0%) <Button icon="save">保存</Button></p>
					    		<Checkbox onChange={changeBearDuty}>不承担任何工作职责</Checkbox>
					    		<div className="key-duty-list">
						        	<div className="key-duty-list-top">
										<span className="key-duty-list-execute">关键职责(主要执行)</span> 
										<span className="key-duty-list-workload">工作量</span>
									</div>
									<div className="key-duty-list-bottom">
										{list}
									</div>
						        </div>
					    	</div>
						    <div style={{display: allDisplay}} className="all-record"><h3>全部记录</h3></div>
				        </Layout>
					</div>
				</div>
	      	</Content>
	    </React.Fragment>
	);
};

export default AllotStaffResponsibility;
