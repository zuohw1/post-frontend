import React from 'react';
import {
  Table,
  Icon,
} from 'antd';


export default (state) => {
  const {
    personList, groupList, actions, record,
  } = state;
  const {
    setGroupList,
  } = actions;
  let groupData = [...groupList];
  const newRecord = record;
  console.log(groupData);
  console.log(newRecord);
  /* 列表字段 */
  const OnDistribution = (row) => {
    console.log(1111);
    if (newRecord.groupId) {
      newRecord.managName = row.fullName;
      groupData = groupData.map((item) => {
        if (item.groupId === newRecord.groupId) {
          return { ...item, managName: newRecord.managName };
        } else {
          return item;
        }
      });
      console.log(groupData);
      setGroupList(groupData);
    }
  };


  const tableCols = [{
    title: '员工',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
    width: '33.3%',
  }, {
    title: '分配至改组',
    dataIndex: 'distribution',
    key: 'distribution',
    align: 'center',
    width: '33.3%',
    render: () => {
      return (
        <Icon
          type="check"
          style={{ color: '#409030' }}
        />
      );
    },
  }, {
    title: '组负责人',
    dataIndex: 'responsible',
    key: 'responsible',
    align: 'center',
    width: '33.3%',
    render: (text, records) => {
      return (
        <Icon
          type="user"
          onClick={() => OnDistribution(records)}
        />
      );
    },
  },
  ];

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
      <p>人员列表</p>
      <Table
        columns={getFields()}
        dataSource={personList}
        size="middle"
        bordered
        pagination={false}
      />
    </div>
  );
};
