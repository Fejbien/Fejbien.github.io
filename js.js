var prefixElem = document.getElementById("prefix");
var message = document.getElementById("message");
var before = document.getElementById("before");

window.addEventListener("keydown", enterKey);

var prefix = "fabian@website $";
prefixElem.innerHTML = prefix;

var str = "";

// Welcome message
loopLines(commands["welcome"].text, commands["welcome"].style, 80);

async function enterKey(e) {
    if (e.key.length < 2) {
        str += e.key;
    } else {
        if (e.key === "Backspace") str = str.slice(0, -1);
        if (e.key === "Enter") {
            console.log(str);
            loopLines(
                [
                    "<span id='prefix'>" +
                        prefix +
                        "</span> <span id='message'>" +
                        str +
                        "</span>",
                ],
                "no-animation",
                0
            );

            let key = str;
            str = "";
            if (commands.hasOwnProperty(key) === true) {
                loopLines(commands[key].text, commands[key].style, 80);
            } else {
                loopLines(commands["error"].text, commands["error"].style, 80);
            }
        }
    }

    message.innerHTML = str;
}

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

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}
