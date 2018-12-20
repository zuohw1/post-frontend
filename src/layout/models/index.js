import MenuService from '../services';

export default {
  namespace: 'layout',
  state: {
    collapsed: false,
    headless: false,
    /* 左侧菜单数据 */
    menus: [
      {
        id: 2,
        menuName: '职位管理',
        pid: 0,
        iconUrl: 'user',
      },
      {
        id: 201,
        menuName: '关键职责库维护',
        url: '/post/keyResp',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 202,
        menuName: '关键职责库查询',
        url: '/post/keyRespQuery',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 203,
        menuName: '关键职责职级列表',
        url: '/post/keyRespRank',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 204,
        menuName: '集团基准岗位列表',
        url: '/post/groupPosStandardList',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 205,
        menuName: '省基准岗位维护',
        url: '/post/provincePostStandard',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 206,
        menuName: '本地网基础岗位查询',
        url: '/post/localJobs',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 207,
        menuName: '省基准岗位查询',
        url: '/post/provPostQuery',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 208,
        menuName: '组织和专业映射',
        url: '/post/orgProfMap',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 209,
        menuName: '岗位说明书维护',
        url: '/post/postInstructions',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 210,
        menuName: '管理人员职位管理（集团）',
        url: '/post/managePostGroup',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 211,
        menuName: '管理人员职位管理（省）',
        url: '/post/managePostProvince',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 212,
        menuName: '管理人员职位管理（市）',
        url: '/post/managePostCity',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 213,
        menuName: '效率业务数据维护',
        url: '/post/efficientDataMaintenance',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 214,
        menuName: '本地网基准岗位维护',
        url: '/post/localPostStandard',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 215,
        menuName: '分配员工关键职责',
        url: '/post/allotStaffResponsibility',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 216,
        menuName: '员工分组',
        url: '/post/employeeGroup',
        pid: 2,
        iconUrl: 'user',
      },
    ],
  },
  reducers: {
    willUpdateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    onCollapse(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    },
  },
  effects: {
    *getMenuList({ payload }, { call, put }) {
      const menu = yield call(MenuService.getList, payload);
      yield put({
        type: 'willUpdateState',
        payload: {
          menus: menu,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const headless = search.indexOf('headless=true') >= 0;
        dispatch({
          type: 'willUpdateState',
          payload: {
            headless,
          },
        });
        if (pathname && pathname === '/') {
          /* 跳转页面后初始化左侧菜单数据 */
          dispatch({
            type: 'getMenuList',
            payload: {
            },
          });
        }
      });
    },
  },
};
