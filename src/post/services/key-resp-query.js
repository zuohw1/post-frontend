import request from '../../utils/request';

export default {
  list(search) {
    let url = `posElement/list?currentPageNum=${search.currentPageNum}&recordNum=${search.recordNum}`;
    if (search.sequence && search.sequence !== '') {
      url += `&sequence=${search.sequence}`;
    }
    if (search.respName && search.respName !== '') {
      url += `&respName=${search.respName}`;
    }
    if (search.cRespName && search.cRespName !== '') {
      url += `&cRespName=${search.cRespName}`;
    }
    return request.get(url);
  },
};
