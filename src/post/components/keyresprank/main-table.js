import React from 'react';
import {
  Table,
  Pagination, Button,
} from 'antd';
import config from '../../../env.config';

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  form,
  tableData,
  actions,
  search,
  loading,
}) => {
  const {
    listTable,
  } = actions;

  const data = tableData.records;

  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const handleExport = () => {
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = 10;
        const pageNumber = 1;
        const select = {
          ...values, pageSize, pageNumber,
        };

        let expUrl = `${config.api}/api/PosElementStructure/exportRespsInfo?pageNum=${select.pageNumber}&pageSize=${select.pageSize}`;
        if (select.levelType && select.levelType !== '') {
          expUrl += `&levelType=${select.levelType}`;
        }
        if (select.sequence && select.sequence !== '') {
          expUrl += `&sequence=${select.sequence}`;
        }
        if (select.respName && select.respName !== '') {
          expUrl += `&respName=${select.respName}`;
        }
        window.open(expUrl, '_self');
      }
    });
    // handleReset();
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
    dataIndex: 'sEQ',
    key: 'sEQ',
    align: 'center',
    width: 100,
  }, {
    title: '子序列',
    dataIndex: 'cSEQ',
    key: 'cSEQ',
    align: 'center',
    width: 100,
  }, {
    title: '专业',
    dataIndex: 'mAJOR',
    key: 'mAJOR',
    align: 'center',
    width: 150,
  }, {
    title: '关键职责',
    dataIndex: 'kEYRESP',
    key: 'kEYRESP',
    align: 'center',
    width: 150,
  }, {
    title: '基准职级',
    dataIndex: 'jZRANK',
    key: 'jZRANK',
    align: 'center',
    width: 100,
  }, {
    title: '集团职级',
    dataIndex: 'jTRANK',
    key: 'jTRANK',
    align: 'center',
    width: 100,
  }, {
    title: '省份职级',
    dataIndex: 'sFRANK',
    key: 'sFRANK',
    align: 'center',
    width: 100,
  }, {
    title: '地市职级',
    dataIndex: 'dSRANK',
    key: 'dSRANK',
    align: 'center',
    width: 100,
  }, {
    title: '区县职级',
    dataIndex: 'qXRANK',
    key: 'qXRANK',
    align: 'center',
    width: 100,
  }, {
    title: '组织层级',
    dataIndex: 'lEVELTYPE',
    key: 'lEVELTYPE',
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
    <div style={{ marginTop: '10px' }}>
      <Button htmlType="button" type="primary" style={{ marginLeft: 8 }} onClick={handleExport}>
        导出
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
