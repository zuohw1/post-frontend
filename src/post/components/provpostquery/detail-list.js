/* eslint-disable no-unused-vars,react/destructuring-assignment,no-useless-constructor,react/jsx-indent,max-len,no-trailing-spaces,spaced-comment,lines-between-class-members,no-undef */
import React from 'react';
import {
  Form, Col, Row, Input, Select, Checkbox, Table, DatePicker,
} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;

export default ({
  record,
  form,
  formEdit,
  loading,
}) => {
  const { getFieldDecorator } = form;

  const columns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: '10%',
  }, {
    title: '主要岗位职责',
    dataIndex: 'kstr',
    key: 'kstr',
    width: '90%',
  }];
  return (
    <div>
      <Form>
        <Row gutter={24}>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem
              label="岗位名称"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('posName', {
                initialValue: record.posName ? record.posName : '',
                rules: [{ required: true, whitespace: true, message: '请输入名称' }],
              })(
                <Input disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem
              label="所属子序列"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('sname', {
                initialValue: record.sname ? record.sname : '',
                rules: [{ required: true, whitespace: true, message: '请输入名称' }],
              })(
                <Input disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem
              label="是否核心"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('coreFlag', {
                initialValue: record.coreFlag ? record.coreFlag : '',
                rules: [{ required: true, whitespace: true, message: '请输入名称' }],
              })(
                <Select disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem
              label="学历要求"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('educationDegree', {
                initialValue: record.educationDegree ? record.educationDegree : '',
                rules: [{ required: true, whitespace: true, message: '请输入名称' }],
              })(
                <Select disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem
              label="组织层级"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('levelCode', {
                initialValue: record.levelCode ? record.levelCode : 'S',
                rules: [{ required: true, whitespace: true, message: '请输入名称' }],
              })(
                <Checkbox.Group>
                  <Checkbox disabled={!formEdit} value="S">省</Checkbox>
                  <Checkbox disabled={!formEdit} value="D">市</Checkbox>
                  <Checkbox disabled={!formEdit} value="X">区/县</Checkbox>
                </Checkbox.Group>,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem label="有效开始日期" labelCol={{ span: 8 }}>
              {getFieldDecorator('activeStartDate', {
                initialValue: record.activeStartDatePage ? moment(record.activeStartDatePage, 'YYYY/MM/DD') : moment(),
              })(
                <DatePicker disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ display: 'block' }}>
            <FormItem label="有效结束日期" labelCol={{ span: 8 }}>
              {getFieldDecorator('activeEndDate', {
                initialValue: record.activeEndDatePage ? moment(record.activeEndDatePage, 'YYYY/MM/DD') : '',
              })(
                <DatePicker disabled={!formEdit} style={{ width: 220, marginLeft: 5, marginRight: 20 }} />,
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} loading={loading} bordered dataSource={record.attachData} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} style={{ marginTop: 10 }} />
    </div>
  );
};
