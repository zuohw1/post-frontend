import request from '../../utils/request';

export default {
  getGroupList(id) {
    return request.get(`posGroup/list?orgId=${id}`);
  },
  getOrgTree() {
    return request.get('org/getChildrenData?id=101');
  },
  getPersonList(record) {
    return request.get(`empBasic/list?orgId=101&groupId=${record.groupId}`);
  },
  deleteGroupList(record) {
    return request.post(`posGroup/delete/${record.groupId}`, record);
  },
};
