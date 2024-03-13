let games = [
    // Nintendo 64
    {
        title: "Donkey Kong 64",
        console: "Nintedo 64",
        releaseYear: "1999",
        image: "images/donkeyKong64.jpg",
    },
    {
        title: "Pokemon Stadium",
        console: "Nintedo 64",
        releaseYear: "1999",
        image: "images/pokemonStadium.jpg",
    },
    {
        title: "Super Smash Bros.",
        console: "Nintedo 64",
        releaseYear: "1999",
        image: "images/superSmashBros.jpg",
    },
    {
        title: "Super Mario 64",
        console: "Nintedo 64",
        releaseYear: "1996",
        image: "images/superMario64.jpg",
    },
    // Nintendo Entertainment System
    {
        title: "Duck Hunt",
        console: "Nintendo Entertainment System",
        releaseYear: "1984",
        image: "images/duckHunt.jpg",
    },
    {
        title: "Tetris",
        console: "Nintendo Entertainment System",
        releaseYear: "1989",
        image: "images/tetris.jpg",
    },
    {
        title: "Super Mario Bros. 3 ",
        console: "Nintendo Entertainment System",
        releaseYear: "1988",
        image: "images/superMarioBros3.png",
    },
    // Game Cube
    {
        title: "Animal Crossing",
        console: "Game Cube",
        releaseYear: "2001",
        image: "images/animalCrossing.png",
    },
    {
        title: "Metroid Prime",
        console: "Game Cube",
        releaseYear: "2002",
        image: "images/metroidPrime.jpg",
    },
    {
        title: "Pikmin",
        console: "Game Cube",
        releaseYear: "2001",
        image: "images/pikmin.jpg",
    },
    {
        title: "Super Smash Bros. Melee",
        console: "Game Cube",
        releaseYear: "2001",
        image: "images/superSmashBrosMelee.png",
    },
]

// Add game Inputs
let gameTitleInput = "";
let gameConsoleInput = "";
let gameReleaseYearInput = "";
let gameImageInput = "";


// Preview variable
let isPreviewOn = false;

// What game you have clicked 
let selectedGameIndex = 0;

// Selected console
let selectedConsole = null;

// Choose what console for the random game
let gameRandomConsoleInput = "";
let randomGameChoice = false;

/* // Sorting the games 
let nintedo64Games = [games[0], games[1], games[2],];
let nintedoEntertainmentSystemGames = [games[3], games[4], games[5],];
let gameCubeGames = [games[6], games[7], games[8],]; */