
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
