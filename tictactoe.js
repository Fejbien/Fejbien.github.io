var board = [
    [" ", " ", " "],
    [" ", " ", ""],
    [" ", " ", " "],
];

var state = 0; // 0 - ended          // 1 - ongoing
var turn = true; // true - player    // flase - pc
var playerChar = "X";
var aiChar = "O";

function tictactoeErrorMessage(text) {
    loopLines(text, "error", 0);
}

function Input(str) {
    var symbolChar = turn ? playerChar : aiChar;

    if (parseInt(str).toString() === "NaN") {
        if (str == "end") {
            loopLines(["The game has ended"], "color2", 0);
            state = 0;
        } else if (str == "redraw") {
            ShowBoard();
        } else {
            tictactoeErrorMessage([
                "Please type only numbers from 1 to 9 or 'END' to end the game or 'REDRAW' to redraw the board!",
            ]);
        }

        return;
    }

    let pos = parseInt(str);

    if (pos > 9 || pos < 1) {
        tictactoeErrorMessage(["Please type numbers from 1 to 9!"]);
        return;
    }

    let y = Math.floor((pos - 1) / 3);
    let x = Math.floor((pos - 1) % 3);

    if (board[y][x] != " ") {
        tictactoeErrorMessage(["This place is already occupieded!"]);
        return;
    }

    console.log(`y: ${y} x: ${x}`);
    board[y][x] = playerChar;

    if (HasWon(board, playerChar)) {
        ShowBoard();
        loopLines(
            [
                `${symbolChar} has won!`,
                "You can try again just by typing `tictactoe` again",
            ],
            "margin color2",
            0
        );
        state = 0;
        return;
    }

    if (DrawCheck(board)) {
        ShowBoard();
        loopLines(
            [
                "No winner this game!",
                "You can try again just by typing `tictactoe` again",
            ],
            "margin color2",
            0
        );
        state = 0;
        return;
    }

    symbolChar = turn ? playerChar : aiChar;
    turn = !turn;

    let [slotI, slotJ] = BestMove(board);
    board[slotI][slotJ] = turn ? playerChar : aiChar;

    ShowBoard();

    if (HasWon(board, aiChar)) {
        loopLines(
            [
                `${aiChar} has won!`,
                "You can try again just by typing `tictactoe` again",
            ],
            "margin color2",
            0
        );
        state = 0;
        return;
    }

    if (DrawCheck(board)) {
        loopLines(
            [
                "No winner this game!",
                "You can try again just by typing `tictactoe` again",
            ],
            "margin color2",
            0
        );
        state = 0;
        return;
    }

    turn = !turn;
}

function GameInit() {
    state = 1;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = " ";
        }
    }

    loopLines(
        [
            "<br>",
            "Place your charcter by typing the number corresponding to your place of choice.",
            "You can also end the game by typing 'END' or redraw the board by 'REDRAW'.",
            "Do not worry it is not case sensetive :D",
            "<br>",
        ],
        "color2",
        0
    );

    ShowBoard();
}

function ShowBoard() {
    let s = [];
    for (let i = 0; i < board.length; i++) s[i] = board[i].slice();
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[i][j] == " ") s[i][j] = "&nbsp;";
        }
    }

    loopLines(
        [
            `${s[0][0]}&nbsp;|&nbsp;${s[0][1]}&nbsp;|&nbsp;${s[0][2]}       1 | 2 | 3`,
            ` --+---+--       --+---+--`,
            `${s[1][0]}&nbsp;|&nbsp;${s[1][1]}&nbsp;|&nbsp;${s[1][2]}       4 | 5 | 6`,
            ` --+---+--       --+---+--`,
            `${s[2][0]}&nbsp;|&nbsp;${s[2][1]}&nbsp;|&nbsp;${s[2][2]}       7 | 8 | 9`,
            `&nbsp;&nbsp;&nbsp;Your move ${playerChar}: `,
        ],
        "margin",
        0
    );
}

function MiniMax(_boardMinMax, maximazing, depth) {
    let boardMinMax = [];
    for (let i = 0; i < _boardMinMax.length; i++)
        boardMinMax[i] = _boardMinMax[i].slice();

    if (HasWon(boardMinMax, aiChar)) return 10;
    else if (HasWon(boardMinMax, playerChar)) return -10;
    else if (DrawCheck(boardMinMax)) return 0;

    if (maximazing) {
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < boardMinMax.length; i++) {
            for (let j = 0; j < boardMinMax.length; j++) {
                if (boardMinMax[i][j] == " ") {
                    let returner = MiniMax(
                        MakeMoveAtSlot(boardMinMax, false, i, j),
                        false,
                        depth + 1
                    );
                    max = Math.max(max, returner - depth);
                }
            }
        }

        return max;
    } else {
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < boardMinMax.length; i++) {
            for (let j = 0; j < boardMinMax.length; j++) {
                if (boardMinMax[i][j] == " ") {
                    let returner = MiniMax(
                        MakeMoveAtSlot(boardMinMax, true, i, j),
                        true,
                        depth + 1
                    );
                    min = Math.min(min, returner);
                }
            }
        }

        return min;
    }
}

function MakeMoveAtSlot(_boardMinMax, whosMoving, slotI, slotJ) {
    let boardMinMax = [];
    for (let i = 0; i < _boardMinMax.length; i++)
        boardMinMax[i] = _boardMinMax[i].slice();

    boardMinMax[slotI][slotJ] = whosMoving ? playerChar : aiChar;
    return boardMinMax;
}

function BestMove(_boardMinMax) {
    let max = Number.MIN_SAFE_INTEGER;
    let slotI = Number.MIN_SAFE_INTEGER;
    let slotJ = Number.MIN_SAFE_INTEGER;

    let boardMinMax = [];
    for (let i = 0; i < _boardMinMax.length; i++)
        boardMinMax[i] = _boardMinMax[i].slice();

    for (let i = 0; i < boardMinMax.length; i++)
        for (let j = 0; j < boardMinMax.length; j++) {
            if (boardMinMax[i][j] == " ") {
                let returner = MiniMax(
                    MakeMoveAtSlot(boardMinMax, false, i, j),
                    false,
                    0
                );
                if (returner > max) {
                    max = returner;
                    slotI = i;
                    slotJ = j;
                }
            }
        }

    return [slotI, slotJ];
}

function HasWon(boardMinMax, symbol) {
    var t = symbol;
    if (
        // Rows
        (boardMinMax[0][0] == t &&
            boardMinMax[0][1] == t &&
            boardMinMax[0][2] == t) ||
        (boardMinMax[1][0] == t &&
            boardMinMax[1][1] == t &&
            boardMinMax[1][2] == t) ||
        (boardMinMax[2][0] == t &&
            boardMinMax[2][1] == t &&
            boardMinMax[2][2] == t) ||
        // Collumns
        (boardMinMax[0][0] == t &&
            boardMinMax[1][0] == t &&
            boardMinMax[2][0] == t) ||
        (boardMinMax[0][1] == t &&
            boardMinMax[1][1] == t &&
            boardMinMax[2][1] == t) ||
        (boardMinMax[0][2] == t &&
            boardMinMax[1][2] == t &&
            boardMinMax[2][2] == t) ||
        // Cross
        (boardMinMax[0][0] == t &&
            boardMinMax[1][1] == t &&
            boardMinMax[2][2] == t) ||
        (boardMinMax[2][0] == t &&
            boardMinMax[1][1] == t &&
            boardMinMax[0][2] == t)
    ) {
        return true;
    }

    return false;
}

function DrawCheck(boardMinMax) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (boardMinMax[i][j] == " ") return false;
        }
    }

    return true;
}
