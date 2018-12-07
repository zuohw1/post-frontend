import React from 'react';
import {
  Table, Input, Button, Form, Popconfirm, Col, Row, InputNumber, DatePicker, Select,
} from 'antd';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';

const FormItem = Form.Item;
const EditableContext = React.createContext();
const { Option } = Select;

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const apply = (item) => {
  return (<Option value={item.id} key={item.id}> {item.title} </Option>);
};

const handleonchangeckbx = () => {
};

class EditableCell extends React.Component {
  getInput = (p) => {
    if (p.props.inputType === 'number') {
      return <InputNumber />;
    } else if (p.props.inputType === 'date') {
      return (
        <DatePicker />
      );
    } else if (p.props.inputType === 'select') {
      return (
        <Select style={{ width: 70 }} placeholder="请选择" allowClear>
          {
            p.props.list.map(apply)
          }
        </Select>);
    } else if (p.props.inputType === 'checkbox') {
      return (
        <CheckboxGroup options={p.props.list} onChange={handleonchangeckbx} />
      );
    }
    return <Input />;
  };

  // save = () => {
  //   const { record, handleSave } = this.props;
  //   this.form.validateFields((error, values) => {
  //     if (error) {
  //       return;
  //     }
  //     this.toggleEdit();
  //     handleSave({ ...record, ...values });
  //   });
  // }
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `请维护【${title}】!`,
                    }],
                    initialValue:
                      inputType === 'checkbox' ? record[`${dataIndex}_VAL`] : record[dataIndex],
                  })(
                    this.getInput(this),
                  )}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
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
    // console.log('handleAdd()--clickRespType：', clickRespType, vt, count, countAll);
    let newData = {};
    if (vt === 0) {
      newData = {
        key: countAll,
        postName: '',
        postCode: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    } else if (vt === 1) {
      newData = {
        key: countGwxl,
        zxlName: '',
        ssPostName: '',
        zxlCode: '',
      };
      setListCountGwxl(countGwxl + 1);
      setListDataSourceGwxl([...dataSource, newData]);
    } else if (vt === 2) {
      newData = {
        key: countZxl,
        zyName: '',
        ssZxlName: '',
        zyCode: '',
      };
      setListCountZxl(countZxl + 1);
      setListDataSourceZxl([...dataSource, newData]);
    } else if (vt === 3) {
      newData = {
        key: countZy,
        gjzzName: '',
        ssZyName: '',
        gjzzCode: '',
        eduEqr: '',
        workExp: '',
        orgLevel: '',
        isCore: '',
        standardZj: '',
        groupZj: '',
        provZj: '',
        dsZj: '',
        qxZj: '',
      };
      setListCountZy(countZy + 1);
      setListDataSourceZy([...dataSource, newData]);
    } else if (vt === 4) {
      newData = {
        key: countZz,
        zzzName: '',
        ssGjzzName: '',
        zzzCode: '',
      };
      setListCountZz(countZz + 1);
      setListDataSourceZz([...dataSource, newData]);
    } else if (vt === 5) {
      newData = {
        key: countZzz,
        zzzName: '',
        ssGjzzName: '',
        zzzCode: '',
      };
      setListCountZzz(countZzz + 1);
      setListDataSourceZzz([...dataSource, newData]);
    } else {
      newData = {
        key: countAll,
        postName: '',
        postCode: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    }
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

  const isEditing = (record) => {
    console.log(record);
    return true;
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
        inputType: col.itemType === 'Date' ? 'date' : (col.itemType === 'Select' ? 'select' : (col.itemType === 'Checkbox' ? 'checkbox' : 'text')),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: col.editable === true ? isEditing(record) : false,
        list: (col.itemType === 'Select' || col.itemType === 'Checkbox') ? col.list : [],
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
