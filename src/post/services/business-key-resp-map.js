import request from '../../utils/request';

export default {
  getLeftTree(id) {
    return request.post('business/info', {
      operatorId: '', respId: '200000979', versionId: '407921', style: 'BUSINESS', parentId: id,
    });
  },
  getLibTree(id) {
    return request.get(`business/key?majorId=${id}`);
  },
  addTreeNode(majorName, majorDesc, majorType, majorIdParent) {
    return request.post('business/save', {
      majorType, majorDesc, majorName, majorStyle: 'BUSINESS', majorIdParent, operatorId: 2,
    });
  },
  deleteTreeNode(type, id) {
    return request.post('business/del', { majorTpye: type, majorId: id, style: 'BUSINESS' });
  },
  getCheckedTreeNodes(respId, subRespId, majorId) {
    return request.get(`business/mapping?style=BUSINESS&respId=${respId}&subRespId=${subRespId}&majorId=${majorId}`);
  },
};
