/* eslint-disable */
import { Form, Button, Col, Row, Input, Select, DatePicker, Radio, Icon, Checkbox } from 'antd';
import SyncTreeSelect from '../../../components/sync-tree-select';

const { Option } = Select;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
let id = 0;

export default (props) => {
  const {
    form,
    actions,
    userName,
    isShowPostSeat,
    curxLabel,
    checkedOne,
    disInputOne,
    checkedTwo,
    disInputTwo,
    checkedThree,
    disInputThree,
    checkedFour,
    disInputFour,
  } = props;
  console.log(props);
  const { getInstructions, closeInsDrawer, userNameEmpty, changeUserName, isShowPost, onchangeDisInputOne, onchangeDisInputTwo, onchangeDisInputThree, onchangeDisInputFour, } = actions;
  const SerialNumberChildren = [];
  const ProfessionChildren = [];
  const GradeChildren = [];
  const data3 = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < data3.length; i += 1) {
    SerialNumberChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  for (let i = 0; i < data3.length; i += 1) {
    ProfessionChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  for (let i = 0; i < data3.length; i += 1) {
    GradeChildren.push(<Option key={data3[i]}>{ data3[i] }</Option>);
  }
  const queryCols = [
    {
      itemName: '岗位名称',
      itemKey: 'gtest_def1', 
      itemType: 'String',
      required: true,
    },
    {
      itemName: '所在部门',
      itemKey: 'gtest_def2',
      itemType: 'TreeSelect',
      required: true,
    },
    {
      itemName: '岗位序列',
      itemKey: 'gtest_def2',
      itemType: 'String',
      required: true,
    },
    {
      itemName: '对应职衔',
      itemKey: 'GATTRIBUTE6',
      itemType: 'Select',
      required: false,
      list: [{ id: '0', title: '书记' }, { id: '1', title: '副书记' }, { id: '2', title: '主席' }, { id: '3', title: '副主席' }, { id: '4', title: '总经理' }],
    },
    {
      itemName: '对应职位等级（等级带宽）',
      itemKey: 'gRespName',
      itemType: 'SelectTwo',
      required: false,
      list: [{ id: '0', title: 1 }, { id: '1', title: 2 }, { id: '2', title: 3 }, { id: '3', title: 4 }, { id: '4', title: 5 }, { id: '5', title: 6 }],
      listTwo: [{ id: '0', title: 1 }, { id: '1', title: 2 }, { id: '2', title: 3 }, { id: '3', title: 4 }, { id: '4', title: 5 }, { id: '5', title: 6 }],
    },
    {
      itemName: '编制',
      itemKey: 'gdef4',
      itemType: 'String',
      required: false,
    },
    {
      itemName: '有效开始日期',
      itemKey: 'gdef5',
      itemType: 'Date',
      required: true,
    },
    {
      itemName: '有效结束日期',
      itemKey: 'gdef6',
      itemType: 'Date',
      required: false,
    },
  ];
  const closeDrawer = (e) => {
    e.preventDefault();
    closeInsDrawer();
  };
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };
  const handleReset = () => {
    form.resetFields();
  }
  const emitEmpty = () => {
    userNameEmpty();
  }
  const isShowPostS = (isShowPostSeat) => {
    isShowPost(props.isShowPostSeat);
  }
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
  const onChangeUserName = (e) => {
    console.log(e);
    changeUserName(e);
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
  function getFields() {
    const { getFieldDecorator } = form;
    const children = [];
    for (let i = 0; i < queryCols.length; i += 1) {
      if (queryCols[i].itemType === 'String') {
        children.push(
          <Col span={8} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <Input placeholder="请输入" prefix={<Icon type="check-square" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={suffix} setFieldsValue={userName} onChange={onChangeUserName} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'TreeSelect') {
        children.push(
          <Col span={8} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <SyncTreeSelect showSearch={false} />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Select') {
        children.push(
          <Col span={8} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <Select placeholder="请选择" allowClear>
                  {
                    queryCols[i].list.map(apply)
                  }
                </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'SelectTwo') {
        children.push(
          <Col span={8} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey)(
                <span><Select placeholder="请选择" allowClear style={{ width: 99 }}>{queryCols[i].list.map(apply)}</Select>至<Select placeholder="请选择" allowClear style={{ width: 99 }}>{queryCols[i].listTwo.map(apply)}</Select></span>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryCols[i].itemType === 'Date') {
        children.push(
          <Col span={8} key={i} style={{ display: 'block' }}>
            <FormItem label={queryCols[i].itemName}>
              {getFieldDecorator(queryCols[i].itemKey, {
                rules: [{
                  required: queryCols[i].required,
                  message: '不能为空!',
                }],
              })(
                <DatePicker />,
              )}
            </FormItem>
          </Col>,
        );
      }
    }
    return children;
  }

  const suffix = userName ? <Icon type="close-circle" onClick={emitEmpty}  style={{ color: 'rgba(0,0,0,.25)' }} /> : null;
  const { getFieldDecorator, getFieldValue } = props.form;
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
          <span><Select placeholder="请选择" allowClear  style={{ position: 'absolute', width: '118px', left: '-26%', marginTop: '4px' }}>{SerialNumberChildren}</Select><Input placeholder="" style={{ width: '66.6%', marginRight: 8, position: 'relative' }} suffix={<Icon type="check-square" style={{ color: 'rgba(0,0,0,.25)' }} />} /></span>
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
        <Form className="ant-advanced-search-form-second">
          <Row gutter={24}>{getFields()}</Row>
        </Form>
        <div className="open-post-seat"><Button type="primary" onClick={isShowPostS}>岗位在内部价值链中所属位置</Button></div>
        <div className={isShowPostSeat}>
          岗位在内部价值链中所属位置：<b>（非必填项）</b>
          <table>
            <tr className="double-tr"><td className="double-td"></td><td></td><td className="double-td">上级岗位</td><td></td><td className="double-td"></td></tr>
            <tr><td className="double-td"></td><td></td><td className="double-td"><Input className="input-border" /></td><td></td><td className="double-td"></td></tr>
            <tr className="double-tr"><td className="double-td"></td><td></td><td className="double-td td-arrow-bottom"></td><td></td><td className="double-td"></td></tr>
            <tr>
              <td className="double-td"><Input className="input-border" /></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border" /></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border" /></td>
            </tr>
            <tr className="double-tr"><td className="double-td">上游岗位</td><td></td><td className="double-td td-arrow-bottom"></td><td></td><td className="double-td">下游岗位</td></tr>
            <tr><td className="double-td"></td><td></td><td className="double-td"><Input className="input-border" /></td><td></td><td className="double-td"></td></tr>
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
          <Button style={{ marginRight: 8, }} onClick={closeDrawer} type="primary">返回</Button>
          <Button onClick={closeDrawer}>保存</Button>
        </div>
      </div>
  );
};
