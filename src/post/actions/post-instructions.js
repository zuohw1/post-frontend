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
export function listTable(search) {
  return {
    type: 'postInstructions/fetch',
    payload: {
      search,
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
