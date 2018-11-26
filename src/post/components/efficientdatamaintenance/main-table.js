import React from 'react';
import {
  Table,
  Pagination, Button, Input, Modal,
} from 'antd';
import ImportTable from './import-table';
/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/

class Efficent extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      form,
      tableData,
      actions,
      loading,
    } = this.props;
    const {
      listTable,
    } = actions;
    const data = tableData.records;

    const onChange = (pageNumber, pageSize) => {
      form.validateFields((err, values) => {
        if (!err) {
          const select = { ...values, pageSize, pageNumber };
          listTable(select);
        }
      });
    };

    const onChangePageSize = (current, size) => {
      form.validateFields((err, values) => {
        if (!err) {
          const select = { ...values, size, current };
          listTable(select);
        }
      });
    };

    const handleExport = () => {
      alert('导出，待处理');
    };
    const { current, size, total } = tableData;

    /* 列表字段 */
    const tableCols = [{
      title: '组织名称',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 100,
    }, {
      title: '效率指标',
      dataIndex: 'sEQ',
      key: 'sEQ',
      align: 'center',
      width: 200,
    }, {
      title: '效率指标说明',
      dataIndex: 'cSEQ',
      key: 'cSEQ',
      align: 'center',
      width: 300,
    }, {
      title: '期间',
      dataIndex: 'mAJOR',
      key: 'mAJOR',
      align: 'center',
      width: 150,
    }, {
      title: '业务数据',
      dataIndex: 'kEYRESP',
      key: 'kEYRESP',
      align: 'center',
      width: 200,
      render: () => (
        <Input />
      ),
    }];

    function getFields() {
      const children = [];
      for (let i = 0; i < tableCols.length; i += 1) {
        children.push(tableCols[i]);
      }
      return children;
    }
    const { visible } = this.state;
    return (
      <div style={{ marginTop: '10px' }}>
        <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExport}>
          导出
        </Button>
        <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={this.showModal.bind(this)}>
          导入
        </Button>
        <Modal
          title="效率业务数据维护"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ImportTable />
        </Modal>
        <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} style={{ marginTop: '10px' }} bordered />
        <Pagination
          showQuickJumper
          current={current}
          total={total}
          pageSize={size}
          onChange={onChange}
          onShowSizeChange={onChangePageSize}
          pageSizeOptions={['10', '50', '100', '200']}
          showTotal={tota => `共 ${tota} 条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
export default Efficent;
