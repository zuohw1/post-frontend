import request from '../../utils/request';

export default {
  list(search) {
    let url = `api/PosElementStructure/queryRespsInfo?pageNum=${search.pageNumber}&pageSize=${search.pageSize}`;
    if (search.levelType && search.levelType !== '') { // 组织层级
      url += `&levelType=${search.levelType}`;
    }
    if (search.sequence && search.sequence !== '') {
      url += `&sequence=${search.sequence}`;
    }
    if (search.respName && search.respName !== '') {
      url += `&respName=${search.respName}`;
    }
    return request.post(url, search.data);
  },
  getRespRangeRef() {
    return request.post('api/PosElementStructure/queryRespRange', '');
  },

};
