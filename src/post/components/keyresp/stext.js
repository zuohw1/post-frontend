import React from 'react';
import { Input, Popconfirm } from 'antd';

class SText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.record.ssPostName,
    };
  }

  handleReSet = (form) => {
    this.setState({ value: '' });
    form.setFieldsValue({
      ssPostName: '',
    });
    console.log(form.getFieldsValue());
  }

  render() {
    const { value } = this.state;
    const { form } = this.props;
    return (
      <div>
        <Input value={value} style={{ width: 160 }} />
        &nbsp;&nbsp;
        <Popconfirm title="是否重置?" onConfirm={() => this.handleReSet(form)}>
          <a href="jacascript:void(0);">重置</a>
        </Popconfirm>
        &nbsp;&nbsp;
        <a href="jacascript:void(0);" onClick={this.handleRespParentSelect}>请选择</a>
      </div>
    );
  }
}
export default SText;
