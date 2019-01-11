import request from '../../utils/request';

export default {
  getLeftTree(id) {
    return request.post('business/info', {
      operatorId: '', respId: '200000979', versionId: '407921', style: 'MAJOR', parentId: id,
    });
  },
  getLibTree(id) {
    return request.get(`business/key?majorId=${id}`);
  },
  addTreeNode(majorName, majorDesc, majorType, majorIdParent) {
    return request.post('business/save', {
      majorType, majorDesc, majorName, majorStyle: 'MAJOR', majorIdParent, operatorId: 2,
    });
  },
  deleteTreeNode(type, id) {
    return request.post('business/del', { majorTpye: type, majorId: id, style: 'MAJOR' });
  },
  getCheckedTreeNodes(respId, subRespId, majorId) {
    return request.get(`business/mapping?style=MAJOR&respId=${respId}&subRespId=${subRespId}&majorId=${majorId}`);
  },
};
