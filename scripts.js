window.onload = load;
window.onresize = resize;
window.addEventListener('resize', resize);

function resize() {
    document.getElementById("navandart").style.height = "0px";
    var wielkosc = (document.body.clientHeight - document.getElementById("header").offsetHeight);
    document.getElementById("navandart").style.height = wielkosc + "px";
}

function load() {
    // jezeli cos bedzie trzeba :)
    resize();
}