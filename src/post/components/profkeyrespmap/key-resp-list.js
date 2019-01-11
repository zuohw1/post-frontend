import React from 'react';
import { Card, Button, List } from 'antd';
import config from '../../../env.config';

const { Item } = List;

const KeyRespList = ({
  keyRespList, listTitle, isTitleSelected,
}) => {
  const exportExcel = () => {
    const expUrl = `${config.api}/business/export?style=BUSINESS`;
    window.open(expUrl, '_self');
  };
  return (
    <Card
      title={isTitleSelected ? `(${listTitle})关键职责列表` : '关键职责列表'}
      extra={<Button onClick={exportExcel}>导出</Button>}
    >
      <List
        size="small"
        bordered
        dataSource={keyRespList}
        // loading
        renderItem={item => (<Item>{item.subRespName}</Item>)}
      />
    </Card>
  );
};


export default KeyRespList;
