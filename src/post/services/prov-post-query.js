import request from '../../utils/request';

export default {
  list(search) {
    let url = `api/posJposV/Poslist?levelCode=${search.levelCode}&currentPageNum=${search.currentPageNum}&recordNum=${search.recordNum}`;
    if (search.posCateId && search.posCateId !== '') {
      url += `&posCateId=${search.posCateId}`;
    }
    if (search.posSubcateId && search.posSubcateId !== '') {
      url += `&posSubcateId=${search.posSubcateId}`;
    }
    if (search.posName && search.posName !== '') {
      url += `&posName=${search.posName}`;
    }
    if (search.state && search.state !== '') {
      url += `&state=${search.state}`;
    }
    if (search.levelCode && search.levelCode !== '') {
      url += `&levelCode=${search.levelCode}`;
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
    const subUrl = 'api/posJposV/Poslist?levelCode=s&currentPageNum=1&recordNum=5';
    console.log('thisUrl123', subUrl);
    return request.get(subUrl);
  },
  /* 子序列 */
  getRespRangeRef() {
    const subUrl = 'api/posJposV/Poslist?levelCode=s&currentPageNum=2&recordNum=4';
    console.log('thisUrl123', subUrl);
    return request.get(subUrl);
  },
  /* 学历要求 */
  getMeatRangeRef() {
    const subUrl = 'api/posJposV/Poslist?levelCode=s&currentPageNum=7&recordNum=8';
    console.log('thisUrl123', subUrl);
    return request.get(subUrl);
  },
};
