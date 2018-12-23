import React from 'react';
import { Card, Button } from 'antd';

const KeyRespList = (props) => {
  console.log('list', props);
  return (
    <Card
      title={
        <Button>新增</Button>
      }
      extra={<Button>导出</Button>}
    >
      111
    </Card>
  );
};


export default KeyRespList;
