import ProvPostQueryServices from '../services/prov-post-query';

/* 格式化table数据 */
const formatTableData = (tableData, currentPageNum, recordNum) => {
  // console.log('格式化table数据', tableData);
  const num = currentPageNum * recordNum - recordNum;
  const table = tableData.list.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = {
    ...tableData,
    records: table,
    total: tableData.sums,
    size: recordNum,
    current: currentPageNum,
  };
  return formatTable;
};
export default {
  namespace: 'provPostQuery',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 0,
      records: [],
      pages: 0,
    },
    /* 查询是否展开 */
    expand: false,
    /* 卡片记录 */
    record: {},
    /* 查询条件数据 */
    search: {
      posCateId: '',
      posSubcateId: '',
      posName: '',
      state: '',
      levelCode: '',
      coreFlag: '',
      educationDegree: '',
      currentPageNum: 1,
      recordNum: 10,
    },
    /* 岗位序列数据 */
    postSeq: {},
    /* 子序列数据 */
    subSeq: {},
    /* 学历要求数据 */
    menSeq: {},
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
    /* 岗位序列，参照查询 */
    * getPostRangeRef({ payload: { search } }, { call, put }) {
      console.log('====', search);
      const post = yield call(ProvPostQueryServices.getPostRangeRef);
      const postData = post.cateList;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          postSeq: postData,
        },
      });
    },
    /* 子序列，参照查询 */
    * getRespRangeRef({ payload: { search } }, { call, put }) {
      console.log('====', search);
      const sub = yield call(ProvPostQueryServices.getRespRangeRef);
      const subData = sub.subcateList;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          subSeq: subData,
        },
      });
    },
    /* 学历要求，参照查询 */
    * getMeatRangeRef({ payload: { search } }, { call, put }) {
      console.log('====', search);
      const data = yield call(ProvPostQueryServices.getMeatRangeRef);
      const menData = data.eduList;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          menSeq: menData,
        },
      });
    },
    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(ProvPostQueryServices.list, search);
      let formatTable = [];
      setTimeout(
        formatTable = formatTableData(tableData, search.currentPageNum, search.recordNum),
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
