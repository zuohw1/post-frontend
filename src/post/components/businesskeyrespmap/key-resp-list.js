import React from 'react';
import { Card, Button, List } from 'antd';

const { Item } = List;

const KeyRespList = ({ keyRespList }) => {
  return (
    <Card
      title="关键职责列表"
      extra={<Button>导出</Button>}
    >
      <List
        size="small"
        bordered
        dataSource={keyRespList}
        renderItem={item => (<Item>{item}</Item>)}
      />
    </Card>
  );
};


export default KeyRespList;
