var email = "mailto:fabian.sucholas123@gmail.com";

var linkedin = "https://www.linkedin.com/in/fabian-sucholas-8547b7262/";
var twitter = "https://twitter.com/Fejbien1";
var instagram = "https://www.instagram.com/fabianiutki/";
var github = "https://github.com/Fejbien";
var steam = "https://steamcommunity.com/profiles/76561198201677078";
var imgtoascii = "./subSites/imgToAscii.html";
var cv = "./subSites/cv/index.html";

var thisProject = "https://github.com/Fejbien/Fejbien.github.io";

// All commands that are opening a new tab
urlsDirect = {
    linkedin: linkedin,
    twitter: twitter,
    instagram: instagram,
    github: github,
    steam: steam,
    imgtoascii: imgtoascii,
    cv: cv,
    this: thisProject,
};

games = {
    tictactoe: "",
};

commands = {
    help: {
        style: "color2 margin",
        text: [
            "<br>",
            "<span class='command'>about me</span>       About me",
            "<span class='command'>socials</span>        Social links",
            "<span class='command'>help</span>           Shows list of available commands",
            "<span class='command'>email</span>          It is just my mail",
            "<span class='command'>welcome</span>        Shows welcome message",
            "<span class='command'>clear</span>          Clears the terminal",
            "<span class='command'>error</span>          Shows error message",
            "<span class='command'>linkedin</span>       Opens new tab of my linkedin profile",
            "<span class='command'>twitter</span>        Opens new tab of my twitter profile",
            "<span class='command'>instagram</span>      Opens new tab of my instagram profile",
            "<span class='command'>github</span>         Opens new tab of my github profile",
            "<span class='command'>steam</span>          Opens new tab of my steam profile",
            "<span class='command'>this</span>           Opens new tab of this site's project on Github",
            "<span class='command'>tic tac toe</span>    Starts a game of tic tac toe vs computer",
            "<span class='command'>CV</span>             Opens subsite of my CV",
            "<span class='command'>img to ascii</span>   Opens subsite with an img to ascii converter (Under construction)",
            "<br>",
            "Not case sensetive nor space sensetive :D",
        ],
    },
    aboutme: {
        style: "color2 margin",
        text: [
            "<br>",
            "Hey, I'm Fabian!",
            "Currently I'm a student at PUT ",
            "Love programming, learning new things and the last but not least, watching low budget movies :D",
            "<br>",
        ],
    },
    socials: {
        style: "color2 margin",
        text: [
            "<br>",
            'linkedin       <a href="' +
                linkedin +
                '" target="_blank">linkedin/FabianSucholas' +
                "</a>",
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
            "<span class='inherit'>Command not found. List of available commands: <span class='command'>'help'</span>.</span>",
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

    // "Secret commands"
    fuckyou: {
        style: "error margin",
        text: ["<span class='inherit'>Do not swear at me :c</span>"],
    },

    fuck: {
        style: "error margin",
        text: ["<span class='inherit'>Do not swear!</span>"],
    },

    isthereasecret: {
        style: "margin color2",
        text: ["WoW you asked! Sadly there is no secret here :c"],
    },

    arethereanysecrets: {
        style: "margin color2",
        text: ["WoW you asked! Sadly there are no secrets here :c"],
    },

    secret: {
        style: "margin color2",
        text: [
            "Maybe ask first? <span class='command'>is there a secret</span>",
        ],
    },

    secrets: {
        style: "margin color2",
        text: [
            "Maybe ask first? <span class='command'>are there any secrets</span>",
        ],
    },
};
