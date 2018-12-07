import React from 'react';
import {
  Table, Input, Button, Form, Popconfirm, Col, Row,
} from 'antd';

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
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={(node) => { (this.cell = node); }} {...restProps}>
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
                        ref={(node) => { (this.input = node); }}
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

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  actions,
  // dataSource,
  // count,
  clickRespId,
  clickRespCode,
  clickRespType,
  listTitles,
  dataSourceAll,
  countAll,
  dataSourceGwxl,
  countGwxl,
  dataSourceZxl,
  countZxl,
  dataSourceZy,
  countZy,
  dataSourceZz,
  countZz,
  dataSourceZzz,
  countZzz,

}) => {
  const {
    setClickRespIdCode,
    // setListDataSource,
    // setListCount,
    setListDataSourceAll,
    setListDataSourceGwxl,
    setListDataSourceZxl,
    setListDataSourceZy,
    setListDataSourceZz,
    setListDataSourceZzz,
    setListCountAll,
    setListCountGwxl,
    setListCountZxl,
    setListCountZy,
    setListCountZz,
    setListCountZzz,
  } = actions;


  const tt = false;
  if (tt) {
    setClickRespIdCode('11', '11');
  }

  // 右侧列表title名称动态显示
  const vt = (clickRespType !== 'undefined') ? (clickRespType / 10) : 0;
  const showTitle = listTitles[vt];

  // 右侧列表根据树节点点击的职责层级确定显示的数据
  const dataSource = (vt === 0) ? dataSourceAll : (
    vt === 1 ? dataSourceGwxl : (
      vt === 2 ? dataSourceZxl : (
        vt === 3 ? dataSourceZy : (
          vt === 4 ? dataSourceZz : (
            vt === 5 ? dataSourceZzz
              : dataSourceAll)))));

  const count = (vt === 0) ? countAll : (
    vt === 1 ? countGwxl : (
      vt === 2 ? countZxl : (
        vt === 3 ? countZy : (
          vt === 4 ? countZz : (
            vt === 5 ? countZzz
              : countAll)))));

  const handleDelete = (key) => {
    console.log('handleDelete()---', key, clickRespType);
    if (vt === 0) {
      setListDataSourceAll(dataSource.filter(item => item.key !== key));
      setListCountAll(count - 1);
    } else if (vt === 1) {
      setListDataSourceGwxl(dataSource.filter(item => item.key !== key));
      setListCountGwxl(count - 1);
    } else if (vt === 2) {
      setListDataSourceZxl(dataSource.filter(item => item.key !== key));
      setListCountZxl(count - 1);
    } else if (vt === 3) {
      setListDataSourceZy(dataSource.filter(item => item.key !== key));
      setListCountZy(count - 1);
    } else if (vt === 4) {
      setListDataSourceZz(dataSource.filter(item => item.key !== key));
      setListCountZz(count - 1);
    } else if (vt === 5) {
      setListDataSourceZzz(dataSource.filter(item => item.key !== key));
      setListCountZzz(count - 1);
    } else {
      setListDataSourceAll(dataSource.filter(item => item.key !== key));
      setListCountAll(count - 1);
    }
  };

  const columnsMap = {
    columns0: [{
      title: '岗位序列',
      dataIndex: 'postName',
      width: '30%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'postCode',
      width: '30%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns1: [{
      title: '子序列',
      dataIndex: 'zxlName',
      width: '25%',
      editable: true,
    }, {
      title: '所属岗位序列',
      dataIndex: 'ssPostName',
      width: '25%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'zxlCode',
      width: '25%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns2: [{
      title: '专业',
      dataIndex: 'zyName',
      width: '25%',
      editable: true,
    }, {
      title: '所属子序列',
      dataIndex: 'ssZxlName',
      width: '25%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'zyCode',
      width: '25%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns3: [{
      title: '关键职责',
      dataIndex: 'gjzzName',
      width: '7%',
      editable: true,
    }, {
      title: '所属专业',
      dataIndex: 'ssZyName',
      width: '7%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'gjzzCode',
      width: '7%',
      editable: true,
    }, {
      title: '学历要求',
      dataIndex: 'eduEqr',
      width: '7%',
      editable: true,
    }, {
      title: '工作经验',
      dataIndex: 'workExp',
      width: '7%',
      editable: true,
    }, {
      title: '组织层级',
      dataIndex: 'orgLevel',
      width: '7%',
      editable: true,
    }, {
      title: '是否核心',
      dataIndex: 'isCore',
      width: '7%',
      editable: true,
    }, {
      title: '标准职级',
      dataIndex: 'standardZj',
      width: '7%',
      editable: true,
    }, {
      title: '集团职级',
      dataIndex: 'groupZj',
      width: '7%',
      editable: true,
    }, {
      title: '省职级',
      dataIndex: 'provZj',
      width: '7%',
      editable: true,
    }, {
      title: '地市职级',
      dataIndex: 'dsZj',
      width: '7%',
      editable: true,
    }, {
      title: '区县职级',
      dataIndex: 'qxZj',
      width: '7%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns4: [{
      title: '子职责',
      dataIndex: 'zzzName',
      width: '25%',
      editable: true,
    }, {
      title: '所属关键职责',
      dataIndex: 'ssGjzzName',
      width: '25%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'zzzCode',
      width: '25%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns5: [{
      title: '子职责',
      dataIndex: 'zzzName',
      width: '25%',
      editable: true,
    }, {
      title: '所属关键职责',
      dataIndex: 'ssGjzzName',
      width: '25%',
      editable: true,
    }, {
      title: '编码',
      dataIndex: 'zzzCode',
      width: '25%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
  };

  // 右侧列表根据树节点点击的职责层级确定显示的字段集
  const columnsN = (vt === 0) ? columnsMap.columns0 : (
    vt === 1 ? columnsMap.columns1 : (
      vt === 2 ? columnsMap.columns2 : (
        vt === 3 ? columnsMap.columns3 : (
          vt === 4 ? columnsMap.columns4 : (
            vt === 5 ? columnsMap.columns5
              : columnsMap.columns0)))));


  const handleAdd = () => {
    console.log('handleAdd()待处理');
    // console.log('clickRespType', clickRespType);
    // const newData = {
    //   key: count,
    //   name: `Edward King ${count}`,
    //   age: 32,
    // };
    // setListCount(count + 1);
    // setListDataSource([...dataSource, newData]);
    // console.log('handleAdd', newData);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    // setListDataSource(newData);
  };

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };

  const columns = columnsN.map((col) => {
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
    <div style={{
      height: 530,
      border: 10,
      borderColor: 'blue',
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 10,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <p>职责层级：{showTitle} -- {clickRespType} -- {clickRespId},{clickRespCode}--count:{count}</p>
      <Row gutter={5}>
        <Col span={20}>
          <p>{showTitle}</p>
        </Col>
        <Col span={2}>
          <Button onClick={handleAdd} style={{ marginBottom: 16 }}>
            新增
          </Button>
        </Col>
        <Col span={2}>
          <Button onClick={handleSave} style={{ marginBottom: 16 }}>
            保存
          </Button>
        </Col>
      </Row>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        size="small"
      />
    </div>
  );
};
