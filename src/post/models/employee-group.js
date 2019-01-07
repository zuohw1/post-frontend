import EmployeeGroup from '../services/employee-group';


export default {
  namespace: 'employeeGroup',
  state: {
    /* 行的Id */
    rowId: '',
    /* 分组列表行的数据 */
    record: {},
    /* 组织树的id */
    orgId: '',
    /* 需要保存的分组列表的数据 */
    groupObj: {},
    /* 分配成员的数据 */
    newRecord: {},
    /* 组织树的数据 */
    orgList: [],
    /* 分组列表的数据 */
    groupList: [],
    /* 人员列表的数据 */
    personList: [],
    /* 人员列表的数据 */
    count: 0,
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
    /* 分配至该组 */
    * distributionGroup({ payload: { orgId, record, newRecord } }, { call, put }) {
      yield call(EmployeeGroup.distributionGroup, newRecord);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          newRecord,
        },
      });
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
