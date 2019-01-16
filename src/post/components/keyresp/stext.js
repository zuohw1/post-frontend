import React from 'react';
import { Input, Modal, Popconfirm } from 'antd';
import RespSelect from './resp-select';
// import RespSelect from './respselect/index';
import Styles from '../assets/styles/key-resp-stext.less';
import request from '../../../utils/request';

class SText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      respSelectVisiable: false,
      clickRespName: '', // 选中职责
      clickRespId: '', // 选中职责id
      tableData: [], // 所属字段可选值
    };
  }

  handleReSet = (form, dataIndex) => {
    console.log('重置handleReSet（）-', dataIndex);
    const { record } = this.props;
    if (dataIndex === 'parentName_two') {
      form.setFieldsValue({
        parentName_two: '',
        parentId: '',
      });
      record.parentName_two = '';
      record.parentId = '';
    } else if (dataIndex === 'parentName_three') {
      form.setFieldsValue({
        parentName_three: '',
        parentId: '',
      });
      record.parentName_three = '';
      record.parentId = '';
    } else if (dataIndex === 'parentName_four') {
      form.setFieldsValue({
        parentName_four: '',
        parentId: '',
      });
      record.parentName_four = '';
      record.parentId = '';
    } else if (dataIndex === 'parentName_five') {
      form.setFieldsValue({
        parentName_five: '',
        parentId: '',
      });
      record.parentName_five = '';
      record.parentId = '';
    }
    console.log('form.getFieldsValue()', form.getFieldsValue());
  }

  handleChange = (dataIndex, respType, e) => {
    const { form, record } = this.props;
    console.log(form, record, e);
    // if (dataIndex === 'ssPostName') {
    //   this.setState({ ssPostName: e.target.value });
    //   form.setFieldsValue({
    //     ssPostName: e.target.value,
    //   });
    //   record.ssPostName = e.target.value;
    // } else if (dataIndex === 'ssZxlName') {
    //   this.setState({ ssZxlName: e.target.value });
    //   form.setFieldsValue({
    //     ssZxlName: e.target.value,
    //   });
    //   record.ssZxlName = e.target.value;
    // } else if (dataIndex === 'ssZyName') {
    //   this.setState({ ssZyName: e.target.value });
    //   form.setFieldsValue({
    //     ssZyName: e.target.value,
    //   });
    //   record.ssZyName = e.target.value;
    // } else if (dataIndex === 'ssGjzzName') {
    //   this.setState({ ssGjzzName: e.target.value });
    //   form.setFieldsValue({
    //     ssGjzzName: e.target.value,
    //   });
    //   record.ssGjzzName = e.target.value;
    // } else if (dataIndex === 'ssGjzzNameN') {
    //   this.setState({ ssGjzzNameN: e.target.value });
    //   form.setFieldsValue({
    //     ssGjzzNameN: e.target.value,
    //   });
    //   record.ssGjzzNameN = e.target.value;
    // }
  }

  showRespParentSelect = (respType) => {
    const pageSize = 10;
    const pageNumber = 1;
    const select = {
      pageSize, pageNumber, respType,
    };
    this.getRespSelectData(select);
  }

  /* 格式化table数据 */
  formatTableData = (tableData, pageNum, pageSize) => {
    const num = pageNum * pageSize - pageSize;
    const table = tableData.list.map((item, index) => {
      const ite = { ...item, key: index + 1 + num };
      return ite;
    });
    const formatTable = {
      ...tableData,
      records: table,
      total: tableData.count,
      size: pageSize,
      current: pageNum,
    };
    return formatTable;
  };

  /* 获取岗位序列等各层级的数据 */
  getRespSelectData = (search) => {
    let url = `posVer/lev?versionId=1&elementType=${search.respType}&currentPageNum=${search.pageNumber}&recordNum=${search.pageSize}`;
    if (search.posCateName && search.posCateName !== '') { // 岗位序列名称
      url += `&posCateName=${search.posCateName}`;
    }
    if (search.posSubCateName && search.posSubCateName !== '') { // 子序列名称
      url += `&posSubCateName=${search.posSubCateName}`;
    }
    if (search.majorName && search.majorName !== '') { // 专业名称
      url += `&majorName=${search.majorName}`;
    }
    if (search.keyDutyName && search.keyDutyName !== '') { // 关键职责名称
      url += `&keyDutyName=${search.keyDutyName}`;
    }
    let tableDataNew;
    request.get(url).then((data) => {
      tableDataNew = data.list;
      tableDataNew = this.formatTableData(data, search.pageNumber, search.pageSize);
      setTimeout(() => {
        this.setState({
          tableData: tableDataNew,
          respSelectVisiable: true,
        });
      }, 0);
    }, (error) => {
      console.log(error);
    });
  }


  /* 将选择的值放回 */
  handleRespSelect = (recordSel) => {
    const { resptype } = this.props; // ,form, record, clickRespName, clickRespId
    return {
      onClick: () => {
        let clickRespNameVal = '';
        let clickRespIdVal = '';
        if (resptype === 10) {
          clickRespIdVal = recordSel.topCateId;
          clickRespNameVal = recordSel.posCateName;
        } else if (resptype === 20) {
          clickRespIdVal = recordSel.posCateID;
          clickRespNameVal = recordSel.posSubCateName;
        } else if (resptype === 30) {
          clickRespIdVal = recordSel.majorId;
          clickRespNameVal = recordSel.majorName;
        } else if (resptype === 40) {
          clickRespIdVal = recordSel.keyDutyId;
          clickRespNameVal = recordSel.keyDutyName;
        } else if (resptype === 50) {
          clickRespIdVal = recordSel.keyDutyId;
          clickRespNameVal = recordSel.keyDutyName;
        }
        this.setState({ clickRespName: clickRespNameVal, clickRespId: clickRespIdVal });
      },
    };
  };

  handleOk = () => {
    const { resptype, form, record } = this.props;
    const { clickRespName, clickRespId } = this.state;

    if (resptype === 10) {
      form.setFieldsValue({
        parentName_two: clickRespName,
        parentId: clickRespId,
      });
      record.parentName_two = clickRespName;
      record.parentId = clickRespId;
    } else if (resptype === 20) {
      form.setFieldsValue({
        parentName_three: clickRespName,
        parentId: clickRespId,
      });
      record.parentId = clickRespId; // attribute11 ?
      record.parentName_three = clickRespName;
    } else if (resptype === 30) {
      form.setFieldsValue({
        parentName_four: clickRespName,
        parentId: clickRespId,
      });
      record.parentId = clickRespId;
      record.parentName_four = clickRespName;
    } else if (resptype === 40) {
      form.setFieldsValue({
        parentId: clickRespId,
        parentName_five: clickRespName,
      });
      record.parentId = clickRespId;
      record.parentName_five = clickRespName;
    }
    this.setState({
      respSelectVisiable: false,
    });
  };

  handleCancel = () => {
    this.setState({
      respSelectVisiable: false,
    });
  };

  setRespRowClassName = (record) => {
    const { clickRespId } = this.state;// clickRespName
    return record.key === clickRespId ? Styles.clickRowStyl : '';
  }

  render() {
    const {
      // posCateName, ssZxlName, ssZyName, ssGjzzName, clickRespName,
      respSelectVisiable, tableData,
    } = this.state;
    const {
      form, resptype, dataIndex, value, // record,
    } = this.props;

    const ssValue = value;
    let respSelectDivName = '';
    if (dataIndex === 'parentName_two') {
      respSelectDivName = '岗位序列';
    } else if (dataIndex === 'parentName_three') {
      respSelectDivName = '子序列';
    } else if (dataIndex === 'parentName_four') {
      respSelectDivName = '专业';
    } else if (dataIndex === 'parentName_five') {
      respSelectDivName = '关键职责';
    }
    // 不能直接用 record[dataIndex] 的值，因为修改没有更新节点的state，这样重置之后不会变
    return (
      <div>
        <Input
          value={ssValue}
          style={{ width: 160 }}
          onChange={this.handleChange.bind(this, dataIndex, resptype)}
        />
        &nbsp;&nbsp;
        <Popconfirm title="是否重置?" onConfirm={() => this.handleReSet(form, dataIndex)}>
          <a href="jacascript:void(0);">重置</a>
        </Popconfirm>
        &nbsp;&nbsp;
        <a href="jacascript:void(0);" onClick={this.showRespParentSelect.bind(this, resptype)}>请选择</a>
        <Modal
          title={respSelectDivName}
          visible={respSelectVisiable}
          width={1000}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ height: 500 }}>
            <RespSelect
              resptype={resptype}
              tableData={tableData}
              respSelectDivName={respSelectDivName}
              getRespSelectData={this.getRespSelectData}
              handleRespSelect={this.handleRespSelect}
              setRespRowClassName={this.setRespRowClassName}
            />
          </div>
        </Modal>
      </div>
    );
  }
}
export default SText;
