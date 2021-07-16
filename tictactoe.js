window.onload = loadtictactoe;
window.onresize = resizetictactoe;

var colorOfArticle = "#495057";
var colorOfLinesInTicTacToe = "white";

// Tyle tu zjebalem ze to chuj :D

function resizetictactoe() {
    resize();
    if (parseFloat(document.body.clientWidth) < 1300) {
        var heightOfArticle = parseFloat(document.body.clientHeight - document.getElementById("header").offsetHeight - document.getElementById("nav").offsetHeight);
    } else {
        var heightOfArticle = parseFloat(document.body.clientHeight - document.getElementById("header").offsetHeight);
    }
    var widthOfArticle = parseFloat(document.getElementById("article").clientWidth);
    document.getElementById("article").style.height = heightOfArticle + "px";

    if (heightOfArticle < widthOfArticle) {
        var side = heightOfArticle;
    } else {
        var side = widthOfArticle;
    }

    var canvas = document.getElementById("tictactoe");
    var ctx = canvas.getContext('2d');

    document.getElementById("tictactoe").style.height = side + "px";
    document.getElementById("tictactoe").style.width = side + "px";

    ctx.scale(side / 100, side / 100);

    ctx.fillStyle = colorOfArticle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw(ctx);
}

function draw(ctx) {
    ctx.strokeStyle = colorOfLinesInTicTacToe;;
    ctx.strokeRect(5.5, 5.5, 25.5, 15.5);
}

function loadtictactoe() {
    // jezeli cos bedzie trzeba :)
    resize();
    resizetictactoe();
}