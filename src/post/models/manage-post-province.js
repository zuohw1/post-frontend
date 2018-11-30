
export default {
  namespace: 'managePostProvince',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: '1',
          BOO: '中国联通总部-办公厅（党组办公室、董事会办公室）',
          DOC_CODE: '0713845',
          ATTRIBUTE8: '张喜民',
          ATTRIBUTE9: '总经理、党组办公室、董事会办公室主任',
          DOC_VERIFIER: '集团本部部门正职',
          ATTRIBUTE12: ['全部记录'],
        },
        {
          key: '2',
          BOO: '中国联通总部-办公厅（党组办公室、董事会办公室）',
          DOC_CODE: '0000019',
          ATTRIBUTE8: '王霞',
          ATTRIBUTE9: '副总经理',
          DOC_VERIFIER: '集团本部部门正职',
          ATTRIBUTE12: ['全部记录'],

        },
        {
          key: '3',
          BOO: '中国联通总部-办公厅（党组办公室、董事会办公室）',
          DOC_CODE: '0598559',
          ATTRIBUTE8: '谢华',
          ATTRIBUTE9: '副总经理',
          DOC_VERIFIER: '集团本部部门正职',
          ATTRIBUTE12: ['全部记录'],
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
