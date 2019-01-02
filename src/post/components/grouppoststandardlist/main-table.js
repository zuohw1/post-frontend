import React from 'react';
import {
  Table,
  Pagination, Button, Modal,
} from 'antd';
import DetailList from './detail-list';
import config from '../../../env.config';

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  tableData,
  cardRecord,
  actions,
  loading,
  form,
  modal,
}) => {
  const {
    listTable,
    getRecord,
  } = actions;

  const data = tableData.records;

  const onClickView = (_, row) => {
    getRecord(row, true, false);
  };

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
        const select = { ...values, recordNum: size, currentPageNum: current };
        listTable(select);
      }
    });
  };

  const onCancel = () => {
    getRecord({}, false, true);
  };

  const handleExportGroupPos = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = {
          ...values, pageSize, pageNumber,
        };

        let expUrl = `${config.api}/posStandardpos/exportNewPosList?1=1`;
        if (select.posCateId && select.posCateId !== '') {
          expUrl += `&posCateId=${select.posCateId}`;
        }
        if (select.posSubcateId && select.posSubcateId !== '') {
          expUrl += `&posSubcateId=${select.posSubcateId}`;
        }
        if (select.posName && select.posName !== '') {
          expUrl += `&posName=${select.posName}`;
        }
        if (select.orgLevel && select.orgLevel.length !== 0) {
          const orgLevelStr = select.orgLevel.map(item => item).join('.');
          expUrl += `&orgLevel=.${orgLevelStr}.`;
        }
        if (select.coreFlag && select.coreFlag !== '') {
          expUrl += `&coreFlag=${select.coreFlag}`;
        }
        if (select.educationDegree && select.educationDegree !== '') {
          expUrl += `&educationDegree=${select.educationDegree}`;
        }
        window.open(expUrl, '_self');
      }
    });
  };
  const translateTime = (time) => { // 将毫秒转换为年月日时分秒
    if (!time) {
      return '';
    } else {
      const date = new Date(time);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      const Y = `${date.getFullYear()}-`;
      const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
      const D = `${date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1}`;
      return Y + M + D;
    }
  };

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: '6%',
    align: 'center',
  }, {
    title: '基准岗位名称',
    dataIndex: 'posName',
    key: 'posName',
    width: '14%',
    align: 'center',
  }, {
    title: '所属子序列',
    dataIndex: 'sName',
    key: 'sName',
    width: '14%',
    align: 'center',
    render: (text, record) => (
      <span>{record.cName}.{record.sName}</span>
    ),
  }, {
    title: '组织层级',
    dataIndex: 'orgLevel',
    key: 'orgLevel',
    width: '14%',
    align: 'center',
  }, {
    title: '是否核心',
    dataIndex: 'coreFlag',
    key: 'coreFlag',
    width: '10%',
    align: 'center',
  }, {
    title: '学历要求',
    dataIndex: 'educationDegree',
    key: 'educationDegree',
    width: '14%',
    align: 'center',
  }, {
    title: '开始日期',
    dataIndex: 'activeStartDate',
    key: 'activeStartDate',
    width: '14%',
    align: 'center',
    render: (text, record) => {
      return translateTime(record.activeStartDate);
    },
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    children.push(
      {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        align: 'center',
        width: 150,
        render: (text, records) => (
          <span>
            <a href=" javascript:;" onClick={() => onClickView(text, records)}>详细信息</a>
          </span>
        ),
      },
    );
    return children;
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <Modal
        title="基本信息"
        visible={modal}
        onOk={onCancel}
        onCancel={onCancel}
        maskClosable={false}
        destroyOnClose
        width={1200}
      >
        <DetailList
          record={cardRecord}
          form={form}
          actions={actions}
        />
      </Modal>
      <Button htmlType="button" type="primary" style={{ marginLeft: '0' }} onClick={handleExportGroupPos}>
        导出集团岗位
      </Button>
      <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} style={{ marginTop: '10px' }} />
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
};
