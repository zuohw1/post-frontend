/* eslint-disable */
import AllotStaffService from '../services/allot-staff-responsibility';

export default {
  namespace: 'businesskeyrespmap',
  state: {
    addProfModal: false,
    isPrimaryShow: false,
    showAlert:false,
    checkedKeys:[],
    keyRespList:[],
    primaryBusinessData:[],
    leftCardTree: [
      {
        title: 'china',
        key: '0',
        children: [
          {
            title: 'love',
            key: '0-1',
          },
          {
            title: 'profession',
            key: '0-2',
          }],
      },
      {
        title: '商业',
        key: '1',
        children: [
          {title: '计划', key: '1-0'},
          {title: '专业', key: '1-1'},
          {title: '性能', key: '1-2'},
        ],
      },
      {
        title: '业务',
        key: '2',
      }
    ],
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
    * onhandleClickMajor({payload: {major}}, {put}) {

    },
  },
  subscriptions: {},
};
