/**
 * Created by stoneshi on 16/9/6.
 */

//SELECT
var checkValue = $("#select1").val();//跟随用户选择改变
var checkText = $("#select1 option[selected]").text();//用户选择后不改变,一直为初始设定的selected的元素
console.log(checkValue);
console.log(checkText);

$("#select1").val($("#select1 option:eq(4)").text());

$("#select1").change(function () {
   $("#select2").empty();
    $("#select2").removeAttr("hidden");
    for (var i = 0; i < 5; i++){
        var op = "<option>" + $("#select1").val() + "-" + i + "</option>";
        console.log(op);
        $("#select2").append(op);
    }
});
//RATIO
$("input:radio[name='radio1']").attr("checked", "option2");//选择value=option2的元素
(function(){
    if ($("input:radio[name='radio2']").is(":checked"))
        console.log($("input:radio[name='radio2']:checked").val());
    else{
        console.log("false");
    }
})();
$("input:radio[name='radio1']").change(function () {
    console.log($("input:radio[name='radio1']:checked").val());//获取当前选择元素的value
});
//CHECKBOX
$("#checkbox0").attr("checked", true);
$("#checkbox3").attr("checked", true);//点选元素
console.log($("#checkbox2").is(":checked"));//判断元素是否被选择
var checkResult = [];
$("input:checkbox[name='checklist']:checked").each(function () {
    checkResult.push($(this).val());//获取所有被选择的元素
});
console.log(checkResult);