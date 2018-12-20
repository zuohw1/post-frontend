

export default {
  namespace: 'employeeGroup',
  state: {
    /* 点击的组织树节点类型 */
    clickOrgType: '',
    /* 点击的组织树节点id */
    clickOrgId: '',
    /* 点击的组织树节点code */
    clickOrgCode: '',
    /* 列表数据 */
    dataSourceAll: [{
      key: '0',
      grouping: '测试分组',
      person: '张三',
    },
    ],
    /* 列表记录条数-全部 */
    countAll: 1,
    /* 列表数据 */
    dataSourceOffice: [{
      key: '0',
      grouping: '测试分组',
      person: '张三',
    }, {
      key: '1',
      grouping: '123',
      person: '李四',
    },
    ],
    /* 列表记录条数 */
    countOffice: 2,
    /* 列表数据 */
    comprehensive: [{
      key: '0',
      grouping: '测试分组',
      person: '张三',
    }, {
      key: '1',
      grouping: '123',
      person: '李四',
    }, {
      key: '2',
      grouping: '11111',
      person: '王五',
    },
    ],
    /* 列表记录条数-全部 */
    countComprehensive: 3,
    /* 列表数据 */
    dataSourceFinance: [{
      key: '0',
      grouping: '测试分组',
      person: '张三',
    }, {
      key: '1',
      grouping: '123',
      person: '李四',
    }, {
      key: '2',
      grouping: '11111',
      person: '王五',
    }, {
      key: '3',
      grouping: '222222',
      person: '马云',
    },
    ],
    /* 列表记录条数-全部 */
    countFinance: 4,
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
