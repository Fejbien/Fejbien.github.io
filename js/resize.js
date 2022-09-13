window.onload = load;
window.onresize = resizeBody;

function resizeBody() {
    document.getElementById("siteBody").style.height = "0px";
    var wielkosc = (document.body.clientHeight - document.getElementsByClassName("header")[0].offsetHeight);
    document.getElementById("siteBody").style.height = wielkosc + "px";
}

function load() {
    resizeBody();
}