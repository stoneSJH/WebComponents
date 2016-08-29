new SlideTrans("idContainer", "idSlider", 3, { Vertical: false }).Run();


var nums = [], timer, n = $$("idSlider2").getElementsByTagName("li").length,
    st = new SlideTrans("idContainer2", "idSlider2", n, {
        onStart: function(){//设置按钮样式
            forEach(nums, function(o, i){
                o.className = st.Index == i ? "on" : "";
            })
        }
    });
for(var i = 1; i <= n; AddNum(i++)){}
function AddNum(i){
    var num = $$("idNum").appendChild(document.createElement("li"));
    num.innerHTML = i--;
    num.onmouseover = function(){
        timer = setTimeout(function(){
            num.className = "on";
            st.Auto = false;
            st.Run(i);
        }, 200);
    };
    num.onmouseout = function(){
        clearTimeout(timer);
        num.className = "";
        st.Auto = true;
        st.Run(); };
    nums[i] = num;
}
st.Run();


$$("idAuto").onclick = function(){
    if(st.Auto){
        st.Auto = false; st.Stop();
        this.value = "Auto";
    }else{
        st.Auto = true; st.Run();
        this.value = "Stop";
    }
}
$$("idNext").onclick = function(){
    st.Next();
};
$$("idPre").onclick = function(){
    st.Previous();
};
$$("idTween").onchange = function(){
    switch (parseInt(this.value)){
        case 2 :
            st.Tween = Tween.Bounce.easeOut; break;
        case 1 :
            st.Tween = Tween.Back.easeOut; break;
        default :
            st.Tween = Tween.Quart.easeOut;
    }
};
