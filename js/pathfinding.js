/// <reference path="../intelli/p5.global-mode.d.ts"/>
/// <reference path="../intelli/p5.d.ts"/>

let sizeBox

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent('canvasLocation');
    windowResized();
}

function windowResized() {
    let divHeight = Math.floor(document.getElementById("canvasLocation").offsetHeight)
    let divWidth = Math.floor(document.getElementById("canvasLocation").offsetWidth)

    if(divHeight > divWidth)
        sizeBox = divWidth
    else
        sizeBox = divHeight

    resizeCanvas(sizeBox, sizeBox)
}

function draw(){
    background('#495057');
    square(30,20,55)
}