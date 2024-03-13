function addNewGame() {
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
    addGameView();
};

function showRandomGame() {
    randomGameChoice = !randomGameChoice;
    let randomGamesIndex = Math.floor(Math.random() * games.length);
    openPreview(randomGamesIndex);
}


function closePreview() {
    isPreviewOn = false;
    mainView();
}

function openPreview(index) {
    selectedGameIndex = index;
    isPreviewOn = true;
    mainView();
}

function selectConsole(consoleName) {
    if (selectedConsole == consoleName) { selectedConsole = null; }
    else { selectedConsole = consoleName; }
    console.log(consoleName);
    mainView();
}
//

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