import { routerRedux } from 'dva/router';

export default {
  namespace: 'localPostStandard',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: 'a1',
          DOC_CODE: '(省)资金核算及营收核算岗',
          ATTRIBUTE8: '支撑序列.财务会计',
          ATTRIBUTE13: '省.市.县',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2016-11-10',
          def5: ['查看职责', '定制'],
          children: [{
            key: '11',
            DOC_CODE: '营收核算及稽核岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '省.市',
            ATTRIBUTE13_VAL: ['S', 'D'], // 用于编辑状态下勾选默认值
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-24',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: '12',
            DOC_CODE: '资金核算及营收核算岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '省.区县',
            ATTRIBUTE13_VAL: ['S', 'X'], // '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-20',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: '13',
            DOC_CODE: '营收核算及稽核岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '市.区县',
            ATTRIBUTE13_VAL: ['D', 'X'], // '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-20',
            def5: ['更改职责', '终止', '删除'],
          }],
        }, {
          key: 'a2',
          DOC_CODE: '(省)后勤服务岗',
          ATTRIBUTE8: '支撑序列.综合行政与后勤',
          ATTRIBUTE13: '省.市.县.',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2016-11-10',
          def5: ['查看职责', '定制'],
          children: [{
            key: '21',
            DOC_CODE: '后勤服务岗（驾驶）',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '市',
            ATTRIBUTE13_VAL: ['D'],
            ATTRIBUTE11: '否',
            DOC_STATUS: '大专',
            ATTRIBUTE10: '2016-12-06',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: '22',
            DOC_CODE: '仓库管理岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '区',
            ATTRIBUTE13_VAL: ['X'],
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-20',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: '23',
            DOC_CODE: '行政事务岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '省.市',
            ATTRIBUTE13_VAL: ['S', 'D'],
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-12-01',
            def5: ['更改职责', '终止', '删除'],
          }],
        }, {
          key: 'a3',
          DOC_CODE: '(省)餐饮管理岗',
          ATTRIBUTE8: '支撑序列.综合行政与后勤',
          ATTRIBUTE13: '省.市.县',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2016-11-10',
          def5: ['查看职责', '定制'],
          children: [{
            key: '31',
            DOC_CODE: '餐饮管理岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '市',
            ATTRIBUTE13_VAL: ['D'],
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-12-06',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: '32',
            DOC_CODE: '餐饮管理岗',
            ATTRIBUTE8: '支撑序列.财务会计',
            ATTRIBUTE13: '市.区',
            ATTRIBUTE13_VAL: ['D', 'X'],
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-20',
            def5: ['更改职责', '终止', '删除'],
          }],
        }],
      pages: 0,
    },
    /* 可编辑字段 */
    editingKey: [],
    /* 已展开主记录字段 */
    editingExpands: [],
    /* 查询是否展开 */
    expand: false,
    /* 查询条件数据 */
    search: {
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
    *redirect({ payload: { pathname, state } }, { put }) {
      yield put(routerRedux.push({ pathname, state }));
    },
  },
  subscriptions: {
  },
};
