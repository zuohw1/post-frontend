
/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'provincePostStandard/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
/* 设置列表数据 */
export function setTableData(tableData) {
  return {
    type: 'provincePostStandard/stateWillUpdate',
    payload: {
      tableData,
    },
  };
}

/* 设置列表可编辑字段 */
export function setEditingKey(editingKey) {
  return {
    type: 'provincePostStandard/stateWillUpdate',
    payload: {
      editingKey,
    },
  };
}

/* 设置列表可编辑字段 */
export function setEditingParentKey(editingParentKey) {
  return {
    type: 'provincePostStandard/stateWillUpdate',
    payload: {
      editingParentKey,
    },
  };
}

/* 跳转页面 */
export function redirectDetail(pathname, state) {
  return {
    type: 'provincePostStandard/redirect',
    payload: {
      pathname, state,
    },
  };
}
