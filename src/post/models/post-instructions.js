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
    ///下面是新增查看修改的字段
    ORG_ID: '',
    JOB_LEVEL_DS_YEAR: '',
    POST: '',
    KPI: '',
    PRO_KNOWLEDGE: '',
    ESTABLISHMENT: '',
    LAST_UPDATE_DATE: '',
    POST_LEVEL: '',
    POS_LEVEL_LOW: '',
    JOB_LEVEL_JT_YEAR: '',
    RELATION_ID: '',
    JOB_LEVEL_NOLIMIT_YEAR: '',
    DOWNSTREAM_POS_NAME: '',
    PRO_SKILL: '',
    jobName: '',
    CREATED_BY: '',
    ATTRIBUTE3: '',
    LAST_UPDATED_BY: '',
    ATTRIBUTE2: '',
    ATTRIBUTE1: '',
    orgName: '',
    AGE_HIGH: '',
    effetiveStartDate: '',
    CREATION_DATE: '',
    proQualificationName: '',
    proQualificationLevelName: '',
    ATTRIBUTE9: '',
    ATTRIBUTE8: '',
    JOB_CATE: '',
    ATTRIBUTE7: '',
    ATTRIBUTE6: '',
    ATTRIBUTE5: '',
    ATTRIBUTE4: '',
    JOB_LEVEL_S_YEAR: '',
    POS_LEVEL_HIGH: '',
    POSDES_ID: '',
    JOB_LEVEL_JT: '',
    flexValue: '',
    jobCateLevelName: '',
    ATTRIBUTE10: '',
    PRO_KNOWLEDGE_MAJOR: '',
    AGE_LOW: '',
    JOB_ID: '',
    effetiveEndDate: '',
    postName: '',
    jobCateName: '',
    EDUCATION_DEGREE: '',
    POS_NAME: '',
    SUPERIOR_POS_NAME: '',
    PRO_SKILL_CATE: '',
    INFERIOR_POS_NAME: '',
    PRO_SKILL_LEVEL: '',
    PRO_KNOWLEDGE_LEVEL: '',
    PRO_QUALIFICATION_LEVEL: '',
    POS_SUBCATE_ID: '',
    VERSION_ID: '',
    PRO_QUALIFICATION: '',
    JOB_LEVEL_DS: '',
    MAJOR_ID: '',
    JOB_LEVEL_S: '',
    OTHER_DEMAND: '',
    postLevelName: '',
    JOB_CATE_LEVEL: '',
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
          ORG_ID: data.instructions.ORG_ID,
          JOB_LEVEL_DS_YEAR: data.instructions.JOB_LEVEL_DS_YEAR,
          POST: data.instructions.POST,
          KPI: data.instructions.KPI,
          PRO_KNOWLEDGE: data.instructions.PRO_KNOWLEDGE,
          ESTABLISHMENT: data.instructions.ESTABLISHMENT,
          LAST_UPDATE_DATE: data.instructions.LAST_UPDATE_DATE,
          POST_LEVEL: data.instructions.POST_LEVEL,
          POS_LEVEL_LOW: data.instructions.POS_LEVEL_LOW,
          JOB_LEVEL_JT_YEAR: data.instructions.JOB_LEVEL_JT_YEAR,
          RELATION_ID: data.instructions.RELATION_ID,
          JOB_LEVEL_NOLIMIT_YEAR: data.instructions.JOB_LEVEL_NOLIMIT_YEAR,
          DOWNSTREAM_POS_NAME: data.instructions.DOWNSTREAM_POS_NAME,
          PRO_SKILL: data.instructions.PRO_SKILL,
          jobName: data.instructions.jobName,
          CREATED_BY: data.instructions.CREATED_BY,
          ATTRIBUTE3: data.instructions.ATTRIBUTE3,
          LAST_UPDATED_BY: data.instructions.LAST_UPDATED_BY,
          ATTRIBUTE2: data.instructions.ATTRIBUTE2,
          ATTRIBUTE1: data.instructions.ATTRIBUTE1,
          orgName: data.instructions.orgName,
          AGE_HIGH: data.instructions.AGE_HIGH,
          effetiveStartDate: data.instructions.effetiveStartDate,
          CREATION_DATE: data.instructions.CREATION_DATE,
          proQualificationName: data.instructions.proQualificationName,
          proQualificationLevelName: data.instructions.proQualificationLevelName,
          ATTRIBUTE9: data.instructions.ATTRIBUTE9,
          ATTRIBUTE8: data.instructions.ATTRIBUTE8,
          JOB_CATE: data.instructions.JOB_CATE,
          ATTRIBUTE7: data.instructions.ATTRIBUTE7,
          ATTRIBUTE6: data.instructions.ATTRIBUTE6,
          ATTRIBUTE5: data.instructions.ATTRIBUTE5,
          ATTRIBUTE4: data.instructions.ATTRIBUTE4,
          JOB_LEVEL_S_YEAR: data.instructions.JOB_LEVEL_S_YEAR,
          POS_LEVEL_HIGH: data.instructions.POS_LEVEL_HIGH,
          POSDES_ID: data.instructions.POSDES_ID,
          JOB_LEVEL_JT: data.instructions.JOB_LEVEL_JT,
          flexValue: data.instructions.flexValue,
          jobCateLevelName: data.instructions.jobCateLevelName,
          ATTRIBUTE10: data.instructions.ATTRIBUTE10,
          PRO_KNOWLEDGE_MAJOR: data.instructions.PRO_KNOWLEDGE_MAJOR,
          AGE_LOW: data.instructions.AGE_LOW,
          JOB_ID: data.instructions.JOB_ID,
          effetiveEndDate: data.instructions.effetiveEndDate,
          postName: data.instructions.postName,
          jobCateName: data.instructions.jobCateName,
          EDUCATION_DEGREE: data.instructions.EDUCATION_DEGREE,
          POS_NAME: data.instructions.POS_NAME,
          SUPERIOR_POS_NAME: data.instructions.SUPERIOR_POS_NAME,
          PRO_SKILL_CATE: data.instructions.PRO_SKILL_CATE,
          INFERIOR_POS_NAME: data.instructions.INFERIOR_POS_NAME,
          PRO_SKILL_LEVEL: data.instructions.PRO_SKILL_LEVEL,
          PRO_KNOWLEDGE_LEVEL: data.instructions.PRO_KNOWLEDGE_LEVEL,
          PRO_QUALIFICATION_LEVEL: data.instructions.PRO_QUALIFICATION_LEVEL,
          POS_SUBCATE_ID: data.instructions.POS_SUBCATE_ID,
          VERSION_ID: data.instructions.VERSION_ID,
          PRO_QUALIFICATION: data.instructions.PRO_QUALIFICATION,
          JOB_LEVEL_DS: data.instructions.JOB_LEVEL_DS,
          MAJOR_ID: data.instructions.MAJOR_ID,
          JOB_LEVEL_S: data.instructions.JOB_LEVEL_S,
          OTHER_DEMAND: data.instructions.OTHER_DEMAND,
          postLevelName: data.instructions.postLevelName,
          JOB_CATE_LEVEL: data.instructions.JOB_CATE_LEVEL,
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
