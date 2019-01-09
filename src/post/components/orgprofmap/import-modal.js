import React from 'react';
import {
  Form, Upload, Icon, Button,
} from 'antd';


const ImportModal = ({ form, actions, fileArr }) => {
  const { setFileArr } = actions;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (e.fileList.length > 1) {
      return e.fileList[0];
    }
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      if (!err) {
        if (typeof values.upload === 'undefined') {
          console.log('Received values of form: ', values);
        }
      }
    });
  };
  const handleRemove = () => {
    setFileArr([]);
  };
  const beforeUpload = (file) => {
    if (fileArr.length >= 1) {
      return false;
    }
    const newFileArr = [...fileArr];
    newFileArr.push(file);
    setFileArr(newFileArr);
  };
  return (
    <Form
      className="importForm"
      onSubmit={handleSubmit}
    >
      <Form.Item
        {...formItemLayout}
        label="上传文件"
        extra={fileArr.length > 0 ? '已添加附件（最多上传一个附件）' : '当前没有添加附件（最多上传一个附件）'}
      >
        {getFieldDecorator('upload', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          rules: [
            { required: true, message: '上传附件数量不能小于1' },
          ],
        })(
          <Upload
            beforeUpload={beforeUpload}
            onRemove={handleRemove}
            accept=".xls"
            name="logo"
            action="/upload.do"
            listType="picture"
          >
            <Button>
              <Icon type="upload" /> 添加文件
            </Button>
          </Upload>,
        )}
      </Form.Item>
      <p className="p" style={{ color: '#F00', marginLeft: 38 }}>注：上传文件为xls格式</p>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">上传</Button>
      </Form.Item>
    </Form>
  );
};

const WrappedImportModal = Form.create()(ImportModal);
export default WrappedImportModal;
