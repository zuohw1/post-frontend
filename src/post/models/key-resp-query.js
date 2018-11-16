import KeyrespqueryService from '../services/key-resp-query';

/* 格式化table的数据 */
const formatTableData = (tableData) => {
  const num = tableData.currentPageNum * tableData.recordNum - tableData.recordNum;
  const table = tableData.list.map((item, index) => {
    return { ...item, key: index + 1 + num };
  });
  return {
    ...tableData,
    records: table,
    total: tableData.count,
    size: tableData.recordNum,
    current: tableData.currentPageNum,
  };
};

export default {
  namespace: 'keyRespQuery',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [],
      pages: 0,
    },
    /* 查询是否展开 */
    expand: false,
    /* 查询条件数据 */
    search: {
      sequence: '',
      respName: '',
      cRespName: '',
      recordNum: 10,
      currentPageNum: 1,
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
    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(KeyrespqueryService.list, search);
      const formatTable = formatTableData(tableData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          tableData: formatTable,
          record: {},
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/post/key-resp-query') {
          dispatch({
            type: 'fetch',
            payload: { search: { currentPageNum: 1, recordNum: 10 } },
          });
        }
      });
    },
  },
};
