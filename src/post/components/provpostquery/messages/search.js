import React, {Component} from 'react';
import {
  Form, Col,Input,Row,Checkbox,Modal,
} from 'antd';
import MainTable from './maintable'
class Search extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <div  onClick={this.showModal} style={{color:'red',cursor:'pointer'}}>
        详细信息
      </div>
        <Modal
          title="基本信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={1260}
          centered={true}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="岗位名称">
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="所属子序列">
                  <Input type="text"/>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="组织层级">
                  <span>
                      <Checkbox>集团</Checkbox>
                      <Checkbox>省</Checkbox>
                      <Checkbox>市</Checkbox>
                      <Checkbox>区/县</Checkbox>
                  </span>
                </Form.Item>

              </Col>
              <Col span={6}>
                <Form.Item label="是否核心">
                  <Input type="text"/>
                </Form.Item>

              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item label="学历要求">
                  <Input type="text"/>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="有效开始日期">
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="有效结束日期">
                  <Input type="text"/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <MainTable></MainTable>
        </Modal>
      </div>
    );
  }
}
const  App= Form.create()(Search);
export default App;
