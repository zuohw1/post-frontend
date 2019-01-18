import request from '../../utils/request';

export default {
  list(search) {
    let url = `posJposV/Poslist?levelCode=.S.D.X&currentPageNum=${search.currentPageNum}&recordNum=${search.recordNum}`;
    if (search.posCateId && search.posCateId !== '') {
      url += `&posCateId=${search.posCateId}`;
    }
    if (search.posSubcateId && search.posSubcateId !== '') {
      url += `&posSubcateId=${search.posSubcateId}`;
    }
    if (search.posName && search.posName !== '') {
      url += `&posName=${search.posName}`;
    }
    if (search.levelCode && search.levelCode !== '') {
      url += `&levelCode=${search.levelCode}`;
    }
    if (search.state && search.state !== '') {
      url += `&state=${search.state}`;
    }
    if (search.coreFlag && search.coreFlag !== '') {
      url += `&coreFlag=${search.coreFlag}`;
    }
    if (search.educationDegree && search.educationDegree !== '') {
      url += `&educationDegree=${search.educationDegree}`;
    }
    return request.get(url);
  },
  /* 岗位序列 */
  getPostRangeRef() {
    return request.get('posJposV/Poslist?levelCode=s&currentPageNum=1&recordNum=5');
  },
  /* 子序列 */
  getRespRangeRef() {
    return request.get('posJposV/Poslist?levelCode=s&currentPageNum=2&recordNum=4');
  },
  /* 学历要求 */
  getMeatRangeRef() {
    return request.get('posJposV/Poslist?levelCode=s&currentPageNum=7&recordNum=8');
  },
  /* 详细信息 */
  getNewsRangeRef(posid) {
    return request.get(`posJposV/checkProvincePostView?posid=${posid}`);
  },
};
