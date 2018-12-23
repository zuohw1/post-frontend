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
