/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'keyRespQuery/fetch',
    payload: {
      search,
    },
  };
}
