import React from 'react';
import {
  Layout, Icon, Button, List, Card, Modal,
} from 'antd';
import config from '../../../env.config';
import ImportModal from './import-modal';

const { Content } = Layout;
const { Item } = List;

const ProfList = ({
  profList, currentOrgId, isModalShow, actions, fileArr,
}) => {
  const { setModalState, copyMapping } = actions;
  const CopyToOrg = () => {
    copyMapping();
  };
  const handleExport = (e) => {
    e.preventDefault();
    const expUrl = `${config.api}/mapping/export?org=${currentOrgId}`;
    window.open(expUrl, '_self');
  };
  const handleOk = () => {
    setModalState(false);
  };
  const handleCancel = () => {
    setModalState(false);
  };
  const handleImport = (e) => {
    e.preventDefault();
    setModalState(true);
  };
  return (
    <Card
      title="专业列表"
      extra={(
        <div className="nav_r">
          <Icon type="select" />
          <a onClick={handleImport} href="#">导入</a>
          <Icon type="export" />
          <a onClick={handleExport} href="#">导出</a>
          <a href="#">用户手册</a>
        </div>
)}
    >
      <Modal
        className="importModal"
        title="专业信息导入"
        maskClosable
        visible={isModalShow}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ImportModal fileArr={fileArr} actions={actions} />
      </Modal>
      <Content>
        <List
          size="small"
          bordered
          dataSource={profList}
          renderItem={item => (<Item>{item.showName}</Item>)}
        />
        <Button onClick={CopyToOrg} className="copyOrg" size="small">复制至下属组织</Button>
      </Content>
    </Card>
  );
};
export default ProfList;
