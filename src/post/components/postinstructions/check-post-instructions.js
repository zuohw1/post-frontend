/* eslint-disable */
import React from 'react';
import { Form, Button, Input, Radio, Checkbox, } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

export default (props) => {
  const { form, actions, comments, } = props;
  const { closeCheckPost, } = actions;
  const { getFieldDecorator } = form;
  return (
      <div>
        <div className="check-post-content">
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">岗位名称：<Input style={{ width: 316,marginRight: 8 }} readOnly="readonly" value=""/></div>
            <div className="check-post-content-line-right">所在部门：<Input style={{ width: 316,marginRight: 8 }} readOnly="readonly" value=""/></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">岗位序列：<Input style={{ width: 316,marginRight: 8 }} readOnly="readonly" value=""/></div>
            <div className="check-post-content-line-right">对应职衔：<Input style={{ width: 316,marginRight: 8 }} readOnly="readonly" value=""/></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">对应职位等级（等级带宽）：<Input style={{ width: 90,marginRight: 8 }} readOnly="readonly" value=""/>至<Input style={{ width: 90,marginRight: 8 }} readOnly="readonly" value="6"/></div>
            <div className="check-post-content-line-right">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制：<Input style={{ width: 316,marginRight: 8 }} readOnly="readonly" value=""/></div>
          </div>
          <div className="check-post-content-line">
            <div className="check-post-content-line-left">有效开始日期：<Input style={{ width: 286,marginRight: 8 }} readOnly="readonly" value="2016-09-01"/></div>
            <div className="check-post-content-line-right">有效结束日期：<Input style={{ width: 286,marginRight: 8 }} readOnly="readonly"/></div>
          </div>
        </div>
        <div className="post-seat" style={{ borderBottom: "1px solid #d9d9d9" }}>
          岗位在内部价值链中所属位置：
          <table>
            <tr className="double-tr">
              <td className="double-td"></td>
              <td></td>
              <td className="double-td">上级岗位</td>
              <td></td>
              <td className="double-td"></td>
            </tr>
            <tr>
              <td className="double-td"></td>
              <td></td>
              <td className="double-td"><Input className="input-border" readOnly="readonly" /></td>
              <td></td>
              <td className="double-td"></td>
            </tr>
            <tr className="double-tr">
              <td className="double-td"></td>
              <td></td>
              <td className="double-td td-arrow-bottom"></td>
              <td></td>
              <td className="double-td"></td>
            </tr>
            <tr>
              <td className="double-td"><Input className="input-border" readOnly="readonly"/></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border" value="固网技术支撑（阿克苏县分）" readOnly="readonly"/></td>
              <td className="td-arrow-right"></td>
              <td className="double-td"><Input className="input-border" readOnly="readonly"/></td>
            </tr>
            <tr className="double-tr">
              <td className="double-td">上游岗位</td>
              <td></td>
              <td className="double-td td-arrow-bottom"></td>
              <td></td>
              <td className="double-td">下游岗位</td>
            </tr>
            <tr>
              <td className="double-td"></td>
              <td></td>
              <td className="double-td"><Input className="input-border" readOnly="readonly" /></td>
              <td></td>
              <td className="double-td"></td>
            </tr>
            <tr className="double-tr">
              <td className="double-td"></td>
              <td></td>
              <td className="double-td">下级岗位</td>
              <td></td>
              <td className="double-td"></td>
            </tr>
          </table>
        </div>
        <div className="crux-duty" style={{ borderBottom: 0, borderRight: 0, }}>
          <div style={{ fontSize: "15px", height: "36px", lineHeight: "36px", paddingLeft: "8px" }}>主要岗位职责：</div>
        	<div className="crux-duty-top" style={{ borderTop: "1px solid #d9d9d9" }}>
						<div className="crux-duty-one">序号</div>
						<div className="crux-duty-two">关键职责</div>
					</div>
          <div className="crux-duty-bottom">
  					{comments.map((comment) => (
              <div className="crux-duty-bottom-comments">
                <div className="crux-duty-one">{comment.orderNum}</div>
                <div className="crux-duty-two">{comment.content}</div>
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
		              <Radio value="a">博士</Radio>
		              <Radio value="b">硕士研究生（硕士学位）</Radio>
		              <Radio value="c">本科（学士学位）</Radio>
		              <Radio value="d">专科</Radio>
		            </RadioGroup>
		          )}
		        </FormItem>
            <FormItem label="2、">
                <div className="professional-knowledge">
                  专业知识：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                  专业知识学科：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                  各学科知识掌握程度：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                </div>
            </FormItem>
            <FormItem label="3、">
                <div className="professional-skills">
                  专业技能：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                  专业技能种类：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                  各种技能类掌握程度：<Input style={{ width: 110,marginRight: 8 }} readOnly="readonly" />
                </div>
            </FormItem>
            <FormItem label="4、">
                <div>
                  年龄上限：<Input style={{ width: 110 }} readOnly="readonly" /> 周岁，年龄下限<Input style={{ width: 110 }} readOnly="readonly" />周岁
                </div>
            </FormItem>
            <FormItem label="5、对口专业工作经验：">
                <div className="professional-experience">
                  <div className="professional-experience-one">
                    1、工作层面：
                    <Checkbox disabled="disabled"></Checkbox>集团
                    <Checkbox disabled="disabled"></Checkbox>省公司
                    <Checkbox disabled="disabled"></Checkbox>市公司
                    <Checkbox disabled="disabled"></Checkbox>不限层面
                  </div>
                  <div className="professional-experience-two">
                    各层面工作年限：集团<Input style={{ width: 66 }} readOnly="readonly" />年， 
                    省公司<Input style={{ width: 66 }} readOnly="readonly" />年，
                    市公司<Input style={{ width: 66 }} readOnly="readonly" />年，
                    不限层面<Input style={{ width: 66 }} readOnly="readonly" />年
                   </div>
                </div>
            </FormItem>
            <FormItem label="6、国家规定的职业（执业）资格证书及等级要求："> 
              <div className="profession-grade">
                工种：<Input style={{ width: 133, marginRight:16 }} readOnly="readonly"></Input>
                等级：<Input style={{ width: 133 }} readOnly="readonly"></Input>
              </div>
            </FormItem>
            <FormItem label="7、专业技术职务："> 
              <div className="skills-duty">
                专业技术职务：<Input style={{ width: 133, marginRight:16 }} readOnly="readonly"></Input>
                等级：<Input style={{ width: 133 }} readOnly="readonly"></Input>
              </div>
            </FormItem>
            <FormItem label="8、本企业专业资格："> 
              <div className="professional-qualifications">
                专业：<Input style={{ width: 133, marginRight:16 }} readOnly="readonly"></Input>
                等级：<Input style={{ width: 133 }} readOnly="readonly"></Input>
              </div>
            </FormItem>
            <FormItem label="9、其他："> 
              <TextArea rows={4} style={{ width: "100%", height: "66px" }} readOnly="readonly" />
            </FormItem>
            <FormItem>
              <div className="achievement-target">
                关键业绩指标：
                <TextArea rows={4} style={{ width: "100%", height: "66px" }} readOnly="readonly" />
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
