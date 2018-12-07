import ManagePostGroup from '../services/manage-post-group';

/* 格式化table数据 */
const formatTableData = (tableData, currentPageNum, recordNum) => {
  const num = currentPageNum * recordNum - recordNum;
  const table = tableData.data.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = {
    ...tableData,
    records: table,
    total: tableData.total,
    size: recordNum,
    current: currentPageNum,
  };
  return formatTable;
};


export default {
  namespace: 'managePostGroup',
  state: {
    /* 关键职责范围 */
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
    /* 卡片是否显示 */
    modal: false,
    /* 卡片记录 */
    record: {},
    /* 查询条件数据 */
    search: {},
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
    * getKeyResp({ payload: { search } }, { call, put }) {
      console.log('search', search);
      const respData = yield call(ManagePostGroup.getKeyResp);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          respRange: respData,
        },
      });
    },
    /* 列表查询 */
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(ManagePostGroup.list, search);
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
    /* 获取列表选中记录 */
    * getRecord({ payload: { record, modal } }, { call, put }) {
      if (record.assignMentId && record.assignMentId !== '') {
        const data = yield call(ManagePostGroup.getAttachData, record);
        const attachData = data.map((item) => {
          const ite = { ...item };
          return ite;
        });
        yield put({
          type: 'stateWillUpdate',
          payload: { record: { ...record, attachData }, modal },
        });
      } else {
        yield put({
          type: 'stateWillUpdate',
          payload: { record: { ...record }, modal },
        });
      }
    },
  },
  subscriptions: {
  },
};
