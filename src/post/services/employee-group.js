import request from '../../utils/request';

export default {
  getGroupList(id) {
    return request.get(`api/posGroup/list?orgId=${id}`);
  },
  getOrgTree() {
    return request.get('api/org/getChildrenData?id=101');
  },
  getPersonList(record) {
    return request.get(`api/empBasic/list?orgId=101&groupId=${record.groupId}`);
  },
  deleteGroupList(record) {
    return request.post(`api/posGroup/delete/${record.groupId}`, record);
  },
};
