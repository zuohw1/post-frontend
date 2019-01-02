import EmployeeGroup from '../services/employee-group';


export default {
  namespace: 'employeeGroup',
  state: {
    record: {},
    orgId: '',
    groupObj: {},
    newRecord: {},
    count: 0,
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
      yield put({
        type: 'stateWillUpdate',
        payload: {
          groupList: groupData,
          orgId: id,
        },
      });
    },
    /* 获取人员列表数据 */
    * getPersonList({ payload: { orgId, record } }, { call, put }) {
      const personData = yield call(EmployeeGroup.getPersonList, orgId, record);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          personList: personData,
          record,
          orgId,
        },
      });
    },
    /* 删除分组列表数据 */
    * deleteGroupList({ payload: { record } }, { call, put }) {
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
    /* 保存分组列表数据 */
    * saveGroupList({ payload: { groupObj } }, { call, put }) {
      yield call(EmployeeGroup.saveGroupList, groupObj);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          groupObj,
        },
      });
    },
    /* 分配至改组 */
    * distributionGroup({ payload: { newRecord } }, { call, put }) {
      yield call(EmployeeGroup.distributionGroup, newRecord);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          newRecord,
        },
      });
    },
    /* 分配负责人 */
    * distributionBlame({ payload: { newData } }, { call, put }) {
      const blamPerson = yield call(EmployeeGroup.distributionBlame, newData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          personList: blamPerson,
        },
      });
    },
  },
  subscriptions: {
  },
};
