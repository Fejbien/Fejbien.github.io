/// <reference path="../intelli/p5.global-mode.d.ts"/>
/// <reference path="../intelli/p5.d.ts"/>

let sizeBox = 600
let sizeSquare = 30

function setup(){
    let cnv = createCanvas(sizeBox, sizeBox);
    cnv.parent('canvasLocation');
}

function draw(){
    background('#495057');

    for(let i = 0; i < sizeBox; i = i + sizeSquare)
        for(let j = 0; j < sizeBox; j = j + sizeSquare)
            square(j,i,sizeSquare)

    noFill()
    strokeWeight(4);
    stroke(51);
    rect(0,0, sizeBox, sizeBox)
}