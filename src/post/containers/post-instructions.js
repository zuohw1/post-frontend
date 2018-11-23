import { connect } from 'dva';
import { Form } from 'antd';
import { bindActionCreators } from 'redux';
import Index from '../components/postinstructions/index';
import * as actions from '../actions/post-instructions';

const mapStateToProps = state => ({
  ...state.postInstructions,
  loading: state.loading.models.postInstructions,
});

const WrappedApp = Form.create()(Index);

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch),
}))(WrappedApp);
