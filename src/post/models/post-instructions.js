/* eslint-disable */

export default {
  namespace: 'postInstructions',
  state: {
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
        },
      ],
      pages: 0,
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
