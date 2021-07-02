onload = size;
window.onresize = size;

function size() {
    document.getElementById("navandart").style.height = (document.body.clientHeight - document.getElementById("header").offsetHeight) + "px";
}