export function isAddprofModalShow(addProfModal) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      addProfModal,
    },
  };
}

export function primaryBusinessShow(isPrimaryShow) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      isPrimaryShow,
    },
  };
}

export function updateLeftCardTree(leftCardTree) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      leftCardTree,
    },
  };
}

export function updateOptionValue(optionValue) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      optionValue,
    },
  };
}

export function setPrimaryBusinessData(primaryBusinessData) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      primaryBusinessData,
    },
  };
}

export function isAlertShow(showAlert) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      showAlert,
    },
  };
}

export function setKeyRespList(keyRespList) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      keyRespList,
    },
  };
}


export function setSelectedKeys(selectedKeys) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      selectedKeys,
    },
  };
}

export function setListTitle(listTitle, isTitleSelected) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      listTitle, isTitleSelected,
    },
  };
}
export function setLeftExpandedKeys(leftExpandedKeys) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      leftExpandedKeys,
    },
  };
}


export function setKeyCheckedKeys(keyCheckedKeys) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      keyCheckedKeys,
    },
  };
}

export function setKeyexpandedKeys(keyExpandedKeys) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      keyExpandedKeys,
    },
  };
}
