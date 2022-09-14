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

let AI;
let Player;

const charX = 'x'
const charO = 'o'

let winner = ' '
let currentMove = charX
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

function setup(){
    let cnv = createCanvas(400,400);
    cnv.parent('canvasLocation');
    windowResized();

    Player = charX;
    AI = charO;
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
            background('#495057');

            if(currentMove == AI){
                let temp = NajlepszyRuch(board)
                board[temp[1]][temp[0]] = currentMove;
                drawBoard();

                if(checkWin()){
                    winner = currentMove
                    currentState = States.End
                    drawBoard();
                    return;
                }

                if(currentMove == charX){
                    currentMove = charO
                }
                else{
                    currentMove = charX
                }
            }

            
            if(KoniecGry(board)){
                currentState = States.End
            }

            strokeWeight(4)
            drawLines()
            drawBoard()
            break;

        case States.End:
            background('#495057');
            textSize(sizeCell/3);
            textAlign(CENTER, CENTER);
            fill('white');

            if(KoniecGry(board)) winner = "none"
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
        

            if (currentMove != Player) return;

            if (board[j][i] != ' ') return;
        
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
            let temp = Player;
            Player = AI;
            AI = temp;

            currentMove = charX;
            
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
            board[i][j] = ' '
        }
    }
}

function MiniMax(_plansza, maksymalizuj, dalekosc)
{
    var plansza = _plansza.map(function(arr) {
        return arr.slice();
    });


    if (SprawdzenieWygranejDanegoZnaku(plansza, AI))
        return 10;
    else if (SprawdzenieWygranejDanegoZnaku(plansza, Player))
        return -10;
    else if (KoniecGry(plansza))
        return 0;

    if(maksymalizuj)
    {
        let maks = -1000;
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                if (plansza[i][j] == ' ')
                {
                    let zwrotna = MiniMax(ZrobRuchWMiejscu(plansza, j, i, AI), false, dalekosc + 1);
                    maks = Math.max(maks, zwrotna - dalekosc);
                }
            }
        }
        return maks;
    }
    else
    {
        let min = 1000;
        for (let i = 0; i < 3; i++)
        {
            for( let j = 0; j < 3; j++){
                if (plansza[i][j]== ' ')
                {
                    let zwrotna = MiniMax(ZrobRuchWMiejscu(plansza, j, i, Player), true, dalekosc + 1);
                    min = Math.min(min, zwrotna);
                }
            }
        }
        return min;
    }
}

function ZrobRuchWMiejscu(_plansza, x, y, charr)
{
    var plansza = _plansza.map(function(arr) {
        return arr.slice();
    });

    plansza[y][x] = charr;
    return plansza;
}

function NajlepszyRuch(_plansza)
{
    let maks = -1000;
    let x = 0;
    let y = 0;
    var plansza = _plansza.map(function(arr) {
        return arr.slice();
    });

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (plansza[i][j] == ' ')
            {
                let zwrotna = MiniMax(ZrobRuchWMiejscu(plansza, j, i, AI), false, 0);
                if (zwrotna > maks)
                {
                    maks = zwrotna;
                    x = j;
                    y = i
                }
            }
        }
    }
    return [x, y]
}

function KoniecGry(_plansza)
{
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (_plansza[i][j] == ' ')
                return false;
        }
    }

    return true;
}

function SprawdzenieWygranejDanegoZnaku(_plansza, _char){
    o = _char
    if (// -
        o == _plansza[0][0] && o == _plansza[0][1] && o == _plansza[0][2] ||
        o == _plansza[1][0] && o == _plansza[1][1] && o == _plansza[1][2] ||
        o == _plansza[2][0] && o == _plansza[2][1] && o == _plansza[2][2] ||
        // \ or /
        o == _plansza[0][0] && o == _plansza[1][1] && o == _plansza[2][2] ||
        o == _plansza[2][0] && o == _plansza[1][1] && o == _plansza[0][2] ||
        // |
        o == _plansza[0][0] && o == _plansza[1][0] && o == _plansza[2][0] ||
        o == _plansza[0][1] && o == _plansza[1][1] && o == _plansza[2][1] ||
        o == _plansza[0][2] && o == _plansza[1][2] && o == _plansza[2][2])
        return true;
    else
        return false;
}