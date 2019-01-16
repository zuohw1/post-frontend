/* eslint-disable */
import React from 'react';
import {
  Button, Input, Tree, // Form, Row,
} from 'antd';

const { TreeNode } = Tree;
const { Search } = Input;

export default (
  state,
) => {
  const {
    actions,
    resptree,
    // clickRespId,
    // clickRespCode,
    // clickRespType,
    // dataSourceAll,
    // countAll,
    // dataSourceGwxl,
    // countGwxl,
    // dataSourceZxl,
    // countZxl,
    // dataSourceZy,
    // countZy,
    // dataSourceZz,
    // countZz,
    // dataSourceZzz,
    // countZzz,
  } = state;
  const {
    setClickRespIdCode, // setResptree,
    getDataSource,
    getTreeDataByKey,
  } = actions;

  // console.log('countAll:', countAll);
  // console.log('dataSourceAll:', dataSourceAll);
  // console.log('dataSourceGwxl:', dataSourceGwxl, countGwxl);
  // console.log('dataSourceZxl:', dataSourceZxl, countZxl);
  // console.log('dataSourceZy:', dataSourceZy, countZy);
  // console.log('dataSourceZz:', dataSourceZz, countZz);
  // console.log('dataSourceZzz:', dataSourceZzz, countZzz);
  console.log('resptree:', resptree);
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
      return <TreeNode {...item} dataRef={item} />;
    });
  };

  const handleTreeSelect = (selectedKeys, info) => {
    const respType = `${info.node.props.dataRef.type}`==='undefined'?'0':`${info.node.props.dataRef.type}`;
    const respId = `${info.node.props.dataRef.posCateId}`==='undefined'?'':`${info.node.props.dataRef.posCateId}`;
    const respCode = `${info.node.props.dataRef.elementCode}`;
    const respName = `${info.node.props.dataRef.title}`;
    const parentId = `${info.node.props.dataRef.parentId}`;
    const respKey = `${info.node.props.dataRef.key}`;
    setClickRespIdCode(respType, respId, respCode, respName, parentId, respKey);
    // console.log('handleTreeSelect()---', respType, respId, respCode, respName, parentId);
    getDataSource(respType, respId);
    if (info.node.children) {
      resolve();
      return;
    }
  };

  const onLoadData = treeNode => new Promise((resolve) => {
    const type = treeNode.props.dataRef.type;
    const posCateId = treeNode.props.dataRef.posCateId;
    // const elementCode = treeNode.props.dataRef.elementCode;
    getDataSource(type, posCateId);
    if (treeNode.props.children) {
      resolve();
      return;
    }
    resolve();
    return;
  });

  const handleSearch = (value) =>{
    console.log(value);
    getTreeDataByKey(value);
  }

  const handleTreeReload = () => {
    getDataSource(0, '');
  }

  return (
    <div style={{
      height: 530,
      border: 10,
      borderColor: 'blue',
      overflowY: 'scroll',
      paddingLeft: 5,
      paddingRight: 10,
      top: 0,
      bottom: 0,
    }}
    >
      <div className="siderTopC2">
        <span>关键词</span>
        <Search
          id="elementNameSearch"
          placeholder="请输入需要查询的关键字"
          enterButton="查找"
          size="default"
          onSearch={handleSearch}
        />
        <Button icon="reload" size="small" onClick={handleTreeReload}>刷新</Button>
      </div>
      <div>
        <Tree
          defaultExpandedKeys={['0-0']}
          loadData={onLoadData}
          onSelect={handleTreeSelect}
        >
          {renderTreeNodes(resptree)}
        </Tree>
      </div>
    </div>);
};


