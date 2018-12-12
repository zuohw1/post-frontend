import request from '../../utils/request';

export default {
  list(search) {
    const url = `api/postionmanage/getPositionJT?orgId=42125&kid=${search.kid}&level=1&pageSzie=${search.pageSzie}&pageNum=${search.pageNum}`;
    return request.post(url, '');
  },
  getKeyResp() {
    return request.post('api/postionmanage/getKeyResp?mId=129', '');
  },
  getAttachData(record) {
    return request.post(`api/postionmanage/getAllDetailJT?assignMentId=${record.assignMentId}`, record);
  },
  modifyKeyResp(record, id) {
    return request.post(`api/postionmanage/updateResp?ebsAssId=${record.elementId}&personId=${record.personId}&thisKid=${id}`, record);
  },
};
