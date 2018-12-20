/* eslint-disable */
import AllotStaffService from '../services/allot-staff-responsibility';

export default {
  namespace: 'allotStaffResponsibility',
  state: {
    currentMajor: 'related',
    currentRecord: 'currentrecord',
    relatedDisplay: 'block',
    wholeDisplay: 'none',
    checklistDisplay: 'none',
    currentDisplay: 'block',
    allDisplay: 'none',
    maskDisplay: 'none',
    name: '',
    wholeKeyword: '',
    checklistKeyword: '',
    datas: [{dutyExecute:"公众客户销售.营业厅销售经理",proportion:"100"},{dutyExecute:"终端支撑.终端销售",proportion:"66"}],
    otherDatas: [],
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
    *onhandleClickMajor({ payload: { major } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          currentMajor: major,
        },
      });
    },
    *onhandleClickRecord({ payload: { record } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          currentRecord: record,
        },
      });
    },
    *switchMajor({ payload: { major } }, { put }) {
      console.log(major);
      if(major === "related"){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            relatedDisplay: 'block',
            wholeDisplay: 'none',
            checklistDisplay: 'none',
          },
        });
      }else if(major === "whole"){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            relatedDisplay: 'none',
            wholeDisplay: 'block',
            checklistDisplay: 'none',
          },
        });
      }else if(major === "checklist"){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            relatedDisplay: 'none',
            wholeDisplay: 'none',
            checklistDisplay: 'block',
          },
        });
      } 
    },
    *switchRecord({ payload: { record } }, { put }) {
      console.log(record);
      if(record === "currentrecord"){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            currentDisplay: 'block',
            allDisplay: 'none',
            maskDisplay: 'none',
          },
        });
      }else if(record === "allrecords"){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            currentDisplay: 'none',
            allDisplay: 'block',
            maskDisplay: 'block',
          },
        });
      }
    },
    *removeCertainDuty({ payload: { datas, index } }, { put }) {
      datas.splice(index,1);
      console.log(datas);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          datas: datas,
        },
      });
    },
    *isCheacked({ payload: { cheacked, datas, otherDatas } }, { put }) {
      console.log(cheacked);
      if(cheacked === true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            maskDisplay: 'block',
            otherDatas: datas,
            datas: [{dutyExecute:"其他.不承担任何工作职责",proportion:"0"}],
          },
        });
      }else if(cheacked === false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            maskDisplay: 'none',
            datas: otherDatas,
          },
        });
      }
    },
  },
  subscriptions: {
  },
};
