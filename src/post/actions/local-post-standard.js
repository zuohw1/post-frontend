/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'localPostStandard/stateWillUpdate',
    payload: {
      expand,
    },
  };
}

/* 设置列表数据 */
export function setTableData(tableData) {
  return {
    type: 'localPostStandard/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}

/* 设置列表可编辑字段 */
export function setEditingKey(editingKey) {
  return {
    type: 'localPostStandard/stateWillUpdate',
    payload: {
      editingKey,
    },
  };
}

/* 设置已展开主记录key字段 */
export function setEditingExpands(editingExpands) {
  return {
    type: 'localPostStandard/stateWillUpdate',
    payload: {
      editingExpands,
    },
  };
}

/* 跳转页面 */
export function redirectDetail(pathname, state) {
  return {
    type: 'localPostStandard/redirect',
    payload: {
      pathname, state,
    },
  };
}
