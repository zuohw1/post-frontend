/* 获取列表数据 */
export function listTable(search) {
  return {
    type: 'managePostCity/fetch',
    payload: {
      search,
    },
  };
}
/* 设置卡片界面是否显示 */
export function setModeShow(modal) {
  return {
    type: 'managePostCity/stateWillUpdate',
    payload: {
      modal,
    },
  };
}
/* 获取列表选中数据 */
export function getRecord(record, modal) {
  return {
    type: 'managePostCity/getRecord',
    payload: {
      record, modal,
    },
  };
}
/* 部门组织树 */
export function getKeyResp() {
  return {
    type: 'managePostCity/getKeyResp',
    payload: {
    },
  };
}
/* 修改关键职责 */
export function modifyKeyResp(id, record) {
  return {
    type: 'managePostCity/modifyKeyResp',
    payload: {
      record,
      id,
    },
  };
}
