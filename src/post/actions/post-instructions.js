export function listTable(loginName, respId, rangeId, currentPageNum, recordNum) {
  return {
    type: 'postInstructions/listTable',
    payload: {
      loginName, respId, rangeId, currentPageNum, recordNum,
    },
  };
}
export function posKeyTable(currentPageNum, recordNum) {
  return {
    type: 'postInstructions/posKeyTable',
    payload: {
      currentPageNum, recordNum,
    },
  };
}
export function getInstructions() {
  return {
    type: 'postInstructions/getInstructions',
    payload: {
    },
  };
}
export function closeInstructions() {
  return {
    type: 'postInstructions/closeInstructions',
    payload: {
    },
  };
}
export function getDutyName() {
  return {
    type: 'postInstructions/getDutyName',
    payload: {
    },
  };
}
export function closeDutyName() {
  return {
    type: 'postInstructions/closeDutyName',
    payload: {
    },
  };
}
export function getInsDrawer() {
  return {
    type: 'postInstructions/getInsDrawer',
    payload: {
    },
  };
}
export function closeInsDrawer() {
  return {
    type: 'postInstructions/closeInsDrawer',
    payload: {
    },
  };
}
export function getCheckPost() {
  return {
    type: 'postInstructions/getCheckPost',
    payload: {
    },
  };
}
export function closeCheckPost() {
  return {
    type: 'postInstructions/closeCheckPost',
    payload: {
    },
  };
}
export function getModifyPost() {
  return {
    type: 'postInstructions/getModifyPost',
    payload: {
    },
  };
}
export function closeModifyPost() {
  return {
    type: 'postInstructions/closeModifyPost',
    payload: {
    },
  };
}
export function setToggle(expand) {
  return {
    type: 'postInstructions/stateWillUpdate',
    payload: {
      expand,
    },
  };
}
export function userNameEmpty() {
  return {
    type: 'postInstructions/userNameEmpty',
    payload: {
    },
  };
}
export function changeUserName(e) {
  return {
    type: 'postInstructions/changeUserName',
    payload: {
      e,
    },
  };
}
export function isShowPost(show) {
  return {
    type: 'postInstructions/isShowPost',
    payload: {
      show,
    },
  };
}
export function onchangeDisInputOne(checkedOne) {
  return {
    type: 'postInstructions/onchangeDisInputOne',
    payload: {
      checkedOne,
    },
  };
}
export function onchangeDisInputTwo(checkedTwo) {
  return {
    type: 'postInstructions/onchangeDisInputTwo',
    payload: {
      checkedTwo,
    },
  };
}
export function onchangeDisInputThree(checkedThree) {
  return {
    type: 'postInstructions/onchangeDisInputThree',
    payload: {
      checkedThree,
    },
  };
}
export function onchangeDisInputFour(checkedFour) {
  return {
    type: 'postInstructions/onchangeDisInputFour',
    payload: {
      checkedFour,
    },
  };
}
export function isExecuteOnce() {
  return {
    type: 'postInstructions/isExecuteOnce',
    payload: {
    },
  };
}
export function isposKeyExecuteOnce() {
  return {
    type: 'postInstructions/isposKeyExecuteOnce',
    payload: {
    },
  };
}
export function checkDetail(posdesId) {
  return {
    type: 'postInstructions/checkDetail',
    payload: {
      posdesId,
    },
  };
}
export function toggleDisplay(expand) {
  return {
    type: 'postInstructions/toggleDisplay',
    payload: {
      expand,
    },
  };
}
export function changePageNumberSize(pageNumber, pageSize) {
  return {
    type: 'postInstructions/changePageNumberSize',
    payload: {
      pageNumber, pageSize,
    },
  };
}
export function posKeychangePageNumberSize(pageNumber, pageSize) {
  return {
    type: 'postInstructions/posKeychangePageNumberSize',
    payload: {
      pageNumber, pageSize,
    },
  };
}
export function changeSortList(sort) {
  return {
    type: 'postInstructions/changeSortList',
    payload: {
      sort,
    },
  };
}
export function deleteSortList(sort) {
  return {
    type: 'postInstructions/deleteSortList',
    payload: {
      sort,
    },
  };
}
export function showMajor() {
  return {
    type: 'postInstructions/showMajor',
    payload: {
    },
  };
}
export function changeDutyValue(value) {
  return {
    type: 'postInstructions/changeDutyValue',
    payload: {
      value,
    },
  };
}
export function handleResetValue() {
  return {
    type: 'postInstructions/handleResetValue',
    payload: {
    },
  };
}
export function changeDivisionValue(value) {
  return {
    type: 'postInstructions/changeDivisionValue',
    payload: {
      value,
    },
  };
}
export function changeSequenceValue(value) {
  return {
    type: 'postInstructions/changeSequenceValue',
    payload: {
      value,
    },
  };
}
export function changeRankValue(value) {
  return {
    type: 'postInstructions/changeRankValue',
    payload: {
      value,
    },
  };
}
export function changeSearchDateValue(value) {
  return {
    type: 'postInstructions/changeSearchDateValue',
    payload: {
      value,
    },
  };
}
export function changeStationNameValue(value) {
  return {
    type: 'postInstructions/changeStationNameValue',
    payload: {
      value,
    },
  };
}
