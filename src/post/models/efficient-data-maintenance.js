
export default {
  namespace: 'efficientDataMaintenance',
  state: {
    /* 职责范围数据 */
    respRange: {},
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '省分公司',
          sEQ: '产品管理专业效率',
          cSEQ: '全新推出新产品数÷产品管理人数',
          mAJOR: '2018',
          kEYRESP: [],
        },
        {
          key: '省分公司',
          sEQ: '合作业务管理专业效率',
          cSEQ: '合作伙伴数量÷合作业务管理人数',
          mAJOR: '2018',
          kEYRESP: [],
        },
        {
          key: '省分公司',
          sEQ: '集团客户渠道管理专业效率',
          cSEQ: '集团客户渠道数÷集团客户渠道管理人数',
          mAJOR: '2018',
          kEYRESP: [],
        },
      ],
      pages: 0,
    },
    /* 查询是否展开 */
    expand: false,
    /* 查询条件数据 */
    search: {
    },
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
