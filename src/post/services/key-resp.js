import request from '../../utils/request';

export default {
  getDataSource(elementType, posCateId) {
    // console.log('查询前', elementType, posCateId);
    let url = `posVer/list?versionId=1&elementType=${elementType}`;
    if (posCateId && posCateId !== '') {
      url += `&posCateId=${posCateId}`;
    }
    return request.get(url);
  },
};
