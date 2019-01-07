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

export function setLibTreeSpinning(libTreeSpinning) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      libTreeSpinning,
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


export function setSelectedKey(selectedKey) {
  return {
    type: 'businesskeyrespmap/stateWillUpdate',
    payload: {
      selectedKey,
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


export function getLeftCardTree(dataRef, leftTree) {
  return {
    type: 'businesskeyrespmap/getLeftCardTree',
    payload: {
      dataRef, leftTree,
    },
  };
}

export function getLibTree(majorId) {
  return {
    type: 'businesskeyrespmap/getLibTree',
    payload: {
      majorId,
    },
  };
}

export function addTreeNode(majorName, majorDesc, majorType, majorIdParent) {
  return {
    type: 'businesskeyrespmap/addTreeNode',
    payload: {
      majorName, majorDesc, majorType, majorIdParent,
    },
  };
}


export function deleteTreeNode(majorType, majorId) {
  return {
    type: 'businesskeyrespmap/deleteTreeNode',
    payload: {
      majorType, majorId,
    },
  };
}

export function getCheckedTreeNodes(respId, subRespId, majorId) {
  return {
    type: 'businesskeyrespmap/getCheckedTreeNodes',
    payload: {
      respId, subRespId, majorId,
    },
  };
}
