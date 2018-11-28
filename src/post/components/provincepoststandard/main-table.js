import React from 'react';
import {
  Table,
  Button,
  Pagination,
} from 'antd';
import PosDuty from './postduty/index';

export default ({
  tableData,
  actions,
  search,
  loading,
}) => {
  const {
    listTable, setTableData,
  } = actions;

  const data = tableData.records;
  // const { tableData } = this.state;

  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };


  const handleExportGroupPos = () => {
  };
  const handleExportProvPos = () => {
  };

  const handleSave = () => {

  };

  const handleViewProvPos = () => {
    console.log('enter into handleViewProvPos');
  };

  const handleImportProvPos = () => {
  };

  const handleTableData = (dataClick, posKey) => {
    const dataNew = [];
    const databk = { ...data };
    const databk2 = { ...data };
    for (let t = 0; t < data.length; t += 1) {
      if (databk[t].key === posKey) {
        let chidNew = databk2[t];
        chidNew = { ...chidNew, key: `new-${databk[t].key}-${databk2[t].children.length}` };
        chidNew = { ...chidNew, def5: ['更改职责', '终止', '删除'] };
        chidNew = { ...chidNew, ATTRIBUTE13: '.省.市.县.' };
        delete chidNew.children;
        const childrenNew = arrayUtils.addItem(databk[t].children, chidNew);
        databk[t] = { ...databk[t], children: childrenNew };
        dataNew.push(databk[t]);
      } else {
        dataNew.push(databk[t]);
      }
    }
    const tableDataNew = {
      total: 0,
      size: 0,
      current: 1,
      records: dataNew,
    };
    setTableData(tableDataNew);
  };

  const arrayUtils = {
    /**
     * 在指定索引位置增加新元素，未指定index时添加到最后面
     * @param array (array)
     * @param newItem   (object)
     * @param index (int)
     * @returns {*} 返回新数组
     */
    addItem: (array, newItem, index) => {
      if (typeof index !== 'undefined') {
        return [
          ...array.slice(0, index),
          newItem,
          ...array.slice(index + 1),
        ];
      } else {
        return [
          ...array,
          newItem,
        ];
      }
    },
  };

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 150,
  }, {
    title: '基准岗位名称',
    dataIndex: 'DOC_CODE',
    key: 'DOC_CODE',
    align: 'center',
    width: 150,
  }, {
    title: '所属子序列',
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: 150,
  }, {
    title: '组织层级',
    dataIndex: 'ATTRIBUTE13',
    key: 'ATTRIBUTE13',
    align: 'center',
    width: 150,
  }, {
    title: '是否核心',
    dataIndex: 'ATTRIBUTE11',
    key: 'ATTRIBUTE11',
    align: 'center',
    width: 150,
  }, {
    title: '学历要求',
    dataIndex: 'DOC_STATUS',
    key: 'DOC_STATUS',
    align: 'center',
    width: 150,
  }, {
    title: '开始日期',
    dataIndex: 'ATTRIBUTE10',
    key: 'ATTRIBUTE10',
    align: 'center',
    width: 150,
  }, {
    title: '省基准岗位维护',
    dataIndex: 'def5',
    key: 'def5',
    align: 'center',
    width: 150,

    render: (text, record) => (
      <span>
        {record.def5.map(
          tag => (
            <PosDuty
              posKey={record.key}
              posName={tag}
              posRecord={record}
              posBegindate={record.ATTRIBUTE10}
              handleTableData={handleTableData.bind(this)}
            />
          ),
        )}
      </span>
    ),

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
      <Button htmlType="button" type="primary" style={{ marginLeft: '0' }} onClick={handleExportGroupPos}>
        导出集团岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleExportProvPos}>
        导出省岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleSave}>
        保存
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleViewProvPos}>
        查看省基准岗位
      </Button>
      <Button htmlType="button" type="primary" style={{ marginLeft: '10px' }} onClick={handleImportProvPos}>
        导入省基准岗位
      </Button>

      <Table
        columns={getFields()}
        loading={loading}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{ y: document.body.scrollHeight - 460 }}
        bordered
        style={{ marginTop: '10px' }}
      />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共 ${tota} 条`}
        pageSizeOptions={['10', '50', '100', '200']}
        showSizeChanger
        style={{ marginTop: 10, float: 'right' }}
      />

    </div>
  );
};
