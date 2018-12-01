import React from 'react';
import {
  Table,
  Button,
  Pagination,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  notification,
} from 'antd';
import moment from 'moment';
import PosDuty from './postduty/index';
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
const dateFormat = 'YYYY-MM-DD';

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
                      inputType === 'date' ? moment(record[dataIndex], dateFormat) : (inputType === 'checkbox' ? record[`${dataIndex}_VAL`] : record[dataIndex]),
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

export default ({
  tableData,
  actions,
  search,
  loading,
  editingKey,
  editingExpands,
}) => {
  const {
    listTable,
    setTableData,
    setEditingKey,
    redirectDetail,
    setEditingExpands,
  } = actions;
  const data = tableData.records;

  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const handleExportLocalPos = () => {
  };

  const handleExportProvPos = () => {
  };

  const handleSave = () => {

  };

  const handleViewLocalPos = () => {
    redirectDetail('/post/provPostQuery', { name: 'main-table' });
  };

  const handleImportLocalPos = () => {
  };

  const openNotificationWithIcon = (type, content) => {
    notification[type]({
      message: '温馨提示',
      description: content,
    });
  };

  const handleTableData = (dataClick, posKey) => {
    const dataExpandsBk = [...editingExpands];
    if (dataExpandsBk === undefined || dataExpandsBk.indexOf(posKey) < 0) {
      const notftype = 'warning';
      const notfcontent = '请先展开本地网基准岗位列表！';
      openNotificationWithIcon(notftype, notfcontent);
      return;
    }

    const eEditingKey = [];// 可编辑子记录
    const dataNew = [];
    const databk = [...data];
    const databk2 = [...data];

    for (let t = 0; t < data.length; t += 1) {
      if (databk[t].key === posKey) {
        databk2[t].children.map(cchild => eEditingKey.push(cchild.key.toString()));// 原子记录
        eEditingKey.push(`new-${databk[t].key}-${databk2[t].children.length}`);// 新增子记录

        let chidNew = databk2[t];
        chidNew = { ...chidNew, key: `new-${databk[t].key}-${databk2[t].children.length}` };
        chidNew = { ...chidNew, def5: ['更改职责', '终止', '删除'] };
        chidNew = { ...chidNew, ATTRIBUTE13: '.省.市.县.' };
        chidNew = { ...chidNew, ATTRIBUTE13_VAL: ['S', 'D', 'X'] }; // 用于编辑状态下勾选默认值
        chidNew = { ...chidNew, DOC_CODE: databk[t].DOC_CODE.replace('（集团）', '') }; // 去掉拷贝的原“集团”字样
        delete chidNew.children;
        const childrenNew = arrayUtils.addItem(databk[t].children, chidNew);
        databk[t] = { ...databk[t], children: childrenNew };
        dataNew.push(databk[t]);
      } else {
        dataNew.push(databk[t]);
      }
    }
    const tableDataNew = {
      total: 0,
      size: 0,
      current: 1,
      records: dataNew,
    };
    setTableData(tableDataNew);
    setEditingKey(eEditingKey);
  };


  const handleDelete = (posKey) => {
    const dataNew = [];
    let dataDelChildren = [];
    const dataDel = [...data];
    for (let t = 0; t < data.length; t += 1) {
      dataDelChildren = dataDel[t].children.filter((item) => {
        return item.key !== posKey;
      });
      dataDel[t] = { ...dataDel[t], children: dataDelChildren };
      dataNew.push(dataDel[t]);
    }
    const tableDataNew = {
      total: 0,
      size: 0,
      current: 1,
      records: dataNew,
    };
    setTableData(tableDataNew);
  };

  const handleExpand = (expanded, record) => {
    // 原系统中只要展开过的子记录都会进行校验及修改保存处理；
    const dataExpandsBk = [...editingExpands];
    let dataExpandsNew = [];
    if (expanded) { // 点开
      dataExpandsNew = [...dataExpandsBk, record.key];
      setEditingExpands(dataExpandsNew);
    } else {
      dataExpandsNew = dataExpandsBk.filter(item => item !== record.key);
      setEditingExpands(dataExpandsNew);
    }
    const eEditingKey = [];// 可编辑子记录
    const databk = { ...data };
    const databk2 = { ...data };
    for (let t = 0; t < data.length; t += 1) {
      if (databk[t].key === record.key) {
        databk2[t].children.map(cchild => eEditingKey.push(cchild.key.toString()));// 原子记录
      }
    }
    setEditingKey(eEditingKey);
  };

  const arrayUtils = {
    /**
     * 在指定索引位置增加新元素，未指定index时添加到最后面
     * @param array (array)
     * @param newItem   (object)
     * @param index (int)
     * @returns {*} 返回新数组
     */
    addItem: (array, newItem, index) => {
      if (typeof index !== 'undefined') {
        return [
          ...array.slice(0, index),
          newItem,
          ...array.slice(index + 1),
        ];
      } else {
        return [
          ...array,
          newItem,
        ];
      }
    },
  };

  const { current, size, total } = tableData;

  const isEditing = (record) => {
    for (let t = 0; t < editingKey.length; t += 1) {
      if (editingKey[t] === record.key) {
        return true;
      }
    }
    return false;
  };
  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: '10%',
    itemType: 'String',
  }, {
    title: '省基准岗位名称',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width: '15%',
    editable: true,
    itemType: 'String',
  }, {
    title: '所属子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: '12.5%',
    itemType: 'String',
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
    align: 'center',
    width: '15%',
    editable: true,
    itemType: 'Checkbox',
    list: [{ label: '省', value: 'S' }, { label: '市', value: 'D' }, { label: '县', value: 'X' }],
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
    width: '10%',
    editable: true,
    itemType: 'Select',
    list: [{ id: 0, title: '是' }, { id: 1, title: '否' }],
  }, {
    title: '学历要求',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
    width: '12.5%',
    editable: true,
    itemType: 'Select',
    list: [{ id: 0, title: '博士' }, { id: 1, title: '硕士' }, { id: 2, title: '本科 ' }, { id: 3, title: '大专' }],
  }, {
    title: '开始日期',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
    width: '12.5%',
    editable: true,
    itemType: 'Data',
  }, {
    title: '基准岗位维护',
    dataIndex: 'def5',
    key: 'def5',
    align: 'center',
    width: '12.5%',
    itemType: 'String',

    render: (text, record) => (
      <span>
        {record.def5.map(
          tag => (
            <PosDuty
              posKey={record.key}
              posName={tag}
              posRecord={record}
              posBegindate={record.ATTRIBUTE10}
              handleTableData={handleTableData.bind(this)}
              handleDelete={handleDelete.bind(this)}
            />
          ),
        )}
      </span>
    ),

  }];
  function getFields() {
    const children = [];
    for (let t = 0; t < tableCols.length; t += 1) {
      children.push(tableCols[t]);
    }
    return children;
  }

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };
  const columns = getFields() === undefined ? [] : getFields().map((col) => {
    // if (!col.editable) {
    //   return col;
    // }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.itemType === 'Date' ? 'date' : (col.itemType === 'Select' ? 'select' : (col.itemType === 'Checkbox' ? 'checkbox' : 'text')),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: col.editable === true ? isEditing(record) : false,
        list: (col.itemType === 'Select' || col.itemType === 'Checkbox') ? col.list : [],
      }),
    };
  });
  return (
    <div style={{ marginTop: 10 }}>
      <Button htmlType="button" type="primary" style={{ marginLeft: '0' }} onClick={handleExportProvPos}>
        导出省岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExportLocalPos}>
        导出本地岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleSave}>
        保存
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleViewLocalPos}>
        查看本地岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleImportLocalPos}>
        导入本地岗位
      </Button>
      <Table
        components={components}
        columns={columns}
        loading={loading}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{ y: document.body.scrollHeight - 460 }}
        bordered
        style={{ marginTop: 10 }}
        onExpand={handleExpand}
      />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共 ${tota} 条`}
        pageSizeOptions={['10', '50', '100', '200']}
        showSizeChanger
        style={{ marginTop: 10, float: 'right' }}
      />
    </div>
  );
};
