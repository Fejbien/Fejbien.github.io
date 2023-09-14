var twitter = "https://twitter.com/Fejbien1";
var instagram = "https://www.instagram.com/fabianiutki/";
var github = "https://github.com/Fejbien";
var email = "mailto:fabian.sucholas123@gmail.com";

commands = {
    help: {
        style: "color2 margin",
        text: [
            "<br>",
            '<span class="command">creator</span>        Who i am',
            '<span class="command">socials</span>        Social links',
            '<span class="command">help</span>           Show list of available commands',
            '<span class="command">email</span>          It`s just my mail',
            '<span class="command">welcome</span>        Displays welcome message',
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
                '" target="_blank">instagram/fabianiutki' +
                "</a>",
            'github         <a href="' +
                github +
                '" target="_blank">github/fejbien' +
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
        style: "",
        text: [
            '<span class="color2">Welcome to my interactive web terminal.</span>',
        ],
    },
    error: {
        style: "error",
        text: [
            '<span class="inherit">Command not found. List of commands: <span class="command">\'help\'</span>.</span>',
        ],
    },
};
