
export default {
  namespace: 'provPostQuery',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '系统测试',
          DOC_CODE: '测试序列',
          ATTRIBUTE8: '支撑序列',
          ATTRIBUTE13: '集团',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '2019-1-3',
          def5: ['详细信息'],
        }, {
          key: '集成测试',
          DOC_CODE: '测试序列',
          ATTRIBUTE8: '支撑序列',
          ATTRIBUTE13: '集团',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '2019-1-3',
          def5: ['详细信息'],
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
