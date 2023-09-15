var email = "mailto:fabian.sucholas123@gmail.com";

var twitter = "https://twitter.com/Fejbien1";
var instagram = "https://www.instagram.com/fabianiutki/";
var github = "https://github.com/Fejbien";
var steam = "https://steamcommunity.com/profiles/76561198201677078";
var leetcode = "https://leetcode.com/Fejbien/";

urlsDirect = {
    twitter: twitter,
    instagram: instagram,
    github: github,
    steam: steam,
    leetcode: leetcode,
};

games = {
    tictactoe: "",
};

commands = {
    help: {
        style: "color2 margin",
        text: [
            "<br>",
            '<span class="command">creator</span>        Who i am',
            '<span class="command">socials</span>        Social links',
            '<span class="command">help</span>           Shows list of available commands',
            '<span class="command">email</span>          It is just my mail',
            '<span class="command">welcome</span>        Displays welcome message',
            '<span class="command">clear</span>          Clears the terminal',
            '<span class="command">twitter</span>        Opens new tab of my twitter profile',
            '<span class="command">instagram</span>      Opens new tab of my instagram profile',
            '<span class="command">github</span>         Opens new tab of my github profile',
            '<span class="command">steam</span>          Opens new tab of my steam profile',
            '<span class="command">leetcode</span>       Opens new tab of my leetcode profile',
            '<span class="command">tictactoe</span>      Starts a game of tic tac toe vs computer',
            "<br>",
        ],
    },
    creator: {
        style: "color2 margin",
        text: [
            "<br>",
            "Hey, I'm Fabian!",
            "Currently I'm a student at PUT ",
            "<br>",
        ],
    },
    socials: {
        style: "color2 margin",
        text: [
            "<br>",
            'twitter        <a href="' +
                twitter +
                '" target="_blank">twitter/Fejbien1' +
                "</a>",
            'instagram      <a href="' +
                instagram +
                '" target="_blank">instagram/Fabianiutki' +
                "</a>",
            'github         <a href="' +
                github +
                '" target="_blank">github/Fejbien' +
                "</a>",

            'Steam :D       <a href="' +
                steam +
                '" target="_blank">steam/Fabian' +
                "</a>",
            'Leetcode       <a href="' +
                leetcode +
                '" target="_blank">leetcode/Fejbien' +
                "</a>",
            "<br>",
        ],
    },
    email: {
        style: "color2 margin",
        text: [
            "<br>",
            "Email me @ <a href=" + email + ">fabian.sucholas123@gmail.com</a>",
            "<br>",
        ],
    },
    welcome: {
        style: "color2",
        text: ["Welcome to my web terminal :D", "Type help if lost"],
    },
    error: {
        style: "error",
        text: [
            '<span class="inherit">Command not found. List of available commands: <span class="command">\'help\'</span>.</span>',
        ],
    },

    urlDirect: {
        style: "color2",
        text: ["Opening new tab of "],
    },

    gameStart: {
        style: "color2",
        text: ["Starts now. The game of "],
    },

    clear: {
        style: "color2",
        text: ["Clearing..."],
    },
};
