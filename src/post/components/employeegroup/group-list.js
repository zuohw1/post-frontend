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
}) => {
  const {
    getPersonList, setGroupList, deleteGroupList, saveGroupList, setListCount,
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
            <Popconfirm title="确认要删除?" onConfirm={() => handleDelete(records)}>
              <a
                href="jacascript:void(0);"
                onClick={(e) => {
                  e.nativeEvent.stopImmediatePropagation();
                  e.stopPropagation();
                  e.preventDefault();
                  return false;
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
      groupId: count,
      groupName: '',
      orgId,
    };
    setListCount(count - 1);
    setGroupList([...groupList, newData]);
  };
  /* 保存按钮 */
  const handleSave = () => {
    console.log('groupList=====', groupList);
    const rrr = {};
    rrr.entityList = groupList;
    console.log('11111', rrr);
    saveGroupList(rrr);
  };

  /* 删除 */
  const handleDelete = (records) => {
    setGroupList(groupList.filter(item => item.groupId !== records.groupId));
    deleteGroupList(records);
  };
  /* 点击对应每行显示出人员列表的信息 */
  const onClickView = (row) => {
    if (row.groupName) {
      getPersonList(orgId, row);
    }
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
        onRow={(records) => {
          return {
            onClick: () => onClickView(records), // 点击行
          };
        }}
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
