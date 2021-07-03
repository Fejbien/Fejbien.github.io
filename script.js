onload = size;
window.onresize = size;

function size() {
    var wielkosc = (document.body.clientHeight - document.getElementById("header").offsetHeight);
    document.getElementById("navandart").style.height = wielkosc + "px";
}