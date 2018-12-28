import React from 'react';
import {
  Form, Button, Input, Radio, Checkbox,
} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

export default (props) => {
  const {
    form,
    actions,
    keyRespList,
    instructions,
    checkChecked1,
    checkChecked2,
    checkChecked3,
    checkChecked4,
  } = props;
  const { closeCheckPost } = actions;
  const { getFieldDecorator } = form;
  return (
    <div>
      <div className="check-post-content">
        <div className="check-post-content-line">
          <div className="check-post-content-line-left">岗位名称：<Input style={{ width: 316, marginRight: 8 }} readOnly="readonly" value={instructions.POS_NAME} /></div>
          <div className="check-post-content-line-right">所在部门：<Input style={{ width: 316, marginRight: 8 }} readOnly="readonly" value={instructions.orgName} /></div>
        </div>
        <div className="check-post-content-line">
          <div className="check-post-content-line-left">岗位序列：<Input style={{ width: 316, marginRight: 8 }} readOnly="readonly" value={instructions.flexValue} /></div>
          <div className="check-post-content-line-right">对应职衔：<Input style={{ width: 316, marginRight: 8 }} readOnly="readonly" value={instructions.jobName} /></div>
        </div>
        <div className="check-post-content-line">
          <div className="check-post-content-line-left">对应职位等级（等级带宽）：<Input style={{ width: 90, marginRight: 8 }} readOnly="readonly" value={instructions.POS_LEVEL_LOW} />至<Input style={{ width: 90, marginRight: 8 }} readOnly="readonly" value={instructions.POS_LEVEL_HIGH} /></div>
          <div className="check-post-content-line-right">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制：<Input style={{ width: 316, marginRight: 8 }} readOnly="readonly" value={instructions.ESTABLISHMENT} /></div>
        </div>
        <div className="check-post-content-line">
          <div className="check-post-content-line-left">有效开始日期：<Input style={{ width: 286, marginRight: 8 }} readOnly="readonly" value={instructions.effetiveStartDate} /></div>
          <div className="check-post-content-line-right">有效结束日期：<Input style={{ width: 286, marginRight: 8 }} readOnly="readonly" value={instructions.effetiveEndDate} /></div>
        </div>
      </div>
      <div className="post-seat" style={{ borderBottom: '1px solid #d9d9d9' }}>
          岗位在内部价值链中所属位置：
        <table>
          <tbody>
            <tr className="double-tr">
              <td className="double-td" />
              <td />
              <td className="double-td">上级岗位</td>
              <td />
              <td className="double-td" />
            </tr>
            <tr>
              <td className="double-td" />
              <td />
              <td className="double-td"><Input className="input-border" readOnly="readonly" value={instructions.SUPERIOR_POS_NAME} /></td>
              <td />
              <td className="double-td" />
            </tr>
            <tr className="double-tr">
              <td className="double-td" />
              <td />
              <td className="double-td td-arrow-bottom" />
              <td />
              <td className="double-td" />
            </tr>
            <tr>
              <td className="double-td"><Input className="input-border" readOnly="readonly" value={instructions.VERSION_ID} /></td>
              <td className="td-arrow-right" />
              <td className="double-td"><Input className="input-border" readOnly="readonly" value={instructions.POS_NAME} /></td>
              <td className="td-arrow-right" />
              <td className="double-td"><Input className="input-border" readOnly="readonly" value={instructions.DOWNSTREAM_POS_NAME} /></td>
            </tr>
            <tr className="double-tr">
              <td className="double-td">上游岗位</td>
              <td />
              <td className="double-td td-arrow-bottom" />
              <td />
              <td className="double-td">下游岗位</td>
            </tr>
            <tr>
              <td className="double-td" />
              <td />
              <td className="double-td"><Input className="input-border" readOnly="readonly" value={instructions.INFERIOR_POS_NAME} /></td>
              <td />
              <td className="double-td" />
            </tr>
            <tr className="double-tr">
              <td className="double-td" />
              <td />
              <td className="double-td">下级岗位</td>
              <td />
              <td className="double-td" />
            </tr>
          </tbody>
        </table>
      </div>
      <div className="crux-duty" style={{ borderBottom: 0, borderRight: 0 }}>
        <div style={{
          fontSize: '15px', height: '36px', lineHeight: '36px', paddingLeft: '8px',
        }}
        >主要岗位职责：
        </div>
        <div className="crux-duty-top" style={{ borderTop: '1px solid #d9d9d9' }}>
          <div className="crux-duty-one">序号</div>
          <div className="crux-duty-two">关键职责</div>
        </div>
        <div className="crux-duty-bottom">
          {keyRespList.map(k => (
            <div className="crux-duty-bottom-comments" key={k.keyRespId}>
              <div className="crux-duty-one">{k.orderNum}</div>
              <div className="crux-duty-two">{k.mname}.{k.keyRespName}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="qualification-requirement">
        任职资格最低要求（包括但不限于以下选项）：
        <Form>
          <FormItem label="1、最低对口学历学位：">
            {getFieldDecorator('radio-group')(
              <RadioGroup>
                <Radio value="1" checked={checkChecked1}>博士</Radio>
                <Radio value="2" checked={checkChecked2}>硕士研究生（硕士学位）</Radio>
                <Radio value="3" checked={checkChecked3}>本科（学士学位）</Radio>
                <Radio value="4" checked={checkChecked4}>专科</Radio>
              </RadioGroup>,
            )}
          </FormItem>
          <FormItem label="2、">
            <div className="professional-knowledge">
                  专业知识：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_KNOWLEDGE} />
                  专业知识学科：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_KNOWLEDGE_MAJOR} />
                  各学科知识掌握程度：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_KNOWLEDGE_LEVEL} />
            </div>
          </FormItem>
          <FormItem label="3、">
            <div className="professional-skills">
                  专业技能：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_SKILL} />
                  专业技能种类：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_SKILL_CATE} />
                  各种技能类掌握程度：<Input style={{ width: 110, marginRight: 8 }} readOnly="readonly" value={instructions.PRO_SKILL_LEVEL} />
            </div>
          </FormItem>
          <FormItem label="4、">
            <div>
                  年龄上限：<Input style={{ width: 110 }} readOnly="readonly" value={instructions.AGE_HIGH} /> 周岁，年龄下限<Input style={{ width: 110 }} readOnly="readonly" value={instructions.AGE_LOW} />周岁
            </div>
          </FormItem>
          <FormItem label="5、对口专业工作经验：">
            <div className="professional-experience">
              <div className="professional-experience-one">
                    1、工作层面：
                <Checkbox disabled />集团
                <Checkbox disabled />省公司
                <Checkbox disabled />市公司
                <Checkbox disabled />不限层面
              </div>
              <div className="professional-experience-two">
                    各层面工作年限：集团<Input style={{ width: 66 }} readOnly="readonly" value={instructions.JOB_LEVEL_JT_YEAR} />年，
                    省公司<Input style={{ width: 66 }} readOnly="readonly" value={instructions.JOB_LEVEL_S_YEAR} />年，
                    市公司<Input style={{ width: 66 }} readOnly="readonly" value={instructions.JOB_LEVEL_DS_YEAR} />年，
                    不限层面<Input style={{ width: 66 }} readOnly="readonly" value={instructions.JOB_LEVEL_NOLIMIT_YEAR} />年
              </div>
            </div>
          </FormItem>
          <FormItem label="6、国家规定的职业（执业）资格证书及等级要求：">
            <div className="profession-grade">
                工种：<Input style={{ width: 133, marginRight: 16 }} readOnly="readonly" value={instructions.jobCateName} />
                等级：<Input style={{ width: 133 }} readOnly="readonly" value={instructions.jobCateLevelName} />
            </div>
          </FormItem>
          <FormItem label="7、专业技术职务：">
            <div className="skills-duty">
                专业技术职务：<Input style={{ width: 133, marginRight: 16 }} readOnly="readonly" value={instructions.postName} />
                等级：<Input style={{ width: 133 }} readOnly="readonly" value={instructions.postLevelName} />
            </div>
          </FormItem>
          <FormItem label="8、本企业专业资格：">
            <div className="professional-qualifications">
                专业：<Input style={{ width: 133, marginRight: 16 }} readOnly="readonly" value={instructions.proQualificationName} />
                等级：<Input style={{ width: 133 }} readOnly="readonly" value={instructions.proQualificationLevelName} />
            </div>
          </FormItem>
          <FormItem label="9、其他：">
            <TextArea rows={4} style={{ width: '100%', height: '66px' }} readOnly="readonly" value={instructions.OTHER_DEMAND} />
          </FormItem>
          <FormItem>
            <div className="achievement-target">
                关键业绩指标：
              <TextArea rows={4} style={{ width: '100%', height: '66px' }} readOnly="readonly" value={instructions.KPI} />
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
        <Button onClick={closeCheckPost}>打印</Button>
      </div>
    </div>
  );
};
