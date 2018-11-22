import React from 'react';
import {
  Table,
  Pagination,
} from 'antd';

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  tableData,
  actions,
  form,
  loading,
}) => {
  const {
    listTable,
  } = actions;

  const data = tableData.records;

  const onChange = (currentPageNum, recordNum) => {
    form.validateFields((err, values) => {
      if (!err) {
        const select = { ...values, recordNum, currentPageNum };
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

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 50,
  }, {
    title: '岗位序列',
    dataIndex: 'seq',
    key: 'seq',
    align: 'center',
    width: 100,
  }, {
    title: '子序列',
    dataIndex: 'cseq',
    key: 'cseq',
    align: 'center',
    width: 100,
  }, {
    title: '专业',
    dataIndex: 'major',
    key: 'major',
    align: 'center',
    width: 200,
  }, {
    title: '关键职责',
    dataIndex: 'keyresp',
    key: 'keyresp',
    align: 'center',
    width: 200,
  }, {
    title: '学历',
    dataIndex: 'etu',
    key: 'etu',
    align: 'center',
    width: 50,
  }, {
    title: '工作经验',
    dataIndex: 'workexp',
    key: 'workexp',
    align: 'center',
    width: 200,
  }, {
    title: '是否核心',
    dataIndex: 'iscore',
    key: 'iscore',
    align: 'center',
    width: 70,
  }, {
    title: '子职责',
    dataIndex: 'ckeyresp',
    key: 'ckeyresp',
    align: 'center',
    width: 100,
  }, {
    title: '组织层级',
    dataIndex: 'leveltype',
    key: 'leveltype',
    align: 'center',
    width: 100,
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }

  return (
    <div>
      <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" scroll={{ y: document.body.scrollHeight - 460 }} />
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
