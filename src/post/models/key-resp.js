import KeyRespService from '../services/key-resp';

// /* 格式化table数据 */
// const formatTableData = (dataSourceAll) => {
//   const treeTableData = dataSourceAll.map((item, index) => {
//     return { ...item, key: index };
//   });
//   return treeTableData;
// };

/* 格式化职责左树数据 */
const formatRespTreeData = (resptreebk, dataSourceAll, elementType) => {
  console.log('formatRespTreeData()---处理数据前，原左树数据：', resptreebk, dataSourceAll, elementType);
  if (dataSourceAll.length === 0) {
    return resptreebk;
  }
  const treeDataNew = [{
    title: '全部',
    key: '0-0',
    children: [],
  }];
  if (elementType === 0) {
    let title0 = '';
    const treeDateC = dataSourceAll.map((item, index) => {
      title0 = item.posCateName_one;
      return {
        ...item, key: `0-0-${index}`, title: title0,
      };
    });
    treeDataNew[0].children = treeDateC;
    return treeDataNew;
  } else if (elementType === '10') {
    // 此次查出的上级id
    const parentId = dataSourceAll[0].parentId.toString();
    let addChild;
    let titlechild;
    // 处理成需要的左树数据-- 将查询到的集合加在对应的children下
    const dealData = resptreebk[0].children.map((item) => {
      if (item.posCateId === parentId) {
        addChild = dataSourceAll.map((itemchild, index) => {
          titlechild = itemchild.posCateName_two;
          return { ...itemchild, key: `${item.key}-${index}`, title: titlechild };
        });
        return { ...item, children: addChild };
      } else {
        return item;
      }
    });
    treeDataNew[0].children = dealData;
    return treeDataNew;
  } else if (elementType === '20') {
    let itemAChild;
    let resptreebkIChild;
    const parentIdClick = dataSourceAll[0].parentId.toString();
    treeDataNew[0].children = resptreebk[0].children.map((resptreebkI) => {
      if (resptreebkI.children !== undefined) {
        resptreebkIChild = resptreebkI.children.map((itemA) => {
          if (itemA.posCateId === parentIdClick) {
            itemAChild = dataSourceAll.map((itemchild, index) => {
              return { ...itemchild, key: `${itemA.key}-${index}`, title: itemchild.posCateName_three };
            });
            return { ...itemA, children: itemAChild };
          } else {
            return itemA;
          }
        });
        return { ...resptreebkI, children: resptreebkIChild };
      } else {
        return resptreebkI;
      }
    });
    return treeDataNew;
  } else if (elementType === '30') {
    let itemBChild;
    let itemAChild;
    let resptreebkIChild;
    const parentIdClick = dataSourceAll[0].parentId.toString();
    treeDataNew[0].children = resptreebk[0].children.map((resptreebkI) => {
      if (resptreebkI.children !== undefined) {
        resptreebkIChild = resptreebkI.children.map((itemA) => {
          if (itemA.children !== undefined) {
            itemAChild = itemA.children.map((itemB) => {
              if (itemB.posCateId === parentIdClick) {
                itemBChild = dataSourceAll.map((itemchild, index) => {
                  return { ...itemchild, key: `${itemB.key}-${index}`, title: itemchild.posCateName_four };
                });
                return { ...itemB, children: itemBChild };
              } else {
                return itemB;
              }
            });
            return { ...itemA, children: itemAChild };
          } else {
            return itemA;
          }
        });
        return { ...resptreebkI, children: resptreebkIChild };
      } else {
        return resptreebkI;
      }
    });
    return treeDataNew;
  } else if (elementType === '40') {
    let itemCChild;
    let itemBChild;
    let itemAChild;
    let resptreebkIChild;
    const parentIdClick = dataSourceAll[0].parentId.toString();
    treeDataNew[0].children = resptreebk[0].children.map((resptreebkI) => {
      if (resptreebkI.children !== undefined) {
        resptreebkIChild = resptreebkI.children.map((itemA) => {
          if (itemA.children !== undefined) {
            itemAChild = itemA.children.map((itemB) => {
              if (itemB.children !== undefined) {
                itemBChild = itemB.children.map((itemC) => {
                  if (itemC.posCateId === parentIdClick) {
                    itemCChild = dataSourceAll.map((itemchild, index) => {
                      return { ...itemchild, key: `${itemC.key}-${index}`, title: itemchild.posCateName_five };
                    });
                    return { ...itemC, children: itemCChild };
                  } else {
                    return itemC;
                  }
                });
                return { ...itemB, children: itemBChild };
              } else {
                return itemB;
              }
            });
            return { ...itemA, children: itemAChild };
          } else {
            return itemA;
          }
        });
        return { ...resptreebkI, children: resptreebkIChild };
      } else {
        return resptreebkI;
      }
    });
    return treeDataNew;
  }
  return resptreebk;
};

export default {
  namespace: 'keyResp',
  state: {
    /* 点击的职责树节点类型(岗位序列>子序列>专业>关键职责>子职责) 10/20/30/40/50 */
    clickRespType: '',
    /* 点击的职责树节点职责id */
    clickRespId: '',
    /* 点击的职责树节点职责code */
    clickRespCode: '',
    /* 右侧列表title数组 */
    listTitles: ['岗位序列列表', '子序列列表', '专业列表', '关键职责列表', '子职责列表', '子职责列表'],
    /* 列表数据-全部 */
    dataSourceAll: [],
    /* 列表记录条数-全部 */
    // countAll: 4,
    countAll: 0,
    /* 列表数据-岗位序列 */
    dataSourceGwxl: [],
    /* 列表记录条数-岗位序列 */
    countGwxl: 0,
    /* 列表数据-子序列 */
    dataSourceZxl: [],
    /* 列表记录条数-子序列 */
    countZxl: 0,
    /* 列表数据-专业 */
    dataSourceZy: [],
    /* 列表记录条数-专业 */
    countZy: 0,
    /* 列表数据-关键职责 */
    dataSourceZz: [],
    /* 列表记录条数-关键职责 */
    countZz: 0,
    /* 列表数据-子职责 */
    dataSourceZzz: [],
    /* 列表记录条数-子职责 */
    countZzz: 0,
    /* 左侧职责树 */
    resptree: [],
    elementType: 0,
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    /* 列表查询 */
    * getDataSource({ payload: { elementType, posCateId } }, { select, call, put }) {
      const resptreebk = yield select(state => state.keyResp.resptree);
      const dataSourceAll = yield select(state => state.keyResp.dataSourceAll);
      const countAll = yield select(state => state.keyResp.countAll);
      const dataSourceGwxl = yield select(state => state.keyResp.dataSourceGwxl);
      const countGwxl = yield select(state => state.keyResp.countGwxl);
      const dataSourceZxl = yield select(state => state.keyResp.dataSourceZxl);
      const countZxl = yield select(state => state.keyResp.countZxl);
      const dataSourceZy = yield select(state => state.keyResp.dataSourceZy);
      const countZy = yield select(state => state.keyResp.countZy);
      const dataSourceZz = yield select(state => state.keyResp.dataSourceZz);
      const countZz = yield select(state => state.keyResp.countZz);
      const dataSourceZzz = yield select(state => state.dataSourceZzz);
      const countZzz = yield select(state => state.keyResp.countZzz);

      // console.log('11111111111111resptreebk', resptreebk, elementType, posCateId);
      const dataSourceGet = yield call(KeyRespService.getDataSource, elementType, posCateId);
      // const treeTableData = formatTableData(dataSourceGet);
      // console.log('2222222222222-----dataSourceGet:', dataSourceGet);
      let formatRespTree = [];
      setTimeout(
        formatRespTree = formatRespTreeData(resptreebk, dataSourceGet, elementType),
        1000,
      );
      // console.log('2222222222222-----formatRespTree:', formatRespTree);

      yield put({
        type: 'stateWillUpdate',
        payload: {
          resptree: formatRespTree,
          dataSourceAll: (elementType === 0) ? dataSourceGet : dataSourceAll,
          countAll: (elementType === '0') ? dataSourceGet.length : countAll,
          dataSourceGwxl: (elementType === '10') ? dataSourceGet : dataSourceGwxl,
          countGwxl: (elementType === '10') ? dataSourceGet.length : countGwxl,
          dataSourceZxl: (elementType === '20') ? dataSourceGet : dataSourceZxl,
          countZxl: (elementType === '20') ? dataSourceGet.length : countZxl,
          dataSourceZy: (elementType === '30') ? dataSourceGet : dataSourceZy,
          countZy: (elementType === '30') ? dataSourceGet.length : countZy,
          dataSourceZz: (elementType === '40') ? dataSourceGet : dataSourceZz,
          countZz: (elementType === '40') ? dataSourceGet.length : countZz,
          dataSourceZzz: (elementType === '50') ? dataSourceGet : dataSourceZzz,
          countZzz: (elementType === '50') ? dataSourceGet.length : countZzz,
        },
      });
    },
  },
  subscriptions: {
  },
};
