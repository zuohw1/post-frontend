
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
    /* 添加到表格中的数据 */
    recordData: [],
    recordDataOne: [
      {
        dutyExecute: '市本部部门正职',
        key: 'keyResp111',
        dataIndex: 'keyResp111',
        proportion: '20',
        count: 1,
      },
      {
        dutyExecute: '技术销售',
        key: 'keyResp222',
        dataIndex: 'keyResp222',
        proportion: '80',
        count: 2,
      },
    ],
    recordDataTwo: [
      {
        dutyExecute: '区县本部部门副职',
        key: 'keyResp333',
        dataIndex: 'keyResp333',
        proportion: '50',
        count: 3,
      },
      {
        dutyExecute: '技术支援',
        key: 'keyResp444',
        dataIndex: 'keyResp555',
        proportion: '50',
        count: 4,
      },
    ],
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
    wholeTree: [
      {
        title: '工会',
        key: '0',
        children: [
          {
            title: '技术销售',
            key: '0-0',
            children: [
              { title: '技术销售', key: '0-0-0' },
            ],
          },
          {
            title: '其他',
            key: '0-1',
            children: [
              { title: '其他', key: '0-1-0' },
            ],
          },
        ],
      },
      {
        title: 'IT规划',
        key: '1',
        children: [
          {
            title: 'IT规划',
            key: '1-0',
            children: [
              { title: '系统架构设计', key: '1-0-0' },
              { title: '行动计划制定', key: '1-0-1' },
              { title: 'IT系统战略制定', key: '1-0-2' },
            ],
          },
          {
            title: '技术支援',
            key: '1-1',
            children: [
              { title: '行动计划制定', key: '1-1-0' },
              { title: 'IT系统战略制定', key: '1-1-1' },
            ],
          },
          {
            title: '立项评估',
            key: '1-2',
            children: [
              { title: '行动计划制定', key: '1-2-0' },
              { title: 'IT系统战略制定', key: '1-2-1' },
            ],
          },
        ],
      },
    ],
    /* 关键职责 */
    keyDuty: '',
    /* 当前记录的关键职责 */
    /* 默认复选框 */
    checkedKeys: [],
    selectedKeys: [],
    /* 展开收起节点 */
    expandedKeys: [],
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
    /* 表格数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: 1,
          groupName: '沧州市分公司办公室',
          name: '高志杰',
          employeeNumber: '0020478',
          profession: '市管管理人员',
          keyResp: '市本部部门副职',
          work: '100',
        },
        {
          key: 2,
          groupName: '沧州市分公司办公室',
          name: '吴涛',
          employeeNumber: '0020611',
          profession: '综合行政',
          keyResp: '督查督办',
          work: '20',

        },
        {
          key: 3,
          groupName: '沧州市分公司办公室',
          name: '吴涛',
          employeeNumber: '0020611',
          profession: '综合行政',
          keyResp: '公文管理',
          work: '60',

        },
      ],
      pages: 0,
    },
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
    /* 选中记录 */
  },
  subscriptions: {
  },
};
