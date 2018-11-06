import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import { Form } from 'antd';
import Index from '../components/groupposstandardlist/index';
import * as actions from '../actions/groupposstandardlist';

/* 建立组件跟 store 的 state 的映射关系 */
const mapStateToProps = state => ({
  ...state.groupPosStandardList,
  loading: state.loading.models.groupPosStandardList,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  /* 直接将action包装成可以被调用的函数 */
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
