import request from '../../utils/request';

export default {
  getOrgTree() {
    return request.get('mapping/tree?userId=478806&respId=200000412');
  },
};
