
/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'groupPosStandardList/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
/* 岗位序列 参照查询 */
export function getPostSeqRef() {
  return {
    type: 'groupPosStandardList/getPostSeqRef',
    payload: {
    },
  };
}
/* 子序列 参照查询 */
export function getSubSeqRef(search) {
  return {
    type: 'groupPosStandardList/getSubSeqRef',
    payload: {
      search,
    },
  };
}
/* 学历要求 参照查询 */
export function getEduRequireRef() {
  return {
    type: 'groupPosStandardList/getEduRequireRef',
    payload: {
    },
  };
}
/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'groupPosStandardList/fetch',
    payload: {
      search,
    },
  };
}

/* 获取列表选中数据 */
export function getRecord(cardRecord, modal) {
  return {
    type: 'groupPosStandardList/getRecord',
    payload: {
      cardRecord, modal,
    },
  };
}
