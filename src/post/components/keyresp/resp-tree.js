import React from 'react';
import {
  Button, Input, Tree, // Form, Row,
} from 'antd';

const { TreeNode } = Tree;
const resptree = [{
  title: '全部',
  key: '0-0',
  children: [
    {
      title: '技术序列',
      key: '0-0-0',
      respType: '10',
      respCode: 'gwxl-js',
      respId: 'gwxl000',
      children: [
        {
          title: '计划规划',
          key: '0-0-0-0',
          respType: '20',
          respCode: 'zxl-01',
          respId: 'zxl0001',
          children: [
            {
              title: '规划管理',
              key: '0-0-0-0-0',
              respType: '30',
              respCode: 'zy-01',
              respId: 'zy00000',
              children: [
                {
                  title: '规划管理',
                  key: '0-0-0-0-0-0',
                  respType: '40',
                  respCode: 'gjzz-01',
                  respId: 'gjzz000000',
                  children: [
                    {
                      title: '规划、计划管理制度、流程制定',
                      key: '0-0-0-0-0-0-0',
                      respType: '50',
                      respCode: 'zzz-01',
                      respId: 'zzz000001',
                      children: [],
                      isLeaf: true,
                    },
                    {
                      title: 'WSW测试',
                      key: '0-0-0-0-0-1',
                      respType: '50',
                      respCode: 'zzz-02',
                      respId: 'zzz000002',
                      children: [],
                      isLeaf: true,
                    },
                    {
                      title: '滚动规划常态化工作机制的组织执行',
                      key: '0-0-0-0-0-2',
                      respType: '50',
                      respCode: 'zzz-03',
                      respId: 'zzz000003',
                      children: [],
                      isLeaf: true,
                    },
                    {
                      title: '3年滚动规划下达',
                      key: '0-0-0-0-0-3',
                      respType: '50',
                      respCode: 'zzz-04',
                      respId: 'zzz000004',
                      children: [],
                      isLeaf: true,
                    },
                  ],
                },
              ],
            },
            {
              title: '计划管理',
              key: '0-0-0-0-1',
              respType: '30',
              respCode: 'zy-02',
              respId: 'zy00002',
              children: [
                {
                  title: '计划管理',
                  key: '0-0-0-0-1-0',
                  respType: '40',
                  respCode: 'gjzz-22',
                  respId: 'gjzz20001',
                  children: [
                    {
                      title: '固定资产投资效益分析机制建立',
                      key: '0-0-0-0-1-0-0',
                      respType: '50',
                      respCode: 'zzz-22',
                      respId: 'zzz20002',
                      children: [],
                    },
                    {
                      title: '固定资产投资预算的编制、调整',
                      key: '0-0-0-0-1-0-1',
                      respType: '50',
                      respCode: 'zzz-23',
                      respId: 'zzz20003',
                      children: [],
                    },
                    {
                      title: '综合计划制定与管理',
                      key: '0-0-0-0-1-2',
                      respType: '50',
                      respCode: 'zzz-24',
                      respId: 'zzz20004',
                      children: [],
                    },
                  ],
                },
                {
                  title: '项目后评价管理',
                  key: '0-0-0-0-1-1',
                  respType: '40',
                  respCode: 'gjzz-23',
                  respId: 'gjzz20003',
                  children: [],
                },
                {
                  title: '项目管理',
                  key: '0-0-0-0-1-2',
                  respType: '40',
                  respCode: 'gjzz-24',
                  respId: 'gjzz20004',
                  children: [],
                },
                {
                  title: '节能减排',
                  key: '0-0-0-0-1-3',
                  respType: '40',
                  respCode: 'gjzz-25',
                  respId: 'gjzz20005',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: '技术研发与管理',
          key: '0-0-0-1',
          respType: '20',
          respCode: 'zxl-02',
          respId: 'zxl0002',
          children: [],
        },
        {
          title: '工程设计',
          key: '0-0-0-2',
          respType: '20',
          respCode: 'zxl-03',
          respId: 'zxl0003',
          children: [],
        },
        {
          title: '采购管理',
          key: '0-0-0-3',
          respType: '20',
          respCode: 'zxl-04',
          respId: 'zxl0004',
          children: [],
        },
      ],
    },
    {
      title: '支撑序列',
      key: '0-0-1',
      respType: '10',
      respCode: 'gwxl-zc',
      respId: 'gwxl001',
      children: [],
    },
    {
      title: '管理序列',
      key: '0-0-2',
      respType: '10',
      respCode: 'gwxl-gl',
      respId: 'gwxl002',
      children: [],
    },
    {
      title: '市场序列',
      key: '0-0-4',
      respType: '10',
      respCode: 'gwxl-shc',
      respId: 'gwxl003',
      children: [],
    },
    {
      title: 'test1204',
      key: '0-0-3',
      respType: '10',
      respCode: 'gwxl-tt',
      respId: 'gwxl204',
      children: [
        {
          title: 'test-zxl001',
          key: '0-0-3-0',
          respCode: 'zxl-30',
          respId: 'xl0030',
          children: [
            {
              title: 'test-zy001',
              key: '0-0-3-0-0',
              respCode: 'zy-00300',
              respId: 'zy00300',
              children: [
                {
                  title: 'test-gjzz001',
                  key: '0-0-3-0-0-0',
                  respCode: 'gjzz-00300',
                  respId: 'gjzz00300',
                  children: [
                    {
                      title: 'test-zzz001',
                      key: '0-0-3-0-0-0-0',
                      respCode: 'zzz-0030000',
                      respId: 'zzz003000',
                      children: [],
                      isLeaf: true,
                    },
                    {
                      title: 'test-zzz002',
                      key: '0-0-3-0-0-0-1',
                      respCode: 'zzz-0030001',
                      respId: 'zzz003001',
                      children: [],
                      isLeaf: true,
                    },
                    {
                      title: 'test-zzz003',
                      key: '0-0-3-0-0-0-2',
                      respCode: 'zzz-0030002',
                      respId: 'zzz003002',
                      children: [],
                      isLeaf: true,
                    },
                  ],
                },
                {
                  title: 'test-gjzz002',
                  key: '0-0-3-0-0-1',
                  respCode: 'gjzz-00301',
                  respId: 'gjzz00301',
                  children: [],
                },
              ],
            },
            {
              title: 'test-zy002',
              key: '0-0-3-0-1',
              respCode: 'zy-00301',
              respId: 'zy00301',
              children: [],
            },
          ],
        },
        {
          title: 'test-zxl002',
          key: '0-0-3-1',
          respCode: 'zxl-31',
          respId: 'xl0031',
          children: [],
        },
      ],
    },
  ],
}];


export default (state) => {
  const {
    actions,
    // clickRespId,
    // clickRespCode,
    // clickRespType,
  } = state;
  const {
    setClickRespIdCode,
  } = actions;

  // console.log(clickRespType, clickRespId, clickRespCode);
  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  };

  const handleTreeSelect = (selectedKeys, info) => {
    // console.log('onSelect', info, selectedKeys);
    const respType = `${info.node.props.dataRef.respType}`;
    const respId = `${info.node.props.dataRef.respId}`;
    const respCode = `${info.node.props.dataRef.respCode}`;
    setClickRespIdCode(respType, respId, respCode);
  };

  return (
    <div style={{
      height: 530,
      border: 10,
      borderColor: 'blue',
      overflowY: 'scroll',
      overflowX: 'scroll',
      paddingLeft: 5,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <div className="siderTopC2">
        <span>关键词</span>
        <Input />
        <Button icon="search" size="small">查找</Button>
        <Button icon="reload" size="small">刷新</Button>
      </div>
      <div>
        <Tree onSelect={handleTreeSelect}>
          {renderTreeNodes(resptree)}
        </Tree>
      </div>
    </div>);
};
