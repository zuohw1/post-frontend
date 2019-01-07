import request from '../../utils/request';

export default {
  list(search) {
    let url = `api/PosElementStructure/queryRespsInfo?pageNum=${search.pageNumber}&pageSize=${search.pageSize}`;
    if (search.levelType && search.levelType !== '') { // 组织层级
      url += `&levelType=${search.levelType}`;
    }
    if (search.sequence && search.sequence !== '') {
      url += `&sequence=${search.sequence}`;
    }
    if (search.respName && search.respName !== '') {
      url += `&respName=${search.respName}`;
    }
    return request.post(url, search.data);
  },
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
