/* eslint-disable */
import React from 'react';
import { Layout, Breadcrumb, Collapse, TreeSelect, Select, Input, Button, DatePicker, Modal, Drawer, Form, } from 'antd';
import '../assets/styles/post-instructions.less';
import TableInstructions from './main-table';
import TableSearchchoose from '../../../components/search-table';
import DrawerForm from './drawer-form';
import Search from './search';

const { Content } = Layout;
const Panel = Collapse.Panel;
const Option = Select.Option;
const WrappedDrawerForm = Form.create()(DrawerForm);
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
const chooseColumns = [{
	title: '关键职责名称',
	dataIndex: 'KeyResponsibilities',
	key: 'KeyResponsibilities',
	align: 'left',
}];
const rowSelection = {
	type: 'radio',
};
const refUrl = 'orgHeaderBatch/list';
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
	const { actions, refSelectData } = state;
  	const { getInstructions, closeInstructions, getInsDrawer, closeInsDrawer, } = actions;
	const onInstructionsView = () => {
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
			      className="instructions-model"
			    >
			    	<div className="instructions-model-top">
			    		<span className="instructions-model-top-one">专业：<Select style={{ width: 200, marginRight: '60px' }} onChange={handleChangeResponse}>{ResponseChildren}</Select></span>
						<span className="instructions-model-top-two"><span>名称：</span><Input /></span>
						<span className="instructions-model-top-three"><Button type="primary" icon="search">查询</Button></span>
			    	</div>
			    	<TableSearchchoose
			    		columns={chooseColumns}
				        refUrl={refUrl}
				        rowSelection={rowSelection}
				        refSelectData={refSelectData}
				        className="table-search-choose"
			    	/>
			    </Modal>
			    <Drawer title="岗位说明书" width={880} placement="right" onClose={closeDrawer} maskClosable={false} visible={state.visibleDrawer} style={{ height: 'calc(100% - 55px)',overflow: 'auto',paddingBottom: 53, }} >
		    		<WrappedDrawerForm {...state} />
			    </Drawer>
	      		<div className="post-instructions">
		    		<Search {...state} />
		    		<div>
		    			<Button htmlType="button" type="primary" style={{ marginTop: '10px', marginBottom: '10px' }} onClick={showDrawer}>新增</Button>
		    			<Button htmlType="button" type="primary" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>删除</Button>
		    			<Button htmlType="button" type="primary" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>导入</Button>
		    		</div>
					<TableInstructions {...state} />
	    		</div>
	      	</Content>
	    </React.Fragment>
	  );
	};

export default PostInstructions;
