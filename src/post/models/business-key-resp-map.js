/* eslint-disable */
import BusinessKeyRespService from '../services/business-key-resp-map';

export default {
  namespace: 'businesskeyrespmap',
  state: {
    addProfModal: false,
    isPrimaryShow: false,
    showAlert: false,
    isTitleSelected:false,
    listTitle:"",
    keyCheckedKeys:[],
    keyExpandedKeys:[],
    selectedKeys: [],
    keyRespList: [],
    primaryBusinessData: [],
    leftCardTree:[],
    libTree:[],
    currentMajorId:'',
    libTreeSpinning:true,
  },
  reducers: {
    stateWillUpdate(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  // 0: {majorDesc: "123", majorType: "M", majorId: "40001", majorName: "运维", majorIdParent: ""}
  effects: {
    * getLeftCardTree({payload:{dataRef,leftTree}}, { call, put }) {
      const treeNodes = yield call(BusinessKeyRespService.getLeftTree,dataRef.majorId);
      let tree=[];
      if(dataRef.majorId===''){
        tree=treeNodes;
      }else{
        dataRef.children=treeNodes;
        tree=[...leftTree];
      }
      yield put({
        type: 'stateWillUpdate',
        payload: {
          leftCardTree:tree,
        },
      });
    },
    * getLibTree({payload:{majorId}}, { call, put }) {
      const treeNodes = yield call(BusinessKeyRespService.getLibTree,majorId);
      const { RespInfoList,major } = treeNodes;
      // console.log(6666666666666,RespInfoList,major);
      const keyCheckedKeys=[];
      const keyExpandedKeys=[];
      RespInfoList.forEach((ele) => {
        if (ele.checkFlag === 'Y') {
          keyExpandedKeys.push(ele.respId.toString())
          ele.children.forEach((item) => {
            if(item.checkFlag === 'Y'){
              keyCheckedKeys.push(item.subRespId);
            }
          });
        }
      });
      // console.log(888888,keyCheckedKeys,keyExpandedKeys);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          libTreeSpinning:false,
          libTree:RespInfoList,
          keyRespList:major,
          keyCheckedKeys,
          keyExpandedKeys,
          currentMajorId:majorId,
        },
      });
    },
    * addTreeNode({payload:{majorName,majorDesc,majorType, majorIdParent}}, { call, put }) {
      const isAdd = yield call(BusinessKeyRespService.addTreeNode,majorName,majorDesc,majorType, majorIdParent);
      console.log(isAdd);
      if(isAdd){
        yield put({
          type:'getLeftCardTree',
          payload:{
            dataRef: {majorId:''}
          }
        })
      }
    },
    * deleteTreeNode({payload:{majorType, majorId}}, { call, put }) {
      console.log(33333333,call);
      const isDelete = yield call(BusinessKeyRespService.deleteTreeNode,majorType, majorId);
      if(isDelete){
        yield put({
          type:'getLeftCardTree',
          payload:{
            dataRef: {majorId:''}
          }
        })
      }
    },
    * getCheckedTreeNodes({payload:{respId, subRespId, majorId}}, { call, put }) {
      const storeList = yield call(BusinessKeyRespService.getCheckedTreeNodes,respId, subRespId, majorId);
      console.log(9999999,storeList);
      const {flag}=storeList;
      console.log(111111111111,flag);
      if(flag){
        yield put({
          type:'getLibTree',
          payload:{
            majorId:majorId,
          }
        })
      }
    },
  },
  subscriptions: {},
};
