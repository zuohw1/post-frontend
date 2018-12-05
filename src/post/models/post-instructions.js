/* eslint-disable */
import KeyRespQueryService from '../services/key-resp-query';

/* 格式化table的数据 */
const formatTableData = (tableData) => {
  const num = tableData.currentPageNum * tableData.recordNum - tableData.recordNum;
  const table = tableData.list.map((item, index) => {
    return { ...item, key: index + 1 + num };
  });
  return {
    ...tableData,
    records: table,
    total: tableData.count,
    size: tableData.recordNum,
    current: tableData.currentPageNum,
  };
};

export default {
  namespace: 'postInstructions',
  state: {
    userName: '',
    refSelectData: {},
    dutyNameRefSelectData: {},
    isShowPostSeat: 'hide-post-seat post-seat',
    InstructionsModal: false,
    dutyNameModal: false,
    visibleDrawer: false,
    visibleCheckPost: false,
    visibleModifyPost: false,
    checkedOne: false,
    disInputOne: true,
    checkedTwo: false,
    disInputTwo: true,
    checkedThree: false,
    disInputThree: true,
    checkedFour: false,
    disInputFour: true,
    curxLabel: '<div className="crux-duty-top"><div className="crux-duty-one">序号</div><div className="crux-duty-two">关键职责</div><div className="crux-duty-three">操作</div></div>',
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
    comments: [{id:"1",content:"接入网专业.接入网设备维护"},{id:"2",content:"采购管理.报账管理"}],
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
      yield put({
        type: 'stateWillUpdate',
        payload: {
          InstructionsModal: true,
        },
      });
    },
    *closeInstructions({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          InstructionsModal: false,
        },
      });
    },
    *getDutyName({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          dutyNameModal: true,
        },
      });
    },
    *closeDutyName({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          dutyNameModal: false,
        },
      });
    },
    *getInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleDrawer: true,
        },
      });
    },
    *closeInsDrawer({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate', 
        payload: {
          visibleDrawer: false,
        },
      });
    },
    *getCheckPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleCheckPost: true,
        },
      });
    },
    *closeCheckPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleCheckPost: false,
        },
      });
    },
    *getModifyPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleModifyPost: true,
        },
      });
    },
    *closeModifyPost({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          visibleModifyPost: false,
        },
      });
    },
    *userNameEmpty({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          userName: '',
        },
      });
    },
    *changeUserName({ payload: { e } }, { put }) {
      yield put({
        type: 'stateWillUpdate',
        payload: {
          userName: e,
        },
      });
    },
    *fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(KeyRespQueryService.list, search);
      const formatTable = formatTableData(tableData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          tableData: formatTable,
          record: {},
        },
      });
    },
    *isShowPost({ payload: { show } }, { put }) {
      console.log(show);
      if(show == 'hide-post-seat post-seat'){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            isShowPostSeat: 'show-post-seat post-seat',
          },
        });
      }else if(show == 'show-post-seat post-seat'){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            isShowPostSeat: 'hide-post-seat post-seat',
          },
        });
      }
    },
    *onchangeDisInputOne({ payload: { checkedOne } }, { put }) {
      console.log(checkedOne);
      if(checkedOne == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedOne: true,
            disInputOne: false,
          },
        });
      }else if(checkedOne == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedOne: false,
            disInputOne: true,
          },
        });
      }
    },
    *onchangeDisInputTwo({ payload: { checkedTwo } }, { put }) {
      console.log(checkedTwo);
      if(checkedTwo == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedTwo: true,
            disInputTwo: false,
          },
        });
      }else if(checkedTwo == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedTwo: false,
            disInputTwo: true,
          },
        });
      }
    },
    *onchangeDisInputThree({ payload: { checkedThree } }, { put }) {
      console.log(checkedThree);
      if(checkedThree == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedThree: true,
            disInputThree: false,
          },
        });
      }else if(checkedThree == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedThree: false,
            disInputThree: true,
          },
        });
      }
    },
    *onchangeDisInputFour({ payload: { checkedFour } }, { put }) {
      console.log(checkedFour);
      if(checkedFour == false){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedFour: true,
            disInputFour: false,
          },
        });
      }else if(checkedFour == true){
        yield put({
          type: 'stateWillUpdate',
          payload: {
            checkedFour: false,
            disInputFour: true,
          },
        });
      }
    },
  },
  subscriptions: {
  },
};
