/// <reference path="../intelli/p5.global-mode.d.ts"/>
/// <reference path="../intelli/p5.d.ts"/>

let sizeBox

function setup(){
    let cnv = createCanvas(400,400, "webgl")
    cnv.parent('canvasLocation')
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
    noFill();
    strokeWeight(5)
    stroke(255,255,255);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    let s = sizeBox / 2
    box(s, s, s);
}