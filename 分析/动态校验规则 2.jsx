import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
  state = {
    checkNick: false,
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }
  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true }); //对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: 'Please input your name',
            }],
          })(
            <Input placeholder="Please input your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please input your nickname" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox
            value={this.state.checkNick}
            onChange={this.handleChange}
          >
            Nickname is required
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </div>
    );
  }
}

const WrappedDynamicRule = Form.create()(DynamicRule);
ReactDOM.render(<WrappedDynamicRule />, mountNode);