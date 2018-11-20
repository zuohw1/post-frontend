import React from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';

// 基准岗位维护-树
const { TreeNode } = Tree;

class UpdPostTree extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  onCheck = (checkedKeys, info) => {
    const checkKeys = [...checkedKeys, ...info.halfCheckedKeys];
    // console.log('选择节点', info.checked, info.node.props.title, info.node.props.pos);
    console.log('checkKeys:', checkKeys);
    console.log('onCheck', checkedKeys, info);
  }

  render() {
    const { handleCheckTreeNode } = this.props;
    return (
      <div>
        <p>关键职责库</p>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={handleCheckTreeNode}
        >
          <TreeNode title="支撑序列.综合行政与后勤.后勤管理与服务" key="0-0" value="ddsa">
            <TreeNode title="实物资产管理" key="0-0-0">
              <TreeNode title="低值实物资产的日常管理" key="0-0-0-0" />
              <TreeNode title="办公楼内标识系统的更新维护" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="土地房屋管理" key="0-0-1">
              <TreeNode title="土地1" key="0-0-1-0" />
              <TreeNode title="土地2" key="0-0-1-1" />
            </TreeNode>
            <TreeNode title="区/县公司后勤管理" key="0-0-2">
              <TreeNode title="后勤1" key="0-0-2-0" />
              <TreeNode title="后勤2" key="0-0-2-1" />
            </TreeNode>
            <TreeNode title="区/子公司后勤服务" key="0-0-3">
              <TreeNode title="子公司1" key="0-0-3-0" />
              <TreeNode title="子公司2" key="0-0-3-1" />
            </TreeNode>
            <TreeNode title="parent 0-0-4" key="0-0-4">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-4-0" />
            </TreeNode>
          </TreeNode>
        </Tree>


      </div>
    );
  }
}

UpdPostTree.propTypes = {
  handleCheckTreeNode: PropTypes.func.isRequired,
};

export default UpdPostTree;
