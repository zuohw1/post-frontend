/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'keyRespQuery/fetch',
    payload: {
      search,
    },
  };
}
/* 职责范围 参照查询 */
export function getRespRangeRef() {
  return {
    type: 'keyRespQuery/getRespRangeRef',
    payload: {
    },
  };
}
