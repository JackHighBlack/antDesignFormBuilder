
func AnalysisJson(jsonVal string) (antStr string, err error) {

	//var jsonVal string
	//jsonVal = this.GetString("jsonVal")

	fmt.Println("AnalysisJson start : jsonVal:%s ", jsonVal)
	var ob []FormItems
	json.Unmarshal([]byte(jsonVal), &ob) //Beego
	beego.Notice("FormItems :", ob)

	beego.Notice("FormItem0 :", ob[0].FormItem) //从零开始算起

	var itemName, rule string
	//var AntHtml,  itemName, rules string
	//切片初始化 s :=[] int {1,2,3 }
	var antHtmlWithBJ []string
	var antHtml []string
	var itemNames []string
	var rules []string
	var str0, str1, str2, str3, str4, str5 string
	str0 = `
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

    //Only show error after a field is touched.`
	//fmt.Println("str0 ", str0)

	antHtmlWithBJ = append(antHtmlWithBJ, "str0 :"+str0)
	antHtml = append(antHtml, str0)
	//fmt.Println("antHtmlWithBJ[0] 0 ", antHtmlWithBJ[0])

	for k, v := range ob {

		itemName = v.FormItem.Name
		itemNames = append(itemNames, itemName)
		//		for k2, v2 := range v.GetFieldDecorator.Rules {
		//			rules = ""
		//		}
		fmt.Println("map's key:", k)
		fmt.Println("map's val:", v)
		fmt.Println("map's itemName:", itemName)
		fmt.Println("v.FormItem.GetFieldDecorator.Rules:", v.FormItem.GetFieldDecorator.Rules)
		//tonydon := &User{"TangXiaodong", 100, "0000123"}     object := reflect.ValueOf(tonydon)
		object := reflect.ValueOf(&v.FormItem.GetFieldDecorator.Rules)
		myref := object.Elem()
		typeOfType := myref.Type()
		rule = ""
		for i := 0; i < myref.NumField(); i++ {
			field := myref.Field(i)
			//fmt.Printf("%d. %s %s = %+v ", i, typeOfType.Field(i).Name, field.Type(), field.Interface())
			//
			//准备好一个字符串切片([]string)，然后使用strings.Join()函数一次性将所有字符串串联起来
			//conversion: interface {} is bool, not string
			if field.Interface().(string) != "" {
				//				fmt.Println("typeOfType.Field(i)", typeOfType.Field(i))
				//				fmt.Println("typeOfType.Field(i).PkgPath", typeOfType.Field(i).PkgPath)
				//				fmt.Println("typeOfType.Field(i).Type", typeOfType.Field(i).Type)
				fmt.Println("typeOfType.Field(i).Tag:", typeOfType.Field(i).Tag, ":")
				//				fmt.Println("typeOfType.Field(i).Offset", typeOfType.Field(i).Offset)
				//				fmt.Println("typeOfType.Field(i).Index", typeOfType.Field(i).Index)
				//				fmt.Println("typeOfType.Field(i).Anonymous", typeOfType.Field(i).Anonymous)
				fieldTag := typeOfType.Field(i).Tag.Get("json")
				rule = rule + fieldTag + ":" + field.Interface().(string) + "," // rules中间有逗号,  rules: [{  message:' Please input your password! ',required:true, }],
			} else {

				fmt.Printf("%s 是空的\n", typeOfType.Field(i).Name)
			}
		}
		fmt.Println("map's rule:", rule)
		rules = append(rules, rule)
	}

	// const userNameError = isFieldTouched('userName') && getFieldError('userName');
	for _, v := range itemNames {
		str1 = str1 + fmt.Sprintf("const %sError = isFieldTouched('%s') && getFieldError('%s'); \n", v, v, v)
	}
	antHtmlWithBJ = append(antHtmlWithBJ, "str1"+str1)
	antHtml = append(antHtml, str1)
	str2 = `return (
    
  <Form layout="inline" onSubmit={this.handleSubmit}>`
	antHtmlWithBJ = append(antHtmlWithBJ, "str2"+str2)
	antHtml = append(antHtml, str2)
	// 先不处理   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
	for k, v := range itemNames {
		str3 = str3 + fmt.Sprintf(`
		<FormItem
          validateStatus={%sError ? 'error' : ''}
          help={%sError || ''}
        >
          {getFieldDecorator('%s', {
            rules: [{ %s}],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="%s" />
          )}
        </FormItem>`, v, v, v, rules[k], v)

	}

	antHtmlWithBJ = append(antHtmlWithBJ, "str3"+str3)
	antHtml = append(antHtml, str3)

	str4 = `
		<FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>`
	antHtmlWithBJ = append(antHtmlWithBJ, "str4"+str4)
	antHtml = append(antHtml, str4)
	str5 = `

	</Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, 
		document.getElementById('BasicForm1'));`

	antHtmlWithBJ = append(antHtmlWithBJ, "str5"+str5)
	antHtml = append(antHtml, str5)

	strAntHtmlWithBJ := strings.Join(antHtmlWithBJ, "\n")
	strAntHtmlWithBJ = strings.Replace(strAntHtmlWithBJ, `<true>`, "true", -1)
	strAntHtmlWithBJ = strings.Replace(strAntHtmlWithBJ, `<false>`, "false", -1)
	fmt.Println(" strAntHtmlWithBJ: %s ", strAntHtmlWithBJ)

	strAntHtml := strings.Join(antHtml, "\n")
	strAntHtml = strings.Replace(strAntHtml, `<true>`, "true", -1)
	strAntHtml = strings.Replace(strAntHtml, `<false>`, "false", -1)

	return strAntHtml, nil

}

func (this *FormDesignController) Test1() {
	var jsonVal string
	jsonVal = this.GetString("jsonVal")

	//ob := &models.FormItems{} 去掉&models

	var ob []FormItems
	json.Unmarshal([]byte(jsonVal), &ob) //Beego
	beego.Notice("FormItems :", ob)

	beego.Notice("FormItem0 :", ob[0].FormItem) //从零开始算起

	var itemName, rule string
	//var AntHtml,  itemName, rules string
	//切片初始化 s :=[] int {1,2,3 }
	var AntJson []string
	var antHtml []string
	var itemNames []string
	var rules []string
	var str0, str1, str2, str3, str4, str5 string
	str0 = `
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

    //Only show error after a field is touched.`
	//fmt.Println("str0 ", str0)

	AntJson = append(AntJson, "str0 :"+str0)
	antHtml = append(antHtml, str0)
	//fmt.Println("AntJson[0] 0 ", AntJson[0])

	for k, v := range ob {

		itemName = v.FormItem.Name
		itemNames = append(itemNames, itemName)
		//		for k2, v2 := range v.GetFieldDecorator.Rules {
		//			rules = ""
		//		}
		fmt.Println("map's key:", k)
		fmt.Println("map's val:", v)
		fmt.Println("map's itemName:", itemName)
		fmt.Println("v.FormItem.GetFieldDecorator.Rules:", v.FormItem.GetFieldDecorator.Rules)
		//tonydon := &User{"TangXiaodong", 100, "0000123"}     object := reflect.ValueOf(tonydon)
		object := reflect.ValueOf(&v.FormItem.GetFieldDecorator.Rules)
		myref := object.Elem()
		typeOfType := myref.Type()
		rule = ""
		for i := 0; i < myref.NumField(); i++ {
			field := myref.Field(i)
			//fmt.Printf("%d. %s %s = %+v ", i, typeOfType.Field(i).Name, field.Type(), field.Interface())
			//
			//准备好一个字符串切片([]string)，然后使用strings.Join()函数一次性将所有字符串串联起来
			//conversion: interface {} is bool, not string
			if field.Interface().(string) != "" {
				//				fmt.Println("typeOfType.Field(i)", typeOfType.Field(i))
				//				fmt.Println("typeOfType.Field(i).PkgPath", typeOfType.Field(i).PkgPath)
				//				fmt.Println("typeOfType.Field(i).Type", typeOfType.Field(i).Type)
				fmt.Println("typeOfType.Field(i).Tag:", typeOfType.Field(i).Tag, ":")
				//				fmt.Println("typeOfType.Field(i).Offset", typeOfType.Field(i).Offset)
				//				fmt.Println("typeOfType.Field(i).Index", typeOfType.Field(i).Index)
				//				fmt.Println("typeOfType.Field(i).Anonymous", typeOfType.Field(i).Anonymous)
				fieldTag := typeOfType.Field(i).Tag.Get("json")
				rule = rule + fieldTag + ":" + field.Interface().(string) + "," // rules中间有逗号,  rules: [{  message:' Please input your password! ',required:true, }],
			} else {

				fmt.Printf("%s 是空的\n", typeOfType.Field(i).Name)
			}
		}
		fmt.Println("map's rule:", rule)
		rules = append(rules, rule)
	}

	// const userNameError = isFieldTouched('userName') && getFieldError('userName');
	for _, v := range itemNames {
		str1 = str1 + fmt.Sprintf("const %sError = isFieldTouched('%s') && getFieldError('%s'); \n", v, v, v)
	}
	AntJson = append(AntJson, "str1"+str1)
	antHtml = append(antHtml, str1)
	str2 = `return (
    
  <Form layout="inline" onSubmit={this.handleSubmit}>`
	AntJson = append(AntJson, "str2"+str2)
	antHtml = append(antHtml, str2)
	// 先不处理   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
	for k, v := range itemNames {
		str3 = str3 + fmt.Sprintf(`
		<FormItem
          validateStatus={%sError ? 'error' : ''}
          help={%sError || ''}
        >
          {getFieldDecorator('%s', {
            rules: [{ %s}],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="%s" />
          )}
        </FormItem>`, v, v, v, rules[k], v)

	}

	AntJson = append(AntJson, "str3"+str3)
	antHtml = append(antHtml, str3)

	str4 = `
		<FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>`
	AntJson = append(AntJson, "str4"+str4)
	antHtml = append(antHtml, str4)
	str5 = `

	</Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(<WrappedHorizontalLoginForm />, 
		document.getElementById('BasicForm1'));`

	AntJson = append(AntJson, "str5"+str5)
	antHtml = append(antHtml, str5)

	strAntJson := strings.Join(AntJson, "\n")
	strAntHtml := strings.Join(antHtml, "\n")

	strAntHtml = strings.Replace(strAntHtml, `<true>`, "true", -1)
	strAntHtml = strings.Replace(strAntHtml, `<false>`, "false", -1)

	fmt.Println(" strAntHtml: ", strAntHtml)
	this.Data["jsonVal"] = jsonVal
	this.Data["str"] = strAntJson
	this.Data["antHtml"] = strAntHtml
	this.TplName = "AntFormDesign/test1.html"
}
