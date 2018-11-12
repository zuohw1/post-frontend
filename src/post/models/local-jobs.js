

export default {
  namespace: 'localJobs',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '系统测试与培训岗',
          DOC_CODE: '办公系统管理',
          ATTRIBUTE8: '技术序列，信息化',
          ATTRIBUTE9: '.省.市',
          DOC_VERIFIER: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2018-1-1',
          ATTRIBUTE11: '2018-12-12',
          ATTRIBUTE12: ['详细信息'],
        },
        {
          key: '团青工作岗',
          DOC_CODE: '团青工作岗',
          ATTRIBUTE8: '支撑序列.党群、纪检、工会',
          ATTRIBUTE9: '.市.县',
          DOC_VERIFIER: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2018-1-1',
          ATTRIBUTE11: '2018-12-12',
          ATTRIBUTE12: ['详细信息'],

        },
        {
          key: '采购管理',
          DOC_CODE: '团青工作岗',
          ATTRIBUTE8: '支撑序列.党群、纪检、工会',
          ATTRIBUTE9: '.市.县',
          DOC_VERIFIER: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2018-1-1',
          ATTRIBUTE11: '2018-12-12',
          ATTRIBUTE12: ['详细信息'],

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
