var gv = new GlideView("idGlideView", 1000, "div", 500, { TextTag: "a", TextHeight: 50 });
var oSel = $$("sel");
for (var i = 0; i <= gv._count; i++) {
    var op = document.createElement("OPTION");
    op.value = i; op.innerHTML = "展开第" + (i + 1) + "个";
    oSel.appendChild(op);
}

oSel.onchange = function(){ gv.Set(oSel.value); }

$$("up").onclick = function(){
    gv.Step -= 5;
    if(gv.Step <= 0)
        gv.Step = 1;
};

$$("down").onclick = function(){
    gv.Step += 5;
    if(gv.Step >= 500)
        gv.Step = 50;
};

$$("stop").onclick = function(){
    clearTimeout(gv._timer);
};

$$("start").onclick = function(){
    gv.Move();
};

$$("close").onclick = function(){
    gv.Step = 1;
};

$$("open").onclick = function(){
    gv.Step = gv.options.Step;
};

$$("hide").onclick = function(){
    gv.Showtext = false;
};

$$("show").onclick = function(){
    gv.Showtext = true;
};

var t = null,
    i = -1;

$$("auto").onclick = function(){
    clearInterval(t);
    t=setInterval(function(){
        if(++i>gv._count)
            i=0;
        gv.Set(i);
    }, 1000); };

$$("cancel").onclick = function(){ clearInterval(t);gv.Set(-1); };