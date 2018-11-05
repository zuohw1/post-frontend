
export default {
  namespace: 'groupPosStandardList',
  state: {
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [],
      pages: 0,
    },
    expand: false,
    search: {
      batchCode: '',
      workFlowStatus: '',
      batchVerifier: '',
      fullName: '',
      batDateS: '',
      batDateE: '',
      pageSize: 10,
      pageNumber: 1,
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
