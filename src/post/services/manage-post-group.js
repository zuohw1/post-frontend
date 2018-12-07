import request from '../../utils/request';

export default {
  list(search) {
    let url = `api/postionmanage/getPositionJT?orgId=42125&kid=${search.status}&level=1&pageSzie=${search.recordNum}&pageNum=${search.currentPageNum}`;
    if (search.sequence && search.sequence !== '') {
      url += `&sequence=${search.sequence}`;
    }
    return request.post(url, search.data);
  },
  getKeyResp() {
    return request.post('api/postionmanage/getKeyResp?mId=129', '');
  },
  getAttachData(record) {
    return request.get(`api/postionmanage/getAllDetailJT?assignMentId=${record.assignMentId}`, record);
  },
};
