import React from 'react';
import { Tree, Card, Spin } from 'antd';

const { TreeNode } = Tree;
// const libtree = [
//   {
//     title: '管理序列.管理',
//     key: '0',
//     children: [
//       { title: '省管理人员', key: '0-0' },
//       { title: '市管理人员', key: '0-1' },
//       { title: '集团管管理人员', key: '0-2' }],
//   },
//   {
//     title: '技术序列.采购管理',
//     key: '1',
//     children: [
//       { title: '采购管理', key: '1-0' },
//       { title: '物资管理', key: '1-1' },
//     ],
//   },
//   {
//     title: '技术序列.工程建设',
//     key: '2',
//     children: [
//       { title: '平台工程', key: '2-0' },
//       { title: '交换工程', key: '2-1' },
//       { title: '接入网工程', key: '2-2' },
//       { title: ' 国际工程', key: '2-3' },
//       { title: '局房建设', key: '2-4' },
//       { title: '集团客户工程', key: '2-5' },
//       { title: '动力、环境及配套工程', key: '2-6' },
//       { title: '数据工程', key: '2-7' },
//       { title: '传输工程', key: '2-8' },
//       { title: '移动工程', key: '2-9' },
//     ],
//   },
//   {
//     title: '技术序列.工程设计',
//     key: '3',
//     children: [
//       { title: '工程设计', key: '3-0' },
//     ],
//   },
//   {
//     title: '技术序列.技术研发与管理',
//     key: '4',
//     children: [
//       { title: '技术管理', key: '4-0' },
//       { title: '研究咨询', key: '4-1' },
//       { title: '技术研发', key: '4-2' }],
//   },
//   {
//     title: '技术序列.技术规划',
//     key: '5',
//     children: [
//       { title: '计划管理', key: '5-0' },
//       { title: '规划管理', key: '5-1' },
//     ],
//   },
//   {
//     title: '技术序列.网络运维',
//     key: '6',
//     children: [
//       { title: '网管支撑专业', key: '6-0' },
//       { title: '网络安全管理', key: '6-1' },
//       { title: '动力环境及配套专业', key: '6-2' },
//     ],
//   },
//   {
//     title: '技术序列.信息化',
//     key: '7',
//     children: [
//       { title: '系统集成', key: '7-0' },
//       { title: 'IT项目管理', key: '7-1' },
//       { title: '电子商务系统开发与支撑', key: '7-2' },
//     ],
//   },
// ];
let vFlag = true;
const ProfLib = ({
  libTree, actions, libTreeLoading, checkedKeys, expandedKeys, currentOrgId,
}) => {
  console.log(555555555555, checkedKeys, expandedKeys);
  const {
    getProfLibTree, setKeyExpandedKeys, changeLibTreeChecked, setLibTreeLoading,
  } = actions;
  if (vFlag) {
    getProfLibTree('219453');
    vFlag = false;
  }
  const onCheck = (checkedKey, info) => {
    setLibTreeLoading(true);
    const { id } = info.node.props.dataRef;
    console.log(id);
    changeLibTreeChecked(id.toString(), currentOrgId);
  };

  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode disableCheckbox title={item.showName} key={item.id} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.showName} key={item.id} dataRef={item} />;
    });
  };
  const onExpand = (expandedKey) => {
    console.log(expandedKey);
    setKeyExpandedKeys(expandedKey);
  };
  return (
    <Card title="专业库(请勾选映射至组织的专业)" className="profLib">
      <Spin spinning={libTreeLoading}>
        <Tree
          checkable
          checkedKeys={checkedKeys}
          expandedKeys={expandedKeys}
          showLine
          onCheck={onCheck}
          onExpand={onExpand}
        >
          {renderTreeNodes(libTree)}
        </Tree>
      </Spin>
    </Card>
  );
};
export default ProfLib;
