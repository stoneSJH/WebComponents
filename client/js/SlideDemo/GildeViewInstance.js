var gv = new GlideView("idGlideView", 600, "div", 500, { TextTag: "a", TextHeight: 50 });
var oSel = $$("sel");
var mSel = $$("mode");

for (var i = 0; i < gv._count; i++) {
    var op = document.createElement("OPTION");
    op.value = i;
    op.innerHTML = "Unfold Position: " + (i + 1);
    oSel.appendChild(op);
}

oSel.onchange = function(){
    gv.Set(oSel.value);
};

mSel.onchange = function () {
    gv.ChangeMode(mSel.value);
};

$$("up").onclick = function(){
    gv.Step -= 5;
    if(gv.Step <= 0)
        gv.Step = 1;
    console.log(gv.Step);
};

$$("down").onclick = function(){
    gv.Step += 5;
    if(gv.Step >= 50)
        gv.Step = 50;
    console.log(gv.Step);
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
    cur = -1;

$$("auto").onclick = function(){
    var time = gv.GetTotalTime();
    time += 2000;

    clearInterval(t);
    t=setInterval(function(){
        if(++cur > gv._count - 1)
            cur = 0;
        gv.Set(cur);
    }, time);
};

$$("cancel").onclick = function(){
    clearInterval(t);
    gv.Set(-1);
};