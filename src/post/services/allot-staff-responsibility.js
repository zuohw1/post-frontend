import request from '../../utils/request';

export default {
  getRespRangeRef() {
    return request.post('PosElementStructure/queryRespRange', '');
  },
};
