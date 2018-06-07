package controllers

import "github.com/astaxie/beego"

//import . "LJJ/models/form"

type AddController struct {
	beego.Controller
	//	IsLogin bool
	//	//UserInfo string
	//	UserUserId   int64
	//	UserUsername string
	//	UserAvatar   string

	//	controllerName string
	//	actionName     string
}

func (this *AddController) Get() {
	//this.Data["form"] = beego.Form(&User{})
	this.Layout = "form/admin/layout.html"
	this.TplName = "form/admin/add.tpl"
	this.TplName = "form/admin/add2.tpl"
	//this.LayoutSections["adda"] = "form/admin/adda.tpl"
}

//func (this *AddController) Post() {
//	var user User
//	form := this.GetInput(&user) //this.GetInput undefined (type *AddController has no field or method GetInput)
//	if !form.Validates() {
//		return
//	}
//	UserInsert(&user)// undefined: UserInsert
//	this.Ctx.Redirect(302, "/admin/index")
//}
