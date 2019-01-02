import React from 'react';
import {
  Table,
  Icon,
} from 'antd';


export default (state) => {
  const {
    personList,
    groupList,
    actions,
    record,
    orgId,
  } = state;
  const {
    distributionGroup,
    setGroupList,
    getPersonList,
    // saveGroupList,
    distributionBlame,
  } = actions;
  /* 分配至该组 */
  const OnDistribution = (row) => {
    const newData = {
      assFlag: row.assFlag,
      ebsAssId: row.ebsAssId,
      fullName: row.fullName,
      groupAssId: row.groupAssId,
      groupId: record.groupId,
      orgId,
      mangerFlag: row.mangerFlag,
      presonId: row.personId,
      type: `${row.groupAssId === 0 ? 'add' : 'delete'}`,
    };
    console.log('newData==', newData);
    distributionGroup(newData);
    getPersonList(orgId, record);
  };

  /* 分配组负责人 */
  let groupData = [...groupList];
  const OnDistributionBlame = (row) => {
    if (row.groupAssId === 0) {
      alert('hh');
    } else {
      record.managName = row.fullName;
      groupData = groupData.map((item) => {
        if (item.groupId === record.groupId) {
          return { ...item, managName: record.managName };
        } else {
          return item;
        }
      });
      console.log(groupData);
      setGroupList(groupData);
      const newData = {
        assFlag: row.assFlag,
        ebsAssId: row.ebsAssId,
        fullName: row.fullName,
        groupAssId: row.groupAssId,
        groupId: record.groupId,
        orgId,
        mangerFlag: row.mangerFlag,
        presonId: row.personId,
      };
      distributionBlame(newData);
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
    render: (text, records) => {
      return (
        <Icon
          // type="check"
          type={`${records.assFlag === 'Y' ? 'check' : 'close'}`}
          style={{ color: `${records.assFlag === 'Y' ? '#409030' : '#FF3010'}` }}
          onClick={() => OnDistribution(records)}
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
          onClick={() => OnDistributionBlame(records)}
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
