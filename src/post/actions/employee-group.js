/* 设置职责树点击节点信息 */
export function setClickOrgIdCode(clickOrgType, clickOrgId, clickOrgCode) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      clickOrgType,
      clickOrgId,
      clickOrgCode,
    },
  };
}
/* 更新列表数据 */
export function setGroupList(groupList) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      groupList,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCount(count) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      count,
    },
  };
}

/* 获取人员列表数据 */
export function getPersonList(record) {
  return {
    type: 'employeeGroup/getPersonList',
    payload: {
      record,
    },
  };
}

/* 获取分组列表数据 */
export function getGroupList(id) {
  return {
    type: 'employeeGroup/getGroupList',
    payload: {
      id,
    },
  };
}

/* 获取分组列表数据 */
export function deleteGroupList(record) {
  return {
    type: 'employeeGroup/deleteGroupList',
    payload: {
      record,
    },
  };
}

/* 获取分组列表数据 */
export function getOrgTree() {
  return {
    type: 'employeeGroup/getOrgTree',
    payload: {
    },
  };
}
