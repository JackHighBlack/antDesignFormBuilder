package controllers

import (
	. "AntFormDesign/models/formDesign"
	"encoding/json"
	"fmt"
	"reflect"
	"strconv"
	"strings"

	"github.com/astaxie/beego"
)

type FormDesignController struct {
	beego.Controller
}

func (this *FormDesignController) FormDesign() {

	this.TplName = "AntFormDesign/formdesign.html"

}

func (this *FormDesignController) FormDesign2() {

	this.TplName = "AntFormDesign/formdesign2.html"

}

func (this *FormDesignController) AntFormDesignForm() {

	this.TplName = "AntFormDesign/antformdesignForm.html"

}

func (this *FormDesignController) FormView() {
	//self.Data["pageTitle"] = "AntDesign 1"
	//self.display() //都忘了为什么注释掉
	var formData, parameterData string
	//var formDataStr, parameterDataStr string
	formData = this.GetString("formData")
	parameterData = this.GetString("parameterData")
	//	formDataStr := formData
	parameterDataStr := parameterData
	fmt.Println("formData: ", formData)
	fmt.Println("parameterData: ", parameterData)

	s := fmt.Sprintf("currentUser %s", this.Ctx.Input.CopyBody(beego.BConfig.MaxMemory))
	fmt.Println("currentUser this.Ctx.Input.RequestBody: ", this.Ctx.Input.RequestBody)              // s成功
	fmt.Println("currentUser  fmt.Sprintf   Ctx.Input.CopyBody(beego.BConfig.MaxMemory))  s :  ", s) // s成功

	if parameterData == "" {
		parameterData = `[{"LBL":"单行文本1234","TYP":"text","FLDSZ":"m","REQD":"1","UNIQ":"0","LAYOUT":"leftHalf","SCU":"pub"},{"LBL":"多行文本","LAYOUT":"leftHalf","TYP":"textarea","FLDSZ":"s","REQD":"0","UNIQ":"0","SCU":"pub","MIN":"","MAX":"","DEF":"","INSTR":"","CSS":""},{"LBL":"日期","TYP":"date","REQD":"0","UNIQ":"0","SCU":"pub","FMT":"ymd","DEF":"","INSTR":"","CSS":""}]`

	}
	var datParameterData, datFormData interface{}
	if err := json.Unmarshal([]byte(parameterData), &datParameterData); err == nil {
		//fmt.Println("dat : ", dat)
		//		fmt.Println(dat["status"])
	} else {
		fmt.Println("datParameterData err : ", err)
	}

	if err := json.Unmarshal([]byte(formData), &datFormData); err == nil {
		//fmt.Println("dat : ", dat)
		//		fmt.Println(dat["status"])
	} else {
		fmt.Println("datFormData err : ", err)
	}

	this.Data["formData"] = datFormData
	this.Data["parameterData"] = datParameterData
	this.Data["parameterDataStr"] = parameterDataStr
	this.TplName = "FormDesign/formview.html"

}

func (this *FormDesignController) FormView2() {

	parameterDataStr := ` [{"LBL":"单行文本1234","TYP":"text","FLDSZ":"m","REQD":"1","UNIQ":"0","LAYOUT":"leftHalf","SCU":"pub"},{"LBL":"组合单选框","TYP":"likert","REQD":"0","HDNM":"0","SCU":"pub","CSS":"","ITMS":[{"LBL":"行标签 1","ITMS":[{"VAL":"列标签 1","CHKED":"0"},{"VAL":"列标签 2","CHKED":"0"},{"VAL":"列标签 3","CHKED":"0"},{"VAL":"列标签 4","CHKED":"0"}]},{"LBL":"行标签 2","ITMS":[{"VAL":"列标签 1","CHKED":"0"},{"VAL":"列标签 2","CHKED":"0"},{"VAL":"列标签 3","CHKED":"0"},{"VAL":"列标签 4","CHKED":"0"}]},{"LBL":"行标签 3","ITMS":[{"VAL":"列标签 1","CHKED":"0"},{"VAL":"列标签 2","CHKED":"0"},{"VAL":"列标签 3","CHKED":"0"},{"VAL":"列标签 4","CHKED":"0"}]}]},{"LBL":"多行文本","LAYOUT":"leftHalf","TYP":"textarea","FLDSZ":"s","REQD":"0","UNIQ":"0","SCU":"pub","MIN":"","MAX":"","DEF":"","INSTR":"","CSS":""},{"LBL":"多级下拉框","TYP":"dropdown2","FLDSZ":"m","pN":"3","REQD":"0","SCU":"pub","INSTR":"","CSS":"","SUBFLDS":{"DD1":{},"DD2":{},"DD3":{}},"ITMS":[{"VAL":"选项 1","ITMS":[{"VAL":"选项 11","ITMS":[{"VAL":"选项 111"},{"VAL":"选项 112"}]},{"VAL":"选项 12","ITMS":[{"VAL":"选项 121"},{"VAL":"选项 122"}]}],"CHKED":"0"},{"VAL":"选项 2","ITMS":[{"VAL":"选项 21","ITMS":[{"VAL":"选项 211"},{"VAL":"选项 212"}]},{"VAL":"选项 22","ITMS":[{"VAL":"选项 221"},{"VAL":"选项 222"}]}],"CHKED":"1"}],"DEF":"1"},{"LBL":"多选框","TYP":"checkbox","LAY":"one","REQD":"0","SCU":"pub","INSTR":"","CSS":"","ITMS":[{"VAL":"选项 1","CHKED":"0"},{"VAL":"选项 2","CHKED":"0"},{"VAL":"选项 3","CHKED":"0"}]},{"LBL":"日期","TYP":"date","REQD":"0","UNIQ":"0","SCU":"pub","FMT":"ymd","DEF":"","INSTR":"","CSS":""}]`
	parameterData := parameterDataStr
	var datParameterData interface{}
	if err := json.Unmarshal([]byte(parameterData), &datParameterData); err == nil {

	} else {
		fmt.Println("datParameterData err : ", err)
	}

	this.Data["parameterData"] = datParameterData
	this.Data["parameterDataStr"] = parameterDataStr
	this.TplName = "FormDesign/formview2.html"

}

func (this *FormDesignController) FormView3() {

	var formData, parameterData, parameterDataAnt string
	formData = this.GetString("formData")
	parameterData = this.GetString("parameterData")
	parameterDataAnt = this.GetString("parameterDataAnt")
	fmt.Println("parameterDataAnt start  :", parameterDataAnt)
	//	parameterDataAnt = strings.Replace(parameterDataAnt, "<button", "<Button", -1)
	//	parameterDataAnt = strings.Replace(parameterDataAnt, "</button>", "</Button>", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "typeAnt", "type", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `>","<`, "><", -1)

	// 处理特殊字符
	parameterDataAnt = strings.Replace(parameterDataAnt, `["`, "", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `\"\"`, `""`, -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `\"`, `"`, -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `"]`, "", -1)
	//"{}" 改成{}
	parameterDataAnt = strings.Replace(parameterDataAnt, `"{`, "{", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `}"`, "}", -1)
	// 涉及 JSX中的true 和 false
	parameterDataAnt = strings.Replace(parameterDataAnt, `"false"`, "{false}", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `"true"`, "{true}", -1)
	// href 的特殊 target href=
	parameterDataAnt = strings.Replace(parameterDataAnt, "_href=", " href=", -1)

	//jQuery会自动将全部变为小写  JS var jQObj=$(Ant[IDX]) 后标签,属性 自动全部小写
	parameterDataAnt = strings.Replace(parameterDataAnt, "<button ", "<Button ", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "<button>", "<Button> ", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "</button>", "</Button>", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " typeant=", " type=", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " htmltype=", " htmlType=", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " onclick=", " onClick=", -1)

	parameterDataAnt = strings.Replace(parameterDataAnt, "<icon ", "<Icon ", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "</icon>", "</Icon>", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "<affix ", "<Affix ", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "</affix>", "</Affix>", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " offsetbottom=", " offsetBottom=", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " offsettop=", " offsetTop=", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, " onchange=", " onChange=", -1)

	fmt.Println("parameterDataAnt  :", parameterDataAnt)

	parameterDataStr := parameterData
	parameterDataAntStr := parameterDataAnt
	fmt.Println("formData :", formData)
	fmt.Println("parameterData :", parameterData)

	s := fmt.Sprintf("currentUser %s", this.Ctx.Input.CopyBody(beego.BConfig.MaxMemory))
	fmt.Println("currentUser this.Ctx.Input.RequestBody: ", this.Ctx.Input.RequestBody)              // s成功
	fmt.Println("currentUser  fmt.Sprintf   Ctx.Input.CopyBody(beego.BConfig.MaxMemory))  s :  ", s) // s成功

	var datParameterData, datFormData interface{}
	if err := json.Unmarshal([]byte(parameterData), &datParameterData); err == nil {

	} else {
		fmt.Println("datParameterData err :", err)
	}

	if err := json.Unmarshal([]byte(formData), &datFormData); err == nil {
		fmt.Println("datFormData err :", err)
	} else {
		fmt.Println("datFormData err : ", err)
	}
	str := `<Button>123</Button>`
	fmt.Println("str  : ", str)
	this.Data["str"] = str
	if parameterDataAntStr == "" {
		parameterDataAntStr = `<Button>parameterDataAntStr 为空</Button>`
	}

	this.Data["formData"] = datFormData
	this.Data["parameterData"] = datParameterData
	this.Data["parameterDataStr"] = parameterDataStr
	this.Data["parameterDataAntStr"] = parameterDataAntStr
	this.TplName = "FormDesign/formview3.html"

}

func (this *FormDesignController) FormView4() {
	type JS string
	var formData, parameterData, parameterDataAnt string
	formData = this.GetString("formData")
	parameterData = this.GetString("parameterData")
	parameterDataAnt = this.GetString("parameterDataAnt")
	fmt.Println("parameterDataAnt start  : ", parameterDataAnt)
	//	parameterDataAnt = strings.Replace(parameterDataAnt, "<button", "<Button", -1)
	//	parameterDataAnt = strings.Replace(parameterDataAnt, "</button>", "</Button>", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, "typeAnt", "type", -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `["`, "", -1)

	parameterDataAnt = strings.Replace(parameterDataAnt, `\"\"`, `""`, -1)
	parameterDataAnt = strings.Replace(parameterDataAnt, `"]`, "", -1)

	fmt.Println("parameterDataAnt  : ", parameterDataAnt)

	parameterDataStr := parameterData
	parameterDataAntStr := parameterDataAnt
	fmt.Println("formData: ", formData)
	fmt.Println("parameterData: ", parameterData)

	s := fmt.Sprintf("currentUser %s", this.Ctx.Input.CopyBody(beego.BConfig.MaxMemory))
	fmt.Println("currentUser this.Ctx.Input.RequestBody: ", this.Ctx.Input.RequestBody)              // s成功
	fmt.Println("currentUser  fmt.Sprintf   Ctx.Input.CopyBody(beego.BConfig.MaxMemory))  s :  ", s) // s成功

	var datParameterData, datFormData interface{}
	if err := json.Unmarshal([]byte(parameterData), &datParameterData); err == nil {

	} else {
		fmt.Println("datParameterData err : ", err)
	}

	if err := json.Unmarshal([]byte(formData), &datFormData); err == nil {
		fmt.Println("datFormData err : ", err)
	} else {
		fmt.Println("datFormData err : ", err)
	}
	str := `<Button  type="" htmlType="" icon="" shape="" size="" loading="" onClick="">htmlAnt Button</Button>`
	fmt.Println("Str  : ", str)
	this.Data["Str"] = str

	this.Data["formData"] = datFormData
	this.Data["parameterData"] = datParameterData
	this.Data["parameterDataStr"] = parameterDataStr
	this.Data["parameterDataAntStr"] = parameterDataAntStr
	this.Data["parameterDataAntStr"] = parameterDataAntStr
	// Beego报错
	var Error1, Error2 string
	Error1 = `<FormItem
 			validateStatus={userNameError ? 'error' : ''} 
			help={userNameError || ''}
				> `
	Error2 = ` validateStatus={passwordError ? 'error' : ''}  help={passwordError || ''}`
	this.Data["Error1"] = Error1
	this.Data["Error2"] = Error2
	this.Data["Error3"] = ` <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}  type="password" placeholder="Password" />  `
	this.Data["Error4"] = ` <Button size="large"  shape="circle"> 123456  </Button> `
	this.Data["Str"] = str
	this.TplName = "FormDesign/formview4.html"

}

///取消开始 AntHtml的设计,现在都是由JSon转化为ES6
////////////////////////////////////////////////////////////////////////

func (this *FormDesignController) FormView5() {

	var formData, parameterData, antHtml string
	formData = this.GetString("formData")
	parameterData = this.GetString("parameterData")
	//	parameterDataAnt = this.GetString("parameterDataAnt")
	//	fmt.Println("parameterDataAnt start  :", parameterDataAnt)

	var datParameterData, datFormData interface{}
	if err := json.Unmarshal([]byte(parameterData), &datParameterData); err == nil {

	} else {
		fmt.Println("datParameterData err :", err)
	}

	if err := json.Unmarshal([]byte(formData), &datFormData); err == nil {
		fmt.Println("datFormData err :", err)
	} else {
		fmt.Println("datFormData err : ", err)
	}
	str := `<Button>123</Button>`
	fmt.Println("str  : ", str)
	this.Data["str"] = str

	//parameterDataStr := parameterData

	this.Data["datFormData"] = datFormData
	this.Data["formData"] = formData
	this.Data["datParameterData"] = datParameterData //datParameterData 变成了map
	this.Data["parameterData"] = parameterData       //parameterData
	if parameterData != "" {
		antHtml, _ = AnalysisJson(parameterData)
	}

	this.Data["antHtml"] = antHtml
	this.Data["antHtmlStr"] = antHtml
	this.TplName = "AntFormDesign/formview5.html"

}

func (this *FormDesignController) AntFormDesign() {

	this.TplName = "AntFormDesign/antformdesign.html"

}

func (this *FormDesignController) Test00() {

	this.TplName = "AntFormDesign/test00.html"

}

func (this *FormDesignController) Test0() {

	this.TplName = "AntFormDesign/test0.html"

}

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

	var atrType string
	var atrTypes []string

	var typeAttr string
	var typeAttrs []string

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
		if itemName == "userName" {
			itemName = "userName" + strconv.Itoa(k)
		}
		itemNames = append(itemNames, itemName)

		//		atrPrefix = v.FormItem.Type.Attr.Prefix
		//		atrPrefixes = append(atrPrefixes, atrPrefix)

		atrType = v.FormItem.Type.Type
		atrTypes = append(atrTypes, atrType)
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

		// "attr":{"prefix":"{<Ic
		object = reflect.ValueOf(&v.FormItem.Type.Attr)
		myref = object.Elem()
		typeOfType = myref.Type()
		typeAttr = ""
		for i := 0; i < myref.NumField(); i++ {
			field := myref.Field(i) //这个field 不会报错重复变量
			if field.Interface().(string) != "" {
				fmt.Println("控件的属性 typeOfType.Field(i).Tag:", typeOfType.Field(i).Tag, ":")

				fieldTag := typeOfType.Field(i).Tag.Get("json")
				typeAttr = typeAttr + fieldTag + "=" + field.Interface().(string) + " " // rules中间有逗号,  rules: [{  message:' Please input your password! ',required:true, }],
			} else {

				fmt.Printf("%s 是空的\n", typeOfType.Field(i).Name)
			}
		}
		fmt.Println("map's typeAttrs:", typeAttr)
		typeAttrs = append(typeAttrs, typeAttr)
	}

	// const userNameError = isFieldTouched('userName') && getFieldError('userName');
	for _, v := range itemNames {
		str1 = str1 + fmt.Sprintf("const %sError = isFieldTouched('%s') && getFieldError('%s'); \n", v, v, v)
	}
	antHtmlWithBJ = append(antHtmlWithBJ, "str1"+str1)
	antHtml = append(antHtml, str1)
	str2 = `return (
    
  <Form onSubmit={this.handleSubmit}>` //默认 layout="horizontal" inline(Slide显示就一个点) horizontal vertical(Row 就不见了)
	antHtmlWithBJ = append(antHtmlWithBJ, "str2"+str2)
	antHtml = append(antHtml, str2)
	//	fmt.Println(itemNames)
	// 先不处理   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
	for k, v := range itemNames {
		//		if (k == 0) || (k%4 == 0) {
		//			str3 = str3 + `
		//		<Row gutter={24}>`

		//		}

		if k == 0 {
			str3 = str3 + `
				<Row gutter={24}>`

		}
		str3 = str3 + fmt.Sprintf(`
	 <Col span={8}>
		<FormItem
          validateStatus={%sError ? 'error' : ''}
          help={%sError || ''}
        >
          {getFieldDecorator('%s', {
            rules: [{ %s}],
          })(
           <%s %s />
          )}
        </FormItem>
           </Col>`, v, v, v, rules[k], atrTypes[k], typeAttrs[k])
		//		if k%4 == 3 {
		//			str3 = str3 + `
		//     </Row>`
		//		}

	}

	//	fmt.Println(` strings.LastIndex(str3, "</Row>")`, strings.LastIndex(str3, "</Row>"))
	//	fmt.Println(`strings.Count(str3,"")-1 :`, strings.Count(str3, "")-1)
	//	if strings.Count(str3, "")-1-strings.LastIndex(str3, "</Row>") > 4 {
	//		str3 = str3 + `
	//     </Row>`

	//	}
	str3 = str3 + `
	   </Row>`
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

	strAntHtml = strings.Replace(strAntHtml, `=<<`, "={", -1)
	strAntHtml = strings.Replace(strAntHtml, `>> `, "} ", -1)

	return strAntHtml, nil

}

//func (this *FormDesignController) Test1() {
//	var jsonVal string
//	jsonVal = this.GetString("jsonVal")

//	//ob := &models.FormItems{} 去掉&models

//	var ob []FormItems
//	json.Unmarshal([]byte(jsonVal), &ob) //Beego
//	beego.Notice("FormItems :", ob)

//	beego.Notice("FormItem0 :", ob[0].FormItem) //从零开始算起

//	var itemName, rule, atrPrefix string
//	//var AntHtml,  itemName, rules string
//	//切片初始化 s :=[] int {1,2,3 }
//	var AntJson []string
//	var antHtml []string
//	var atrPrefixes []string // 再第一个对ob的range中将值放入到数组中
//	var itemNames []string
//	var rules []string
//	var str0, str1, str2, str3, str4, str5 string
//	str0 = `
//const { Form, Icon, Input, Button } = antd;
//const FormItem = Form.Item;

//function hasErrors(fieldsError) {
//  return Object.keys(fieldsError).some(field => fieldsError[field]);
//}

//class HorizontalLoginForm extends React.Component {
//  componentDidMount() {
//    // To disabled submit button at the beginning.
//    this.props.form.validateFields();
//  }
//  handleSubmit = (e) => {
//    e.preventDefault();
//    this.props.form.validateFields((err, values) => {
//      if (!err) {
//        console.log('Received values of form: ', values);
//      }
//    });
//  }
//  render() {
//    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

//    //Only show error after a field is touched.`
//	//fmt.Println("str0 ", str0)

//	AntJson = append(AntJson, "str0 :"+str0)
//	antHtml = append(antHtml, str0)
//	//fmt.Println("AntJson[0] 0 ", AntJson[0])

//	for k, v := range ob {

//		itemName = v.FormItem.Name
//		itemNames = append(itemNames, itemName)

//		atrPrefix = v.FormItem.Type.Attr.Prefix
//		atrPrefixes = append(atrPrefixes, atrPrefix)

//		//		for k2, v2 := range v.GetFieldDecorator.Rules {
//		//			rules = ""
//		//		}
//		fmt.Println("map's key:", k)
//		fmt.Println("map's val:", v)
//		fmt.Println("map's itemName:", itemName)
//		fmt.Println("v.FormItem.GetFieldDecorator.Rules:", v.FormItem.GetFieldDecorator.Rules)
//		//tonydon := &User{"TangXiaodong", 100, "0000123"}     object := reflect.ValueOf(tonydon)
//		object := reflect.ValueOf(&v.FormItem.GetFieldDecorator.Rules)
//		myref := object.Elem()
//		typeOfType := myref.Type()
//		rule = ""
//		for i := 0; i < myref.NumField(); i++ {
//			field := myref.Field(i)
//			//fmt.Printf("%d. %s %s = %+v ", i, typeOfType.Field(i).Name, field.Type(), field.Interface())
//			//
//			//准备好一个字符串切片([]string)，然后使用strings.Join()函数一次性将所有字符串串联起来
//			//conversion: interface {} is bool, not string
//			if field.Interface().(string) != "" {
//				//				fmt.Println("typeOfType.Field(i)", typeOfType.Field(i))
//				//				fmt.Println("typeOfType.Field(i).PkgPath", typeOfType.Field(i).PkgPath)
//				//				fmt.Println("typeOfType.Field(i).Type", typeOfType.Field(i).Type)
//				fmt.Println("typeOfType.Field(i).Tag:", typeOfType.Field(i).Tag, ":")
//				//				fmt.Println("typeOfType.Field(i).Offset", typeOfType.Field(i).Offset)
//				//				fmt.Println("typeOfType.Field(i).Index", typeOfType.Field(i).Index)
//				//				fmt.Println("typeOfType.Field(i).Anonymous", typeOfType.Field(i).Anonymous)
//				fieldTag := typeOfType.Field(i).Tag.Get("json")
//				rule = rule + fieldTag + ":" + field.Interface().(string) + "," // rules中间有逗号,  rules: [{  message:' Please input your password! ',required:true, }],
//			} else {

//				fmt.Printf("%s 是空的\n", typeOfType.Field(i).Name)
//			}
//		}
//		fmt.Println("map's rule:", rule)
//		rules = append(rules, rule)
//	}

//	// const userNameError = isFieldTouched('userName') && getFieldError('userName');
//	for _, v := range itemNames {
//		str1 = str1 + fmt.Sprintf("const %sError = isFieldTouched('%s') && getFieldError('%s'); \n", v, v, v)
//	}
//	AntJson = append(AntJson, "str1"+str1)
//	antHtml = append(antHtml, str1)
//	str2 = `return (

//  <Form layout="inline" onSubmit={this.handleSubmit}>`
//	AntJson = append(AntJson, "str2"+str2)
//	antHtml = append(antHtml, str2)
//	// 先不处理   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
//	for k, v := range itemNames {
//		str3 = str3 + fmt.Sprintf(`
//		<FormItem
//          validateStatus={%sError ? 'error' : ''}
//          help={%sError || ''}
//        >
//          {getFieldDecorator('%s', {
//            rules: [{ %s}],
//          })(
//            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="%s" />
//          )}
//        </FormItem>`, v, v, v, rules[k], v, atrPrefixes[k])

//	}

//	AntJson = append(AntJson, "str3"+str3)
//	antHtml = append(antHtml, str3)

//	str4 = `
//		<FormItem>
//          <Button
//            type="primary"
//            htmlType="submit"
//            disabled={hasErrors(getFieldsError())}
//          >
//            Log in
//          </Button>
//        </FormItem>`
//	AntJson = append(AntJson, "str4"+str4)
//	antHtml = append(antHtml, str4)
//	str5 = `

//	</Form>
//    );
//  }
//}

//const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

//ReactDOM.render(<WrappedHorizontalLoginForm />,
//		document.getElementById('BasicForm1'));`

//	AntJson = append(AntJson, "str5"+str5)
//	antHtml = append(antHtml, str5)

//	strAntJson := strings.Join(AntJson, "\n")
//	strAntHtml := strings.Join(antHtml, "\n")

//	strAntHtml = strings.Replace(strAntHtml, `<true>`, "true", -1)
//	strAntHtml = strings.Replace(strAntHtml, `<false>`, "false", -1)

//	fmt.Println(" strAntHtml: ", strAntHtml)
//	this.Data["jsonVal"] = jsonVal
//	this.Data["str"] = strAntJson
//	this.Data["antHtml"] = strAntHtml
//	this.TplName = "AntFormDesign/test1.html"
//}
