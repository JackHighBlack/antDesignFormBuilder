import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {  
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
  ////  前面都是暂时固定的(后期可以设定表名 HorizontalLoginForm和,handleSubmit)
    // Only show error after a field is touched.
	
 /*
	表单有三种布局。 horizontal		Vertical	Inline	
1.分析 userName   password  是字段名加一个加一个 const Error 在return前面  const userNameError = isFieldTouched('userName') && getFieldError('userName');
2.return  Form 可以设置的   layout ;                   (后期 onSubmit)
3.每个字段 对应生成 FormItem   (validateStatus,help固定的)
4.没有字段可以加个 getFieldDecorator 修饰符 包含rules  >required   message
5 输入框Input  prefix 包含(Icon type="user" style={{ color: 'rgba(0,0,0,.25)' })  和 placeholder
6.按钮login 就后台改个名字吧                                   
7.FormItem里面可以容纳多个控件(Checkbox  Button) 配合getFieldDecorator 修饰符使用


高级功能
8.Modal 可以弹出一个新的窗口,包含Form
9.动态增加、减少表单项    由map生成
	const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
		
10 时间控件  有点特殊 {getFieldDecorator('month-picker', config)( 
11 自定义表单控件
12 自定义校验  
	我们提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。
	validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。 hasFeedback：用于给输入框添加反馈图标。 help：设置校验文案。
13	表单联动	使用 setFieldsValue 来动态设置其他控件的值。  this.props.form.setFieldsValue({
14	动态校验规则	
	required: this.state.checkNick,
	
	  handleChange = (e) => {
		this.setState({
		  checkNick: e.target.checked,
		}, () => {
		  this.props.form.validateFields(['nickname'], { force: true });
		});
	  }
	
 */
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);