
/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'provincePostStandard/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
