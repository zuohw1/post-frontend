import React from 'react';
import {
  Button, Row, Col,
} from 'antd';

class ImportTable extends React.Component {
  render() {
    // noinspection JSAnnotator
    const handleDownload = () => {

    };
    const handleAdd = () => {

    };
    return (
      <div>
        <Row gutter={5}>
          <Col span={24} style={{ marginBottom: 10 }}>
            <span>下载文件：</span>
            <Button htmlType="button" type="primary" onClick={handleDownload}>导出模板</Button>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={10} style={{ marginBottom: 10 }}>
            <span>上传文件：</span>
            <Button htmlType="button" type="primary" onClick={handleAdd}>添加附件</Button>
          </Col>
          <Col span={14}>
            <span>当前没有添加附件（最多上传一个附件）</span>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <span style={{ color: 'red' }}>注：上传文件为xls格式</span>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24} style={{ marginTop: '30px' }}>
            <Button htmlType="button" type="primary" style={{ marginBottom: '50px' }} icon="upload">上传</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ImportTable;
