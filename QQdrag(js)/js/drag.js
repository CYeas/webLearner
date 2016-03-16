window.onload = function (){
    var title = document.getElementsByClassName("login_logo_webqq")[0],
        panel = document.getElementById("loginPanel"),
        status = document.getElementById("loginStateShow"),
        statepanel = document.getElementById("loginStatePanel"),
        statetext = document.getElementById("login2qq_state_txt"),
        oclose = document.getElementById("ui_boxyClose");
        winwidth = document.documentElement.clientWidth-panel.offsetWidth,
        winheight = document.documentElement.clientHeight-panel.offsetHeight;

    title.onmousedown = fndown;
    status.onclick = stateclick;
    statetext.onclick = stateclick;
    oclose.onclick = closepanel;
    document.onmouseup = fnup;
    function fndown(event){
        var disx = event.clientX-panel.offsetLeft,
            disy = event.clientY-panel.offsetTop;
        document.onmousemove = function (e){
            fnmove(e,disx,disy);
        }
    }
    
    function fnmove(e,disx,disy){
        var l = e.clientX-disx,
            t = e.clientY-disy;
        panel.style.left =l+"px";
        panel.style.top =t+"px";
        if(l<0){
            panel.style.left = 0;
        }else if(l>winwidth){
            panel.style.left = winwidth +"px";
        }
        if(t<8){
            panel.style.top = 8+"px";
        }else if(t>winheight){
            panel.style.top = winheight +"px";
        }
    }
    
    function fnup(){
        document.onmousemove = null;
    }
    
    function stateclick(){
        var allstate = document.getElementsByClassName("statePanel_li");
        statepanel.style.display = "block";
        for(var i = 0;i<allstate.length;i++){
            allstate[i].onclick = changestate;
        }
    }
    
    function changestate(){
        status.className = "login-state-show "+this.id;
        statetext.innerHTML = this.childNodes[3].innerHTML;
        statepanel.style.display = "none";
    }
    
    function closepanel(){
        panel.style.display = "none";
    }
    
}