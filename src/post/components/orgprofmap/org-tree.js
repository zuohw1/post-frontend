import React from 'react';
import { Tree, Card } from 'antd';

const { TreeNode } = Tree;
// const orgtree = [{
//   title: '中国联合网络通信集团有限公司',
//   children: [
//     {
//       title: '中国联通总部管理部门',
//       children: [
//         {
//           title: '中国联通总部-管理层',
//           children: [
//               title: '中国联通总部-管理层-集团公司领导',
//               title: '中国联通总部-管理层-科技委办公室主任',
//               children: [],
//             },
//             {
//               title: '中国联通总部-管理层-运营公司领导',
//               children: [],
//             },
//           ],
//         },
//         {
//           title: '中国联通总部-办公厅',
//           children: [],
//         },
//         {
//           title: '中国联通总部-综合部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-财务部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-人力资源部（党组织部）',
//           children: [],
//         },
//         {
//           title: '中国联通总部-人力资源部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-市场部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-政企客户事业部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-国际业务部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-客户服务部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-技术部',
//           children: [],
//         },
//         {
//           title: '中国联通总部-物资采购与管理',
//           children: [],
//         },
//       ],
//     },
//   ],
// }];
let vFlag = true;
const OrgTree = ({ actions, orgTree }) => {
  const { getOrgTree } = actions;
  console.log(333, actions);
  if (vFlag) {
    getOrgTree();
    vFlag = false;
  }
  const onLoadData = treeNode => new Promise((resolve) => {
    console.log(33333, treeNode);
    if (treeNode.props.children) {
      resolve();
      return;
    }
    const { dataRef } = treeNode.props;
    console.log(22222, dataRef);
    // getLeftCardTree(dataRef, leftCardTree);
    resolve();
  });
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

  return (
    <Card title="组织树">
      <Tree
        showLine
        loadData={onLoadData}
      >
        {renderTreeNodes(orgTree)}
      </Tree>
    </Card>
  );
};
export default OrgTree;
