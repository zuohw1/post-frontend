import request from '../../utils/request';

export default {
  getOrgTree() {
    return request.get('mapping/tree?userId=478806&respId=200000412');
  },
  getProfLibTree(orgId) {
    return request.get(`mapping/majorTree?org=${orgId}`);
  },
  getProfList(orgId) {
    return request.get(`mapping/business?org=${orgId}`);
  },
  changeLibTreeChecked(id, currentOrgId) {
    return request.get(`mapping//change?org=${currentOrgId}&elementId=${id}`);
  },
  copyMapping() {
    return request.get('mapping/site?org=219453');
  },
};
