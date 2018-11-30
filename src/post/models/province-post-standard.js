
export default {
  namespace: 'provincePostStandard',
  state: {
    /* 列表数据 */
    tableData: {
      total: 0,
      size: 0,
      current: 1,
      records: [
        {
          key: 'a1',
          DOC_CODE: '（集团）实体渠道管理岗',
          ATTRIBUTE8: '市场序列.渠道管理',
          ATTRIBUTE13: '.集团.省.市.县.',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2013-01-01',
          def5: ['查看职责', '定制'],
          children: [{
            key: 11,
            DOC_CODE: '（省）实体渠道管理岗',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2015-04-21',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 12,
            DOC_CODE: '维系成本及渠道管理岗',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-11',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 13,
            DOC_CODE: '核心渠道管理',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2013-01-01',
            def5: ['更改职责', '终止', '删除'],
          }],
        }, {
          key: 'a2',
          DOC_CODE: '实体渠道运营岗',
          ATTRIBUTE8: '市场序列.渠道管理',
          ATTRIBUTE13: '.集团.省.市.县.',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2013-01-03',
          def5: ['查看职责', '定制'],
          children: [{
            key: 21,
            DOC_CODE: '实体渠道运营岗',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '集团',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2015-04-21',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 22,
            DOC_CODE: '运营支撑',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '市',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-11',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 23,
            DOC_CODE: '渠道规划与建设',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '市',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2013-01-01',
            def5: ['更改职责', '终止', '删除'],
          }],
        }, {
          key: 'a3',
          DOC_CODE: '（集团）实体渠道管理岗',
          ATTRIBUTE8: '市场序列.渠道管理',
          ATTRIBUTE13: '.集团.省.市.县.',
          ATTRIBUTE11: '是',
          DOC_STATUS: '本科',
          ATTRIBUTE10: '2013-02-05',
          def5: ['查看职责', '定制'],
          children: [{
            key: 31,
            DOC_CODE: '（省）实体渠道管理岗',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '省',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2015-04-21',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 32,
            DOC_CODE: '维系成本及渠道管理岗',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '市',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2016-11-11',
            def5: ['更改职责', '终止', '删除'],
          }, {
            key: 33,
            DOC_CODE: '核心渠道管理',
            ATTRIBUTE8: '市场序列.渠道管理',
            ATTRIBUTE13: '市',
            ATTRIBUTE11: '是',
            DOC_STATUS: '本科',
            ATTRIBUTE10: '2013-01-01',
            def5: ['更改职责', '终止', '删除'],
          }],
        },

      ],
      pages: 0,
    },
    /* 查询是否展开 */
    expand: false,
    /* 查询条件数据 */
    search: {
    },
  },
  reducers: { //
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
  },
  subscriptions: {
  },
};
