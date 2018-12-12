import React from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';

// 基准岗位维护-树
const { TreeNode } = Tree;

class UpdPostTree extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  onCheck = (checkedKeys, info) => {
    const checkKeys = [...checkedKeys, ...info.halfCheckedKeys];
    console.log('checkKeys:', checkKeys);
  };

  render() {
    const { handleCheckTreeNode } = this.props;
    return (
      <div>
        <div><p>关键职责库</p></div>
        <div style={{
          height: 480, border: 10, borderColor: 'blue', overflowY: 'scroll', overflowX: 'scroll',
        }}
        >
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0', '0-0-0', '0-0-1']}
            defaultCheckedKeys={[]}
            onSelect={this.onSelect}
            onCheck={handleCheckTreeNode}
          >
            <TreeNode title="支撑序列.综合行政与后勤.后勤管理与服务" key="0-0" value="ddsa" postId="aa" disabled>
              <TreeNode title="实物资产管理" key="0-0-0" value="实物资产管理" postId="aa11">
                <TreeNode title="低值实物日常的资产管理" value="实物资产管理.低值实物日常的资产管理" key="0-0-0-0" postId="aa1101" />
                <TreeNode title="办公楼内标识系统的更新和维护" value="实物资产管理.办公楼内标识系统的更新和维护" key="0-0-0-1" postId="aa1102" />
              </TreeNode>
              <TreeNode title="土地房屋管理" key="0-0-1" value="土地房屋管理" postId="aa12">
                <TreeNode title="房屋管理1" value="土地房屋管理.房屋管理1" key="0-0-1-0" postId="aa1201" />
                <TreeNode title="房屋管理2" value="土地房屋管理.房屋管理2" key="0-0-1-1" postId="aa1202" />
                <TreeNode title="房屋管理3" value="土地房屋管理.房屋管理3" key="0-0-1-2" postId="aa1203" />
              </TreeNode>
              <TreeNode title="区/县公司后勤管理" key="0-0-2" value="土地房屋管理" postId="aa33">
                <TreeNode title="后勤管理1" value="区/县公司后勤管理.房屋管理1" key="0-0-2-0" postId="aa3301" />
                <TreeNode title="后勤管理2" value="区/县公司后勤管理.房屋管理2" key="0-0-2-1" postId="aa3302" />
              </TreeNode>
              <TreeNode title="子公司后勤服务" key="0-0-3" value="子公司后勤服务" postId="aa44">
                <TreeNode title="子公司1" value="子公司后勤服务.子公司1" key="0-0-3-0" postId="aa4401" />
                <TreeNode title="子公司2" value="子公司后勤服务.子公司2" key="0-0-3-1" postId="aa4402" />
              </TreeNode>
              <TreeNode title="物业安全管理" key="0-0-4" value="物业安全管理" postId="aa55">
                <TreeNode title="物业管理1" value="物业安全管理.物业管理1" key="0-0-4-0" postId="aa5501" />
                <TreeNode title="物业管理2" value="物业安全管理.物业管理2" key="0-0-4-1" postId="aa5502" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
      </div>
    );
  }
}

UpdPostTree.propTypes = {
  handleCheckTreeNode: PropTypes.func.isRequired,
};

export default UpdPostTree;
