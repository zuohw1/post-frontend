import request from '../../utils/request';

export default {
  list(loginName, respId, rangeId, currentPageNum, recordNum) {
    return request.get(`posPosdes/list?login_name=${loginName}&resp_id=${respId}&rangeId=${rangeId}&currentPageNum=${currentPageNum}&recordNum=${recordNum}`);
  },
  detail(posdesId) {
    return request.get(`posPosdes/instruction?posdesId=${posdesId}`);
  },
  ele(posId) {
    return request.get(`posPosdes/ele?posId=${posId}`);
  },
  item() {
    return request.get('posPosdes/item');
  },
  major() {
    return request.get('posPosdes/major');
  },
  posKey(currentPageNum, recordNum) {
    return request.get(`posPosdes/posKey?currentPageNum=${currentPageNum}&recordNum=${recordNum}`);
  },
  posKeySearch(elementName, flexValueId, currentPageNum, recordNum) {
    return request.get(`posPosdes/posKey?elementName=${elementName}&flexValueId=${flexValueId}&currentPageNum=${currentPageNum}&recordNum=${recordNum}`);
  },
  sub(topId) {
    return request.get(`posPosdes/sub?topId=${topId}`);
  },
  tech() {
    return request.get('posPosdes/tech');
  },
  title() {
    return request.get('posPosdes/title');
  },
  work() {
    return request.get('posPosdes/work');
  },
  workLevel() {
    return request.get('posPosdes/workLevel');
  },
  world(posdesId) {
    return request.get(`posPosdes/world?posdesId=${posdesId}`);
  },
  instructionList(param) {
    return request.post('posPosdes/instructionList', param);
  },
  delete(sortList) {
    return request.delete('posPosdes/delete', sortList);
  },
};
