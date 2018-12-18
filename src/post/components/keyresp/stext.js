import React from 'react';
import { Input, Modal, Popconfirm } from 'antd';
import RespSelect from './resp-select';
import Styles from '../assets/styles/key-resp-stext.less';

class SText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ssPostName: props.record.ssPostName,
      ssZxlName: props.record.ssZxlName,
      ssZyName: props.record.ssZyName,
      ssGjzzName: props.record.ssGjzzName,
      ssGjzzNameN: props.record.ssGjzzNameN,
      respSelectVisiable: false,
      clickRespName: '', // 选中职责
      clickRespId: '', // 选中职责id
    };
  }

  handleReSet = (form, dataIndex) => {
    if (dataIndex === 'ssPostName') {
      this.setState({ ssPostName: '' });
      form.setFieldsValue({
        ssPostName: '',
      });
    } else if (dataIndex === 'ssZxlName') {
      this.setState({ ssZxlName: '' });
      form.setFieldsValue({
        ssZxlName: '',
      });
    } else if (dataIndex === 'ssZyName') {
      this.setState({ ssZyName: '' });
      form.setFieldsValue({
        ssZyName: '',
      });
    } else if (dataIndex === 'ssGjzzName') {
      this.setState({ ssGjzzName: '' });
      form.setFieldsValue({
        ssGjzzName: '',
      });
    } else if (dataIndex === 'ssGjzzNameN') {
      this.setState({ ssGjzzNameN: '' });
      form.setFieldsValue({
        ssGjzzNameN: '',
      });
    }
    console.log('form.getFieldsValue()', form.getFieldsValue());
  }

  handleChange = (dataIndex, respType, e) => {
    const { form, record } = this.props;
    if (dataIndex === 'ssPostName') {
      this.setState({ ssPostName: e.target.value });
      form.setFieldsValue({
        ssPostName: e.target.value,
      });
      record.ssPostName = e.target.value;
    } else if (dataIndex === 'ssZxlName') {
      this.setState({ ssZxlName: e.target.value });
      form.setFieldsValue({
        ssZxlName: e.target.value,
      });
      record.ssZxlName = e.target.value;
    } else if (dataIndex === 'ssZyName') {
      this.setState({ ssZyName: e.target.value });
      form.setFieldsValue({
        ssZyName: e.target.value,
      });
      record.ssZyName = e.target.value;
    } else if (dataIndex === 'ssGjzzName') {
      this.setState({ ssGjzzName: e.target.value });
      form.setFieldsValue({
        ssGjzzName: e.target.value,
      });
      record.ssGjzzName = e.target.value;
    } else if (dataIndex === 'ssGjzzNameN') {
      this.setState({ ssGjzzNameN: e.target.value });
      form.setFieldsValue({
        ssGjzzNameN: e.target.value,
      });
      record.ssGjzzNameN = e.target.value;
    }
  }

  showRespParentSelect = () => {
    this.setState({
      respSelectVisiable: true,
    });
  }

  /* 将选择的值放回 */
  handleRespSelect = (recordSel) => {
    const { respType } = this.props; // ,form, record
    return {
      onClick: () => {
        let clickRespNameVal = '';
        if (respType === 10) {
          clickRespNameVal = recordSel.gwxlName;
        } else if (respType === 20) {
          clickRespNameVal = recordSel.zxlName;
        } else if (respType === 30) {
          clickRespNameVal = recordSel.zyName;
        } else if (respType === 40) {
          clickRespNameVal = recordSel.gjzzName;
        } else if (respType === 50) {
          clickRespNameVal = recordSel.gjzzName;
        }
        this.setState({ clickRespName: clickRespNameVal, clickRespId: recordSel.key });
      },
    };
  };

  handleOk = () => {
    const { respType, form, record } = this.props;
    const { clickRespName } = this.state;

    if (respType === 10) {
      this.setState({ ssPostName: clickRespName });
      form.setFieldsValue({
        ssPostName: clickRespName,
      });
      record.ssPostName = clickRespName;
    } else if (respType === 20) {
      this.setState({ ssZxlName: clickRespName });
      form.setFieldsValue({
        ssZxlName: clickRespName,
      });
      record.ssZxlName = clickRespName;
    } else if (respType === 30) {
      this.setState({ ssZyName: clickRespName });
      form.setFieldsValue({
        ssZyName: clickRespName,
      });
      record.ssZyName = clickRespName;
    } else if (respType === 40) {
      this.setState({ ssGjzzName: clickRespName });
      form.setFieldsValue({
        ssGjzzName: clickRespName,
      });
      record.ssGjzzName = clickRespName;
    } else if (respType === 50) {
      this.setState({ ssGjzzNameN: clickRespName });
      form.setFieldsValue({
        ssGjzzNameN: clickRespName,
      });
      record.ssGjzzNameN = clickRespName;
    }
    this.setState({
      respSelectVisiable: false,
    });
  };

  handleCancel = () => {
    this.setState({
      respSelectVisiable: false,
    });
  };

  setRespRowClassName = (record) => {
    const { clickRespId } = this.state;
    return record.key === clickRespId ? Styles.clickRowStyl : '';
  }

  render() {
    const {
      ssPostName, ssZxlName, ssZyName, ssGjzzName, ssGjzzNameN, respSelectVisiable,
    } = this.state;
    const {
      form, respType, dataIndex, // record,
    } = this.props;
    // console.log('record', record);

    let ssValue = '';
    let respSelectDivName = '';
    if (dataIndex === 'ssPostName') {
      ssValue = ssPostName;
      respSelectDivName = '岗位序列';
    } else if (dataIndex === 'ssZxlName') {
      ssValue = ssZxlName;
      respSelectDivName = '子序列';
    } else if (dataIndex === 'ssZyName') {
      ssValue = ssZyName;
      respSelectDivName = '专业';
    } else if (dataIndex === 'ssGjzzName') {
      ssValue = ssGjzzName;
      respSelectDivName = '关键职责';
    } else if (dataIndex === 'ssGjzzNameN') {
      ssValue = ssGjzzNameN;
      respSelectDivName = '关键职责';
    }
    // console.log('ssValue', ssValue); // 不能直接用 record[dataIndex] 的值，因为修改没有更新节点的state，这样重置之后不会变

    return (
      <div>
        <Input
          value={ssValue}
          style={{ width: 160 }}
          onChange={this.handleChange.bind(this, dataIndex, respType)}
        />
        &nbsp;&nbsp;
        <Popconfirm title="是否重置?" onConfirm={() => this.handleReSet(form, dataIndex)}>
          <a href="jacascript:void(0);">重置</a>
        </Popconfirm>
        &nbsp;&nbsp;
        <a href="jacascript:void(0);" onClick={this.showRespParentSelect}>请选择</a>
        <Modal
          title={respSelectDivName}
          visible={respSelectVisiable}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 400 }}>
            <RespSelect
              respType={respType}
              respSelectDivName={respSelectDivName}
              handleRespSelect={this.handleRespSelect}
              setRespRowClassName={this.setRespRowClassName}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export default SText;
