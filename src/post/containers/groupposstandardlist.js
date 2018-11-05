import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import { Form } from 'antd';
import Index from '../components/groupposstandardlist/index';
import * as actions from '../actions/groupposstandardlist';

const mapStateToProps = state => ({
  ...state.groupPosStandardList,
  loading: state.loading.models.groupPosStandardList,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
