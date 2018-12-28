import request from '../../utils/request';

export default {
  list(search) {
    const url = `postionmanage/getPositionJT?orgId=42125&kid=${search.kid}&level=1&pageSzie=${search.pageSzie}&pageNum=${search.pageNum}`;
    return request.post(url, '');
  },
  getKeyResp() {
    return request.post('postionmanage/getKeyResp?mId=129', '');
  },
  getAttachData(record) {
    return request.post(`postionmanage/getAllDetailJT?assignMentId=${record.assignMentId}`, record);
  },
  modifyKeyResp(record, id) {
    return request.post(`postionmanage/updateResp?ebsAssId=${record.elementId}&personId=${record.personId}&thisKid=${id}`, record);
  },
};
