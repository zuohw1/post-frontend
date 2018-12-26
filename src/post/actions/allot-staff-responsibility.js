export function onhandleClickMajor(major) {
  return {
    type: 'allotStaffResponsibility/onhandleClickMajor',
    payload: {
      major,
    },
  };
}
export function onhandleClickRecord(record) {
  return {
    type: 'allotStaffResponsibility/onhandleClickRecord',
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
export function removeCertainDuty(datas, index, maskDisplay) {
  return {
    type: 'allotStaffResponsibility/removeCertainDuty',
    payload: {
      datas, index, maskDisplay,
    },
  };
}
export function isCheacked(checkedBearDuty, datas, otherDatas) {
  return {
    type: 'allotStaffResponsibility/isCheacked',
    payload: {
      checkedBearDuty, datas, otherDatas,
    },
  };
}
