/* 设置职责树点击节点信息 */
export function setClickRespIdCode(
  clickRespType, clickRespId, clickRespCode, clickRespName, clickRespParentId, clickRespParentKey,
) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      clickRespType,
      clickRespId,
      clickRespCode,
      clickRespName,
      clickRespParentId,
      clickRespParentKey,
    },
  };
}

/* 更新列表数据 */
export function setListDataSource(dataSource) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSource,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCount(count) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      count,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceAll(dataSourceAll) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceAll,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountAll(countAll) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countAll,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceGwxl(dataSourceGwxl) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceGwxl,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountGwxl(countGwxl) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countGwxl,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceZxl(dataSourceZxl) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceZxl,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountZxl(countZxl) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countZxl,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceZy(dataSourceZy) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceZy,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountZy(countZy) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countZy,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceZz(dataSourceZz) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceZz,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountZz(countZz) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countZz,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceZzz(dataSourceZzz) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      dataSourceZzz,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountZzz(countZzz) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      countZzz,
    },
  };
}
/* 更新左侧职责树 */
export function setResptree(resptree) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      resptree,
    },
  };
}
/* 更新列表数据删除标识 */
export function setRespDataDelFlag(respDataDelFlag) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      respDataDelFlag,
    },
  };
}
/* 更新列表数据保存是否成功标识 */
export function setRespDataSaveFlag(respDataSaveFlag) {
  return {
    type: 'keyResp/stateWillUpdate',
    payload: {
      respDataSaveFlag,
    },
  };
}
/* 获取左树及列表数据 */
export function getDataSource(elementType, posCateId) {
  return {
    type: 'keyResp/getDataSource',
    payload: {
      elementType: elementType === undefined ? 0 : elementType,
      posCateId,
    },
  };
}
/* 岗位序列等各层级 数据获取 */
export function getRespSelectData(respType) {
  return {
    type: 'keyResp/getRespSelectData',
    payload: {
      respType,
    },
  };
}

/* 根据关键字查询左树数据 */
export function getTreeDataByKey(elementName) {
  return {
    type: 'keyResp/getTreeDataByKey',
    payload: {
      elementName,
    },
  };
}
/* 职责库数据保存 */
export function respDataSave(respData) {
  return {
    type: 'keyResp/respDataSave',
    payload: {
      respData,
    },
  };
}
/* 职责库数据保存 */
export function respDatDelete(elementId) {
  return {
    type: 'keyResp/respDatDelete',
    payload: {
      elementId,
    },
  };
}
