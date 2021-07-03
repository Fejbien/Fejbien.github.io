onload = size;
window.onresize = size;

function size() {
    var wielkosc = (document.body.clientHeight - document.getElementById("header").offsetHeight);
    document.getElementById("navandart").style.height = wielkosc + "px";

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    //let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    //document.documentElement.style.setProperty('--vh', `${vh}px`);
}