package formDesign

type FormItems struct {
	FormItem FormItem `json:"FormItem"`
	LBL      string   `json:"LBL"`
	TYP      string   `json:"TYP"`
}

type FormItem struct {
	Colon    string `json:"colon"`
	Extra    string `json:"extra"`
	Label    string `json:"label"`
	LabelCol string `json:"labelCol"`
	//Required          string            `json:"required"`
	Type              Type              `json:"type"`
	Name              string            `json:"name"`
	Id                string            `json:"id"`
	GetFieldDecorator GetFieldDecorator `json:"getFieldDecorator"`
}
type Type struct {
	Type string `json:"type"`
	Attr Attr   `json:"attr"`
}
type Attr struct { //需要将会遇到的所有Attr加入到系统中,解析时,才能获取到值
	Prefix      string `json:"prefix"`
	Placeholder string `json:"placeholder"`

	Min string `json:"min"`
	Max string `json:"max"`
	//DefaultValue string `json:"defaultValue"`
	AllowClear string `json:"allowClear"`
	Character  string `json:"character"` //character LJJ:reflect.Value.Interface: cannot return value obtained from unexported field or method

	Vertical           string `json:"vertical"`
	Range              string `json:"range"`
	Step               string `json:"step"`
	VerticalRangestep1 string `json:"vertical1range1step1"`
}

type GetFieldDecorator struct {
	Rules Rules `json:"rules"`
}

type Rules struct {
	Enum       string `json:"enum"`
	Len        string `json:"len"`
	Max        string `json:"max"`
	Message    string `json:"message"`
	Min        string `json:"min"`
	Pattern    string `json:"pattern"`
	Required   string `json:"required"`
	Transform  string `json:"transform"`
	Type       string `json:"type"`
	Validator  string `json:"validator"`
	Whitespace string `json:"whitespace"`
}
