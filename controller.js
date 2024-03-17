function addNewGame() {
    if (gameTitleInput == "" && gameConsoleInput == "" && gameReleaseYearInput == "" && gameImageInput == "") return;

    let gameObject = {
        title: gameTitleInput,
        console: gameConsoleInput,
        releaseYear: gameReleaseYearInput,
        image: gameImageInput,
    };
    games.push(gameObject);

    gameTitleInput = "";
    gameConsoleInput = "";
    gameReleaseYearInput = "";
    gameImageInput = "";
    mainView();
};

function openRandomGameInput() {
    randomGameChoice = true;
    mainView();
}

function showRandomGame() {
    let randomGamesIndex = null;

    randomGamesIndex = Math.floor(Math.random() * games.length);
    if (gameRandomConsoleInput != "") {
        while (gameRandomConsoleInput != games[randomGamesIndex].console) {
            randomGamesIndex = Math.floor(Math.random() * games.length);
        }
    }

    gameRandomConsoleInput = "";
    randomGameChoice = false;
    openPreview(randomGamesIndex);
}

function openPreview(index) {
    selectedGameIndex = index;
    isPreviewOn = true;
    mainView();
}

function closePreview() {
    isPreviewOn = false;
    mainView();
}

function selectConsole(consoleName) {
    if (selectedConsole == consoleName) { selectedConsole = null; }
    else { selectedConsole = consoleName; }
    console.log(consoleName);
    mainView();
}

function shuffle(array) {
    let randomIndex;

    // While there remain elements to shuffle.
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
}



/* function OLDaddNewGame() {
    let gameObject = {
        title: gameTitleInput,
        console: gameConsoleInput,
        releaseYear: gameReleaseYearInput,
        image: gameImageInput,
    };
    games.push(gameObject);
    if (gameObject.console == "Nintedo 64") nintedo64Games.push(gameObject);
    else if (gameObject.console == "Nintendo Entertainment System") nintedoEntertainmentSystemGames.push(gameObject);
    else if (gameObject.console == "Game Cube") gameCubeGames.push(gameObject);

    gameTitleInput = "";
    gameConsoleInput = "";
    gameReleaseYearInput = "";
    gameImageInput = "";
    addGameView();
}; */