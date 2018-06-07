
function propertyInit() {
    var T = null;
    $(':radio:not(\'#sec_pub\',\'#sec_pri\')', '#allProps').live({
        click: function () {
            if (T === this) {
                $(T).prop('checked', false);
                T = null
            } else {
                T = this
            }
            CHANGED = true
        }
    });
    function r(U) {
        if (T == U) {
            T.checked = false;
            T = null
        } else {
            T = U
        }
    }
    var e = function (aa, ab) {
        var ah = $('#prepop');
        var ad = [
        ],
        Z = ah.val().split('\n');
        for (Y = 0, i1 = 0; Y < Z.length; Y++) {
            var ac = {
                VAL: Z[Y],
                CHKED: '0'
            };
            if (ab == 'radio' || ab == 'dropdown') {
                if (F[IDX].ITMS[i1] && F[IDX].ITMS[i1].ITMID) {
                    ac.ITMID = F[IDX].ITMS[i1].ITMID
                }
            }
            if (ab == 'checkbox') {
                if (F[IDX].ITMS[i1] && F[IDX].ITMS[i1].NM) {
                    ac.NM = F[IDX].ITMS[i1].NM
                }
            }
            ad.push(ac)
        }
        if (ab === 'dropdown2') {
            var ae = {
            };
            ae.ITMS = [
            ];
            var af = ae;
            var V = 0;
            for (var Y = 0; Y < Z.length; Y++) {
                var ag = $.trim(Z[Y]);
                var U = ag.lastIndexOf('-') + 1;
                ag = ag.substring(U);
                if (ag && ag.length > 0) {
                    var X = {
                    };
                    X.VAL = ag;
                    if (V == U) {
                        af.ITMS.push(X)
                    } else {
                        if (V < U) {
                            V++;
                            af = af.ITMS[af.ITMS.length - 1];
                            af.ITMS = [
                            ];
                            af.ITMS.push(X)
                        } else {
                            if (V > U) {
                                var W = 0;
                                af = ae;
                                while (W < U) {
                                    W++;
                                    af = af.ITMS[af.ITMS.length - 1]
                                }
                                V = U;
                                if (!af.ITMS) {
                                    af.ITMS = [
                                    ]
                                }
                                af.ITMS.push(X)
                            }
                        }
                    }
                }
            }
            ad = ae.ITMS
        }
        createItems(aa, ab, ad);
        if (ab === 'radio' || ab === 'dropdown' || ab == 'checkbox' || ab == 'dropdown2') {
            F[IDX].ITMS = ad
        } else {
            if (ab === 'likertCol') {
                $.each(F[IDX].ITMS, function (ak, aj) {
                    var ai = JSON.parse(JSON.stringify(ad));
                    $.each(ai, function (al, am) {
                        if (F[IDX].ITMS[ak] && F[IDX].ITMS[ak].ITMS[al] && F[IDX].ITMS[ak].ITMS[al].ITMID) {
                            ai[al].ITMID = F[IDX].ITMS[ak].ITMS[al].ITMID
                        }
                    });
                    aj.ITMS = ai
                })
            }
        }
    },
    A = function (U) {
        e($('#itemList'), U);
        if (F[IDX].TYP === 'radio') {
            createRadioItemsPreview(F[IDX], $('#f' + IDX).find('div.content'))
        } else {
            if (F[IDX].TYP === 'dropdown') {
                $('#f' + IDX).find('select').empty()
            }
        }
    };
    $('#btnItemsPredefine').click(function () {
        if ($.browser.msie && $.browser.version === '6.0') {
            $('#lightBox').css('margin-top', $(document).scrollTop() - 210)
        }
        $.lightBox({
            url: '/html/predefinechoices.html',
            size: 's',
            confirm: function () {
                A('radio');
                CHANGED = true
            },
            loaded: function () {
                var U = '';
                $.each(F[IDX].ITMS, function (V, W) {
                    if (V > 0) {
                        U += '\n'
                    }
                    U += W.VAL
                });
                $('#prepop').val(U)
            }
        });
        $('li a', '#choiceMenu').live('click', function () {
            $('#prepop').val($(this).attr('list').replace(/;/gi, '\n'));
            return false
        });
        return false
    });
    $('#btnItemsBatch').click(function () {
        if ($.browser.msie && $.browser.version === '6.0') {
            $('#lightBox').css('margin-top', $(document).scrollTop() - 210)
        }
        $.lightBox({
            url: '/html/itembatchedit.html',
            size: 's',
            confirm: function () {
                A(F[IDX].TYP);
                $('#itemList').find('input[name=\'VAL\']:first').trigger('focus');
                CHANGED = true
            },
            loaded: function () {
                var V = '';
                if (F[IDX].TYP == 'dropdown2') {
                    var W = '<div>"-"的个数表示层级数（"-"为英文减号）。</div>';
                    $('.info').append(W);
                    function U(X, Y) {
                        if (!X) {
                            return
                        }
                        $.each(X, function (aa, ab) {
                            for (var Z = 0; Z < Y; Z++) {
                                V += '-'
                            }
                            V += ab.VAL + '\n';
                            U(ab.ITMS, Y + 1)
                        })
                    }
                    U(F[IDX].ITMS, 0)
                } else {
                    $.each(F[IDX].ITMS, function (X, Y) {
                        V += Y.VAL;
                        if (X != F[IDX].ITMS.length - 1) {
                            V += '\n'
                        }
                    })
                }
                $('#prepop').val(V)
            }
        });
        $('li a', '#choiceMenu').live('click', function () {
            $('#prepop').val($(this).attr('list').replace(/;/gi, '\n'));
            return false
        });
        return false
    });
    $('#btnLikertPredefine').click(function () {
        if ($.browser.msie && $.browser.version === '6.0') {
            $('#lightBox').css('margin-top', $(document).scrollTop() - 210)
        }
        $.lightBox({
            url: '/html/predefinelikert.html',
            size: 's',
            confirm: function () {
                e($('#likertCols'), 'likertCol');
                createLikertPreview(F[IDX], $('#f' + IDX).find('div.content'));
                CHANGED = true
            },
            loaded: function () {
                var U = '';
                $.each(F[IDX].ITMS[0].ITMS, function (V, W) {
                    if (V > 0) {
                        U += '\n'
                    }
                    U += W.VAL
                });
                $('#prepop').val(U)
            }
        });
        $('li a', '#choiceMenu').live('click', function () {
            $('#prepop').val($(this).attr('list').replace(/;/gi, '\n'));
            return false
        });
        return false
    });
    var u = function () {
        var V = $('#f' + IDX),
        U = V.find('label.desc span');
        V.find('label:first').text($(this).val()).append(U);
        F[IDX].LBL = $.trim($(this).val());
        CHANGED = true
    };
	$('#lbl').bind({
        keyup: u,
        change: u
    });
	
	 var uIDD = function () {
        //var V = $('#f' + IDX),
        //U = V.find('label.desc span');
        //V.find('label:first').text($(this).val()).append(U);
        F[IDX].IDD = $.trim($(this).val());
        CHANGED = true
    };

	$('#idd').bind({
        keyup: uIDD,
        change: uIDD
    });
	
	var uButtontype = function () {
        //var V = $('#f' + IDX),
        //U = V.find('label.desc span');
        //V.find('label:first').text($(this).val()).append(U);
        F[IDX].Buttontype = $.trim($(this).val());
        CHANGED = true
    };

	$('#Buttontype').bind({
        keyup: uButtontype,
        change: uButtontype
    });
	
	
    $('#type').change(function () {
        var W = $('#f' + IDX),
        U = F[IDX];
        U.TYP = $(this).val();
        if (U.ITMS) {
            U.ITMS = DEFFLD[U.TYP].json.ITMS
        }
        if (U.SUBFLDS) {
            U.SUBFLDS = DEFFLD[U.TYP].json.SUBFLDS
        }
        if (U.TYP == 'goodsnoimg') {
            U.NOIMG = '1';
            U.TYP = 'goods'
        } else {
            if (U.TYP == 'goods') {
                U.NOIMG = ''
            }
        }
        setDefFieldDom(W, U.TYP, IDX, U);
        var V = IDX;
        IDX = - 2;
        setFocused(W, V + 1);
        CHANGED = true
    });
    $('#fldsize').change(function () {
        $('#f' + IDX).find('select,:text,textarea').removeClass('s m l xl xxl').addClass($(this).val());
        F[IDX].FLDSZ = $(this).val();
        resizeHandle($('#f' + IDX));
        CHANGED = true
    });
    $('#layout').change(function () {
        $('#f' + IDX).removeClass('one two three oneByOne').addClass($(this).val());
        F[IDX].LAY = $(this).val();
        resizeHandle($('#f' + IDX));
        CHANGED = true
    });
    $('#dateformat').change(function () {
        $('#f' + IDX).find('div.content').html(DEFFLD['date_' + $(this).val()]);
        F[IDX].FMT = $(this).val();
        CHANGED = true
    });
    $('#nameformat').change(function () {
        var U;
        if ($(this).val() === 'extend') {
            U = 'name_extend_' + M.LANG
        } else {
            U = 'name_' + $(this).val()
        }
        $('#f' + IDX).find('div.content').html(DEFFLD[U]);
        F[IDX].FMT = $(this).val();
        CHANGED = true
    });
    $('#moneyfomat').change(function () {
        $('#f' + IDX).find('div.content>b').text(currencys[$(this).val()]);
        F[IDX].FMT = $(this).val();
        CHANGED = true
    });
    $('#N').change(function () {
        F[IDX].pN = $(this).val() || '2';
        var X = parseInt(F[IDX].pN);
        F[IDX].SUBFLDS = {
        };
        for (var V = 0; V < X; V++) {
            F[IDX].SUBFLDS['DD' + (V + 1)] = {
            }
        }
        function W(aa, ab) {
            if (ab == 0) {
                return
            }
            aa.ITMS = [
            ];
            for (var Z = 1; Z <= 2; Z++) {
                var Y = {
                };
                if (aa.VAL) {
                    Y.VAL = aa.VAL + Z
                } else {
                    Y.VAL = '选项 ' + Z
                }
                W(Y, ab - 1);
                aa.ITMS.push(Y)
            }
        }
        var U = {
        };
        W(U, X);
        F[IDX].ITMS = U.ITMS;
        $('#f' + IDX).find('div.content>select').remove();
        for (var V = 0; V < X; V++) {
            $('#f' + IDX).find('div.content').append('<select disabled="disabled" class="input"></select>')
        }
        $('#f' + IDX).find('div.content>select').css({
            width: (100 / X - 1) + '%',
            'margin-left': '1%'
        });
        CHANGED = true
    });
    $('#itemList>li>a.icononly-limit').live({
        click: function () {
            var W = this,
            U = $(this).parent(),
            X = U.index();
            var V = U.find('div.limit');
            if (V.length == 0) {
                var Z = 'lmt' + X;
                var Y = '<div id="' + Z + '" class="limit hide" style="margin-top:5px;"><select class="s" style="margin-left:18px;" name="COMMITLMT"><option value="DAY">每天</option><option value="ALL">累计</option></select> 限制填写 <input class="s number" type="text" name="AMOUNTLMT" maxlength="10"/> 次</div>';
                V = $(Y);
                U.append(V)
            }
            if (V.hasClass('hide')) {
                V.removeClass('hide');
                if (F[IDX].COMMITLMT || F[IDX].ITMS[X].COMMITLMT) {
                    V.find('select>option[value=\'' + (F[IDX].COMMITLMT || F[IDX].ITMS[X].COMMITLMT) + '\']').prop('selected', true);
                    if (F[IDX].ITMS[X].AMOUNTLMT) {
                        V.find('input').val(F[IDX].ITMS[X].AMOUNTLMT)
                    }
                }
                if (U.find('div.item-upload').length > 0) {
                    U.find('a.icononly-add,a.icononly-del,a.icononly-mov,a.icononly-limit').css({
                        'margin-top': '-32px'
                    })
                }
            } else {
                V.addClass('hide');
                if (U.find('div.item-upload').length > 0) {
                    U.find('a.icononly-add,a.icononly-del,a.icononly-mov,a.icononly-limit').css({
                        'margin-top': '-14px'
                    })
                }
            }
        }
    });
    $('#itemList>li>div.limit>select, #goodsList>li div[name=\'goods-limit\']>select').live({
        change: function () {
            var aa = $(this),
            W = aa.parent();
            var ab;
            if (W.attr('name') == 'goods-limit') {
                ab = W.parent().parent().parent().parent()
            } else {
                ab = W.parent()
            }
            var X = ab.index(),
            Y = ab.parent(),
            U = aa.siblings('input');
            var Z = U.val(),
            ac = aa.val();
            F[IDX].COMMITLMT = ac;
            if (Z) {
                F[IDX].ITMS[X].COMMITLMT = ac;
                F[IDX].ITMS[X].AMOUNTLMT = Z
            }
            for (var V = 0; V < F[IDX].ITMS.length; V++) {
                if (F[IDX].ITMS[V].COMMITLMT) {
                    F[IDX].ITMS[V].COMMITLMT = ac
                }
            }
            Y.find('li>div.limit, li div[name=\'goods-limit\']').find('select[name=\'COMMITLMT\']>option[value=\'' + F[IDX].COMMITLMT + '\']').prop('selected', true)
        }
    });
    $('#itemList>li>div.limit>input, #goodsList>li div[name=\'goods-limit\']>input').live({
        change: function () {
            var U = $(this),
            X = U.parent();
            var ab;
            if (X.attr('name') == 'goods-limit') {
                ab = X.parent().parent().parent().parent()
            } else {
                ab = X.parent()
            }
            var Y = ab.index(),
            aa = U.siblings('select');
            var Z = U.val(),
            ac = aa.val();
            if (Z) {
                F[IDX].COMMITLMT = ac;
                F[IDX].ITMS[Y].COMMITLMT = ac;
                F[IDX].ITMS[Y].AMOUNTLMT = Z
            } else {
                delete F[IDX].ITMS[Y]['COMMITLMT'];
                delete F[IDX].ITMS[Y]['AMOUNTLMT'];
                var W = false;
                for (var V = 0; V < F[IDX].ITMS.length; V++) {
                    if (F[IDX].ITMS[V].COMMITLMT && F[IDX].ITMS[V].AMOUNTLMT) {
                        W = true;
                        break
                    }
                }
                if (!W) {
                    delete F[IDX]['COMMITLMT']
                }
            }
        }
    });
    var s = function () {
        var U = $('#likertRows>li>:text').index(this);
        $('#f' + IDX).find('div.content>table>tbody>tr:eq(' + U + ') th').text($(this).val());
        F[IDX].ITMS[U].LBL = $.trim($(this).val());
        CHANGED = true
    };
    $('#likertRows>li>:text').live({
        keyup: s,
        change: s
    });
    var b = function (V) {
        var U = $(V).parent().index();
        $(V).parent().remove();
        $('#f' + IDX).find('div.content>table>tbody>tr:eq(' + U + ')').remove();
        F[IDX].ITMS.splice(U, 1);
        CHANGED = true
    };
    $('#likertRows>li>a.icononly-del').live({
        click: function () {
            var W = this,
            U = $(this).parent(),
            X = U.parent(),
            V = U.index();
            if (X.find('>li').length <= 1) {
                $.alert('至少要保留一个选项。');
                return false
            }
            if (F[IDX].ITMS[V].NM && M.MXID > 0) {
                $.confirm({
                    msg: delConfirmMsg,
                    showyes: true,
                    confirm: function () {
                        $.showStatus('正在执行删除操作 ...');
                        var Y = 'deleteItem';
                        $.postJSON(Y, {
                            _id: M._id,
                            FLDID: F[IDX].FLDID,
                            NM: F[IDX].ITMS[V].NM
                        }, function () {
                            b(W);
                            $.hideStatus()
                        })
                    }
                })
            } else {
                b(W)
            }
        }
    });
    $('#likertRows>li>a.icononly-add').live({
        click: function () {
            var U = $('#likertRows>li>a.icononly-add').index(this);
            var W = $(this).parent().clone();
            $(this).parent().after(W);
            var V = $('#f' + IDX).find('div.content>table>tbody>tr:eq(' + U + ')');
            V.after($(V).clone());
            var X = JSON.parse(JSON.stringify(F[IDX].ITMS[U]));
            delete X.FLDID;
            delete X.NM;
            $.each(X.ITMS, function (Y, Z) {
                delete Z.ITMID
            });
            F[IDX].ITMS.splice(U + 1, 0, X);
            resizeHandle($('#f' + IDX));
            CHANGED = true
        }
    });
    var c,
    m;
    $('#likertRows').sortable({
        axis: 'y',
        delay: 100,
        handler: '.icononly-mov',
        start: function (V, U) {
            c = U.item.index()
        },
        stop: function (W, V) {
            m = V.item.index();
            if (c != m) {
                var U = F[IDX].ITMS[c];
                F[IDX].ITMS.splice(c, 1);
                F[IDX].ITMS.splice(m, 0, U);
                createLikertPreview(F[IDX], $('#f' + IDX).find('div.content'));
                CHANGED = true
            }
        }
    });
    var B = function () {
        var V = $.trim($(this).val()),
        U = $('#likertCols>li>:text').index(this);
        $('#f' + IDX).find('div.content>table>thead>tr>td:eq(' + U + ')').text(V);
        $.each(F[IDX].ITMS, function (X, W) {
            W.ITMS[U].VAL = V
        });
        CHANGED = true
    };
    $('#likertCols>li>:text').live({
        keyup: B,
        change: B
    });
    $('#likertCols>li>:radio').live({
        click: function () {
            var U = $('#likertCols>li>:radio').index(this),
            V = $(this).prop('checked');
            $('div.content>table>tbody :radio').prop('checked', false);
            $('#f' + IDX).find('div.content>table>tbody>tr').each(function (W, X) {
                $('td:eq(' + U + ')', X).find(':radio').prop('checked', V)
            });
            $.each(F[IDX].ITMS, function (X, W) {
                $.each(W.ITMS, function (Y, Z) {
                    Z.CHKED = '0'
                });
                W.ITMS[U].CHKED = V ? '1' : '0'
            });
            F[IDX].DEF = V ? '' + U : '';
            CHANGED = true
        }
    });
    $('#likertCols>li>a.icononly-add').live({
        click: function () {
            var U = $('#likertCols>li>a.icononly-add').index(this);
            var V = $(this).parent().clone().find(':radio').prop('checked', false).end();
            $(this).parent().after(V);
            $('#f' + IDX).find('div.content>table tr').each(function (W, Y) {
                var Z = $('td:eq(' + U + ')', Y);
                Z.after(Z.clone().find(':radio').prop('checked', false).end());
                if (W > 0) {
                    $('td', Y).each(function (ac, ad) {
                        if (ac > U) {
                            var aa = $(ad).find('label'),
                            ab = parseInt(aa.text()) + 1;
                            aa.text(ab)
                        }
                    })
                } else {
                    if (W === 0) {
                        var X = Math.ceil((100 - 30) / (F[IDX].ITMS[0].ITMS.length + 1)) + '%';
                        $('td', Y).each(function (aa, ab) {
                            $(ab).css('width', X)
                        })
                    }
                }
            });
            $.each(F[IDX].ITMS, function (X, W) {
                var Y = JSON.parse(JSON.stringify(W.ITMS[U]));
                Y.CHKED = '0';
                delete Y.ITMID;
                W.ITMS.splice(U + 1, 0, Y)
            });
            CHANGED = true
        }
    });
    var O = function (V) {
        var U = $('#likertCols>li>a.icononly-del').index(V);
        $(V).parent().remove();
        $('#f' + IDX).find('div.content>table tr').each(function (W, Y) {
            if (W > 0) {
                $('td', Y).each(function (ab, ac) {
                    if (ab > U) {
                        var Z = $(ac).find('label'),
                        aa = parseInt(Z.text()) - 1;
                        Z.text(aa)
                    }
                })
            } else {
                if (W === 0) {
                    var X = Math.ceil((100 - 30) / (F[IDX].ITMS[0].ITMS.length - 1)) + '%';
                    $('td', Y).each(function (Z, aa) {
                        $(aa).css('width', X)
                    })
                }
            }
            $('td:eq(' + U + ')', Y).remove()
        });
        $.each(F[IDX].ITMS, function (X, W) {
            W.ITMS.splice(U, 1)
        });
        CHANGED = true
    };
    $('#likertCols>li>a.icononly-del').live({
        click: function () {
            var V = this,
            U = $('#likertCols>li>a.icononly-del').index(V),
            W = $('#likertCols');
            if (W.find('>li').length <= 1) {
                $.alert('至少要保留一个选项。');
                return false
            }
            if (F[IDX].ITMS[0].ITMS[U].ITMID && M.MXID > 0) {
                $.confirm({
                    msg: delConfirmMsg,
                    showyes: true,
                    confirm: function () {
                        $.showStatus('正在执行删除操作 ...');
                        var X = 'deleteLikertCol';
                        $.postJSON(X, {
                            _id: M._id,
                            FLDID: F[IDX].FLDID,
                            COLINDEX: U
                        }, function () {
                            O(V);
                            $.hideStatus()
                        })
                    }
                })
            } else {
                O(V)
            }
            CHANGED = true;
            return false
        }
    });
    var J,
    a;
    $('#likertCols').sortable({
        axis: 'y',
        delay: 100,
        handler: '.icononly-mov',
        start: function (V, U) {
            J = U.item.index()
        },
        stop: function (V, U) {
            a = U.item.index();
            if (J != a) {
                $.each(F[IDX].ITMS, function (X, Y) {
                    var W = Y.ITMS[J];
                    Y.ITMS.splice(J, 1);
                    Y.ITMS.splice(a, 0, W)
                });
                createLikertPreview(F[IDX], $('#f' + IDX).find('div.content'));
                CHANGED = true
            }
        }
    });
    $('#reqd').click(function () {
        var V = $(this).prop('checked'),
        U = $('#f' + IDX).find('span.req');
        if (V) {
            U.show()
        } else {
            U.hide()
        }
        F[IDX].REQD = V ? '1' : '0';
        CHANGED = true
    });
    $('#uniq').click(function () {
        F[IDX].UNIQ = $(this).prop('checked') ? '1' : '0';
        CHANGED = true
    });
    $('#qrinput').click(function () {
        F[IDX].QRINPUT = $(this).prop('checked') ? '1' : '0';
        var U = $('#f' + IDX).find('i.qrinput');
        if ($(this).prop('checked')) {
            U.removeClass('hide')
        } else {
            U.addClass('hide')
        }
        CHANGED = true
    });
    $('#random').click(function () {
        F[IDX].RDM = $(this).prop('checked') ? '1' : '0';
        CHANGED = true
    });
    $('#hidenum').click(function () {
        var U = $(this).prop('checked');
        if (U) {
            $('#f' + IDX).find('div.content>table>tbody label').css('display', 'none')
        } else {
            $('#f' + IDX).find('div.content>table>tbody label').css('display', 'block')
        }
        F[IDX].HDNM = U ? '1' : '0';
        CHANGED = true
    });
    $('#allowOther').click(function () {
        var W = $(this).prop('checked'),
        U = $('li.dropReq', '#itemList'),
        V = $('span:last', '#f' + IDX);
        if (W) {
            U.show();
            V.show()
        } else {
            U.find(':radio').prop('checked', false).end().hide();
            V.find(':radio').prop('checked', false).end().hide()
        }
        F[IDX].OTHER = W ? '1' : '0';
        CHANGED = true
    });
    $('#internal').click(function () {
        F[IDX].INTERNAL = $(this).prop('checked') ? '1' : '0';
        F[IDX].DEF = $(this).prop('checked') ? '+' : '';
        $('#defval_phone_mobile').val(F[IDX].DEF).trigger('change')
    });
    $('#authcode').click(function () {
        if ($(this).prop('checked')) {
            $('#f' + IDX).find('div.content .sendcode').show();
            $('#signcnt').show();
            F[IDX].AUTH = '1'
        } else {
            $('#f' + IDX).find('div.content .sendcode').hide();
            $('#signcnt').hide();
            F[IDX].AUTH = '0'
        }
        $('#internal').prop('checked', F[IDX].INTERNAL == '1')
    });
    $('#sign').change(function () {
        F[IDX].SIGN = $.trim($(this).val())
    });
    $('#btnSignSumbmit').click(function () {
        var U = $(this).attr('href');
        if (U.indexOf('?') > 0) {
            U = U.substring(0, U.indexOf('?'))
        }
        $(this).attr('href', U + '?field2=' + $('#sign').val())
    });
    $('#chkCompress').click(function () {
        if ($(this).prop('checked')) {
            $('#divCompress').removeClass('hide');
            $('#selCompress').val('30');
            F[IDX]['CPRS'] = '30'
        } else {
            $('#divCompress').addClass('hide');
            delete F[IDX]['CPRS']
        }
    });
    $('#selCompress').change(function () {
        F[IDX].CPRS = $(this).val()
    });
    $('#chkDismark').click(function () {
        F[IDX].DISMK = $(this).prop('checked') ? '1' : '0';
        CHANGED = true
    });
    var d = function (Y) {
        if ($(Y).parent().hasClass('dropReq')) {
            $(Y).parent().find(':radio,:checkbox').prop('checked', false).end().hide();
            span = $('span:last', '#f' + IDX).find(':radio,:checkbox').prop('checked', false).end().hide();
            $('#allowOther').prop('checked', false);
            return
        }
        var X = $(Y).parent().index(),
        Z = $(Y).parent().parent();
        $(Y).parent().remove();
        if (!$('#f' + IDX).find('div.content>div.goods-item').length) {
            $('#f' + IDX).find('div.content>span:eq(' + X + ')').remove()
        }
        $('#f' + IDX).find('div.content>div.goods-item:eq(' + X + ')').remove();
        if (F[IDX].TYP === 'goods' && $('#f' + IDX).find('div.content>div.goods-item').length == 0) {
            $('#f' + IDX).find('div.content').empty().append('<div class="nogoods-holder">请在左侧添加商品</div>')
        }
        if ('itemList2' == Z.attr('id')) {
            var U = parseInt(Z.attr('IDX'));
            F[IDX].ITMS[U].ITMS.splice(X, 1)
        } else {
            F[IDX].ITMS.splice(X, 1);
            if ($('#itemList2').is(':visible')) {
                $('#itemList2').hide()
            }
        }
        var V = true;
        for (var W = 0; W < F[IDX].ITMS.length; W++) {
            if (F[IDX].ITMS[W].IMG) {
                V = false;
                break
            }
        }
        if (V) {
            $('#f' + IDX).find('div.content').children().each(function (ab, aa) {
                if ($(aa).hasClass('goods-item')) {
                    $(aa).after('<span>' + $(aa).find('span').html() + '</span>');
                    $(aa).remove()
                }
            })
        }
    };
    var D = function () {
        var X = this,
        U = $(this).parent(),
        Y = U.parent(),
        W = U.index();
        if ((Y.find('li.dropReq').length == 0 && Y.find('>li').length <= 1) || (Y.find('li.dropReq').length > 0 && Y.find('>li').length <= 2)) {
            $.alert('至少要保留一个选项。');
            return false
        }
        if (F[IDX].ITMS[W].NM || F[IDX].ITMS[W].ITMID && M.MXID > 0) {
            $.confirm({
                msg: delConfirmMsg,
                showyes: true,
                confirm: function () {
                    $.showStatus('正在执行删除操作 ...');
                    var aa = 'deleteItem',
                    ab;
                    if (F[IDX].ITMS[W].NM) {
                        ab = {
                            _id: M._id,
                            FLDID: F[IDX].FLDID,
                            NM: F[IDX].ITMS[W].NM
                        };
                        if (F[IDX].ITMS[W].IMG) {
                            ab.IMG = F[IDX].ITMS[W].IMG
                        }
                    } else {
                        ab = {
                            _id: M._id,
                            FLDID: F[IDX].FLDID,
                            ITMID: F[IDX].ITMS[W].ITMID,
                            TYP: F[IDX].TYP
                        }
                    }
                    $.postJSON(aa, ab, function () {
                        d(X);
                        $.hideStatus()
                    })
                }
            })
        } else {
            if (F[IDX].ITMS[W].IMG) {
                $.showStatus('正在执行删除操作 ...');
                var V = 'deleteItem',
                Z = {
                };
                Z.IMG = F[IDX].ITMS[W].IMG;
                $.postJSON(V, Z, function () {
                    d(X);
                    $.hideStatus()
                })
            } else {
                d(X)
            }
        }
        CHANGED = true;
        return false
    },
    f = function () {
        var W = this,
        V = $(this).parent().index(),
        X = $('#itemList2'),
        U = parseInt(X.attr('IDX'));
        if (X.find('>li').length <= 1) {
            $.alert('至少要保留一个选项。');
            return false
        }
        if (F[IDX].ITMS[U].ITMS[V].ITMID && M.MXID > 0) {
            $.confirm({
                msg: delConfirmMsg,
                showyes: true,
                confirm: function () {
                    $.showStatus('正在执行删除操作 ...');
                    var Y = {
                        _id: M._id,
                        FLDID: F[IDX].FLDID,
                        ITMID1: F[IDX].ITMS[U].ITMID,
                        ITMID: F[IDX].ITMS[U].ITMS[V].ITMID,
                        TYP: 'dropdown'
                    };
                    $.postJSON('deleteItem', Y, function () {
                        d(W);
                        $.hideStatus()
                    })
                }
            })
        } else {
            d(W)
        }
        CHANGED = true;
        return false
    };
    $('a.icononly-del', '#itemList2').live({
        click: f
    });
    $('a.icononly-del', '#itemList').live({
        click: D
    });
    $('a.icononly-del', '#goodsList').live({
        click: D
    });
    $('#itemList').find('a.icononly-add').live({
        click: function () {
            var V = $('a.icononly-add', '#itemList').index(this);
            var X = $(this).parent().clone();
            X.find(':radio,:checkbox').prop('checked', false);
            X.find('img.img').addClass('hide').attr({
                src: ''
            });
            X.find('span').removeClass('hide');
            $(this).parent().after(X);
            var W = $('#f' + IDX).find('div.content').children(':eq(' + V + ')');
            W.after($(W).clone().find(':radio,:checkbox').prop('checked', false).end().find('img.img').attr({
                src: ''
            }).end());
            var Y = JSON.parse(JSON.stringify(F[IDX].ITMS[V]));
            Y.CHKED = '0';
            delete Y.ITMID;
            delete Y.NM;
            delete Y.IMG;
            function U(Z) {
                delete Z.ITMID;
                if (Z.ITMS) {
                    $.each(Z.ITMS, function (aa, ab) {
                        U(ab)
                    })
                }
            }
            U(Y);
            F[IDX].ITMS.splice(V + 1, 0, Y);
            X.find(':text').focus();
            resizeHandle($('#f' + IDX));
            CHANGED = true;
            return false
        }
    });
    $('#itemList2').find('a.icononly-add').live({
        click: function () {
            var V = $('a.icononly-add', '#itemList2').index(this),
            U = parseInt($('#itemList2').attr('IDX'));
            var W = $(this).parent().clone();
            $(this).parent().after(W);
            var X = JSON.parse(JSON.stringify(F[IDX].ITMS[U].ITMS[V]));
            delete X.ITMID;
            delete X.NM;
            F[IDX].ITMS[U].ITMS.splice(V + 1, 0, X);
            CHANGED = true;
            return false
        }
    });
    var z,
    y;
    $('#itemList').sortable({
        axis: 'y',
        delay: 100,
        handler: '.icononly-mov',
        start: function (V, U) {
            z = U.item.index()
        },
        stop: function (W, V) {
            y = V.item.index();
            if (z != y) {
                var U = F[IDX].ITMS[z];
                F[IDX].ITMS.splice(z, 1);
                F[IDX].ITMS.splice(y, 0, U);
                createField($('#f' + IDX), F[IDX]);
                $('#f' + IDX).find('.fieldActions').show();
                CHANGED = true
            }
        }
    });
    var I = function () {
        if ($(this).parent().hasClass('dropReq')) {
            return
        }
        var U = $(':text.sl,:text.xs', '#itemList').index(this);
        $('#f' + IDX).find('div.content span:eq(' + U + ') label').text($(this).val());
        F[IDX].ITMS[U].VAL = $.trim($(this).val());
        CHANGED = true
    };
    $(':text.sl, :text.xs', '#itemList').live({
        keyup: I,
        change: I
    });
    $(':radio', '#itemList').live({
        click: function () {
            var V = $(':radio', '#itemList').index(this),
            W = $(this).prop('checked');
            $(':radio', '#f' + IDX).prop('checked', false);
            $('select', '#f' + IDX).empty();
            $.each(F[IDX].ITMS, function (Y, X) {
                X.CHKED = '0'
            });
            if (F[IDX].TYP === 'radio') {
                $('#f' + IDX).find('div.content>span:eq(' + V + ') :radio').prop('checked', W)
            } else {
                if ((F[IDX].TYP === 'dropdown' || F[IDX].TYP === 'dropdown2') && W) {
                    var U = $(this).parent().find(':text').val();
                    if (U) {
                        $('#f' + IDX).find('select:first').empty().append($.tmpl('<option>${$data}</option>', U))
                    }
                }
            }
            F[IDX].ITMS[V].CHKED = W ? '1' : '0';
            F[IDX].DEF = W ? '' + V : '';
            CHANGED = true
        }
    });
    $(':checkbox', '#itemList').live({
        click: function () {
            var U = $(':checkbox', '#itemList').index(this),
            V = $(this).prop('checked');
            $('#f' + IDX).find('div.content>span:eq(' + U + ') :checkbox').prop('checked', V);
            F[IDX].ITMS[U].CHKED = V ? '1' : '0';
            CHANGED = true
        }
    });
    $.ossfileupload({
        file_selection_button: 'itemselectbtn',
        file_multi_selection: false,
        file_duplication_forbidden: false,
        file_max_size: '1MB',
        file_extensions: 'jpg,jpeg,png,bmp',
        signature_url: '/web/oss/getsignaturenocallback',
        signature_param: {
            BUCKETNAME: IMGBUCKET
        },
        FileUploaded: function (U, W, Y) {
            if (F[IDX].ITMS[ITEMIDX].IMG) {
                var V = '/app/form/deleteItemImg';
                var aa = {
                    IMG: F[IDX].ITMS[ITEMIDX].IMG
                };
                $.postJSON(V, aa, function (ab) {
                })
            }
            F[IDX].ITMS[ITEMIDX].IMG = $.getOssObjectName();
            var X = $.getHostUrl();
            var Z = X + F[IDX].ITMS[ITEMIDX].IMG;
            $($('#itemList').find('div.item-upload') [ITEMIDX]).find('img').removeClass('hide').attr('src', Z);
            $($('#itemList').find('div.item-upload') [ITEMIDX]).find('span').addClass('hide');
            $('#f' + IDX).find('div.content').children().each(function (ab, ac) {
                if ($(ac) [0].tagName == 'SPAN' && !($(ac).hasClass('hide'))) {
                    var ad = $('<div class=\'goods-item\'><div class=\'image-center\'><img class=\'img\'/></div><div class=\'text-wapper center\'><span>' + $(ac).html() + '</span></div></div>');
                    $(ac).after(ad);
                    $(ac).remove()
                }
            });
            $('#f' + IDX).find('div.content').children().eq(ITEMIDX).find('img').attr('src', Z);
            CHANGED = true
        }
    });
    $('#itemList').find('div.item-upload').live({
        click: function () {
            ITEMIDX = $('#itemList').find('li').has(this).index();
            $('#itemselectbtn').trigger('click')
        }
    });
    var E = function () {
        var U = $('#goodsList').find('li').has(this),
        W = U.index(),
        V = $.trim($(this).val());
        $('#f' + IDX).find('div.content>div:eq(' + W + ')').find('label.name').text(V);
        F[IDX].ITMS[W].VAL = V;
        U.find('a.goods-name-view').text(V);
        CHANGED = true
    },
    K = function () {
        var U = $('#goodsList').find('li').has(this).index();
        $('#f' + IDX).find('div.content>div:eq(' + U + ')').find('label.des').html($.enterToBr($(this).val()));
        F[IDX].ITMS[U].DES = $.trim($(this).val());
        CHANGED = true
    },
    H = function () {
        var U = $('#goodsList').find('li').has(this).index();
        F[IDX].ITMS[U].PRC = parseFloat($.trim($(this).val())) || 0;
        $.formatPrice($('#f' + IDX).find('div.content>div:eq(' + U + ')').find('div.price-number'), F[IDX].ITMS[U].PRC, F[IDX].ITMS[U].CNY, F[IDX].FBUY, F[IDX].ITMS[U].UNT, F[IDX].ITMS[U].DEF);
        CHANGED = true
    },
    g = function () {
        var U = $('#goodsList').find('li').has(this).index();
        F[IDX].ITMS[U].CNY = $(this).val();
        $.formatPrice($('#f' + IDX).find('div.content>div:eq(' + U + ')').find('div.price-number'), F[IDX].ITMS[U].PRC, F[IDX].ITMS[U].CNY, F[IDX].FBUY, F[IDX].ITMS[U].UNT, F[IDX].ITMS[U].DEF);
        CHANGED = true
    },
    n = function () {
        var U = $('#goodsList').find('li').has(this).index();
        F[IDX].ITMS[U].UNT = $.trim($(this).val());
        $.formatPrice($('#f' + IDX).find('div.content>div:eq(' + U + ')').find('div.price-number'), F[IDX].ITMS[U].PRC, F[IDX].ITMS[U].CNY, F[IDX].FBUY, F[IDX].ITMS[U].UNT, F[IDX].ITMS[U].DEF);
        CHANGED = true
    },
    Q = function () {
        var U = $('#goodsList').find('li').has(this).index();
        F[IDX].ITMS[U].DEF = $.trim($(this).val());
        $.formatPrice($('#f' + IDX).find('div.content>div:eq(' + U + ')').find('div.price-number'), F[IDX].ITMS[U].PRC, F[IDX].ITMS[U].CNY, F[IDX].FBUY, F[IDX].ITMS[U].UNT, F[IDX].ITMS[U].DEF);
        CHANGED = true
    },
    C = function () {
        var U = $('#goodsList').find('li').has(this).index();
        if ($(this).prop('checked')) {
            F[IDX].ITMS[U].HD = '1';
            $('#f' + IDX).find('div.content>div.goods-item:eq(' + U + ')').hide()
        } else {
            F[IDX].ITMS[U].HD = '0';
            $('#f' + IDX).find('div.content>div.goods-item:eq(' + U + ')').show()
        }
        CHANGED = true
    },
    l = function () {
        if ($(this).attr('checked')) {
            F[IDX].FBUY = '1';
            $('#goodsList').find('.goods-price-label').text('数量：')
        } else {
            F[IDX].FBUY = '0';
            $('#goodsList').find('.goods-price-label').text('单价：')
        }
        $('#f' + IDX).find('div.price-number').each(function (U, V) {
            $.formatPrice($(V), F[IDX].ITMS[U].PRC, F[IDX].ITMS[U].CNY, F[IDX].FBUY, F[IDX].ITMS[U].UNT)
        })
    };
    $('#goodsList').find('input.val').live({
        keyup: E,
        change: E
    });
    $('#goodsList').find('textarea.des').live({
        keyup: K,
        change: K
    });
    $('#goodsList').find('input.price').live({
        keyup: H,
        change: H
    });
    $('#goodsList').find('input.unt').live({
        keyup: n,
        change: n
    });
    $('#goodsList').find('input.hd').live({
        click: C
    });
    $('#goodsList').find('select.cny').live({
        change: g
    });
    $('#goodsList').find('input.def').live({
        keyup: Q
    });
    $('#goodsForBuy').click(l);
    $('#goodsList').find('a.goods-name-view').live({
        click: function () {
            $('#goodsList').find('div.expand').removeClass('expand');
            $(this).parent().parent().addClass('expand');
            return false
        }
    });
    var x = function () {
        var X = 0,
        V = $(this).hasClass('edit-img-input'),
        W = - 1,
        U = 'fileToUpload';
        if (!V) {
            $(F).each(function (Y, Z) {
                if ('goods' === Z.TYP) {
                    X += Z.ITMS.length
                }
            });
            if (X >= goodsNumber) {
                $.alert('最多只能添加' + goodsNumber + '件商品。');
                return false
            }
        } else {
            W = $('#goodsList').find('li').has(this).index();
            U = $.format('F{0}ITMS{1}UPLOAD', IDX, W)
        }
        $.showStatus('正在上传图片...');
        $.ajaxFileUpload({
            url: 'ajaxuploadgoods',
            secureuri: false,
            fileElementId: U,
            dataType: 'json',
            data: {
                FRMID: M._id,
                OLDIMG: V ? F[IDX].ITMS[W].IMG : ''
            },
            success: function (ac, Z) {
                if (ac.status != 'success') {
                    var ab = {
                        emptyFile: '上传文件为空，请重新选择。',
                        sizeMsg: '单张图片不能大于500KB。',
                        formatMsg: '只能导入jpg,gif,png,bmp类型的图片文件。'
                    };
                    $.alert(ab[ac.msgCode])
                } else {
                    var Y = V ? $('#goodsList').find('li:eq(' + W + ')')  : $(DEFFLD.item_goods);
                    Y.find('input[name=\'IMG\']').val(ac.filePath);
                    Y.find('img.img').attr('src', GOODSIMAGEURL + ac.filePath + GOODSIMAGESTYLE);
                    if ('1' == F[IDX].FBUY) {
                        Y.find('label.goods-price-label').text('数量：')
                    }
                    if (!V) {
                        $('#goodsList').append(Y)
                    }
                    if (F[IDX].COMMITLMT) {
                        $('div[name=\'goods-limit\']', Y).find('select>option[value=\'' + F[IDX].COMMITLMT + '\']').prop('selected', true)
                    }
                    var aa = V ? $('#f' + IDX).find('div.goods-item:eq(' + W + ')')  : $(DEFFLD.item_goods_f);
                    aa.find('img.img').attr('src', GOODSIMAGEURL + ac.filePath + GOODSIMAGESTYLE);
                    if (V) {
                        F[IDX].ITMS[W].IMG = ac.filePath
                    } else {
                        $('#f' + IDX).find('div.content').find('div.nogoods-holder').remove().end().append(aa);
                        if (!F[IDX].ITMS) {
                            F[IDX].ITMS = [
                            ]
                        }
                        F[IDX].ITMS.push({
                            IMG: ac.filePath,
                            VAL: '商品名称',
                            DES: '',
                            PRC: 0,
                            UNT: ''
                        })
                    }
                }
                $.hideStatus()
            },
            error: function (Z, Y, aa) {
                $.hideStatus();
                $.alert('上传图片时发生错误：' + aa)
            }
        });
        CHANGED = true;
        return false
    };
    $('#item-upload').live({
        click: x
    });
    $('#fileToUpload').live({
        change: x
    });
    $('#goodsList input.edit-img-input').live({
        change: x
    });
    $('#btnAddNoImgGoods').click(function () {
        var W = 0;
        $(F).each(function (X, Y) {
            if ('goods' === Y.TYP) {
                W += Y.ITMS.length
            }
        });
        if (W >= goodsNumber) {
            $.alert('最多只能添加' + goodsNumber + '件商品。');
            return false
        }
        var U = $(DEFFLD.item_goods).addClass('noimg');
        if ('1' == F[IDX].FBUY) {
            U.find('label.goods-price-label').text('数量：')
        }
        $('#goodsList').append(U);
        if (F[IDX].COMMITLMT) {
            $('div[name=\'goods-limit\']', U).find('select>option[value=\'' + F[IDX].COMMITLMT + '\']').prop('selected', true)
        }
        var V = $(DEFFLD.item_goods_f);
        $('#f' + IDX).find('div.content').find('div.nogoods-holder').remove().end().append(V).find('div.image-center').hide();
        if (!F[IDX].ITMS) {
            F[IDX].ITMS = [
            ]
        }
        F[IDX].ITMS.push({
            VAL: '商品名称',
            DES: '',
            PRC: 0,
            UNT: ''
        });
        return false
    });
    var o,
    w;
    $('#goodsList').sortable({
        axis: 'y',
        delay: 100,
        start: function (V, U) {
            o = U.item.index()
        },
        stop: function (X, W) {
            w = W.item.index();
            if (o != w) {
                var V = F[IDX].ITMS[o];
                F[IDX].ITMS.splice(o, 1);
                F[IDX].ITMS.splice(w, 0, V);
                var U = $('#f' + IDX).find('div.content').find('div.goods-item:eq(' + o + ')');
                U.remove();
                if (w == 0) {
                    $('#f' + IDX).find('div.content').find('div.goods-item:eq(' + w + ')').before(U)
                } else {
                    $('#f' + IDX).find('div.content').find('div.goods-item:eq(' + (w - 1) + ')').after(U)
                }
                CHANGED = true
            }
        }
    });
    $('#uploadImage').live({
        change: function () {
            $.showStatus('正在上传图片...');
            $.ajaxFileUpload({
                url: 'ajaxuploadimage',
                fileElementId: 'uploadImage',
                secureuri: false,
                dataType: 'json',
                data: {
                    OLDIMG: F[IDX].IMG,
                    FRMID: M._id
                },
                success: function (W, U) {
                    if (W.status != 'success') {
                        var V = {
                            emptyFile: '上传文件为空，请重新选择。',
                            sizeMsg: '单张图片不能大于500KB。',
                            formatMsg: '只能导入jpg,gif,png,bmp类型的图片文件。'
                        };
                        $.alert(V[W.msgCode])
                    } else {
                        $('#f' + IDX).find('div.content img').attr('src', IMAGESURL + W.filePath);
                        F[IDX].IMG = W.filePath
                    }
                    $.hideStatus()
                },
                error: function (V, U, W) {
                    $.hideStatus();
                    $.alert('上传图片时发生错误：' + W)
                }
            });
            CHANGED = true
        }
    });
    var q = function () {
        var U = $.trim($(this).val());
        if (U) {
            F[IDX].MIN = U
        } else {
            delete F[IDX]['MIN']
        }
        CHANGED = true
    },
    N = function () {
        var U = $.trim($(this).val());
        if (U) {
            F[IDX].MAX = U
        } else {
            delete F[IDX]['MAX']
        }
        CHANGED = true
    };
    $('#min').bind({
        keyup: q
    });
    $('#max').bind({
        keyup: N
    });
    $('#sec_pub,#sec_pri').click(function () {
        if ($('#sec_pub').prop('checked')) {
            F[IDX].SCU = 'pub';
            $('#f' + IDX).removeClass('private')
        } else {
            F[IDX].SCU = 'pri';
            $('#f' + IDX).addClass('private')
        }
        CHANGED = true
    });
    var h = function () {
        var U = $.trim($(this).val());
        if ('defval_number' === $(this).attr('id')) {
            U = U.replace(/[^(\d\.?)]/g, '').replace(/[\(\)\?]/g, '');
            $(this).val(U)
        }
        $('#f' + IDX).find('div.content :input').val(U);
        if (U) {
            F[IDX].DEF = U
        } else {
            delete F[IDX]['DEF']
        }
        CHANGED = true
    };
    $('#defval_text').bind({
        keyup: h,
        fucusout: h
    });
    $('#defval_number').bind({
        keyup: h
    });
    var j = function () {
        var U = $.trim($(this).val());
        if (U) {
            F[IDX].DEF = U
        } else {
            delete F[IDX]['DEF']
        }
        CHANGED = true
    };
    $('#defval_date').bind({
        keyup: j
    });
    $('#defval_time').bind({
        keyup: j
    });
    $('#phoneformat').change(function () {
        $('#f' + IDX).find('div.content').html(DEFFLD[$.format('phone_{0}_{1}', $(this).val(), M.LANG)]);
        showPhoneFormat($(this).val());
        $('#defval_phone_mobile').val('');
        $('#defval_phone_tel').val('');
        $('#defval_phone_tel_1,#defval_phone_tel_2,#defval_phone_tel_3').val('');
        delete F[IDX]['DEF'];
        F[IDX].FMT = $(this).val();
        CHANGED = true
    });
    $('#defval_phone_mobile').bind({
        keyup: h,
        change: h
    });
    var G = function () {
        var U = $('#defval_phone_tel_1').val() + '-' + $('#defval_phone_tel_2').val() + '-' + $('#defval_phone_tel_3').val();
        $('#defval_phone_tel').val(U);
        $.each(U.split('-'), function (W, V) {
            $('#f' + IDX).find(':text:eq(' + W + ')').val(V)
        });
        F[IDX].DEF = U;
        CHANGED = true
    };
    $('#pdefval_phone_tel :input').bind({
        keyup: G
    });
    var t = '<option value=\'\'>省/自治区/直辖市</option>';
    $.each(address.provinces, function (V, U) {
        t += $.format('<option value="{0}">{1}</option>', V, V)
    });
    $('#defval_province').append(t);
    var p = function () {
        var U = $('#defval_province').val(),
        W = $('#defval_city').val(),
        V = $('#defval_zip').val();
        if (U || W) {
            return U + '-' + W + '-' + V
        } else {
            return ''
        }
    };
    $('#defval_province').change(function () {
        var U = $(this).val();
        $('#f' + IDX).find('select.province').empty().append($.format('<option>{0}</option>', U || '省/自治区/直辖市'));
        $('#f' + IDX).find('select.city').empty().append($.format('<option value="">{0}</option>', '市'));
        $('#f' + IDX).find('select.zip').empty().append($.format('<option value="">{0}</option>', '区/县'));
        $('#defval_city').empty().append('<option value=\'\'>市</option>');
        $('#defval_zip').empty().append('<option value=\'\'>区/县</option>');
        if (U) {
            var V = '';
            $.each(address.provinces[U], function (X, W) {
                V += $.format('<option value="{0}">{1}</option>', X, X)
            });
            $('#defval_city').append(V)
        }
        F[IDX].DEF = p();
        if (!F[IDX].DEF) {
            delete F[IDX].DEF
        }
        CHANGED = true
    });
    $('#defval_city').change(function () {
        var W = $(this).val(),
        U = $('#defval_province').val();
        $('#f' + IDX).find('select.city').empty().append($.format('<option value="">{0}</option>', W || '市'));
        $('#f' + IDX).find('select.zip').empty().append($.format('<option value="">{0}</option>', '区/县'));
        $('#defval_zip').empty().append('<option value=\'\'>区/县</option>');
        if (W) {
            var V = '';
            $.each(address.provinces[U][W], function (Y, X) {
                V += $.format('<option value="{0}">{1}</option>', X, X)
            });
            $('#defval_zip').append(V)
        }
        F[IDX].DEF = p();
        if (!F[IDX].DEF) {
            delete F[IDX].DEF
        }
        CHANGED = true
    });
    $('#defval_zip').change(function () {
        var U = $(this).val();
        $('#f' + IDX).find('select.zip').empty().append($.format('<option value="">{0}</option>', U || '区/县'));
        F[IDX].DEF = p();
        if (!F[IDX].DEF) {
            delete F[IDX].DEF
        }
        CHANGED = true
    });
    var v = function (U) {
        if (U) {
            M.INSTR = '1'
        } else {
            M.INSTR = '0';
            $.each(F, function (W, V) {
                if (V.INSTR) {
                    M.INSTR = '1';
                    return false
                }
            })
        }
        $.each(F, function (W, V) {
            if (M.INSTR === '1' && V.TYP !== 'likert' && V.TYP !== 'html' && V.TYP !== 'section' && V.TYP !== 'goods' && V.TYP !== 'image') {
                $('#f' + W).addClass('fieldInstruct')
            } else {
                if (M.INSTR !== '1') {
                    $('#f' + W).removeClass('fieldInstruct')
                }
            }
        })
    },
    k = function (U) {
        var W = $('#f' + IDX).find('p.instruct'),
        V = $.trim($(U).val());
        W.text(V);
        if (V) {
            W.show()
        } else {
            W.hide()
        }
        if (V) {
            F[IDX].INSTR = V
        } else {
            delete F[IDX]['INSTR']
        }
        CHANGED = true
    };
    $('#instruct').bind({
        keyup: function () {
            k(this);
            if ((M.INSTR !== '1' && $(this).val()) || (M.INSTR === '1' && !$(this).val())) {
                v($(this).val())
            }
        },
        change: function () {
            k(this);
            v($(this).val())
        }
    });
    var L = function () {
        var U = $.trim($('#secdesc').val());
        $('#f' + IDX).find('div.content').html(U);
        if (U) {
            F[IDX].SECDESC = U
        } else {
            delete F[IDX]['SECDESC']
        }
    };
    $('#secdesc').bind({
        keyup: L,
        change: L
    });
    var i = function () {
        var U = $.trim($('#html').val());
        $('#f' + IDX).find('div.content').html(U);
        if (U) {
            F[IDX].HTML = U
        } else {
            delete F[IDX]['HTML']
        }
    };
    $('#html').bind({
        keyup: i,
        change: i
    });
    var S = function () {
        var U = $.trim($(this).val());
        if (U) {
            F[IDX].CSS = $(this).val()
        } else {
            delete F[IDX]['CSS']
        }
        CHANGED = true
    };
    $('#css').bind({
        keyup: S,
        change: S
    });
    var P = function () {
        var U = $.trim($(this).val());
        if (U) {
            F[IDX].LAYOUT = $(this).val()
        } else {
            delete F[IDX]['LAYOUT']
        }
        CHANGED = true
    };
    $('#selLayout').bind({
        click: P
    });
    $('#exprop').bind({
        change: function () {
            var U = $.trim($(this).val());
            if (U) {
                F[IDX].EX = $(this).val()
            } else {
                delete F[IDX]['EX']
            }
            CHANGED = true
        }
    });
    $('#btnDup,#fields i.faDup').live({
        click: function () {
            var Y = $('#fields>li.field').size();
            if (Y >= fieldsLimit) {
                $.alert('最多只能添加' + fieldsLimit + '个字段。');
                return false
            }
            if (F[IDX].TYP == 'image') {
                var ab = 0;
                $(F).each(function (ac, ad) {
                    if ('image' === ad.TYP) {
                        ab++
                    }
                });
                if (ab >= imageNumber) {
                    $.alert('最多只能添加' + imageNumber + '个图片字段，<a href=\'/app/account/manage\' target=\'_blank\' class=\'link\'>升级</a>可添加更多。');
                    return false
                }
            }
            if (F[IDX].TYP == 'goods') {
                var W = 0;
                $(F).each(function (ac, ad) {
                    if ('goods' === ad.TYP) {
                        W += ad.ITMS.length
                    }
                });
                if (W >= goodsNumber) {
                    $.alert('最多只能添加' + goodsNumber + '件商品。');
                    return false
                }
            }
            var X = JSON.parse(JSON.stringify(F[IDX])),
            V = $('#f' + IDX).clone();
            V.find('img.arrow,p.instruct,div.fieldActions').hide();
            V.removeClass('prefocus focused').addClass('default');
            $('#f' + IDX).after(V);
            $('li.field', '#fields').each(function (ad, ac) {
                if (ad > IDX) {
                    $(ac).attr('id', 'f' + ad)
                }
            });
            delete X.NM;
            delete X.FLDID;
            if (X.TYP === 'likert') {
                $.each(X.ITMS, function (ac, ad) {
                    $.each(ad.ITMS, function (ae, af) {
                        delete af.ITMID
                    })
                })
            } else {
                if (X.TYP === 'address') {
                    delete X.SUBFLDS['ZIP']['NM'];
                    delete X.SUBFLDS['PRV']['NM'];
                    delete X.SUBFLDS['CITY']['NM'];
                    delete X.SUBFLDS['DTL']['NM']
                } else {
                    if (X.TYP === 'map') {
                        delete X.SUBFLDS['TXT']['NM'];
                        delete X.SUBFLDS['J']['NM'];
                        delete X.SUBFLDS['W']['NM']
                    } else {
                        if (X.TYP === 'file') {
                            delete X.SUBFLDS['ID']['NM'];
                            delete X.SUBFLDS['TYP']['NM'];
                            delete X.SUBFLDS['SZ']['NM'];
                            delete X.SUBFLDS['NM']['NM']
                        } else {
                            if (X.TYP === 'dropdown2') {
                                var U = 2;
                                if (X.pN) {
                                    U = parseInt(X.pN)
                                }
                                for (var aa = 1; aa <= U; aa++) {
                                    delete X.SUBFLDS['DD' + aa]['NM']
                                }
                            } else {
                                if (X.TYP === 'image') {
                                    var Z = [
                                        X.IMG
                                    ];
                                    $.showStatus('正在复制字段...');
                                    $.postJSON('duplicateimages', {
                                        FRMID: M._id,
                                        IMGS: Z
                                    }, function (ac) {
                                        X.IMG = ac[0];
                                        $.hideStatus()
                                    })
                                }
                            }
                        }
                    }
                }
            }
            if (X.ITMS) {
                if (X.TYP === 'goods') {
                    var Z = [
                    ];
                    $.each(X.ITMS, function (ac, ad) {
                        if (ad.IMG) {
                            Z.push(ad.IMG)
                        }
                    });
                    if (Z.length > 0) {
                        $.showStatus('正在复制字段...');
                        $.postJSON('duplicategoods', {
                            FRMID: M._id,
                            IMGS: Z
                        }, function (ac) {
                            $.each(X.ITMS, function (ad, ae) {
                                X.ITMS[ad].IMG = ac[ad]
                            });
                            $.hideStatus()
                        })
                    }
                }
                $.each(X.ITMS, function (ad, ae) {
                    delete ae.ITMID;
                    delete ae.NM;
                    if (X.TYP === 'dropdown2') {
                        function ac(af) {
                            delete af.ITMID;
                            if (af.ITMS) {
                                $.each(af.ITMS, function (ag, ah) {
                                    ac(ah)
                                })
                            }
                        }
                        $.each(ae.ITMS, function (af, ag) {
                            ac(ag)
                        })
                    }
                })
            }
            F.splice(IDX + 1, 0, X);
            CHANGED = true;
            return false
        }
    });
    var R = function () {
        $('#f' + IDX).remove();
        F.splice(IDX, 1);
        IDX = - 2;
        v('');
        $('#fieldProperties').addClass('hide');
        $('#noFieldSelected').removeClass('hide');
        if ($.isEmptyObject(F)) {
            $('#nofields').show();
            $('#formButtons').hide()
        }
        $('li.field', '#fields').each(function (V, U) {
            if (V >= IDX) {
                $(U).attr('id', 'f' + V)
            }
        })
    };
    $('#btnDel,#fields i.faDel').live({
        click: function () {
            if (F[IDX].FLDID !== undefined && F[IDX].TYP !== 'section' && F[IDX].TYP !== 'html' && M.MXID > 0) {
                $.confirm({
                    msg: delConfirmMsg,
                    showyes: true,
                    confirm: function () {
                        $.showStatus('正在执行删除操作 ...');
                        var U = 'deleteField';
                        $.postJSON(U, {
                            _id: M._id,
                            FLDID: F[IDX].FLDID,
                            TYP: F[IDX].TYP
                        }, function () {
                            R();
                            $.hideStatus()
                        })
                    }
                })
            } else {
                R()
            }
            CHANGED = true;
            return false
        }
    })
}
