onload = load;
window.onresize = size;

function size() {
    //var wielkosc = (document.body.clientHeight - document.getElementById("header").offsetHeight);
    var wielkosc = (document.body.clientHeight - document.getElementById("header").offsetHeight);
    document.getElementById("navandart").style.height = wielkosc + "px";
}

function load() {
    // jezeli cos bedzie trzeba :)
    size();
}