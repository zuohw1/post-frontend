/* eslint-disable */
import PostInstructionsService from '../services/post-instructions';

export default {
  namespace: 'postInstructions',
  state: {
    loginName: 'hq-ehr',//登录名
    respId: '200000410',//登录id
    rangeId: '12473',//用户id
    recordNum: '10',//请求时每页中显示多少条
    records: [],//当前列表中的数据
    total: 0,//总条数
    size: 10,//总页数
    current: 1,//当前为第几页
    treeSelectData: [],//部门树选择的数据
    duty: [],//
    executeOnce: true,
    userName: '',
    refSelectData: {},
    dutyNameRefSelectData: {},
    isShowPostSeat: 'hide-post-seat post-seat',
    InstructionsModal: false,
    dutyNameModal: false,
    visibleDrawer: false,
    visibleCheckPost: false,
    visibleModifyPost: false,
    checkedOne: false,
    disInputOne: true,
    checkedTwo: false,
    disInputTwo: true,
    checkedThree: false,
    disInputThree: true,
    checkedFour: false,
    disInputFour: true,
    comments: [{orderNum:"1",content:"接入网专业.接入网设备维护"},{orderNum:"2",content:"采购管理.报账管理"}],
    divisionValue: undefined,
    instructions: {},///查看修改部门的字段
    expand: false,
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *listTable({ payload: { loginName, respId, rangeId, currentPageNum, recordNum } }, { call, put }) {
      const result = yield call(PostInstructionsService.list, loginName, respId, rangeId, currentPageNum, recordNum);
      console.log(result);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          records: result.dutyList,
          total: result.count,
          treeSelectData: result.tree,
          duty: result.duty,
        },
      });
    },
    *checkDetail({ payload: { posdesId } }, { call, put }) {
      const data = yield call(PostInstructionsService.detail, posdesId);
      console.log(data);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          instructions: data.instructions,
        },
      });
    },
    *getInstructions({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          InstructionsModal: true,
        },
      });
    },
    *closeInstructions({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          InstructionsModal: false,
        },
      });
    },
    *getDutyName({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          dutyNameModal: true,
        },
      });
    },
    *closeDutyName({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          dutyNameModal: false,
        },
      });
    },
    *getInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleDrawer: true,
        },
      });
    },
    *closeInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate', 
        payload: {
          visibleDrawer: false,
        },
      });
    },
    *getCheckPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleCheckPost: true,
        },
      });
    },
    *closeCheckPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleCheckPost: false,
        },
      });
    },
    *getModifyPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleModifyPost: true,
        },
      });
    },
    *closeModifyPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleModifyPost: false,
        },
      });
    },
    *userNameEmpty({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          userName: '',
        },
      });
    },
    *changeUserName({ payload: { e } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          userName: e,
        },
      });
    },
    *isShowPost({ payload: { show } }, { put }) {
      console.log(show);
      if(show == 'hide-post-seat post-seat'){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            isShowPostSeat: 'show-post-seat post-seat',
          },
        });
      }else if(show == 'show-post-seat post-seat'){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            isShowPostSeat: 'hide-post-seat post-seat',
          },
        });
      }
    },
    *onchangeDisInputOne({ payload: { checkedOne } }, { put }) {
      console.log(checkedOne);
      if(checkedOne == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedOne: true,
            disInputOne: false,
          },
        });
      }else if(checkedOne == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedOne: false,
            disInputOne: true,
          },
        });
      }
    },
    *onchangeDisInputTwo({ payload: { checkedTwo } }, { put }) {
      console.log(checkedTwo);
      if(checkedTwo == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedTwo: true,
            disInputTwo: false,
          },
        });
      }else if(checkedTwo == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedTwo: false,
            disInputTwo: true,
          },
        });
      }
    },
    *onchangeDisInputThree({ payload: { checkedThree } }, { put }) {
      console.log(checkedThree);
      if(checkedThree == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedThree: true,
            disInputThree: false,
          },
        });
      }else if(checkedThree == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedThree: false,
            disInputThree: true,
          },
        });
      }
    },
    *onchangeDisInputFour({ payload: { checkedFour } }, { put }) {
      console.log(checkedFour);
      if(checkedFour == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedFour: true,
            disInputFour: false,
          },
        });
      }else if(checkedFour == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedFour: false,
            disInputFour: true,
          },
        });
      }
    },
    *isExecuteOnce({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          executeOnce: false,
        },
      });
    },
    *changeDivisionValue({ payload: { value } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          divisionValue: value,
        },
      });
    },
  },
  subscriptions: {
  },
};
