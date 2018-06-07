var uButtonshape = function() {
    var jQObj = $(Ant[IDX]) jQObj.attr("shape", $.trim($(this).val()));
    Ant[IDX] = jQObj.prop("outerHTML");
    F[IDX].Buttonshape = $.trim($(this).val());
    CHANGED = true
};

$('#Buttonshape').bind({
    keyup: uButtonshape,
    change: uButtonshape
});