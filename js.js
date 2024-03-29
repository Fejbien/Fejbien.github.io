var prefixElem = document.getElementById("prefix");
var message = document.getElementById("message");
var before = document.getElementById("before");
var terminal = document.getElementById("terminal");

var commandHistory = [""];
var currentIndexHistory = 0;

window.addEventListener("keydown", enterKey);

var str = "";
var prefix = "fabian@website $";
prefixElem.innerHTML = prefix;

var isCurrentlyPlaying = false;

// Welcome messages
loopLines(commands["welcome"].text, commands["welcome"].style, 80);
console.log(
    "%cSecret? Secrets?",
    "color: red; font-size: 32px; font-weight: bolder;"
);

async function enterKey(e) {
    // Makes site unscrollable by arrow keys and space bar
    if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
            e.code
        ) > -1
    ) {
        e.preventDefault();
    }

    // Arrow Up Commands History
    if (e.keyCode == 38) {
        if (currentIndexHistory < 1) return;

        currentIndexHistory--;
        str = commandHistory[currentIndexHistory];
    }

    // Arrow Down Commands History
    if (e.keyCode == 40) {
        if (currentIndexHistory > commandHistory.length - 2) return;

        currentIndexHistory++;
        str = commandHistory[currentIndexHistory];
    }

    if (e.key.length < 2) {
        str += e.key;
    } else {
        if (e.key === "Backspace") str = str.slice(0, -1);
        if (e.key === "Enter") {
            //console.log(str);
            EnteredMessage();

            // Handle cAsEsEnS, s p a c e s and history indexing
            let key = str.toLowerCase().replace(/\s/g, "");
            commandHistory[commandHistory.length - 1] = str;
            commandHistory.push("");
            currentIndexHistory = commandHistory.length - 1;
            str = "";

            // Game is on
            if (isCurrentlyPlaying) {
                Input(key);

                if (state == 0) isCurrentlyPlaying = false;
                message.innerHTML = str;
                return;
            }

            // Variety commands read
            if (
                commands.hasOwnProperty(key) === true ||
                urlsDirect.hasOwnProperty(key) === true ||
                games.hasOwnProperty(key) === true
            ) {
                // Working command
                HandleAvaiableCommands(key);
            } else {
                // Error command (no corresponding command found)
                loopLines(commands["error"].text, commands["error"].style, 80);
            }
        }
    }

    message.innerHTML = str;
}

// Message entered by user on top of action of that command
function EnteredMessage() {
    loopLines(
        [
            "<span id='prefix'>" +
                prefix +
                "</span><span id='message'>" +
                str +
                "</span>",
        ],
        "no-animation",
        0
    );
}

// Handles all avaiable commands from 'commands.js' file
function HandleAvaiableCommands(key) {
    // Commands with url direct
    if (urlsDirect.hasOwnProperty(key) === true) {
        loopLines(
            [
                commands["urlDirect"].text[0] +
                    "<span class='color3'>" +
                    key +
                    "...</span>",
            ],
            commands["urlDirect"].style,
            80
        );
        OpenNewTab(urlsDirect[key]);

        return;
    }

    // Commands that start games
    if (games.hasOwnProperty(key) === true) {
        loopLines(
            [
                commands["gameStart"].text[0] +
                    "<span class='color3'>" +
                    key +
                    "...</span>",
            ],
            commands["gameStart"].style,
            80
        );

        GameInit();
        isCurrentlyPlaying = true;

        return;
    }

    // Commands with additional action
    switch (key) {
        case "clear":
            loopLines(commands[key].text, commands[key].style, 80);
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 500);
            break;

        default:
            loopLines(commands[key].text, commands[key].style, 80);
            break;
    }
}

// Writes single line
function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }

    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

// Writes multiple lines only accepts string array as 'text' field
function loopLines(text, style, time) {
    text.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

// Opens a tab from given url (all urls are located in commands file)
function OpenNewTab(url) {
    setTimeout(function () {
        window.open(url, "_blank");
    }, 1000);
}
