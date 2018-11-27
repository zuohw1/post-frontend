/* eslint-disable */
import React from 'react';
import { Layout, Breadcrumb, Collapse, TreeSelect, Select, Input, Button, DatePicker, Modal, Drawer, Form, } from 'antd';
import '../asset/styles/post-instructions.less';
import TableInstructions from './main-table';
import TableSearchchoose from './search-choose-table';
import DrawerForm from './drawer-form';

const { Content } = Layout;
const Panel = Collapse.Panel;
const Option = Select.Option;
const DrawerForm2 = Form.create()(DrawerForm);
const noBorderBottom={
    borderBottom:'0',
};
const noBorderBottomRight={
    borderBottom:'0',
    borderRight:'0',
};
const noBorderRight={
    borderRight:'0',
};
const treeData = [{
  title: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    title: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    title: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: 'Node2',
  value: '0-1',
  key: '0-1',
}];
const data = ["jack","lucy","disabled","Yiminghe"];
const data2 = [1,2,3,4,5,6,7,8,9];
const sequenceChildren = [];
const rankChildren = [];
for (let i = 0; i < data.length; i += 1) {
  sequenceChildren.push(<Option key={data[i]}>{ data[i] }</Option>);
}
for (let i = 0; i < data2.length; i += 1) {
  rankChildren.push(<Option key={data2[i]}>{ data2[i] }</Option>);
}

const ResponseChildren = [];
for (let i = 0; i < data2.length; i += 1) {
  ResponseChildren.push(<Option key={data2[i]}>{ data2[i] }</Option>);
}
const callback = (key) => {
  console.log(key);
};
const onChange = (value) => {
  console.log(value);
}
const changeDate = (date, dateString) => {
  console.log(date, dateString);
}
const handleChangeSequence = (value) => {
  console.log(`selected ${value}`);
}
const handleChangeRank = (value) => {
  console.log(`selected ${value}`);
}
const handleChangeResponse = (value) => {
  console.log(`selected ${value}`);
}
const PostInstructions = (state) => {
	console.log(state);
	const { actions } = state;
  	const { getInstructions, closeInstructions, getInsDrawer, closeInsDrawer, } = actions;
	const onInstructionsView = () => {
		console.log(666);
	  	getInstructions();
	};
	const InstructionsSubmit = (e) => {
		e.preventDefault();
		closeInstructions();
	};
	const InstructionsCancel = (e) => {
		e.preventDefault();
		closeInstructions();
	};
	const showDrawer = (e) => {
	    e.preventDefault();
		getInsDrawer();
	};
	const closeDrawer = (e) => {
	    e.preventDefault();
		closeInsDrawer();
	};
	return (
	    <React.Fragment>
	      	<Breadcrumb style={{ margin: '10px 0' }}>
		        <Breadcrumb.Item>
		          	职位管理
		        </Breadcrumb.Item>
		        <Breadcrumb.Item>
		          	<strong>岗位说明书维护</strong>
		        </Breadcrumb.Item>
	      	</Breadcrumb>
	      	<Content className="page-module" style={{background: '#fff', padding: '15px', margin: 0, minHeight: 280,}}>
	      		<Modal
			      title="选择框"
			      onOk={InstructionsSubmit}
			      onCancel={InstructionsCancel}
			      maskClosable={false}
			      destroyOnClose
			      width={760}
			      visible={state.InstructionsModal}
			      centered
			      className="InstructionsModel"
			    >
			    	<div className="trans_modelTop">
			    		<span className="trans_modelTop_1">专业：<Select style={{ width: 200, marginRight: '60px' }} onChange={handleChangeResponse}>{ResponseChildren}</Select></span>
						<span className="trans_modelTop_2"><span>名称：</span><Input /></span>
						<span className="trans_modelTop_3"><Button type="primary" icon="search">查询</Button></span>
			    	</div>
			    	<TableSearchchoose {...state} />
			    </Modal>
			    <Drawer title="岗位说明书" width={720} placement="right" onClose={closeDrawer} maskClosable={false} visible={state.visibleDrawer} style={{ height: 'calc(100% - 55px)',overflow: 'auto',paddingBottom: 53, }} >
		    		<DrawerForm2 />
			    </Drawer>
	      		<div className="PostInstructions">
		    		<Collapse defaultActiveKey={['1']} onChange={callback}>
					    <Panel header="岗位说明书查询" key="1">
					      	<div className="instructionsSearch">
								<div className="instructionsSearch_1">
									<span className="SearchTitle">部门</span>
									<span className="SearchContent">
										<TreeSelect
									        style={{ width: '100%' }}
									        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
									        treeData={treeData}
									        treeDefaultExpandAll
									        onChange={onChange}
									    />
							    	</span>
									<span className="SearchTitle">岗位序列</span>
									<span className="SearchContent" style={noBorderRight}>
										<Select defaultValue="请选择" style={{ width: '100%' }} onChange={handleChangeSequence}>
									      	{sequenceChildren}
									    </Select>
									</span>
								</div>
								<div className="instructionsSearch_1">
									<span className="SearchTitle">职级</span>
									<span className="SearchContent">
										<Select defaultValue="请选择" style={{ width: '100%' }} onChange={handleChangeRank}>
									      	{rankChildren}
									    </Select>
									</span>
									<span className="SearchTitle">关键职责</span>
									<span className="SearchContent SearchContent_4" style={noBorderRight}>
										<Input className="SearchContent_4_1" />
										<Button type="primary" className="SearchContent_4_2" onClick={onInstructionsView} >选择</Button>
										<Button className="SearchContent_4_3">置空</Button>
									</span>
								</div>
								<div className="instructionsSearch_1">
									<span className="SearchTitle">查询日期</span>
									<span className="SearchContent SearchContent_5"><DatePicker onChange={changeDate} /></span>
									<span className="SearchTitle">岗位名称</span>
									<span className="SearchContent SearchContent_6" style={noBorderRight}><Input /></span>
								</div>
								<div className="instructionsSearch_1">
									<span className="SearchSpan">
										<Button type="primary">查询</Button>
										<Button onClick={showDrawer}>新增</Button>
										<Button type="danger">删除</Button>
										<Button type="dashed">导入</Button>
									</span>
								</div>
							</div>
					    </Panel>
					</Collapse>
					<div className="instructionsList">岗位说明书列表</div>
					<TableInstructions {...state} />
	    		</div>
	      	</Content>
	    </React.Fragment>
	  );
	};

export default PostInstructions;
