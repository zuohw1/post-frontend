import request from '../../utils/request';

export default {
  getDataSource(elementType, posCateId) {
    let url = `posVer/list?versionId=1&elementType=${elementType}`;
    if (posCateId && posCateId !== '') {
      url += `&posCateId=${posCateId}`;
    }
    return request.get(url);
  },
  getDataSourceBJ(elementType, posCateId, clickRespParentId) {
    // console.log('查询前', elementType, posCateId, clickRespParentId);
    let url = 'posVer/list?versionId=1';
    if (elementType && elementType === '50') { // 50最后一级 查本级
      url += `&elementType=40&posCateId=${clickRespParentId}`;
    }
    return request.get(url);
  },
  getRespSelectData(respType) {
    const url = `posVer/lev?versionId=1&elementType=${respType}&currentPageNum=1&recordNum=10`;
    return request.get(url);
  },
  getTreeDataByKey(elementName) {
    const url = `posVer/key?versionId=1&elementName=${elementName}`;
    return request.get(url);
  },
  respDataSave(respData) {
    const url = `posVer/save?versionId=1&type=${respData.type}`;
    console.log('respDataSave()--url:', url, respData);
    return request.post(url, respData.dataInfos);
  },
  // add(records) {
  //   return request.post('orgHeaderBatch/save', records);
  // },
  // update(records) {
  //   return request.post('orgHeaderBatch/update', records);
  // },
  // posVer/delete?elementId=109087&versionId=1
  delete(elementId) {
    return request.delete(`posVer/delete?versionId=1&elementId=${elementId}`);
  },
  isDispath(elementId) {
    return request.get(`posVer/isDispath?elementId=${elementId}`);
  },

};
