/**
 * Created by stoneshi on 16/9/7.
 */
function baseClass()
{
    this.showMsg = function()
    {
        console.log("baseClass::showMsg");
    };

    this.baseShowMsg = function()
    {
        console.log("baseClass::baseShowMsg");
    }
}
baseClass.showMsg = function()
{
    console.log("baseClass::showMsg static");
};

function extendClass()
{
    this.showMsg =function ()
    {
        console.log("extendClass::showMsg");
    }
}
extendClass.showMsg = function()
{
    console.log("extendClass::showMsg static")
};

extendClass.prototype = new baseClass();
var instance = new extendClass();
var baseinstance = new baseClass();
console.log(1);
instance.showMsg(); //显示extendClass::showMsg
console.log(2);
instance.baseShowMsg(); //显示baseClass::baseShowMsg
console.log(3);
instance.showMsg(); //显示extendClass::showMsg
console.log(4);
baseClass.showMsg.call(instance);//显示baseClass::showMsg static
console.log(5);
baseinstance.showMsg.call(instance);//显示baseClass::showMsg