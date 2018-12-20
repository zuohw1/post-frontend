/* eslint-disable */
import AllotStaffService from '../services/allot-staff-responsibility';

export default {
  namespace: 'profkeyrespmap',
  state: {

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

    },
  },
  subscriptions: {
  },
};
