import React from 'react';
import {
  Table,
  Button,
  Input,
  Row,
  Popconfirm,
  Col,
} from 'antd';


export default ({
  groupList,
  actions,
  orgId,
  count,
  loading,
  // rowId,
}) => {
  const {
    getPersonList,
    setGroupList,
    deleteGroupList,
    saveGroupList,
    setListCount,
    // onClickStyle,
  } = actions;


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
          defaultValue={records.groupName}
          onChange={e => onChange(e, records)}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            return false;
          }}
          style={{ width: 200 }}
        />);
    },
  }, {
    title: '负责人',
    dataIndex: 'managName',
    key: 'managName',
    align: 'center',
    width: '30%',
  }, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    width: '20%',
    render: (text, records) => {
      return (
        groupList.length >= 1
          ? (
            <Popconfirm
              title="确认要删除?"
              onConfirm={(e) => {
                handleDelete(records);
                e.nativeEvent.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
              }}
              onCancel={(e) => {
                e.nativeEvent.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <a
                href="jacascript:void(0);"
                onClick={(e) => {
                  e.nativeEvent.stopImmediatePropagation();
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >删除
              </a>
            </Popconfirm>
          ) : null
      );
    },
  },
  ];

  /* 新增按钮 */
  const handleAdd = () => {
    const newData = {
      groupName: '',
      orgId,
      count,
    };
    setListCount(count - 1);
    setGroupList([...groupList, newData]);
  };
  /* 输入框变化 */
  const onChange = (e, row) => {
    const newRow = row;
    const { value } = e.target;
    newRow.groupName = value;
    // console.log(groupList);
  };
  /* 保存按钮 */
  const handleSave = () => {
    const rrr = {};
    rrr.entityList = groupList;
    // console.log('11111', rrr);
    saveGroupList(rrr);
  };

  /* 删除 */
  const handleDelete = (records) => {
    if (!records.groupId) {
      setGroupList(groupList.filter(item => item.count !== records.count));
    } else if (records.groupId) {
      setGroupList(groupList.filter(item => item.groupId !== records.groupId));
      deleteGroupList(records);
    }
  };

  /* 点击对应每行显示出人员列表的信息 */
  const onClickView = (row) => {
    if (row.groupId) {
      getPersonList(orgId, row);
    }
  };

  // const setRowClassName = (records) => {
  //   // console.log(8888, rowId);
  //   return records.groupId === rowId ? 'clickRowStyle' : '';
  // };
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
        className="groupList"
        onRow={(records) => {
          return {
            onClick: () => {
              onClickView(records);
              // onClickStyle(records.count);
            }, // 点击行
          };
        }}
        // rowClassName={setRowClassName}
        // rowKey={records => records.groupId.c[0]}
        columns={getFields()}
        loading={loading}
        dataSource={groupList}
        size="middle"
        bordered
        pagination={false}
      />
    </div>
  );
};
