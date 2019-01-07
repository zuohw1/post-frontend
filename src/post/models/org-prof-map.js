/* eslint-disable */
import OrgProfMapService from '../services/org-prof-map';

export default {
  namespace: 'orgprofmap',
  state: {
    orgLibArr:[],
    orgTree:[],
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
    * getOrgTree({payload:{dataRef,leftTree}}, { call, put }) {
      const treeNodes = yield call(OrgProfMapService.getOrgTree);
      console.log(2222,treeNodes);
      /*let tree=[];
      if(dataRef.majorId===''){
        tree=treeNodes;
      }else{
        dataRef.children=treeNodes;
        tree=[...leftTree];
      }*/
      yield put({
        type: 'stateWillUpdate',
        payload: {
          orgTree:treeNodes.children,
        },
      });
    },
  },
  subscriptions: {},
};
