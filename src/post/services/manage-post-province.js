import request from '../../utils/request';

export default {
  list(search) {
    const url = `postionmanage/getPositionJT?orgId=28223&kid=${search.kid}&level=2&pageSzie=${search.pageSzie}&pageNum=${search.pageNum}`;
    return request.post(url, '');
  },
  getKeyResp() {
    return request.post('postionmanage/getKeyResp?mId=107', '');
  },
  getAttachData(record) {
    return request.post(`postionmanage/getAllDetailJT?assignMentId=${record.assignMentId}`, record);
  },
  modifyKeyResp(record, id) {
    return request.post(`postionmanage/updateResp?ebsAssId=${record.elementId}&personId=${record.personId}&thisKid=${id}`, record);
  },
};
