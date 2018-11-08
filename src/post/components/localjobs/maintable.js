import React ,{Component}from 'react';
import { Table, Pagination, } from 'antd';
import Detail from './alertmessage/index';
/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
// { tableData, actions, search, loading, }
class Table1 extends Component{
  render(){
    //console.log(this.state.son);
    const { tableData, actions, search, loading, }=this.props;
    const { listTable } = actions;

    const data = [{
      key: '系统测试与培训岗',
      DOC_CODE: '办公系统管理',
      ATTRIBUTE8: '技术序列，信息化',
      ATTRIBUTE9: '.省.市',
      DOC_VERIFIER: '是',
      DOC_STATUS:'本科',
      ATTRIBUTE10:'2018-1-1',
      ATTRIBUTE11:'2018-12-12',
      ATTRIBUTE12:'详细信息'
    },
      {
        key: '团青工作岗',
        DOC_CODE: '团青工作岗',
        ATTRIBUTE8: '支撑序列.党群、纪检、工会',
        ATTRIBUTE9: '.市.县',
        DOC_VERIFIER: '是',
        DOC_STATUS:'本科',
        ATTRIBUTE10:'2018-1-1',
        ATTRIBUTE11:'2018-12-12',
        ATTRIBUTE12:'详细信息'
      }
    ];

    const onChange = (pageNumber, pageSize) => {
      const searchF = { ...search, pageSize, pageNumber };
      listTable(searchF);
    };

    const onChangePageSize = (current, size) => {
      const searchF = { ...search, pageSize: size, pageNumber: current };
      listTable(searchF);
    };

    const { current, size, total } = tableData;

    /* 列表字段 */
    const tableCols = [{
      title: '省基准岗位名称',
      dataIndex: 'key',
      key: 'key',
      align: 'center',
      width: 150,
    }, {
      title: '基础岗位名称',
      dataIndex: 'DOC_CODE',
      key: 'DOC_CODE',
      align: 'center',
      width: 150,
    }, {
      title: '所属子序列',
      dataIndex: 'ATTRIBUTE8',
      key: 'ATTRIBUTE8',
      align: 'center',
      width: 200,
    }, {
      title: '组织层级',
      dataIndex: 'ATTRIBUTE9',
      key: 'ATTRIBUTE9',
      align: 'center',
      width: 100,
    }, {
      title: '是否核心',
      dataIndex: 'DOC_VERIFIER',
      key: 'DOC_VERIFIER',
      align: 'center',
      width: 100,
    }, {
      title: '学历要求',
      dataIndex: 'DOC_STATUS',
      key: 'DOC_STATUS',
      align: 'center',
      width: 100,
    }, {
      title: '开始日期',
      dataIndex: 'ATTRIBUTE10',
      key: 'ATTRIBUTE10',
      align: 'center',
      width: 150,
    }, {
      title: '结束日期',
      dataIndex: 'ATTRIBUTE11',
      key: 'ATTRIBUTE11',
      align: 'center',
      width: 150,
    }, {
      title: '操作',
      dataIndex: 'ATTRIBUTE12',
      key: 'ATTRIBUTE12',
      align: 'center',
      width: 100,
      render: ()=><Detail></Detail>,
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
          showTotal={tota => `共 ${tota} 条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
export default Table1;


