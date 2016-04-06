/**
 * Created by 993711336 on 2016/4/6.
 */

//改变样式
var changeShow = document.getElementById("btnshow");
changeShow.addEventListener("click", show);

//改变背景颜色
var btnchangeRed = document.getElementById("red");
btnchangeRed.addEventListener("click", changeRed);

//改变高度
var height = document.getElementById("height");
height.addEventListener("click", changeHeight);

//改变宽度
document.getElementById("width").addEventListener("click", changeWidth);

//恢复设置
document.getElementById("restore").addEventListener("click", cancel);

//保存设置
var save = document.getElementById("save");
save.addEventListener("click", saveStyle);

function show() {
    var show = document.getElementById("show");
    var changeStyle = document.getElementById("changeStyle");
    show.style.display = "block";
    changeStyle.style.display = "block";
}

function changeRed() {
    var box = document.getElementById("box");
    box.style.backgroundColor = "red";
}

function changeHeight() {
    var box = document.getElementById("box");
    box.style.height = "200px";
}

function changeWidth() {
    var box = document.getElementById("box");
    box.style.width = "200px";
}

function saveStyle() {
    var save = document.getElementById("show");
    var changeStyle = document.getElementById("changeStyle");
    save.style.display = "none";
    changeStyle.style.display = "none";
}
//定义"取消设置"的函数
function cancel(obj) {
    var box = document.getElementById("box");
    box.style.width = "";
    box.style.height = "";
    box.style.backgroundColor = "";
}



