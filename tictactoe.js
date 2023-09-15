var board = [
    [" ", " ", " "],
    [" ", " ", ""],
    [" ", " ", " "],
];

var state = 0; // 0 ended 1 ongoing
var playerChar = "X";
var aiChar = "O";

function tictactoeErrorMessage(text) {
    loopLines(text, "error", 0);
}

function Input(str) {
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
    ShowBoard();
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
        80
    );
}



// ------------------------------------------------------------------------------------------------------

        function MiniMax(_board, maximazing, depth)
        {
            char[] board = (char[])_board.Clone();

            if (HasWon(board, minimaxChar))
                return 10;
            else if (HasWon(board, playerChar))
                return -10;
            else if (DrawCheck(board))
                return 0;

            if (maximazing)
            {
                let max = int.MinValue;
                for (int i = 0; i < board.Length; i++)
                {
                    if (board[i] == ' ')
                    {
                        let returner = MiniMax(MakeMoveAtSlot(board, false, i), false, depth + 1);
                        max = Math.Max(max, returner - depth);
                    }
                }
                return max;
            }
            else
            {
                int min = int.MaxValue;
                for (int i = 0; i < board.Length; i++)
                {
                    if (board[i] == ' ')
                    {
                        int returner = MiniMax(MakeMoveAtSlot(board, true, i), true, depth + 1);
                        min = Math.Min(min, returner);
                    }
                }
                return min;
            }
        }

        static char[] MakeMoveAtSlot(char[] _board, bool whosMoving, int slot)
        {
            char[] board = (char[])_board.Clone();
            board[slot] = whosMoving ? playerChar : minimaxChar;
            return board;
        }

        static int BestMove(char[] _board)
        {
            int max = int.MinValue;
            int slot = int.MinValue;
            char[] board = (char[])_board.Clone();
            for (int i = 0; i < board.Length; i++)
                if (board[i] == ' ')
                {
                    int returner = MiniMax(MakeMoveAtSlot(board, false, i), false, 0);
                    if (returner > max)
                    {
                        max = returner;
                        slot = i;
                    }
                }

            return slot;
        }
    }
}


