DEFFLD = {
    handle: '<div class="handle"><i title="拖动排序" class="iconfont move hide">&#xe63d;</i></div>',
    icon: '',
    instruct: '<p class="instruct hide"></p>',
    fieldActions: '<div class="fieldActions hide"><i title="复制" href="#" class="iconfont faDup">&#xe60b;</i><i title="删除" href="#" class="iconfont faDel">&#xe619;</i></div>',
    field_li: '<li class="field default"></li>',
    item_checkbox: '<li><input name="CHKED" value="1" class="checkbox" type="checkbox" title="默认选中此项" /><div class="item-upload"><span>上传图片<br>(限1MB)</span><img class="img hide" style="width:60px;"/></div><input name="VAL" type="text" class="xs"/><a class="icononly-add iconfont icon-pos" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont icon-pos" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont icon-pos" title="排序">&#xe63d;</a><a class="icononly-limit iconfont icon-pos" title="添加提交次数限制">&#xe632;</a></li>',
    item_goods: '<li class="clearfix"><div class="goods-item"><div class="goods-item-inner">    <div class="goods-image">      <img src="" class="img">    </div>    <a class="goods-name-view" href="#" title="点击编辑，拖动排序">商品名称</a>    <div class="attrs">      <div class="goods-name-edit">        <a href="#" class="edit-img" title="修改商品图片"><span>更换图片</span><input title="添加配图商品" name="editImg" class="file-prew edit-img-input" type="file" size="3" accept="image/gif,image/jpeg,image/png,image/bmp"></a>        <label for="goodsItemVal">名称：</label><input id="goodsItemVal" value="商品名称" type="text" name="VAL" class="val" maxlength="16" />      </div>      <div class="goods-price">        <label class="goods-price-label">单价：</label><input value="0" type="text" name="PRC" class="price" maxlength="6" />      </div>      <div class="goods-unit">        <label>单位：</label><input type="text" name="UNT" class="unt" maxlength="4" />      </div>      <div class="goods-def">        <label>默认：</label><input type="text" name="DEF" class="def number" maxlength="4" />      </div>      <div class="goods-hide">        <input type="checkbox" name="HD" class="hd" value="1" /> <label>隐藏</label>      </div>      <div class="goods-currency">        <select name="CNY" class="cny" title="币别" ><option value="">币别</option><option value="¥">人民币</option><option value="$">美元</option><option value="£">英镑</option><option value="€">欧元</option></select>      </div>\t\t<div name="goods-limit" style="margin-bottom:3px;">\t\t\t<label>限购：</label><select style="width:25%;" name="COMMITLMT"><option value="ALL">累计</option><option value="DAY">每天</option></select>&nbsp;&nbsp;限制购买&nbsp;<input style="width:25%;" class="number" type="text" name="AMOUNTLMT" maxlength="10"/>\t\t</div>      <div class="goods-description">        <label for="goodsItemDes" style="vertical-align: top;">描述：</label><textarea id="goodsItemDes" name="DES" class="des"></textarea>      </div>    </div></div></div>    <a class="icononly-del iconfont" title="删除此选商品">&#xe619;</a> </li>',
    item_radio: '<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><div class="item-upload"><span>上传图片<br>(限1MB)</span><img class="img hide" style="width:60px;"/></div><input name="VAL" type="text" class="xs"/><a class="icononly-add iconfont icon-pos" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont icon-pos" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont icon-pos" title="排序">&#xe63d;</a><a class="icononly-limit iconfont icon-pos" title="添加提交次数限制">&#xe632;</a></li>',
    item_dropdown: '<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><input name="VAL" type="text" class="sl"/><a class="icononly-add iconfont" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a><a class="icononly-limit iconfont" title="添加提交次数限制">&#xe632;</a></li>',
    item_dropdown2: '<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><input name="VAL" type="text" class="sl"/><a class="icononly-add iconfont" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',
    item_other: '<li class="dropReq hide"><input name="CHKED" disabled="disabled" type="radio" title="默认选中此择项" /><label>其他</label><input name="OTHER" disabled="disabled" type="text" class="m"/></li>',
    item_likert_row: '<li><input name="LBL" class="xl" value="1" type="text"/><a class="icononly-add iconfont" title="添加新行">&#xe60b;</a><a class="icononly-del iconfont" title="删除此行">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',
    item_likert_col: '<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此列" /><input name="VAL" type="text" class="l"/><a class="icononly-add iconfont" title="添加新列">&#xe60b;</a><a class="icononly-del iconfont" title="删除此列">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',
    item_radio_f: '<span><input type="radio" disabled="disabled" /><label></label></span>',
    item_checkbox_f: '<span><input type="checkbox" disabled="disabled" /><label></label></span>',
    item_goods_f: '<div class="goods-item"><div class="image-center"><img src="" class="img"></div>\t  <div class="text-wrapper">\t    <label class="name">商品名称</label><label class="des"></label>\t\t<div class="price-number clearfix">\t    \t<div class="price">0</div>\t    \t<div class="number-container"><span class="number-pre hide">¥</span>\t      \t\t<a href="#" class="decrease"><i class="icon-minus">-</i></a><input class="number" type="text" maxlength="6" value="0"><a href="#" class="increase"><i class="icon-plus">+</i></a>\t    \t</div>\t\t</div>\t </div></div>',
    item_imgselect: '<div class="goods-item"><div class="image-center"><img src="" class="img"></div>\t  <div class="text-wrapper">\t\t<div class="clearfix">\t\t</div>\t </div></div>',
    likert_td: '<td><input type="radio" disabled="disabled" /><label></label></td>',
    item_radio_other_f: '<span class="hide"><input type="radio" value="other" disabled="disabled" /><label>其他</label><input name="OTHER" disabled="disabled" type="text" class="m" /></span>',
    text: {
        html: '<label class="desc"><span class="req hide">1 *</span></label><div class="content textcontent"><input type="text" disabled="disabled" maxlength="255" class="input" />2<i class="iconfont qrinput hide">&#xe67d;</i></div>',
        json: '({LBL:"单行文本",TYP:"text",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub"})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },

	
	
    number: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="32" class="input" /></div>',
        json: '({LBL:"数字框",TYP:"number",FLDSZ:"s",REQD:"0",UNIQ:"0",SCU:"pub"})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    textarea: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><textarea disabled="disabled" class="input"></textarea></div>',
        json: '({LBL:"多行文本",TYP:"textarea",FLDSZ:"s",REQD:"0",UNIQ:"0",SCU:"pub",MIN:"",MAX:"",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:119px;width:97%"></li>'
    },
    checkbox: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>',
        json: '({LBL:"多选框",TYP:"checkbox",LAY:"one",REQD:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',
        holder: '<li class="field prefocus" style="height:106px;width:97%"></li>'
    },
    goods: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>',
        json: '({LBL:"商品",TYP:"goods",REQD:"0",SCU:"pub",INSTR:"",ITMS:[],FBUY:"0",UNT:"",NOIMG:""})',
        holder: '<li class="field prefocus" style="height:148px;width:97%"></li>'
    },
    goodsnoimg: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>',
        json: '({LBL:"商品",TYP:"goods",REQD:"0",SCU:"pub",INSTR:"",ITMS:[],FBUY:"0",UNT:"",NOIMG:"1"})',
        holder: '<li class="field prefocus" style="height:148px;width:97%"></li>'
    },
    radio: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>',
        json: '({LBL:"单选框",TYP:"radio",LAY:"one",REQD:"0",OTHER:"0",RDM:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',
        holder: '<li class="field prefocus" style="height:106px;width:97%"></li>'
    },
    dropdown: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><select disabled="disabled" class="m input"></select></div>',
        json: '({LBL:"下拉框",TYP:"dropdown",FLDSZ:"m",REQD:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    dropdown2: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><select disabled="disabled" class="m input"></select> <select disabled="disabled" class="m input"></select></div>',
        json: '({LBL:"多级下拉框",TYP:"dropdown2",FLDSZ:"m",pN:"2",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{DD1:{},DD2:{}},ITMS:[{VAL:"选项 1",CHKED:"0",ITMS:[{VAL:"选项 11"},{VAL:"选项 12"}]},{VAL:"选项 2",CHKED:"0",ITMS:[{VAL:"选项 21"},{VAL:"选项 22"}]}]})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    image: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><img style="width:100%;" src="/Content/CustomFrom/FormDesign/images/defaultimg.png"></div>',
        json: '({LBL:"图片",TYP:"image",IMG:"",REQD:"0",SCU:"pub",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:194px;width:97%"></li>'
    },
    section: {
        html: '<div class="noLabelAlign"><label class="desc section">分隔符</label><div class="content">这里是分隔符说明</div></div>',
        json: '({LBL:"分隔符",TYP:"section",SCU:"pub",SECDESC:"这里是分隔符说明",CSS:""})',
        holder: '<li class="field prefocus" style="height:58px;width:97%"></li>'
    },
    html: {
        html: '<div class="noLabelAlign"><label class="desc">HTML标题</label><div class="content"><p>这里可以显示HTML内容</p></div></div>',
        json: '({LBL:"HTML标题",TYP:"html",SCU:"pub",HTML:"<p>这里可以显示HTML内容</p>",CSS:""})',
        holder: '<li class="field prefocus" style="height:54px;width:97%"></li>'
    },
    date: {
        html: '<label class="desc">日期 <span class="req hide"> *</span></label><div class="content oneline reduction"><span>\t<input class="yyyy input" disabled="disabled" maxlength="4" type="text"/>\t<label>YYYY</label></span><span class="split"> - </span><span>\t<input class="mm input" disabled="disabled" maxlength="2" type="text"/>\t<label>MM</label></span><span class="split"> - </span><span>\t<input class="dd input" disabled="disabled" maxlength="2" type="text"/>\t<label>DD</label></span><span><a class="icononly-date" title="选择日期"></a></span></div>',
        json: '({LBL:"日期",TYP:"date",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"ymd",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:87px;width:97%"></li>'
    },
    date_ymd: '<span><input class="yyyy input" disabled="disabled" maxlength="4" type="text"/><label>YYYY</label></span><span class="split"> - </span><span><input class="mm input" disabled="disabled" maxlength="2" type="text"/><label>MM</label></span><span class="split"> - </span><span><input class="dd input" disabled="disabled" maxlength="2" type="text"/><label>DD</label></span><span><a class="icononly-date" title="选择日期"></a></span>',
    date_mdy: '<span><input class="mm input" disabled="disabled" maxlength="2" type="text"/><label>MM</label></span><span class="split"> / </span><span><input class="dd input" disabled="disabled" maxlength="2" type="text"/><label>DD</label></span><span class="split"> / </span><span><input class="yyyy input" disabled="disabled" maxlength="4" type="text"/><label>YYYY</label></span><span><a class="icononly-date" title="选择日期"></a></span>',
    date_dmy: '<span><input class="dd input" disabled="disabled" maxlength="2" type="text"/>\t<label>DD</label></span><span class="split"> / </span><span>\t<input class="mm input" disabled="disabled" maxlength="2" type="text"/>\t<label>MM</label></span><span class="split"> / </span><span>\t<input class="yyyy input" disabled="disabled" maxlength="4" type="text"/>\t<label>YYYY</label></span><span><a class="icononly-date" title="选择日期"></a></span>',
    time: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><span>\t<select class="hh input" disabled="disabled"></select></span><span class="split"> : </span><span>\t<select class="mm input" disabled="disabled"></select></span></div>',
        json: '({LBL:"时间",TYP:"time",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    file: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" class="m input" />&nbsp;<input type="button" class="btn file-input" disabled="disabled" value="浏览..." /></div>',
        json: '({LBL:"上传文件",TYP:"file",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{ID:{},TYP:{},SZ:{},NM:{}}})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    phone: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button></div>',
        json: '({LBL:"手机",TYP:"phone",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"mobile",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    phone_tel_cn: '<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>区号</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="8" size="8" type="text"/><label>总机</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="4" size="4" type="text"/><label>分机</label></span>',
    phone_tel_en: '<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>####</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="8" size="8" type="text"/><label>########</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="4" size="4" type="text"/><label>####</label></span>',
    phone_mobile_cn: '<input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',
    phone_mobile_en: '<input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',
    url: {
        html: '<label class="desc"> <span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="256" class="m input" value="http://" /></div>',
        json: '({LBL:"网址",TYP:"url",FLDSZ:"xxl",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    money: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><b>￥</b><input type="text" disabled="disabled" maxlength="16" size="8" class="input" /></div>',
        json: '({LBL:"价格",TYP:"money",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"yen",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    email: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="64" class="m input" /></div>',
        json: '({LBL:"Email",TYP:"email",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    name: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text" disabled="disabled" maxlength="128" value="" class="s input" /></div>',
        json: '({LBL:"姓名",TYP:"name",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"short",DEF:"",INSTR:"",CSS:""})',
        holder: '<li class="field prefocus" style="height:71px;width:97%"></li>'
    },
    name_short: '<input type="text" disabled="disabled" maxlength="128" value="" class="s input" /></div>',
    name_extend_en: '<span><input class="input"  disabled="disabled" maxlength="128" size="6" type="text"/><label>Title</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="128" size="10" type="text"/><label>First Name</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="128" size="10" type="text"/><label>Last Name</label></span>',
    name_extend_cn: '<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>姓</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="4" size="8" type="text"/><label>名</label></span><span class="split"> - </span><span><input class="input"  disabled="disabled" maxlength="4" size="4" type="text"/><label>称呼</label></span>',
    map: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" class="xxl location" readonly="readonly" /><div class="map"><img src="/Content/CustomFrom/FormDesign/images/map.jpg"</div></div>',
        json: '({LBL:"地理位置",TYP:"map",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{TXT:{},J:{},W:{}}})',
        holder: '<li class="field prefocus" style="height:310px;width:97%"></li>'
    },
    address: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content onelineLeft reduction"><span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="详细地址" ></textarea></span></div>',
        json: '({LBL:"地址",TYP:"address",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{ZIP:{},PRV:{},CITY:{},DTL:{}}})',
        holder: '<li class="field prefocus" style="height:141px;width:97%"></li>'
    },
    address_en: '<span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="Street"></textarea></span>',
    address_cn: '<span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="详细地址"></textarea></span>',
    likert: {
        html: '<div class="content noLabelAlign"><table class="table" cellspacing="0"><caption><label class="desc"><span class="req hide"> *</span></label></caption><thead><tr></tr></thead><tbody></tbody></table></div>',
        json: '({LBL:"组合单选框",TYP:"likert",REQD:"0",HDNM:"0",SCU:"pub",CSS:"",ITMS:[{LBL:"行标签 1",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]},         {LBL:"行标签 2",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]},         {LBL:"行标签 3",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]}]})',
        holder: '<li class="field prefocus" style="height:184px;width:97%"></li>'
    }
};