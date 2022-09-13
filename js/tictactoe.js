/// <reference path="../intelli/p5.global-mode.d.ts"/>
/// <reference path="../intelli/p5.d.ts"/>

const States = {
    Play: 1,
    Game: 2,
    End: 3
}

let currentState = States.Play

let sizeBox
let sizeCell
let r

const charX = 'x'
const charO = 'o'

let winner = ''
let currentMove = charX
let board = [
    ['', '', ''],
    ['', '', ''],
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
    switch (currentState) {
        case States.Play:
            background('#495057');
            textSize(sizeCell/3);
            textAlign(CENTER, CENTER);
            fill('white');
            text('Click to\nPlay!', sizeBox/2, sizeBox/2 - sizeBox/5)
            break;

        case States.Game:
            // Background color
            background('#495057');

            // Mouse position
            /*
            text(mouseX, 0, sizeBox/4)
            text(mouseY, 0, sizeBox/2)
            */

            // Bounding box
            /*
            line(0, 0, 0, sizeBox)
            line(0, 0, sizeBox, 0)
            line(sizeBox, sizeBox, 0, sizeBox)
            line(sizeBox, sizeBox, sizeBox, 0)
            */

            strokeWeight(4)
            drawLines()
            drawBoard()
            break;

        case States.End:
            background('#495057');
            textSize(sizeCell/3);
            textAlign(CENTER, CENTER);
            fill('white');
            text('Winner is:\n'+winner.toLocaleUpperCase()+'\n\nClick to play!', sizeBox/2, sizeBox/2 - sizeBox/5)
            break;
    }
}

function drawLines(){
    line(sizeBox/3 * 2, 0, sizeBox/3 * 2, sizeBox)
    line(sizeBox/3, 0, sizeBox/3, sizeBox);

    line(0, sizeBox/3 * 2, sizeBox, sizeBox/3 * 2)
    line(0, sizeBox/3, sizeBox, sizeBox/3)
}

function drawBoard(){
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

function mousePressed() {
    switch (currentState) {
        case States.Play:
            currentState = States.Game
            break;

        case States.Game:
            let i = floor(mouseX / sizeCell);
            let j = floor(mouseY / sizeCell);
        
            if (board[j][i] != '') return;
        
            board[j][i] = currentMove
        
            if(checkWin()){
                winner = currentMove
                currentState = States.End
                drawBoard();
            }
        
            if(currentMove == charX){
                currentMove = charO
            }
            else{
                currentMove = charX
            }
            break;
            
        case States.End:
            restartBoard()
            currentState = States.Game
            break;
    }
}

function checkWin(){
    o = currentMove
    if (// -
        o == board[0][0] && o == board[0][1] && o == board[0][2] ||
        o == board[1][0] && o == board[1][1] && o == board[1][2] ||
        o == board[2][0] && o == board[2][1] && o == board[2][2] ||
        // \ or /
        o == board[0][0] && o == board[1][1] && o == board[2][2] ||
        o == board[2][0] && o == board[1][1] && o == board[0][2] ||
        // |
        o == board[0][0] && o == board[1][0] && o == board[2][0] ||
        o == board[0][1] && o == board[1][1] && o == board[2][1] ||
        o == board[0][2] && o == board[1][2] && o == board[2][2])
        return true;
    else
        return false;
}

function restartBoard(){
    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            board[i][j] = ''
        }
    }
}