import KeyRespRankService from '../services/key-resp-rank';

/* 格式化table数据 */
const formatTableData = (tableData, pageNum, pageSize) => {
  console.log('格式化table数据', tableData);
  const num = pageNum * pageSize - pageSize;
  const table = tableData.data.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = {
    ...tableData,
    records: table,
    total: tableData.totalnum,
    size: pageSize,
    current: pageNum,
  };
  return formatTable;
};

export default {
  namespace: 'keyRespRank',
  state: {
    /* 职责范围数据 */
    respRange: {},
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
    /* 职责范围 参照查询 */
    * getRespRangeRef({ payload: { search } }, { call, put }) {
      console.log('nonono', search);
      const respData = yield call(KeyRespRankService.getRespRangeRef);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          respRange: respData,
        },
      });
    },

    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(KeyRespRankService.list, search);
      console.log('tabledata:', tableData);
      let formatTable = [];
      setTimeout(
        formatTable = formatTableData(tableData, search.pageNumber, search.pageSize),
        1000,
      );
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
  },
};
