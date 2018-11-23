/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'provPostQuery/stateWillUpdate',
    payload: {
      expand,
    },
  };
}

/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'provPostQuery/fetch',
    payload: {
      search,
    },
  };
}

/* 岗位序列 参照查询 */
export function getPostRangeRef() {
  return {
    type: 'provPostQuery/getPostRangeRef',
    payload: {
    },
  };
}

/* 子序列 参照查询 */
export function getRespRangeRef() {
  return {
    type: 'provPostQuery/getRespRangeRef',
    payload: {
    },
  };
}

/* 学历要求 参照查询 */
export function getMeatRangeRef() {
  return {
    type: 'provPostQuery/getMeatRangeRef',
    payload: {
    },
  };
}
