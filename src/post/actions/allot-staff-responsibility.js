export function handleClickMajor(major) {
  return {
    type: 'allotStaffResponsibility/handleClickMajor',
    payload: {
      major,
    },
  };
}
export function handleClickRecord(record) {
  return {
    type: 'allotStaffResponsibility/handleClickRecord',
    payload: {
      record,
    },
  };
}
export function switchMajor(major) {
  return {
    type: 'allotStaffResponsibility/switchMajor',
    payload: {
      major,
    },
  };
}
export function switchRecord(record) {
  return {
    type: 'allotStaffResponsibility/switchRecord',
    payload: {
      record,
    },
  };
}
export function removeCertainDuty(recordData, index, maskDisplay) {
  return {
    type: 'allotStaffResponsibility/removeCertainDuty',
    payload: {
      recordData, index, maskDisplay,
    },
  };
}
export function isChecked(checkedBearDuty, recordData, otherDatas) {
  return {
    type: 'allotStaffResponsibility/isChecked',
    payload: {
      checkedBearDuty, recordData, otherDatas,
    },
  };
}

/* 选中人员姓名 */
export function getPeopleTitle(person) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      person,
    },
  };
}

/* 选中人员ID */
export function setClickRespId(peopleId) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      peopleId,
    },
  };
}

/* 选中关键职责 */
export function selectKeyDuty(recordData) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      recordData,
    },
  };
}

/* 数据序号 */
export function setListCount(count) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      count,
    },
  };
}

/* 更新默认复选框 */
export function updateChecked(defaultCheckedKeys) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      defaultCheckedKeys,
    },
  };
}

/* 收起展开节点 */
export function onExpandKeys(expandedKeys) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      expandedKeys,
    },
  };
}

/* 收起展开节点 */
export function onUpdateCheck(checkedKeys) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      checkedKeys,
    },
  };
}

/* 点击树触发 */
export function onSelectKeys(selectedKeys) {
  return {
    type: 'allotStaffResponsibility/stateWillUpdate',
    payload: {
      selectedKeys,
    },
  };
}
