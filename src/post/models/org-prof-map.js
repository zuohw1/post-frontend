/* eslint-disable */
import OrgProfMapService from '../services/org-prof-map';

export default {
  namespace: 'orgprofmap',
  state: {
    orgLibArr:[],
    orgTree:[],
    libTree:[],
    libTreeLoading:true,
    checkedKeys:[],
    expandedKeys:[],
    profList:[],
    currentOrgId:'',
    isModalShow:false,
    fileArr:[],
  },
  reducers: {
    stateWillUpdate(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * getOrgTree(_, { call, put }) {
      const treeNodes = yield call(OrgProfMapService.getOrgTree);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          orgTree:[treeNodes],
        },
      });
    },
    * getProfList({payload:{orgId}}, { call, put }) {
      const profList = yield call(OrgProfMapService.getProfList,orgId);
      console.log(2222222,profList);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          profList,
          currentOrgId:orgId,
        },
      });
    },

    * changeLibTreeChecked({payload:{id,currentOrgId}}, { call, put }) {
      const isChanged = yield call(OrgProfMapService.changeLibTreeChecked,id,currentOrgId);
      console.log(3333333,isChanged);
      yield put({
        type: 'getProfLibTree',
        payload: {
          orgId: currentOrgId,
        },
      });
    },
    * copyMapping(_, { call, put }) {
      const copySucess = yield call(OrgProfMapService.copyMapping);
      if(copySucess.msg==="复制至下属组织成功"){
        yield put({
          type: 'getOrgTree',
          payload: {
          },
        });
      }
    },
    * getProfLibTree({payload:{orgId}}, { call, put }) {
      const libTree = yield call(OrgProfMapService.getProfLibTree,orgId);
      let checkedkeys=[];
      let expandedKeys=[];
      libTree.forEach(ele=>{
        if(ele.checkFlag==="Y")
        {
          expandedKeys.push(ele.id.toString());
          ele.children.forEach(item=>{
            if(item.checkFlag==='Y'){
              checkedkeys.push(item.id.toString());
            }
          })
        }
      });
      yield put({
        type: 'getProfList',
        payload: {
          orgId
        },
      });
      yield put({
        type: 'stateWillUpdate',
        payload: {
          checkedKeys:checkedkeys,
          expandedKeys:expandedKeys,
          libTree,
          libTreeLoading: false,
        },
      });
    },
  },
  subscriptions: {},
};
