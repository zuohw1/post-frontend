
/* 设置是否展开查询 */
export function setToggle(expand) {
  return {
    type: 'groupPosStandardList/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
