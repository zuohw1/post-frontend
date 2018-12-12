/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'managePostGroup/fetch',
    payload: {
      search,
    },
  };
}
/* 设置卡片界面是否显示 */
export function setModeShow(modal) {
  return {
    type: 'managePostGroup/stateWillUpdate',
    payload: {
      modal,
    },
  };
}
/* 获取列表选中数据 */
export function getRecord(record, modal) {
  return {
    type: 'managePostGroup/getRecord',
    payload: {
      record, modal,
    },
  };
}
/* 部门组织树 */
export function getKeyResp() {
  return {
    type: 'managePostGroup/getKeyResp',
    payload: {
    },
  };
}
/* 修改关键职责 */
export function modifyKeyResp(id, record) {
  return {
    type: 'managePostGroup/modifyKeyResp',
    payload: {
      record,
      id,
    },
  };
}
