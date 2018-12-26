import React from 'react';
import {
  Table,
  Button,
  Popconfirm,
  Input,
  Row,
  Col,
} from 'antd';


export default ({
  actions,
  clickOrgType,
  dataSourceAll,
  countAll,
  dataSourceOffice,
  countOffice,
  comprehensive,
  countComprehensive,
  dataSourceFinance,
  countFinance,
  record,
}) => {
  const {
    setListDataSourceAll,
    setListDataSourceOffice,
    setListComprehensive,
    setListDataSourceFinance,
    setListCountAll,
    setListCountOffice,
    setListCountComprehensive,
    setListCountFinance,
    getRecord,
  } = actions;

  const vt = (clickOrgType !== 'undefined') ? (clickOrgType / 10) : 0;
  console.log(record);

  // 右侧列表根据树节点点击的职责层级确定显示的数据
  let dataSource = (vt === 0) ? dataSourceAll : (
    vt === 1 ? dataSourceAll : (
      vt === 2 ? dataSourceOffice : (
        vt === 3 ? comprehensive : (
          vt === 4 ? dataSourceFinance
            : dataSourceAll))));

  if (record.key) {
    console.log(record.length);
    dataSource = dataSource.map((item) => {
      if (item.key === record.key) {
        return { ...item, person: record.person };
      } else {
        return item;
      }
    });
  }
  console.log(dataSource);

  const count = (vt === 0) ? countAll : (
    vt === 1 ? countAll : (
      vt === 2 ? countOffice : (
        vt === 3 ? countComprehensive : (
          vt === 4 ? countFinance
            : countAll))));

  const handleDelete = (key) => {
    if (vt === 0) {
      setListDataSourceAll(dataSource.filter(item => item.key !== key));
      setListCountAll(count - 1);
    } else if (vt === 1) {
      setListDataSourceAll(dataSource.filter(item => item.key !== key));
      setListCountAll(count - 1);
    } else if (vt === 2) {
      setListDataSourceOffice(dataSource.filter(item => item.key !== key));
      setListCountOffice(count - 1);
    } else if (vt === 3) {
      setListComprehensive(dataSource.filter(item => item.key !== key));
      setListCountComprehensive(count - 1);
    } else if (vt === 4) {
      setListDataSourceFinance(dataSource.filter(item => item.key !== key));
      setListCountFinance(count - 1);
    } else {
      setListDataSourceAll(dataSource.filter(item => item.key !== key));
      setListCountAll(count - 1);
    }
  };

  const onClickView = (row) => {
    getRecord(row);
  };
  /* 列表字段 */
  const tableCols = [{
    title: '分组',
    dataIndex: 'grouping',
    key: 'grouping',
    align: 'center',
    width: '50%',
    render: (text, records) => {
      return (
        <Input
          defaultValue={records.grouping}
          style={{ width: 200 }}
        />);
    },
  }, {
    title: '负责人',
    dataIndex: 'person',
    key: 'person',
    align: 'center',
    width: '30%',
    render: (text, records) => {
      return (
        <span onClick={() => onClickView(records)}>{records.person}</span>
      );
    },
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    width: '20%',
    render: (text, records) => {
      return (
        dataSource.length >= 1
          ? (
            <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(records.key)}>
              <a href="jacascript:void(0);">删除</a>
            </Popconfirm>
          ) : null
      );
    },
  },
  ];

  /* 新增按钮 */
  const handleAdd = () => {
    let newData = {};
    if (vt === 0) {
      newData = {
        key: countAll,
        grouping: '',
        person: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    } else if (vt === 1) {
      newData = {
        key: countAll,
        grouping: '',
        person: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    } else if (vt === 2) {
      newData = {
        key: countOffice,
        grouping: '',
        person: '',
      };
      setListCountOffice(countOffice + 1);
      setListDataSourceOffice([...dataSource, newData]);
    } else if (vt === 3) {
      newData = {
        key: countComprehensive,
        grouping: '',
        person: '',
      };
      setListCountComprehensive(countComprehensive + 1);
      setListComprehensive([...dataSource, newData]);
    } else if (vt === 4) {
      newData = {
        key: countFinance,
        grouping: '',
        person: '',
      };
      setListCountFinance(countFinance + 1);
      setListDataSourceFinance([...dataSource, newData]);
    } else {
      newData = {
        key: countAll,
        grouping: '',
        person: '',
      };
      setListCountAll(countAll + 1);
      setListDataSourceAll([...dataSource, newData]);
    }
  };
  /* 保存按钮 */
  const handleSave = (row) => {
    const newData = [...dataSource];
    console.log('handleSave()', row, newData, clickOrgType);
  };

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }
  return (
    <div style={{
      height: 700,
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 10,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <Row gutter={5}>
        <Col span={18}>
          <p>分组列表</p>
        </Col>
        <Col span={3}>
          <Button onClick={handleAdd} style={{ marginBottom: 16 }}>
            新增
          </Button>
        </Col>
        <Col span={3}>
          <Button onClick={handleSave} style={{ marginBottom: 16 }}>
            保存
          </Button>
        </Col>
      </Row>
      <Table
        columns={getFields()}
        dataSource={dataSource}
        size="middle"
        bordered
        pagination={false}
      />
    </div>
  );
};
