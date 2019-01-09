import React from 'react';
import {
  Card, Menu, Input, Button, Tree,
} from 'antd';
import '../assets/styles/allot-staff-responsibility.less';
import AllotWhole from './allot-whole';

const { TreeNode } = Tree;
let personTree = [];

const CenterCard = ({
  actions,
  currentMajor,
  relatedDisplay,
  wholeDisplay,
  checklistDisplay,
  maskDisplay,
  person,
  peopleId,
  personTreeOne,
  personTreeTwo,
  recordData,
  count,
  expandedKeys,
  checkedKeys,
  selectedKeys,
}) => {
  const {
    handleClickMajor,
    switchMajor,
    selectKeyDuty,
    setListCount,
    onExpandKeys,
    onUpdateCheck,
    onSelectKeys,
  } = actions;

  // 右侧列表title名称动态显示
  const vt = (peopleId !== 'undefined') ? (peopleId / 10) : 0;

  // 右侧列表根据树节点点击的职责层级确定显示的数据
  personTree = (vt === 1) ? personTreeOne : (
    vt === 2 ? personTreeTwo : personTree);

  const onCheck = (checkedKeyss, info) => {
    console.log(info);
    onUpdateCheck(checkedKeyss);
    if (info.checked) {
      const keyRespDuty = info.node.props.title;
      const newData = {
        dutyExecute: keyRespDuty,
        proportion: '',
        count,
      };
      selectKeyDuty([...recordData, newData]);
      setListCount(count - 1);
    } else {
      selectKeyDuty(recordData.filter(item => item.count !== count + 1));
      setListCount(count + 1);
    }
  };


  /* 展开/收起节点时触发 */
  const onExpand = (expandedKeyss) => {
    console.log('onExpand==', expandedKeyss);
    onExpandKeys(expandedKeyss);
  };

  /* 点击树触发 */
  const onSelect = (selectedKeyss, info) => {
    console.log(info);
    console.log('onSelect', selectedKeyss);
    onSelectKeys(selectedKeyss);
  };

  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  });

  const OnHandleClickMajor = (e) => {
    console.log('click ', e.keyPath);
    handleClickMajor(e.keyPath);
    switchMajor(e.key);
  };


  return (
    <div className="allot-left">
      <Card
        title={(
          <Menu onClick={OnHandleClickMajor} mode="horizontal" selectedKeys={currentMajor}>
            <Menu.Item key="related">相关专业</Menu.Item>
            <Menu.Item key="whole">全部专业</Menu.Item>
            <Menu.Item key="checklist">按岗位勾选</Menu.Item>
          </Menu>
        )}
      >
        <p>请勾选
          <span className="major-name">{person}</span>
          的关键职责
        </p>
        <div style={{ display: relatedDisplay }}>
          <Tree
            showLine
            checkable
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
          >
            {renderTreeNodes(personTree)}
          </Tree>
        </div>
        <div style={{ display: wholeDisplay }}>
          <div className="whole-major-search">
              关键词：<Input />
            <Button type="primary" icon="search" style={{ marginRight: 20 }}>查询</Button>
            <Button type="primary" icon="reload">全部</Button>
          </div>
          <AllotWhole />
        </div>
        <div style={{ display: checklistDisplay }}>
          <div className="whole-major-search">
              关键词：<Input />
            <Button type="primary" icon="search" style={{ marginRight: 20 }}>查询</Button>
            <Button type="primary" icon="reload">全部</Button>
          </div>
        </div>
        <div className="allot-left-mask" style={{ display: maskDisplay }} />
      </Card>
    </div>
  );
};


export default CenterCard;
