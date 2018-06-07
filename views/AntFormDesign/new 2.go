func (this *FormDesignController) FormView5() {

	var formData, parameterData string
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

	parameterDataStr := parameterData

	this.Data["formData"] = datFormData
	this.Data["parameterData"] = datParameterData
	this.Data["parameterDataStr"] = parameterDataStr

	antHtml, _ := AnalysisJson(parameterData)
	this.Data["antHtml"] = antHtml
	this.TplName = "AntFormDesign/formview5.html"

}