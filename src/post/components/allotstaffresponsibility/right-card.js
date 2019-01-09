import React from 'react';
import {
  Card, Button, Menu, Checkbox, Tree, Input, Icon, Table,
} from 'antd';
import '../assets/styles/allot-staff-responsibility.less';


export default ({
  actions,
  currentDisplay,
  allDisplay,
  recordData,
  otherDatas,
  checkedBearDuty,
  allRecordsData,
  person,
  count,
  currentRecord,
}) => {
  const {
    handleClickRecord,
    switchRecord,
    selectKeyDuty,
    isChecked,
    setListCount,
  } = actions;
  const remove = (records) => {
    console.log(records);
    selectKeyDuty(recordData.filter(item => item.count !== records.count));
    setListCount(count + 1);
  };
  const onHandleClickRecord = (e) => {
    console.log('click ', e);
    handleClickRecord(e.keyPath);
    switchRecord(e.key);
  };
  const changeBearDuty = (e) => {
    console.log(`checked = ${e.target.checked}`);
    console.log(checkedBearDuty);
    isChecked(checkedBearDuty, recordData, otherDatas);
  };

  const columns = [
    {
      title: '关键职责(主要执行)',
      key: 'keyResp',
      dataIndex: 'keyResp',
      align: 'center',
      width: '80%',
      render: (text, records) => (
        <div style={{ display: 'flex' }}>
          <Input
            defaultValue={records.dutyExecute}
          />
          <Icon
            style={{ cursor: 'pointer' }}
            type="close"
            onClick={() => remove(records)}
          />
        </div>
      ),
    }, {
      title: '工作量',
      key: 'work',
      dataIndex: 'work',
      align: 'center',
      width: '20%',
      render: (text, records) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Input
            defaultValue={records.proportion}
            style={{ width: 60 }}
          />     %
        </div>
      ),
    },
  ];
  return (
    <div className="allot-right">
      <Card
        title={(
          <Menu
            onClick={onHandleClickRecord}
            mode="horizontal"
            selectedKeys={currentRecord}
          >
            <Menu.Item key="current">当前记录</Menu.Item>
            <Menu.Item key="allRecords">全部记录</Menu.Item>
          </Menu>
      )}
      >
        <div style={{ display: currentDisplay }}>
          <p>
            <span>
              <span className="major-name">{person}</span>
            的关键职责 (工作量之和：<span>20%</span>)
            </span>
            <Button icon="save" style={{ marginLeft: 60 }}>保存</Button>
          </p>
          <Checkbox
            onChange={changeBearDuty}
            id="bearDuty"
            checked={checkedBearDuty}
          >
            不承担任何工作职责
          </Checkbox>
          <Table
            rowKey={records => records.count}
            pagination={false}
            columns={columns}
            dataSource={recordData}
            size="middle"
            bordered
          />
        </div>
        <div style={{ display: allDisplay }} className="all-record">
          <Tree style={{ width: '100%' }} showLine treeData={allRecordsData} />
        </div>
      </Card>
    </div>
  );
};
