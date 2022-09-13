/// <reference path="../intelli/p5.global-mode.d.ts"/>
/// <reference path="../intelli/p5.d.ts"/>

let sizeBox
let sizeCell
let r

let board = [
    ['x', 'x', ''],
    ['', 'o', ''],
    ['', '', '']
  ];

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

    sizeCell = sizeBox / 3
    r = sizeCell / 2.5

    resizeCanvas(sizeBox, sizeBox)
}

function draw(){
    // Background color
    background('#495057');

    // Mouse position
    text(mouseX, 0, sizeBox/4)
    text(mouseY, 0, sizeBox/2)

    // Bounding box
    /*
    line(0, 0, 0, sizeBox)
    line(0, 0, sizeBox, 0)
    line(sizeBox, sizeBox, 0, sizeBox)
    line(sizeBox, sizeBox, sizeBox, 0)
    */

    strokeWeight(4);
    line(sizeBox/3 * 2, 0, sizeBox/3 * 2, sizeBox);
    line(sizeBox/3, 0, sizeBox/3, sizeBox);

    line(0, sizeBox/3 * 2, sizeBox, sizeBox/3 * 2);
    line(0, sizeBox/3, sizeBox, sizeBox/3);

    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] == 'x')
                drawX(j, i)

            if (board[i][j] == 'o')
                drawO(j, i)
        }
    }
}

function drawX(_x, _y){
    let x = sizeCell * _x + sizeCell / 2;
    let y = sizeCell * _y + sizeCell / 2;

    line(x - r, y - r, x + r, y + r);
    line(x + r, y - r, x - r, y + r);
}

function drawO(_x, _y){
    let x = sizeCell * _x + sizeCell / 2;
    let y = sizeCell * _y + sizeCell / 2;

    noFill();
    ellipse(x, y, r * 2);
}