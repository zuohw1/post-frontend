
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
export function getPersonList(orgId, record) {
  return {
    type: 'employeeGroup/getPersonList',
    payload: {
      orgId,
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

/* 删除分组列表数据 */
export function deleteGroupList(record) {
  return {
    type: 'employeeGroup/deleteGroupList',
    payload: {
      record,
    },
  };
}

/* 获取组织树数据 */
export function getOrgTree() {
  return {
    type: 'employeeGroup/getOrgTree',
    payload: {
    },
  };
}
/* 保存分组列表数据 */
export function saveGroupList(groupObj) {
  return {
    type: 'employeeGroup/saveGroupList',
    payload: {
      groupObj,
    },
  };
}
/* 分配至该组 */
export function distributionGroup(newRecord) {
  return {
    type: 'employeeGroup/distributionGroup',
    payload: {
      newRecord,
    },
  };
}

/* 分配负责人 */
export function distributionBlame(newData) {
  return {
    type: 'employeeGroup/distributionBlame',
    payload: {
      newData,
    },
  };
}
