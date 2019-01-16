import React from 'react';
import {
  Table, Button, Form, Popconfirm, Col, Row, Select, Input, InputNumber, DatePicker,
  message, // Icon,
} from 'antd';
import CheckboxGroup from '../../../../node_modules/antd/es/checkbox/Group';
import SText from './stext';

const FormItem = Form.Item;
const EditableContext = React.createContext();
const { Option } = Select;
// const initFlag = 0;

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


/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default (state) => {
  const {
    actions,
    clickRespId,
    clickRespCode,
    clickRespName,
    clickRespType,
    clickRespParentKey,
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
    // countZzz,
    respDataSaveFlag,
    respDataDelFlag,
  } = state;
  const {
    setListDataSourceAll,
    setListDataSourceGwxl,
    setListDataSourceZxl,
    setListDataSourceZy,
    setListDataSourceZz,
    // setListDataSourceZzz,
    setListCountAll,
    setListCountGwxl,
    setListCountZxl,
    setListCountZy,
    setListCountZz,
    // setListCountZzz,
    respDataSave,
    respDatDelete,
    getDataSource,
    setRespDataDelFlag,
    setRespDataSaveFlag,
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

  if (respDataDelFlag === '1') {
    message.warning('该关键职责已经分配给员工，请先取消分配再进行删除！');
    setRespDataDelFlag('');
  } else if (respDataDelFlag === '2') {
    message.success('该关键职责已删除！1');
    setRespDataDelFlag('-1');
    getDataSource(0, '');
  }
  if (respDataSaveFlag === 'Y') {
    message.success('保存成功！');
    setRespDataSaveFlag('');
    getDataSource(0, '');
  } else if (respDataSaveFlag === 'N') {
    message.error('保存失败，请稍后再试！');
    setRespDataSaveFlag('');
  }

  const handleDelete = (key) => {
    respDatDelete(key);
  };

  const columnsMap = {
    columns0: [{
      title: '岗位序列',
      dataIndex: 'posCateName_one',
      width: '30%',
      editable: true,
      itemType: 'Text',
    }, {
      title: '编码',
      dataIndex: 'elementCode',
      width: '30%',
      editable: true,
      itemType: 'Text',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns1: [{
      title: '子序列',
      dataIndex: 'posCateName_two',
      width: '25%',
      editable: true,
      itemType: 'Text',
    }, {
      title: '所属岗位序列',
      dataIndex: 'parentName_two',
      width: '35%',
      editable: true,
      itemType: 'ssText',
      respType: 10,
    }, {
      title: '编码',
      dataIndex: 'elementCode',
      width: '25%',
      editable: true,
      itemType: 'Text',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns2: [{
      title: '专业',
      dataIndex: 'posCateName_three',
      width: '25%',
      editable: true,
    }, {
      title: '所属子序列',
      dataIndex: 'parentName_three',
      width: '35%',
      editable: true,
      itemType: 'ssText',
      respType: 20,
    }, {
      title: '编码',
      dataIndex: 'elementCode',
      width: '15%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns3: [{
      title: '关键职责',
      dataIndex: 'posCateName_four',
      width: '7%',
      editable: true,
    }, {
      title: '所属专业',
      dataIndex: 'parentName_four',
      width: '12%',
      editable: true,
      itemType: 'ssText',
      respType: 30,
    }, {
      title: '编码',
      dataIndex: 'elementCode',
      width: '2%',
      editable: true,
    }, {
      title: '学历要求',
      dataIndex: 'attribute2_four',
      width: '7%',
      editable: true,
    }, {
      title: '工作经验',
      dataIndex: 'attribute3_four',
      width: '7%',
      editable: true,
    }, {
      title: '组织层级',
      dataIndex: 'attribute11_four',
      width: '100',
      editable: true,
      itemType: 'Checkbox',
      list: [{ label: '集团', value: 'J' }, { label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '县', value: 'X' }],
    }, {
      title: '是否核心',
      dataIndex: 'attribute4_four',
      width: '100',
      editable: true,
      itemType: 'Select',
      list: [{ id: '是', title: '是' }, { id: '否', title: '否' }],
    }, {
      title: '标准职级',
      dataIndex: 'attribute5_four',
      width: '7%',
      editable: true,
      itemType: 'Select',
      list: [{ id: '1', title: '1' }, { id: '2', title: '2' }, { id: '3', title: '3' }, { id: '4', title: '4' }, { id: '5', title: '5' }, { id: '6', title: '6' },
        { id: '7', title: '7' }, { id: '8', title: '8' }, { id: '9', title: '9' }, { id: '10', title: '10' }, { id: '11', title: '12' }, { id: '13', title: '13' },
        { id: '14', title: '14' }, { id: '15', title: '15' }, { id: '16', title: '16' }, { id: '17', title: '17' }, { id: '18', title: '18' },
        { id: '19', title: '19' }, { id: '20', title: '20' }, { id: '21', title: '21' }, { id: '22', title: '22' }],
    }, {
      title: '集团职级',
      dataIndex: 'attribute6_four',
      width: '7%',
      editable: true,
      itemType: 'Select',
      list: [{ id: '1', title: '1' }, { id: '2', title: '2' }, { id: '3', title: '3' }, { id: '4', title: '4' }, { id: '5', title: '5' }, { id: '6', title: '6' },
        { id: '7', title: '7' }, { id: '8', title: '8' }, { id: '9', title: '9' }, { id: '10', title: '10' }, { id: '11', title: '12' }, { id: '13', title: '13' },
        { id: '14', title: '14' }, { id: '15', title: '15' }, { id: '16', title: '16' }, { id: '17', title: '17' }, { id: '18', title: '18' },
        { id: '19', title: '19' }, { id: '20', title: '20' }, { id: '21', title: '21' }, { id: '22', title: '22' }],
    }, {
      title: '省职级',
      dataIndex: 'attribute7_four',
      width: '7%',
      editable: true,
      itemType: 'Select',
      list: [{ id: '1', title: '1' }, { id: '2', title: '2' }, { id: '3', title: '3' }, { id: '4', title: '4' }, { id: '5', title: '5' }, { id: '6', title: '6' },
        { id: '7', title: '7' }, { id: '8', title: '8' }, { id: '9', title: '9' }, { id: '10', title: '10' }, { id: '11', title: '12' }, { id: '13', title: '13' },
        { id: '14', title: '14' }, { id: '15', title: '15' }, { id: '16', title: '16' }, { id: '17', title: '17' }, { id: '18', title: '18' },
        { id: '19', title: '19' }, { id: '20', title: '20' }, { id: '21', title: '21' }, { id: '22', title: '22' }],
    }, {
      title: '地市职级',
      dataIndex: 'attribute8_four',
      width: '7%',
      editable: true,
      itemType: 'Select',
      list: [{ id: '1', title: '1' }, { id: '2', title: '2' }, { id: '3', title: '3' }, { id: '4', title: '4' }, { id: '5', title: '5' }, { id: '6', title: '6' },
        { id: '7', title: '7' }, { id: '8', title: '8' }, { id: '9', title: '9' }, { id: '10', title: '10' }, { id: '11', title: '12' }, { id: '13', title: '13' },
        { id: '14', title: '14' }, { id: '15', title: '15' }, { id: '16', title: '16' }, { id: '17', title: '17' }, { id: '18', title: '18' },
        { id: '19', title: '19' }, { id: '20', title: '20' }, { id: '21', title: '21' }, { id: '22', title: '22' }],
    }, {
      title: '区县职级',
      dataIndex: 'attribute9_four',
      width: '7%',
      editable: true,
      itemType: 'Select',
      list: [{ id: '1', title: '1' }, { id: '2', title: '2' }, { id: '3', title: '3' }, { id: '4', title: '4' }, { id: '5', title: '5' }, { id: '6', title: '6' },
        { id: '7', title: '7' }, { id: '8', title: '8' }, { id: '9', title: '9' }, { id: '10', title: '10' }, { id: '11', title: '12' }, { id: '13', title: '13' },
        { id: '14', title: '14' }, { id: '15', title: '15' }, { id: '16', title: '16' }, { id: '17', title: '17' }, { id: '18', title: '18' },
        { id: '19', title: '19' }, { id: '20', title: '20' }, { id: '21', title: '21' }, { id: '22', title: '22' }],
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns4: [{
      title: '子职责',
      dataIndex: 'posCateName_five',
      width: '35%',
      editable: true,
    }, {
      title: '所属关键职责',
      dataIndex: 'parentName_five',
      width: '35%',
      editable: true,
      itemType: 'ssText',
      respType: 40,
    }, {
      title: '编码',
      dataIndex: 'elementCode', // attribute11
      width: '15%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
                <a href="jacascript:void(0);">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }],
    columns5: [{
      title: '子职责',
      dataIndex: 'posCateName_five',
      width: '35%',
      editable: true,
    }, {
      title: '所属关键职责',
      dataIndex: 'parentName_five',
      width: '35%',
      editable: true,
      itemType: 'ssText',
      respType: 50,
    }, {
      title: '编码',
      dataIndex: 'elementCode', // attribute11
      width: '15%',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          dataSource.length >= 1
            ? (
              <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(record.posCateId)}>
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
    console.log('clickRespName, clickRespCode, clickRespId:', clickRespName, clickRespCode, clickRespId, clickRespParentKey);
    console.log('countAll,countGwxl, countZxl, countZy, countZz', countAll, countGwxl, countZxl, countZy, countZz);
    let newData = {};
    if (vt === 0) {
      newData = {
        key: clickRespParentKey + countAll,
        posCateId: '-9999',
        type: '10',
        posCateName_one: '',
        elementCode: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    } else if (vt === 1) {
      newData = {
        key: clickRespParentKey + countGwxl,
        posCateId: '-9999',
        type: '20',
        posCateName_two: '',
        parentId: clickRespId,
        parentName_two: clickRespName,
        elementCode: '',
      };
      setListCountGwxl(countGwxl + 1);
      setListDataSourceGwxl([...dataSource, newData]);
    } else if (vt === 2) {
      newData = {
        key: clickRespParentKey + countZxl,
        posCateId: '-9999',
        type: '30',
        posCateName_three: '',
        parentId: clickRespId,
        parentName_three: clickRespName,
        elementCode: '',
      };
      setListCountZxl(countZxl + 1);
      setListDataSourceZxl([...dataSource, newData]);
    } else if (vt === 3) {
      newData = {
        key: clickRespParentKey + countZy,
        posCateId: '-9999',
        type: '40',
        posCateName_four: '',
        parentId: clickRespId,
        parentName_four: clickRespName,
        elementCode: '',
        attribute2_four: '',
        attribute3_four: '',
        attribute11_four: '',
        attribute4_four: '',
        attribute5_four: '',
        attribute6_four: '',
        attribute7_four: '',
        attribute8_four: '',
        attribute9_four: '',
        // attribute10_four: '',
      };
      setListCountZy(countZy + 1);
      setListDataSourceZy([...dataSource, newData]);
    } else if (vt === 4) {
      newData = {
        key: clickRespParentKey + countZz,
        posCateId: '-9999',
        type: '50',
        posCateName_five: '',
        parentId: clickRespId,
        parentName_five: clickRespName,
        elementCode: '',
      };
      setListCountZz(countZz + 1);
      setListDataSourceZz([...dataSource, newData]);
    } else {
      newData = {
        key: clickRespParentKey + countAll,
        posCateId: '-9999',
        type: '10',
        posCateName_one: '',
        elementCode: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    }
  };

  const handleSave = () => {
    const typeValue = Number((clickRespType !== 'undefined') ? clickRespType : 0) + 10;
    const newData = [...dataSource];
    const dataSave = {
      dataInfos: newData,
      type: typeValue,
      versionId: 1,
    };
    respDataSave(dataSave);
    // console.log('handleSave()', row, newData, clickRespType, dataSave, typeValue);
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
        inputType: col.itemType === 'Date' ? 'date' : (col.itemType === 'Select' ? 'select' : (col.itemType === 'Checkbox' ? 'checkbox' : (col.itemType === 'ssText' ? 'ssText' : 'text'))),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: col.editable,
        list: (col.itemType === 'Select' || col.itemType === 'Checkbox') ? col.list : [],
        // handleSave: this.handleSave,
        respType: col.respType,
        state,
        actions,
      }),
    };
  });

  // 职责层级：{showTitle} -- {clickRespType} -- {clickRespId},{clickRespCode}--count:{count}
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
      <div>
        <Row gutter={5}>
          <Col span={20}>
            <p>{showTitle}</p>
          </Col>
          <Col span={2}>
            {clickRespType === '50'
              ? ''
              : (
                <Button onClick={handleAdd} style={{ marginBottom: 16 }}>
              新增
                </Button>
              )
          }
          </Col>
          <Col span={2}>
            <Button onClick={handleSave} style={{ marginBottom: 16 }}>
            保存
            </Button>
          </Col>
        </Row>
      </div>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        state={state}
        size="small"
        pagination={false}
      />
    </div>
  );
};


class EditableCell extends React.Component {
  getInput = (p, form) => {
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
        <CheckboxGroup
          options={p.props.list}
          onChange={handleonchangeckbx}
          style={{ width: 240 }}
        />
      );
    } else if (p.props.inputType === 'ssText') {
      return (
        <SText {...p.props} form={form} />
      );
    }

    let inputWidth = 160;
    if (p.props.dataIndex === 'posCateName_five') {
      inputWidth = 260;
    }
    return (
      <Input
        style={{ width: inputWidth }}
        onChange={this.handleInputChange.bind(this, p.props.dataIndex)}
      />
    );
  };

  handleInputChange = (dataIndex, e) => {
    const { record } = this.props;
    record[dataIndex] = e.target.value;
  }

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
                      inputType === 'checkbox' ? record[`${dataIndex}_val`] : record[dataIndex],
                  })(
                    this.getInput(this, form),
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
