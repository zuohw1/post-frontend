import request from '../../utils/request';

export default {
  list(search) {
    let url = `posStandardpos/searchNewGroupPostList?currentPageNum=${search.pageNumber}&recordNum=${search.pageSize}`;
    if (search.posCateId && search.posCateId !== '') {
      url += `&posCateId=${search.posCateId}`;
    }
    if (search.posSubcateId && search.posSubcateId !== '') {
      url += `&posSubcateId=${search.posSubcateId}`;
    }
    if (search.posName && search.posName !== '') {
      url += `&posName=${search.posName}`;
    }
    if (search.orgLevel && search.orgLevel.length !== 0) {
      const orgLevelStr = search.orgLevel.map(item => item).join('.');
      url += `&orgLevel=.${orgLevelStr}.`;
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
  getPostSeqRef() {
    return request.get('posStandardpos/searchNewGroupPostList?currentPageNum=1&recordNum=1');
  },
  /* 子序列 */
  getSubSeqRef(search) {
    let url = 'posJposV/getSubcateLists?1=1';
    if (search !== undefined && search.posCateId && search.posCateId !== '') {
      url += `&posCateId=${search.posCateId}`;
    }
    return request.get(url);
  },
  /* 学历要求 */
  getEduRequireRef() {
    return request.get('posStandardpos/searchNewGroupPostList?currentPageNum=1&recordNum=1');
  },
  /* 详细信息 */
  getNewsRangeRef(posid) {
    return request.get(`posStandardpos/checkStandPostView?posid=${posid}`);
  },
};
