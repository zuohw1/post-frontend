import MenuService from '../services';

export default {
  namespace: 'layout',
  state: {
    collapsed: false,
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
        url: '/post/keyresp',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 202,
        menuName: '关键职责库查询',
        url: '/post/keyrespquery',
        pid: 2,
        iconUrl: 'user',
      },
      {
        id: 203,
        menuName: '关键职责职级列表',
        url: '/post/keyresprank',
        pid: 2,
        iconUrl: 'user',
      },{
        id: 204,
        menuName: '集团基准岗位列表',
        url: '/post/groupposstandardlist',
        pid: 2,
        iconUrl: 'user',
      },{
        id: 205,
        menuName: '省基准岗位维护',
        url: '/post/provinceposstandard',
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
      return history.listen(({ pathname }) => {
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
