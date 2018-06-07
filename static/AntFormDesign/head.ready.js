head.ready(function () {
    // if (window.CURUSER && CURUSER.USERNAME == testUser) {
        // $('#menu').find('li.frm,li.rpt,li.usr,li.act,li.app,li.thm').hide();
        // $('#saveForm').attr('href', '/web/register').html('<b></b>注册即可保存')
    // }
    $('a.help', '#right').helpTip();   // 没能看懂
    initWangEditor();
    createForm();
    createFields();
    fieldInit();
    propertyInit();
    addFieldsInit();
    formInit();
   // $('#helpLink').attr('href', resRoot + '/help/formbuilder.html');
    var b = function (d) {
        var c = $(this).val();
        $(this).val(c.replace(/\D/g, ''))
    },
    a = function (d) {
        var c = $(this).val();
        $(this).val(c.replace(/[^(\d\.?\-?)]/g, ''))
    };
    $('input.yyyy,input.mm,input.dd,input.intnumber', '#left').bind({
        keyup: b,
        change: b
    });
    $('input.number,input.money,input.price').live({
        keyup: a,
        change: a
    });
    setInterval(function () {
        saveForm(false)
    }, 5 * 60 * 1000);
    $('#allPropsContainer').css({
        maxHeight: $(window).height() - 120
    }).mCustomScrollbar();
	
	$('#addFields').css({
        maxHeight: $(window).height() - 120
    }).mCustomScrollbar();
	
	$('#allFormPerperties').css({
        maxHeight: $(window).height() - 120
    }).mCustomScrollbar();
	
	
    $('a.video').live({
        click: function () {
            var c = $(this).attr('videosrc');
            $.lightBox({
                url: '../../web/video.jsp?URL=' + c,
                size: 'cus1'
            })
        }
    })
});