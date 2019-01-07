import React from 'react';
import {
  Layout, Icon, Button, List, Card,
} from 'antd';

const { Content } = Layout;
const { Item } = List;

const ProfList = ({ orgLibArr }) => {
  return (
    <Card
      title="专业列表"
      extra={(
        <div className="nav_r">
          <Icon type="select" />
          <a href="#">导入</a>
          <Icon type="export" />
          <a href="#">导出</a>
          <a href="#">用户手册</a>
        </div>
)}
    >
      <Content>
        <List
          size="small"
          bordered
          dataSource={orgLibArr}
          renderItem={item => (<Item>{item}</Item>)}
        />
        <Button className="copyOrg" size="small">复制至下属组织</Button>
      </Content>
    </Card>
  );
};
export default ProfList;
