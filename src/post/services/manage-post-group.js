import request from '../../utils/request';

export default {
  list(search) {
    const url = `api/postionmanage/getPositionJT?orgId=${search.orgid}&kid=${search.kid}&level=1&pageSzie=${search.pageSzie}&pageNum=${search.pageNum}`;
    return request.post(url, '');
  },
  getKeyResp() {
    return request.post('api/postionmanage/getKeyResp?mId=129', '');
  },
  getAttachData(record) {
    return request.get(`api/postionmanage/getAllDetailJT?assignMentId=${record.assignMentId}`, record);
  },
};
