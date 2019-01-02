import request from '../../utils/request';

export default {
  /* 获取分组列表 */
  getGroupList(id) {
    return request.get(`posGroup/list?orgId=${id}`);
  },
  /* 获取组织树 */
  getOrgTree() {
    return request.get('org/getChildrenData?id=101');
  },
  /* 获取人员列表 */
  getPersonList(id, record) {
    return request.get(`empBasic/list?orgId=${id}&groupId=${record.groupId}`);
  },
  /* 删除分组列表 */
  deleteGroupList(record) {
    return request.post(`posGroup/delete/${record.groupId}`, record);
  },
  /* 保存分组列表 */
  saveGroupList(obj) {
    return request.post('posGroup/saveList', obj);
  },
  /* 分配至该组 */
  distributionGroup(obj) {
    return request.post('empBasic/assign', obj);
  },
  /* 分配负责人 */
  distributionBlame(obj) {
    return request.post('empBasic/assignManager', obj);
  },
};
