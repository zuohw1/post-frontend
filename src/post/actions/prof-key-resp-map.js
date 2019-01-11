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

export function setLibTreeSpinning(libTreeSpinning) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      libTreeSpinning,
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


export function setSelectedKey(selectedKey) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      selectedKey,
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
export function setKeyExpandedKeys(keyExpandedKeys) {
  return {
    type: 'profkeyrespmap/stateWillUpdate',
    payload: {
      keyExpandedKeys,
    },
  };
}


export function getLeftCardTree(dataRef, leftTree) {
  return {
    type: 'profkeyrespmap/getLeftCardTree',
    payload: {
      dataRef, leftTree,
    },
  };
}

export function getLibTree(majorId) {
  return {
    type: 'profkeyrespmap/getLibTree',
    payload: {
      majorId,
    },
  };
}

export function addTreeNode(majorName, majorDesc, majorType, majorIdParent) {
  return {
    type: 'profkeyrespmap/addTreeNode',
    payload: {
      majorName, majorDesc, majorType, majorIdParent,
    },
  };
}


export function deleteTreeNode(majorType, majorId) {
  return {
    type: 'profkeyrespmap/deleteTreeNode',
    payload: {
      majorType, majorId,
    },
  };
}

export function getCheckedTreeNodes(respId, subRespId, majorId) {
  return {
    type: 'profkeyrespmap/getCheckedTreeNodes',
    payload: {
      respId, subRespId, majorId,
    },
  };
}
