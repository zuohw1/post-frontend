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
    console.log('onCheck', checkedKeys, info);
    // console.log('选择节点', info.checked, info.node.props.title, info.node.props.pos);
    console.log('checkKeys:', checkKeys);
  }

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
                <TreeNode title="低值实物资产的日常管理" key="0-0-0-0" value="实物资产管理.低值实物资产的日常管理" postId="aa1101" />
                <TreeNode title="办公楼内标识系统的更新维护" key="0-0-0-1" value="实物资产管理.办公楼内标识系统的更新维护" postId="aa1102" />
              </TreeNode>
              <TreeNode title="土地房屋管理" key="0-0-1" value="土地房屋管理" postId="aa12">
                <TreeNode title="土地1" key="0-0-1-0" value="土地房屋管理.土地1" postId="aa1201" />
                <TreeNode title="土地2" key="0-0-1-1" value="土地房屋管理.土地2" postId="aa1202" />
                <TreeNode title="土地3" key="0-0-1-2" value="土地房屋管理.土地3" postId="aa1203" />
              </TreeNode>
              <TreeNode title="区/县公司后勤管理" key="0-0-2" value="区/县公司后勤管理" postId="aa13">
                <TreeNode title="后勤1" key="0-0-2-0" value="区/县公司后勤管理.后勤1" postId="aa1301" />
                <TreeNode title="后勤2" key="0-0-2-1" value="区/县公司后勤管理.后勤2" postId="aa1302" />
              </TreeNode>
              <TreeNode title="区/子公司后勤服务" key="0-0-3" value="区/子公司后勤服务" postId="aa14">
                <TreeNode title="子公司1" key="0-0-3-0" value="区/子公司后勤服务.子公司1" postId="aa1401" />
                <TreeNode title="子公司2" key="0-0-3-1" value="区/子公司后勤服务.子公司2" postId="aa1402" />
              </TreeNode>
              <TreeNode title="parent 0-0-4" key="0-0-4" value="parent 0-0-4" postId="aa15">
                <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-4-0" value="parent 0-0-4.sss" postId="aa1501" />
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
