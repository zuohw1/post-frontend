import request from '../../utils/request';

export default {
  list(loginName, respId, rangeId, currentPageNum, recordNum) {
    return request.get(`posPosdes/list?login_name=${loginName}&resp_id=${respId}&rangeId=${rangeId}&currentPageNum=${currentPageNum}&recordNum=${recordNum}`);
  },
  detail(posdesId) {
    return request.get(`posPosdes/instruction?posdesId=${posdesId}`);
  },
};
