
export default {
  namespace: 'keyResp',
  state: {
    ssPostName: '',
    /* 点击的职责树节点类型(岗位序列>子序列>专业>关键职责>子职责) 10/20/30/40/50 */
    clickRespType: '',
    /* 点击的职责树节点职责id */
    clickRespId: '',
    /* 点击的职责树节点职责code */
    clickRespCode: '',
    /* 右侧列表title数组 */
    listTitles: ['岗位序列列表', '子序列列表', '专业列表', '关键职责列表', '子职责列表', '子职责列表'],
    /* 子序列列表数据 */
    dataSource: [{
      key: '0',
      postName: 'Edward King 0',
      postCode: '32',
    }, {
      key: '1',
      postName: 'Edward King 1',
      postCode: '32',
    }],
    /* 子序列列表记录条数 */
    count: 2,
    /* 岗位序列选择弹框是否显示 */
    posSelectVisiable: false,

    /* 列表数据-全部 */
    dataSourceAll: [{
      key: '0',
      postName: '技术序列',
      postCode: '30',
    }, {
      key: '1',
      postName: '支撑序列',
      postCode: '40',
    }, {
      key: '2',
      postName: '管理序列',
      postCode: '50',
    }, {
      key: '3',
      postName: '市场序列',
      postCode: '60',
    }],
    /* 列表记录条数-全部 */
    countAll: 4,
    /* 列表数据-岗位序列 */
    dataSourceGwxl: [{
      key: '0',
      zxlName: '产品与行业应用管理',
      ssPostName: '市场序列',
      zxlCode: '250',
    }, {
      key: '1',
      zxlName: '市场业务管理',
      ssPostName: '市场序列',
      zxlCode: '260',
    }, {
      key: '2',
      zxlName: '渠道管理',
      ssPostName: '市场序列',
      zxlCode: '270',
    }, {
      key: '3',
      zxlName: '终端管理',
      ssPostName: '市场序列',
      zxlCode: '280',
    }, {
      key: '4',
      zxlName: '国际业务销售',
      ssPostName: '市场序列',
      zxlCode: '290',
    }],
    /* 列表记录条数-岗位序列 */
    countGwxl: 5,
    /* 列表数据-子序列 */
    dataSourceZxl: [{
      key: '0',
      zyName: '合作业务管理',
      ssZxlName: '产品与行业应用管理',
      zyCode: '0060',
    }, {
      key: '1',
      zyName: '产品管理',
      ssZxlName: '产品与行业应用管理',
      zyCode: '0070',
    }, {
      key: '2',
      zyName: '行业应用开发',
      ssZxlName: '产品与行业应用管理',
      zyCode: '0080',
    }],
    /* 列表记录条数-子序列 */
    countZxl: 3,
    /* 列表数据-专业 */
    dataSourceZy: [
      {
        key: '0',
        gjzzName: '合作策略管理',
        ssZyName: '合作业务管理',
        gjzzCode: '00270',
        eduEqr: '本科',
        workExp: '本科五年以上工作经验',
        orgLevel: '集团省市县',
        orgLevel_val: ['J', 'S', 'D', 'X'], // 用于编辑状态下勾选默认值
        isCore: '是',
        standardZj: '7',
        groupZj: '7',
        provZj: '8',
        dsZj: '9',
        qxZj: '9',
      }, {
        key: '1',
        gjzzName: '合作策略管理',
        ssZyName: '合作业务管理',
        gjzzCode: '00280',
        eduEqr: '本科',
        workExp: '两年以上工作经验',
        orgLevel: '市县',
        orgLevel_val: ['D', 'X'],
        isCore: '是',
        standardZj: '7',
        groupZj: '7',
        provZj: '8',
        dsZj: '9',
        qxZj: '9',
      },
    ],
    /* 列表记录条数-专业 */
    countZy: 2,
    /* 列表数据-关键职责 */
    dataSourceZz: [
      {
        key: '0',
        zzzName: '合作协议范本拟定，合作协议签署',
        ssGjzzName: '合作策略管理',
        zzzCode: '00123',
      }, {
        key: '1',
        zzzName: '合作管理办法，管理实施细则拟定',
        ssGjzzName: '合作策略管理',
        zzzCode: '00124',
      },
    ],
    /* 列表记录条数-关键职责 */
    countZz: 2,
    /* 列表数据-子职责 */
    dataSourceZzz: [
      {
        key: '0',
        zzzName: '合作协议范本拟定，合作协议签署0001',
        ssGjzzNameN: '合作策略管理',
        zzzCode: '00123',
      },
    ],
    /* 列表记录条数-子职责 */
    countZzz: 1,
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
  },
  subscriptions: {
  },
};
