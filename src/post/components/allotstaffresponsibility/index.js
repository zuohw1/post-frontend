/* eslint-disable */
import React from 'react';
import { Route, Switch, Link } from 'dva/router';
import { Layout, Button, Tree, Menu, Input, Checkbox, Icon } from 'antd';
import '../assets/styles/allot-staff-responsibility.less';
import AllotRelated from './allot-related';
import AllotWhole from './allot-whole';

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
	const { actions, current, chooseIndex, relatedDisplay, wholeDisplay, checklistDisplay, currentDisplay, allDisplay, maskDisplay, name, wholeKeyword, checklistKeyword, datas, otherDatas, checkedBearDuty, allRecordsData } = state;
	const { onhandleClickMajor, onhandleClickRecord, switchMajor, switchRecord, removeCertainDuty, isCheacked } = actions;
	const oBearDuty = document.getElementById("bearDuty");
	const remove = (item, index) => {
		console.log(item, index);
		console.log(maskDisplay);
		removeCertainDuty(datas, index, maskDisplay);
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
	    console.log(checkedBearDuty);
	    isCheacked(checkedBearDuty, datas, otherDatas);
	}
	const list = [];
	datas.map( (item, index) => {
	    list.push(
	    	<li className="allot-staff-part-left-bottom-content" key={index.toString()}>
	    		<span className="key-duty-list-execute">
		            <Input style={{ width: '60%', marginRight: 8 }} value={item.dutyExecute} readOnly="readonly" />
		            <Icon type="close" onClick={() => remove(item, index)}/>
		        </span> 
		        <span className="key-duty-list-workload"><Input style={{ width: '60%', marginRight: 8 }} value={item.proportion} readOnly="readonly"/>%</span>
	    	</li> 
	    )
	})
	return (	
	    <React.Fragment>
	      	<Content className="page-module" style={{background: '#fff', padding: '15px', margin: 0, minHeight: 280, height: '100%'}}>
	      		<div className="allot-staff-part">
	      			<div className="allot-staff-part-left">
	      				<div className="allot-staff-part-left-top">人员列表</div>
						<div className="allot-staff-part-left-content">
							<Tree defaultExpandParent onSelect={select} treeData={treeData} />
						</div>
						<div className="allot-staff-part-left-bottom"><Button>批量维护</Button></div>
		      		</div>
					<div className="allot-staff-part-center">
						<Menu onClick={handleClickMajor} selectedKeys={[state.currentMajor]} mode="horizontal">
					        <Menu.Item key="related">相关专业</Menu.Item>
					        <Menu.Item key="whole">全部专业</Menu.Item>
					        <Menu.Item key="checklist">按岗位勾选</Menu.Item>
					    </Menu>
					    <Layout style={{ padding: '5px' }}>
					    	<div style={{display: relatedDisplay}} className="related-major">
					    		<p>请勾选<span className="related-major-name">{name}</span>的关键职责</p>
					    		<AllotRelated />
					    	</div>
						    <div style={{display: wholeDisplay}} className="whole-major">
						    	<p>请勾选<span className="whole-major-name">{name}</span>的关键职责</p>
						    	<div className="whole-major-search">
						    		关键词：<Input value={wholeKeyword} onChange={changeWholeKeyword}/>
						    		<Button type="primary" icon="search" style={{marginRight: '12px'}}>查询</Button>
						    		<Button type="primary" icon="reload">全部</Button>
					    		</div>
						    	<AllotWhole />
						    </div>
						    <div style={{display: checklistDisplay}} className="checklist-major">
						    	<p>请勾选<span className="checklist-major-name">{name}</span>的关键职责</p>
						    	<div className="checklist-major-search">
						    		关键词：<Input value={checklistKeyword} onChange={changeChecklistKeyword}/>
						    		<Button type="primary" icon="search" style={{marginRight: '12px'}}>查询</Button>
						    		<Button type="primary" icon="reload">全部</Button>
					    		</div>
						    </div>
				        </Layout>
				        <div className="allot-staff-part-center-mask" style={{display: maskDisplay}}></div>
					</div>
					<div className="allot-staff-part-right">
						<Menu onClick={handleClickRecord} selectedKeys={[state.currentRecord]} mode="horizontal">
					        <Menu.Item key="currentrecord">当前记录</Menu.Item>
					        <Menu.Item key="allrecords">全部记录</Menu.Item>
					    </Menu>
					    <Layout style={{ padding: '5px' }}>
					    	<div style={{display: currentDisplay}} className="current-record">
					    		<p><span className="current-record-name">{name}</span>的关键职责(工作量之和：0%) <Button icon="save">保存</Button></p>
					    		<Checkbox onChange={changeBearDuty} id="bearDuty" checked={checkedBearDuty}>不承担任何工作职责</Checkbox>
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
						    <div style={{display: allDisplay}} className="all-record">
						    	<Tree style={{ width: '100%' }} showLine treeData={allRecordsData} />
						    </div>
				        </Layout>
					</div>
				</div>
	      	</Content>
	    </React.Fragment>
	);
};

export default AllotStaffResponsibility;
