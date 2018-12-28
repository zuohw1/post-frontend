import EmployeeGroup from '../services/employee-group';


export default {
  namespace: 'employeeGroup',
  state: {
    record: {},
    orgId: '',
    count: 5650,
    orgList: [],
    groupList: [],
    personList: [],
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
    /* 获取分组列表数据 */
    * getGroupList({ payload: { id } }, { call, put }) {
      const groupData = yield call(EmployeeGroup.getGroupList, id);
      console.log(groupData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          groupList: groupData,
          orgId: id,
        },
      });
    },
    /* 获取人员列表数据 */
    * getPersonList({ payload: { record } }, { call, put }) {
      console.log('search', record);
      const personData = yield call(EmployeeGroup.getPersonList, record);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          personList: personData,
          record,
        },
      });
    },
    /* 删除分组列表数据 */
    * deleteGroupList({ payload: { record } }, { call, put }) {
      console.log('search', record);
      yield call(EmployeeGroup.deleteGroupList, record);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          record,
        },
      });
    },
    /* 获取组织树数据 */
    * getOrgTree({ payload: { search } }, { call, put }) {
      console.log('search', search);
      const orgData = yield call(EmployeeGroup.getOrgTree);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          orgList: orgData,
        },
      });
    },
  },
  subscriptions: {
  },
};
