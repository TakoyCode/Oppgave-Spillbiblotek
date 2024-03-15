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

function openRandomGameInput() {
    randomGameChoice = true;
    mainView();
}

function showRandomGame() {
    let randomGamesIndex = null;
    randomGameChoice = false;

    randomGamesIndex = Math.floor(Math.random() * games.length);
    if (gameRandomConsoleInput != "") {
        while (gameRandomConsoleInput != games[randomGamesIndex].console) {
            randomGamesIndex = Math.floor(Math.random() * games.length);
        }
    }
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

/*
Må fikse at dette fungerer med resten av koden 
shuffle(games); 
*/
function shuffle(array) {
    // Hvordan det var før : let currentIndex = array.length, randomIndex;
    let randomIndex;

    // While there remain elements to shuffle. Hvordan det var før: while (currentIndex > 0)
    for (currentIndex = array.length; currentIndex > 0; currentIndex--) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;

        /*   Hvordan det var før, jeg gjorde det mer leselig for meg
        [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]]; 
        */
    }

    games = array;
    mainView();
}
/*
function shuffle(array) {
    let randomIndex;

    // While there remain elements to shuffle.
    for (let currentIndex = array.length; currentIndex > 0; currentIndex--) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);

        // And swap it with the current element.
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
} */

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