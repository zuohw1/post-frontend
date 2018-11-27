import React from 'react';
import {
  Table, Input, Popconfirm, Form, Row, Col, Button,
} from 'antd';
import PropTypes from 'prop-types';
import Styles from '../../asset/styles/upd-post-list.less';

// 基准岗位维护-列表

/* eslint-disable no-return-assign,
react/no-multi-comp,
react/destructuring-assignment,
react/no-access-state-in-setstate */

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  componentDidMount() {
    const { editable } = this.props;
    if (editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    const { editable } = this.props;
    if (editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const { editing } = !this.state;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  handleClickOutside = (e) => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  }

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      // index,
      // handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                      />,
                    )}
                  </FormItem>
                ) : (
                  <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

class UpdPostList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '子职责',
      dataIndex: 'subposname',
      width: '90%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length >= 1
            ? (
              <Popconfirm title="是否删除?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="jacascript:void(0);"><p style={{ color: 'red' }}>×</p></a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {
      dataSource: this.props.listDataSource,
    };
  }

  handleDelete = (key) => {
    const { handleListDelete } = this.props;
    handleListDelete(key);
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  setRowClassName = (record, index) => {
    const { groupPostCount } = this.props;
    return (index < groupPostCount ? Styles.csbsTypes : '');
    // return (index < groupPostCount ? csbsTypes : '');
  }

  render() {
    const { listDataSource } = this.props;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div>
        <div>
          <Row gutter={5}>
            <Col span={16}>
              <p>岗位职责列表</p>
            </Col>
            <Col span={5}>
              <p>匹配率：100%</p>
            </Col>
            <Col span={3}>
              <Button onClick={this.handleSave}>保存</Button>
            </Col>
          </Row>

        </div>
        <div style={{
          height: 480, border: 10, borderColor: 'blue', overflowY: 'scroll', overflowX: 'scroll',
        }}
        >
          <Table
            components={components}
            rowClassName={this.setRowClassName}
            bordered
            dataSource={listDataSource}
            columns={columns}
            size="small"
            scroll="undefined"
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

UpdPostList.propTypes = {
  listDataSource: PropTypes.array.isRequired,
  handleListDelete: PropTypes.func.isRequired,
  groupPostCount: PropTypes.number.isRequired,
};

export default UpdPostList;
