import React from 'react';
import {
  Layout, Menu, Icon, Input,
} from 'antd';
import { Route, Switch, Link } from 'dva/router';
import logoImg from '../../assets/images/logo.png';
import 'antd/dist/antd.less';
import app from '../../assets/styles/app.less';
import Main from './main';
import KeyRespQuery from '../../post/containers/key-resp-query';
import KeyResp from '../../post/containers/key-resp';
import KeyRespRank from '../../post/containers/key-resp-rank';
import GroupPosStandardList from '../../post/containers/group-post-standard-list';
import ProvincePosStandard from '../../post/containers/province-post-standard';
import LocalJobs from '../../post/containers/local-jobs';
import ProvinceQuery from '../../post/containers/prov-post-query';
import OrgProfMap from '../../post/containers/org-prof-map';
import PostInstructions from '../../post/containers/post-instructions';
import ManagePostGroup from '../../post/containers/manage-post-group';
import ManagePostProvince from '../../post/containers/manage-post-province';
import ManagePostCity from '../../post/containers/manage-post-city';
import EfficientDataMaintenance from '../../post/containers/efficient-data-maintenance';
import LocalPostStandard from '../../post/containers/local-post-standard';
import AllotStaffResponsibility from '../../post/containers/allot-staff-responsibility';
import ProfKeyRespMap from '../../post/containers/prof-key-resp-map';
import BusinessKeyRespMap from '../../post/containers/business-key-resp-map';
import EmployeeGroup from '../../post/containers/employee-group';
import BatchMaintain from '../../post/containers/allot-staff-batch-maintain';


const { SubMenu } = Menu;

const MainLayout = (state) => {
  const route = (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/post/keyRespQuery" component={KeyRespQuery} />
      <Route exact path="/post/keyResp" component={KeyResp} />
      <Route exact path="/post/keyRespRank" component={KeyRespRank} />
      <Route exact path="/post/groupPosStandardList" component={GroupPosStandardList} />
      <Route exact path="/post/localJobs" component={LocalJobs} />
      <Route exact path="/post/provincePostStandard" component={ProvincePosStandard} />
      <Route exact path="/post/provPostQuery" component={ProvinceQuery} />
      <Route exact path="/post/orgProfMap" component={OrgProfMap} />
      <Route exact path="/post/postInstructions" component={PostInstructions} />
      <Route exact path="/post/managePostGroup" component={ManagePostGroup} />
      <Route exact path="/post/managePostProvince" component={ManagePostProvince} />
      <Route exact path="/post/managePostCity" component={ManagePostCity} />
      <Route exact path="/post/efficientDataMaintenance" component={EfficientDataMaintenance} />
      <Route exact path="/post/localPostStandard" component={LocalPostStandard} />
      <Route exact path="/post/allotStaffResponsibility" component={AllotStaffResponsibility} />
      <Route exact path="/post/profkeyrespmap" component={ProfKeyRespMap} />
      <Route exact path="/post/businesskeyrespmap" component={BusinessKeyRespMap} />
      <Route exact path="/post/employeeGroup" component={EmployeeGroup} />
      <Route exact path="/post/allotStaffResponsibility/batchMaintain" component={BatchMaintain} />
    </Switch>
  );
  const ret = state.headless ? (
    <Layout style={{ padding: '5px' }}>
      {route}
    </Layout>
  ) : (
    <div className={app.App}>
      <div className={app.AppHeader}>
        <div className={app.headerTop}>
          <div className={app.headerTopL}>
            <img src={logoImg} alt="" />
          </div>
          <span className={app.headerTopC}><b>中国联通HR网上服务平台</b></span>
          <div className={app.headerTopR}>
            <Input.Search
              placeholder="请输入功能或服务关键字"
              enterButton="搜索"
              onSearch={value => value}
            />
          </div>
        </div>
        <div className={app.headerBottom}>
          <nav>
            <a href=" javascript:;">员工服务大厅</a>
            <a href=" javascript:;" className={app.navActive}>人力业务管理</a>
            <a href=" javascript:;">数据决策中心</a>
          </nav>
        </div>
      </div>
      <Layout style={{ minHeight: '75vh' }}>
        <Layout.Sider
          collapsible
          collapsed={state.collapsed}
          onCollapse={() => { state.dispatch({ type: 'layout/onCollapse' }); }}
          theme="light"
        >
          <div className={app.logo} />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            {
              state.menus.map((item) => {
                if (item.pid === 0) {
                  const children = state.menus.filter(i => i.pid === item.id);
                  return children.length !== 0 ? (
                    <SubMenu
                      key={item.id}
                      title={<span><Icon type={item.iconUrl} /><span>{item.menuName}</span></span>}
                    >
                      {children.map(ele => (
                        <Menu.Item key={ele.id}>
                          <Link to={ele.url || ''}><span>{ele.menuName}</span></Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.id}>
                      <Link to={item.url || ''}><Icon type={item.iconUrl} /><span>{item.menuName}</span></Link>
                    </Menu.Item>
                  );
                } else {
                  return '';
                }
              })
            }
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: '5px' }}>
          {route}
        </Layout>
      </Layout>
    </div>
  );
  return ret;
};

export default MainLayout;
