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


export function setSelectedKeys(selectedKeys) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      selectedKeys,
    },
  };
}

export function setListTitle(listTitle, isTitleSelected) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      listTitle, isTitleSelected,
    },
  };
}
export function setLeftExpandedKeys(leftExpandedKeys) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      leftExpandedKeys,
    },
  };
}


export function setKeyCheckedKeys(keyCheckedKeys) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      keyCheckedKeys,
    },
  };
}
export function setKeyExpandedKeys(keyExpandedKeys) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      keyExpandedKeys,
    },
  };
}
