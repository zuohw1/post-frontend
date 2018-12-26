/* 设置职责树点击节点信息 */
export function setClickOrgIdCode(clickOrgType, clickOrgId, clickOrgCode) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      clickOrgType,
      clickOrgId,
      clickOrgCode,
    },
  };
}
/* 更新列表数据 */
export function setListDataSource(dataSource) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      dataSource,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCount(count) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      count,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceAll(dataSourceAll) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      dataSourceAll,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountAll(countAll) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      countAll,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceOffice(dataSourceOffice) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      dataSourceOffice,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountOffice(countOffice) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      countOffice,
    },
  };
}
/* 更新列表数据 */
export function setListComprehensive(comprehensive) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      comprehensive,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountComprehensive(countComprehensive) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      countComprehensive,
    },
  };
}
/* 更新列表数据 */
export function setListDataSourceFinance(dataSourceFinance) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      dataSourceFinance,
    },
  };
}
/* 更新列表数据记录数 */
export function setListCountFinance(countFinance) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      countFinance,
    },
  };
}
/* 获取列表数据记录数 */
export function getRecord(record) {
  return {
    type: 'employeeGroup/stateWillUpdate',
    payload: {
      record,
    },
  };
}
/* 获取列表数据记录数 */
export function getPerson(man, people) {
  return {
    type: 'employeeGroup/getPerson',
    payload: {
      man,
      people,
    },
  };
}
