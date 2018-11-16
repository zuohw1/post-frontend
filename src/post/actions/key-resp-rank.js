/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'keyRespRank/fetch',
    payload: {
      search,
    },
  };
}

/* 职责范围 参照查询 */
export function getRespRangeRef() {
  return {
    type: 'keyRespRank/getRespRangeRef',
    payload: {
    },
  };
}
