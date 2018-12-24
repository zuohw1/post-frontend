export function isAddprofModalShow(addProfModal) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      addProfModal,
    },
  };
}

export function primaryBusinessShow(isPrimaryShow) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      isPrimaryShow,
    },
  };
}

export function updateLeftCardTree(leftCardTree) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      leftCardTree,
    },
  };
}

export function updateOptionValue(optionValue) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      optionValue,
    },
  };
}

export function setPrimaryBusinessData(primaryBusinessData) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      primaryBusinessData,
    },
  };
}

export function isAlertShow(showAlert) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      showAlert,
    },
  };
}

export function setKeyRespList(keyRespList) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      keyRespList,
    },
  };
}


export function setCheckedKeys(checkedKeys) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      checkedKeys,
    },
  };
}
