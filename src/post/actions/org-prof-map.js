
export function getOrgTree() {
  return {
    type: 'orgprofmap/getOrgTree',
    payload: {
    },
  };
}

export function getProfLibTree(orgId) {
  return {
    type: 'orgprofmap/getProfLibTree',
    payload: {
      orgId,
    },
  };
}

export function setLibTreeLoading(libTreeLoading) {
  return {
    type: 'orgprofmap/stateWillUpdate',
    payload: {
      libTreeLoading,
    },
  };
}

export function getProfList(orgId) {
  return {
    type: 'orgprofmap/getProfList',
    payload: {
      orgId,
    },
  };
}

export function setKeyExpandedKeys(expandedKeys) {
  return {
    type: 'orgprofmap/stateWillUpdate',
    payload: {
      expandedKeys,
    },
  };
}


export function changeLibTreeChecked(id, currentOrgId) {
  return {
    type: 'orgprofmap/changeLibTreeChecked',
    payload: {
      id, currentOrgId,
    },
  };
}

export function setModalState(isModalShow) {
  return {
    type: 'orgprofmap/stateWillUpdate',
    payload: {
      isModalShow,
    },
  };
}

export function setFileArr(fileArr) {
  return {
    type: 'orgprofmap/stateWillUpdate',
    payload: {
      fileArr,
    },
  };
}

export function copyMapping() {
  return {
    type: 'orgprofmap/copyMapping',
    payload: {
    },
  };
}
