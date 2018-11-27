/* eslint-disable */

export default {
  namespace: 'postInstructions',
  state: {
    InstructionsModal: false,
    visibleDrawer: false,
    tableData: {
      total: 2,
      size: 1,
      current: 1,
      records: [
        {
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
        },{
          DOC_CODE: '工程建设',
          ATTRIBUTE8: '阿克苏地区分公司',
          ATTRIBUTE13: '技术序列',
          ATTRIBUTE11: '5 -- 7',
          DOC_STATUS: '2016-9-1',
          ATTRIBUTE10: '2018-1-1',
          JHTRIBUTE10: '查看 修改 导出',
          KeyResponsibilities: '管理序列·管理·集团管理人员·集团本部部门正职',
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
    *getInstructions({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateWillUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          InstructionsModal: true,
        },
      });
    },
    *closeInstructions({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateWillUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          InstructionsModal: false,
        },
      });
    },
    *getInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateWillUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          visibleDrawer: true,
        },
      });
    },
    *closeInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({// 数据更新会带动页面重新渲染
        type: 'stateWillUpdate', // reducers中的方法名
        payload: { // 网络返回的要保留的数据
          visibleDrawer: false,
        },
      });
    },
  },
  subscriptions: {
  },
};
