import GroupPostStandardListService from '../services/group-post-standard-list.js';

/* 格式化table数据 */
const formatTableData = (tableData, currentPageNum, recordNum) => {
  // console.log('格式化table数据', tableData);
  const num = currentPageNum * recordNum - recordNum;
  const table = tableData.pageInfo.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = {
    ...tableData,
    records: table,
    total: tableData.num,
    size: recordNum,
    current: currentPageNum,
  };
  return formatTable;
};

export default {
  namespace: 'groupPosStandardList',
  state: {
    /* 岗位序列参照 */
    postSeqData: {},
    /* 子序列参照 */
    subSeqData: {},
    /* 学历要求参照 */
    eduRequireData: {},
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [],
      pages: 0,
    },
    /* 卡片记录 */
    cardRecord: {},
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
    /* 岗位序列，参照查询 */
    * getPostSeqRef({ payload: { search } }, { call, put }) {
      console.log('search', search);
      const post = yield call(GroupPostStandardListService.getPostSeqRef);
      const postSeqData = post.cateList;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          postSeqData,
        },
      });
    },
    /* 子序列，参照查询 */
    * getSubSeqRef({ payload: { search } }, { call, put }) {
      console.log('search', search);
      const subSeqData = yield call(GroupPostStandardListService.getSubSeqRef, search);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          subSeqData,
        },
      });
    },
    /* 学历要求，参照查询 */
    * getEduRequireRef({ payload: { search } }, { call, put }) {
      console.log('search', search);
      const post = yield call(GroupPostStandardListService.getEduRequireRef);
      const eduRequireData = post.eduList;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          eduRequireData,
        },
      });
    },
    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(GroupPostStandardListService.list, search);
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
    /* 获取列表选中记录 */
    * getRecord({ payload: { cardRecord, modal } }, { call, put }) {
      if (cardRecord.posId && cardRecord.posId !== '') {
        const take = yield call(GroupPostStandardListService.getNewsRangeRef, cardRecord.posId);
        const keep = take.kstrList;
        const attachData = keep.map((item, index) => {
          const ite = { ...item, key: index + 1 };
          return ite;
        });
        yield put({
          type: 'stateWillUpdate',
          payload: { cardRecord: { ...cardRecord, attachData }, modal },
        });
      } else {
        yield put({
          type: 'stateWillUpdate',
          payload: { cardRecord: { ...cardRecord }, modal },
        });
      }
    },
  },
  subscriptions: {
  },
};
