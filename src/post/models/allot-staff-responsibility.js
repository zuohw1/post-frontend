
export default {
  namespace: 'allotStaffResponsibility',
  state: {
    count: 0,
    /* 默认显示专业的导航栏 */
    currentMajor: ['related'],
    /* 默认显示记录的导航栏 */
    currentRecord: ['current'],
    /* 专业选项卡切换 */
    relatedDisplay: 'block',
    wholeDisplay: 'none',
    checklistDisplay: 'none',
    /* 记录选项卡切换 */
    currentDisplay: 'block',
    allDisplay: 'none',
    /* 遮罩层显示 */
    maskDisplay: 'none',
    /* 选中人员姓名 */
    person: '',
    /* 选中人员ID */
    peopleId: '',
    /* 选中人员对应的数据 */
    personTreeOne: [
      {
        title: '省管管理人员',
        key: '0',
        children: [
          {
            title: '市本部部门正职',
            key: '0-0',
            children: [
              { title: '市本部部门正职', key: '0-0-0' },
            ],
          },
          {
            title: '市本部部门副职',
            key: '0-1',
            children: [
              { title: '市本部部门副职', key: '0-1-0' },
            ],
          },
        ],
      },
      {
        title: '市管管理人员',
        key: '1',
        children: [
          {
            title: '市公司正职',
            key: '1-0',
            children: [
              { title: '市公司正职', key: '1-0-0' },
            ],
          },
          {
            title: '市公司副职',
            key: '1-1',
            children: [
              { title: '市公司副职', key: '1-1-0' },
            ],
          },
        ],
      },
      {
        title: '集团管理人员',
        key: '2',
        children: [
          {
            title: '集团本部正职',
            key: '2-1',
            children: [
              { title: '集团本部正职', key: '2-1-0' },
            ],
          },
        ],
      },
    ],
    personTreeTwo: [
      {
        title: '集团管理人员',
        key: '0',
        children: [
          {
            title: '集团本部部门正职',
            key: '0-0',
            children: [
              { title: '集团本部部门正职', key: '0-0-0' },
            ],
          },
          {
            title: '集团本部部门副职',
            key: '0-1',
            children: [
              { title: '集团本部部门副职', key: '0-1-0' },
            ],
          },
        ],
      },
      {
        title: '区县管理人员',
        key: '1',
        children: [
          {
            title: '区县本部部门正职',
            key: '1-0',
            children: [
              { title: '区县本部部门正职', key: '1-0-0' },
            ],
          },
          {
            title: '区县本部部门副职',
            key: '1-1',
            children: [
              { title: '区县本部部门副职', key: '1-1-0' },
            ],
          },
        ],
      },
      {
        title: '分公司管理人员',
        key: '2',
        children: [
          {
            title: '分公司本部正职',
            key: '2-1',
            children: [
              { title: '分公司本部正职', key: '2-1-0' },
            ],
          },
        ],
      },
    ],
    /* 关键职责 */
    keyDuty: '',
    /* 当前记录的关键职责 */
    recordData: [
      {
        dutyExecute: '公众客户销售.营业厅销售经理',
        key: 'keyResp111',
        dataIndex: 'keyResp111',
        proportion: '100',
        count: 1,
      },
    ],
    /* 默认复选框 */
    checkedKeys: [],
    // defaultExpandedKeys: ['0-0-0'],
    selectedKeys: [],
    /* 展开收起节点 */
    expandedKeys: ['0', '1'],
    autoExpandParent: true,
    otherDatas: [],
    checkedBearDuty: false,
    allRecordsData: [
      {
        title: '2015-12-01   - ',
        key: '0',
        children:
          [{
            title: '其他.不承担任何工作职责 - 0%',
            key: '0-0',
          }],
      }],
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
    *handleClickMajor({ payload: { major } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          currentMajor: major,
        },
      });
    },
    *handleClickRecord({ payload: { record } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          currentRecord: record,
        },
      });
    },
    *switchMajor({ payload: { major } }, { put }) {
      console.log('major===', major);
      if (major === 'related') {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            relatedDisplay: 'block',
            wholeDisplay: 'none',
            checklistDisplay: 'none',
          },
        });
      } else if (major === 'whole') {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            relatedDisplay: 'none',
            wholeDisplay: 'block',
            checklistDisplay: 'none',
          },
        });
      } else if (major === 'checklist') {
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
      if (record === 'current') {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            currentDisplay: 'block',
            allDisplay: 'none',
            maskDisplay: 'none',
          },
        });
      } else if (record === 'allRecords') {
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
    *removeCertainDuty({ payload: { recordData, index, maskDisplay } }, { put }) {
      if (maskDisplay === 'block') {
        recordData.splice(index, 1);
        yield put({
          type: 'stateWillUpdate',
          payload: {
            maskDisplay: 'none',
            checkedBearDuty: false,
            recordData,
          },
        });
      } else {
        recordData.splice(index, 1);
        console.log(recordData);
        yield put({
          type: 'stateWillUpdate',
          payload: {
            recordData,
          },
        });
      }
    },
    *isChecked({ payload: { checkedBearDuty, recordData, otherDatas } }, { put }) {
      console.log(checkedBearDuty);
      if (checkedBearDuty === false) {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            maskDisplay: 'block',
            checkedBearDuty: true,
            otherDatas: recordData,
            recordData: [{ dutyExecute: '其他.不承担任何工作职责', proportion: '0' }],
          },
        });
      } else if (checkedBearDuty === true) {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            maskDisplay: 'none',
            checkedBearDuty: false,
            recordData: otherDatas,
          },
        });
      }
    },
  },
  subscriptions: {
  },
};
