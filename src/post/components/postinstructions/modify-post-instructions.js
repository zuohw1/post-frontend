/* eslint-disable */
import { Form, Button, Input, Radio, Checkbox, Select, DatePicker, Icon, Modal, } from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';
import SearchTable from '../../../components/search-table';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
let id = 0;

export default (props) => {
  const { form, actions, comments, checkedOne, disInputOne, checkedTwo, disInputTwo, checkedThree, disInputThree, checkedFour, disInputFour, InstructionsModal, refSelectData, } = props;
  const { closeModifyPost, onchangeDisInputOne, onchangeDisInputTwo, onchangeDisInputThree, onchangeDisInputFour, getInstructions, closeInstructions } = actions;
  const { getFieldDecorator, getFieldValue } = form;
  const data3 = [1,2,3,4,5,6,7,8];
  const PostSequenceChildren = [];
  for (let i = 0; i < data3.length; i += 1) {
    PostSequenceChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const ProfessionChildren = [];
  for (let i = 0; i < data3.length; i += 1) {
    ProfessionChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const GradeChildren = [];
  for (let i = 0; i < data3.length; i += 1) {
    GradeChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const SerialNumberChildren = [];
  for (let i = 0; i < data3.length; i += 1) {
    SerialNumberChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const ResponseChildren = [];
  for (let i = 0; i < data3.length; i += 1) {
    ResponseChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const chooseColumns = [{
    title: '关键职责名称',
    dataIndex: 'KeyResponsibilities',
    key: 'KeyResponsibilities',
    align: 'left',
  }];
  const rowSelection = {
    type: 'radio',
  };
  const refUrl = 'orgHeaderBatch/list';
  const handleChangeResponse = (value) => {
    console.log(`selected ${value}`);
  }
  const InstructionsSubmit = (e) => {
    e.preventDefault();
    closeInstructions();
  };
  const InstructionsCancel = (e) => {
    e.preventDefault();
    closeInstructions();
  };
  const onInstructionsView = () => {
    getInstructions();
  };
  const changeDisInputOne = (checkedOne) => {
    console.log(8888);
    onchangeDisInputOne(props.checkedOne);
  }
  const changeDisInputTwo = (checkedTwo) => {
    console.log(8888);
    onchangeDisInputTwo(props.checkedTwo);
  }
  const changeDisInputThree = (checkedThree) => {
    console.log(8888);
    onchangeDisInputThree(props.checkedThree);
  }
  const changeDisInputFour = (checkedFour) => {
    console.log(8888);
    onchangeDisInputFour(props.checkedFour);
  }
  const remove = (k) => {
    const { form } = props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }
  const add = () => {
    var oCruxDuty = document.getElementsByClassName("crux-duty-top");
    console.log(oCruxDuty);
    for(var i = 0; i < oCruxDuty[0].classList.length; i ++ ){
      if(oCruxDuty[0].classList[i] === "crux-duty-top-hide"){
        oCruxDuty[0].classList.remove("crux-duty-top-hide") ;
      }
    }
    const { form } = props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
  getFieldDecorator('keys', { initialValue: [] });
  const keys = getFieldValue('keys');
  const formItems = keys.map((k, index) => {
    return (
      <FormItem
        {...(index === 0 ? formItemLayoutWithOutLabel : formItemLayoutWithOutLabel)}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: false,
            whitespace: true,
            message: "Please input passenger's name or delete this field.",
          }],
        })(
          <span><Select placeholder="请选择" allowClear  style={{ position: 'absolute', width: '118px', left: '-26%', marginTop: '4px' }}>{SerialNumberChildren}</Select><Input placeholder="" style={{ width: '66.6%', marginRight: 8, position: 'relative' }} suffix={<Icon type="check-square" style={{ color: 'rgba(0,0,0,.25)' }}  onClick={onInstructionsView} />} /></span>
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => remove(k)}
          />
        ) : null}
      </FormItem>
    );
  });
  return (
      <div>
        <Modal
          title="选择框"
          onOk={InstructionsSubmit}
          onCancel={InstructionsCancel}
          maskClosable={false}
          destroyOnClose
          width={760}
          visible={InstructionsModal}
          centered
          className="instructions-model"
        >
          <div className="instructions-model-top">
            <span className="instructions-model-top-one">专业：<Select style={{ width: 200, marginRight: '60px' }} onChange={handleChangeResponse}>{ResponseChildren}</Select></span>
          <span className="instructions-model-top-two"><span>名称：</span><Input /></span>
          <span className="instructions-model-top-three"><Button type="primary" icon="search">查询</Button></span>
          </div>
          <SearchTable
            columns={chooseColumns}
            refUrl={refUrl}
            rowSelection={rowSelection}
            refSelectData={refSelectData}
            className="table-search-choose"
          />
        </Modal>
        <div className="check-post-content">
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">岗位名称：<Input style={{ width: 316,marginRight: 8 }} readonly="readonly" value="固网技术支撑（阿克苏县分)"/></div>
            <div className="check-post-content-line-right">所在部门：<SyncTreeSelect showSearch={false} style={{ width: 316,marginRight: 8 }}/></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">岗位序列：<Select placeholder="请选择" allowClear style={{ width: 316,marginRight: 8 }}>{PostSequenceChildren}</Select></div>
            <div className="check-post-content-line-right">对应职衔：<Select placeholder="请选择" allowClear style={{ width: 316,marginRight: 8 }}>{PostSequenceChildren}</Select></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">对应职位等级（等级带宽）：<Select placeholder="3" allowClear style={{ width: 90,marginRight: 8 }}>{PostSequenceChildren}</Select>至<Select placeholder="8" allowClear style={{ width: 90,marginRight: 8 }}>{PostSequenceChildren}</Select></div>
            <div className="check-post-content-line-right">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制：<Input style={{ width: 316,marginRight: 8 }} readonly="readonly"/></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">有效开始日期：<DatePicker placeholder="2016-09-01" style={{ width: 286,marginRight: 8 }} /></div>
            <div className="check-post-content-line-right">有效结束日期：<DatePicker placeholder="2016-12-01" style={{ width: 286,marginRight: 8 }} /></div>
          </div>
        </div>
        <div className="post-seat" style={{ borderBottom: "1px solid #d9d9d9" }}>
          岗位在内部价值链中所属位置：<b>（非必填项）</b>
          <table>
            <tr className="double-tr"><td className="double-td"></td><td></td><td className="double-td">上级岗位</td><td></td><td className="double-td"></td></tr>
            <tr><td className="double-td"></td><td></td><td className="double-td"><Input className="input-border" /></td><td></td><td className="double-td"></td></tr>
            <tr className="double-tr"><td className="double-td"></td><td></td><td className="double-td td-arrow-bottom"></td><td></td><td className="double-td"></td></tr>
            <tr>
              <td className="double-td"><Input className="input-border"/></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border" value="固网技术支撑（阿克苏县分）" readonly="readonly"/></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border"/></td>
            </tr>
            <tr className="double-tr"><td className="double-td">上游岗位</td><td></td><td className="double-td td-arrow-bottom"></td><td></td><td className="double-td">下游岗位</td></tr>
            <tr><td className="double-td"></td><td></td><td className="double-td"><Input className="input-border"/></td><td></td><td className="double-td"></td></tr>
            <tr className="double-tr"><td className="double-td"></td><td></td><td className="double-td">下级岗位</td><td></td><td className="double-td"></td></tr>
          </table>
        </div>
        <div className="add-crux-duty"><span>主要岗位职责：</span><Button type="primary" onClick={add}>增加关键职责</Button></div>
        <div className="crux-duty">
          <div className="crux-duty-top crux-duty-top-hide">
            <div className="crux-duty-one">序号</div>
            <div className="crux-duty-two">关键职责</div>
            <div className="crux-duty-three">操作</div>
          </div>
          <div className="crux-duty-bottom">
            {formItems} 
          </div>
        </div>
        <div className="qualification-requirement">
          任职资格最低要求（包括但不限于以下选项）：<b>（非必填项）</b>
          <Form>
            <FormItem label="1、最低对口学历学位：">
              {getFieldDecorator('radio-group')(
                <RadioGroup>
                  <Radio value="a">博士</Radio>
                  <Radio value="b">硕士研究生（硕士学位）</Radio>
                  <Radio value="c">本科（学士学位）</Radio>
                  <Radio value="d">专科</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="2、">
                <div className="professional-knowledge">
                  专业知识：<Input style={{ width: 110,marginRight: 8 }} />
                  专业知识学科：<Input style={{ width: 110,marginRight: 8 }} />
                  各学科知识掌握程度：<Input style={{ width: 110,marginRight: 8 }} />
                </div>
            </FormItem>
            <FormItem label="3、">
                <div className="professional-skills">
                  专业技能：<Input style={{ width: 110,marginRight: 8 }} />
                  专业技能种类：<Input style={{ width: 110,marginRight: 8 }} />
                  各种技能类掌握程度：<Input style={{ width: 110,marginRight: 8 }} />
                </div>
            </FormItem>
            <FormItem label="4、">
                <div>
                  年龄上限：<Input style={{ width: 110 }} /> 周岁，年龄下限<Input style={{ width: 110 }} />周岁
                </div>
            </FormItem>
            <FormItem label="5、对口专业工作经验：">
                <div className="professional-experience">
                  <div className="professional-experience-one">
                    1、工作层面：
                    <Checkbox checked={checkedOne} onChange={changeDisInputOne}></Checkbox>集团
                    <Checkbox checked={checkedTwo} onChange={changeDisInputTwo}></Checkbox>省公司
                    <Checkbox checked={checkedThree} onChange={changeDisInputThree}></Checkbox>市公司
                    <Checkbox checked={checkedFour} onChange={changeDisInputFour}></Checkbox>不限层面
                  </div>
                  <div className="professional-experience-two">
                    各层面工作年限：集团<Input style={{ width: 66 }} disabled={disInputOne} />年， 
                    省公司<Input style={{ width: 66 }} disabled={disInputTwo} />年，
                    市公司<Input style={{ width: 66 }} disabled={disInputThree} />年，
                    不限层面<Input style={{ width: 66 }} disabled={disInputFour} />年
                   </div>
                </div>
            </FormItem>
            <FormItem label="6、国家规定的职业（执业）资格证书及等级要求："> 
              <div className="profession-grade">
                工种：<Select placeholder="请选择" allowClear style={{ width: 133, marginRight:16 }}>{ProfessionChildren}</Select>
                等级：<Select placeholder="请选择" allowClear style={{ width: 133 }}>{GradeChildren}</Select>
              </div>
            </FormItem>
            <FormItem label="7、专业技术职务："> 
              <div className="skills-duty">
                专业技术职务：<Select placeholder="请选择" allowClear style={{ width: 133, marginRight:16 }}>{ProfessionChildren}</Select>
                等级：<Select placeholder="请选择" allowClear style={{ width: 133 }}>{GradeChildren}</Select>
              </div>
            </FormItem>
            <FormItem label="8、本企业专业资格："> 
              <div className="professional-qualifications">
                专业：<Select placeholder="请选择" allowClear style={{ width: 133, marginRight:16 }}>{ProfessionChildren}</Select>
                等级：<Select placeholder="请选择" allowClear style={{ width: 133 }}>{GradeChildren}</Select>
              </div>
            </FormItem>
            <FormItem label="9、其他："> 
              <TextArea rows={4} style={{ width: "100%", height: "66px" }} />
            </FormItem>
            <FormItem>
              <div className="achievement-target">
                关键业绩指标：<b>（非必填项）</b>
                <TextArea rows={4} style={{ width: "100%", height: "66px" }} />
              </div>
            </FormItem>
          </Form>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
          <Button style={{ marginRight: 8, }} onClick={closeModifyPost} type="primary">返回</Button>
          <Button onClick={closeModifyPost}>更新</Button>
        </div>
      </div>
  );
};
