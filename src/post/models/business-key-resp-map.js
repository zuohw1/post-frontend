/* eslint-disable */
import AllotStaffService from '../services/allot-staff-responsibility';

export default {
  namespace: 'businesskeyrespmap',
  state: {
    addProfModal: false,
    isPrimaryShow: false,
    optionValue:[],
    leftCardTree: [
      {
        title: '0-0',
        key: '0-0',
        children: [
          {
            title: '0-0-0',
            key: '0-0-0',
          },
          {
            title: '0-0-1',
            key: '0-0-1',
          },
          {
            title: '0-0-2',
            key: '0-0-2',
          }],
      },
      {
        title: '0-1',
        key: '0-1',
        children: [
          {title: '0-1-0-0', key: '0-1-0-0'},
          {title: '0-1-0-1', key: '0-1-0-1'},
          {title: '0-1-0-2', key: '0-1-0-2'},
        ],
      },
      {
        title: '0-2',
        key: '0-2',
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
