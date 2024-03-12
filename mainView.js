mainView();
function mainView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="consoleContainer">${createConsoleHtml()}</div>
    <div class="gameContainer">${createGameHtml()}</div>
    <div>${isPreviewOn ? createGamePreviewHtml(0) : ""}</div>
    
    `;
    app.innerHTML = html;
}

function createGamePreviewHtml() {
    let html = "";
    let index = selectedGameIndex;
    html += /*HTML*/`

    <div class="gamePreviewContainer">
        <div class="gamePreviewContent">
            <img class="" src="${games[index].image}" alt="${games[index].image}"/>
            <div class="gamePreviewText">
                <div>${games[index].title}</div>
                <div>${games[index].console}</div >
                <div>${games[index].releaseYear}</div>
            </div>
        </div>
        <button class="gamePreviewButton" onclick="closePreview()">X</button>
    </div>

    `;
    return html;
}

function createConsoleHtml() {
    let html = "";
    html += /*HTML*/ `
    <div onclick="selectConsole('Nintedo 64')" class="consoles ${selectedConsole == 'Nintedo 64' ? 'selectedConsole' : ''}">Nintedo 64</div>
    <div onclick="selectConsole('Nintendo Entertainment System')" class="consoles ${selectedConsole == 'Nintendo Entertainment System' ? 'selectedConsole' : ''}">Nintendo Entertainment System</div>
    <div onclick="selectConsole('Game Cube')"class="consoles ${selectedConsole == 'Game Cube' ? 'selectedConsole' : ''}">Game Cube</div>
    
    <div class="buttonsDiv">
    <button onclick="addGameView()" class="buttons">Legg til spill</button>
    <button onclick="showRandomGame()" class="buttons">Random spill</button>
    </div>
    `;
    return html;
}


function createGameHtml() {
    let html = "";
    for (let i = 0; i < games.length; i++) {
        if (selectedConsole == games[i].console) {
            html += /*HTML*/ `
        <div onclick="openPreview(${i})" class = "gameDiv">
        <div>${games[i].title}</div>
        <div>${games[i].console}</div >
        <div>${games[i].releaseYear}</div>
        <img class="gameImg" src="${games[i].image}" alt="${games[i].image}"/>
        </div>
        `;
        }
        else if (selectedConsole == null) {
            html += /*HTML*/ `
        <div onclick="openPreview(${i})" class = "gameDiv">
        <div>${games[i].title}</div>
        <div>${games[i].console}</div >
        <div>${games[i].releaseYear}</div>
        <img class="gameImg" src="${games[i].image}" alt="${games[i].image}"/>
        </div>
        `;
        }
    }
    return html;
}


/* function chooseGameHtml() {
    if (selectedConsole == 'Nintedo 64') return createNintedo64GamesHtml();
    if (selectedConsole == 'Nintendo Entertainment System') return createNintedoEntertainmentSystemGamesHtml();
    if (selectedConsole == 'Game Cube') return createGameCubeGamesHtml();
    else return createGameHtml();
}

function createNintedo64GamesHtml() {
    let html = "";
    for (let i = 0; i < nintedo64Games.length; i++) {
        html += `
        <div class = "gameDiv">
            <div>${nintedo64Games[i].title}</div>
            <div>${nintedo64Games[i].console}</div >
            <div>${nintedo64Games[i].releaseYear}</div>
            <img class="gameImg" src="${nintedo64Games[i].image}" 
            alt="${nintedo64Games[i].image}"/>
        </div>
        `;
    }
    return html;
}

function createNintedoEntertainmentSystemGamesHtml() {
    let html = "";
    for (let i = 0; i < nintedoEntertainmentSystemGames.length; i++) {
        html += `
        <div class = "gameDiv">
            <div>${nintedoEntertainmentSystemGames[i].title}</div>
            <div>${nintedoEntertainmentSystemGames[i].console}</div >
            <div>${nintedoEntertainmentSystemGames[i].releaseYear}</div>
            <img class="gameImg" src="${nintedoEntertainmentSystemGames[i].image}" 
            alt="${nintedoEntertainmentSystemGames[i].image}"/>
        </div>
        `;
    }
    return html;
}

function createGameCubeGamesHtml() {
    let html = "";
    for (let i = 0; i < gameCubeGames.length; i++) {
        html += `
        <div class = "gameDiv">
            <div>${gameCubeGames[i].title}</div>
            <div>${gameCubeGames[i].console}</div >
            <div>${gameCubeGames[i].releaseYear}</div>
            <img class="gameImg" src="${gameCubeGames[i].image}" 
            alt="${gameCubeGames[i].image}"/>
        </div>
        `;
    }
    return html;
} */
