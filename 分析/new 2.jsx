 
	
const { Form, Icon, Input, Button } = antd;
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {


  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

 state = {
    targetKeys,
    selectedKeys: ['1','2'],
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', targetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  render() {
	const state = this.state;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    //Only show error after a field is touched.
const userName0Error = isFieldTouched('userName0') && getFieldError('userName0'); 
const userName1Error = isFieldTouched('userName1') && getFieldError('userName1'); 

return (
    
  <Form onSubmit={this.handleSubmit}>

				<Row gutter={7}>
	 <Col span={8}>
		<FormItem
          validateStatus={userName0Error ? 'error' : ''}
          help={userName0Error || ''}
        >
          {getFieldDecorator('userName0', {
            rules: [{ message: ' Please input your username! ',required:true,}],
          })(
           <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}  />} placeholder="placeholder123"  />
          )}
        </FormItem>
           </Col>
	 <Col span={8}>
		<FormItem
          validateStatus={userName1Error ? 'error' : ''}
          help={userName1Error || ''}
        >
          {getFieldDecorator('userName1', {
            rules: [{ message: ' Please input your username! ',required:true,}],
          })(
           <Transfer searchPlaceholder='Please select' 
		   dataSource={mockData}
		   titles={['Source', 'Target']} 
		   targetKeys={state.targetKeys} 
		   selectedKeys={state.selectedKeys}
		   render={item => item.title} 
		   onSelectChange={this.handleSelectChange} 
		   onChange={this.handleChange}  />
          )}
        </FormItem>
           </Col>
	   </Row>

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

ReactDOM.render(<WrappedHorizontalLoginForm />, 
		document.getElementById('BasicForm1'));
