function mainView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="mainViewBackground">
        <div class="mainViewBackgroundInsideTopBorder"></div>
        <div class="mainViewBackgroundInsideBottomBorder"></div>
        <div class="consoleContainer">${createConsoleHtml()}${createButtonsHtml()}<div>${isPreviewOn ? createGamePreviewHtml() : ""}</div></div>
        
        <div class="gameContainer">${createGameHtml()}</div>
    </div>
    `;
    app.innerHTML = html;
}

function createGamePreviewHtml() {
    let html = "";
    let index = selectedGameIndex;
    html += /*HTML*/`

    <div class="gamePreviewContainer">
        <div class="gamePreviewContent">
            <img src="${games[index].image}" alt="${games[index].image}"/>
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
    <div class="consoleDiv">
        <img src="images/nintendo64.png" onclick="selectConsole('Nintedo 64')" class="consoles ${selectedConsole == 'Nintedo 64' ? 'selectedConsole' : ''}"/>
        <img src="images/nintendoEntertainmentSystem.png" onclick="selectConsole('Nintendo Entertainment System')" class="consoles ${selectedConsole == 'Nintendo Entertainment System' ? 'selectedConsole' : ''}"/>
        <img src="images/gameCube.webp" onclick="selectConsole('Game Cube')"class="gameCube ${selectedConsole == 'Game Cube' ? 'selectedConsole' : ''}"/>
    </div>
    `;
    return html;
}

function createButtonsHtml() {
    if (randomGameChoice) return /*HTML*/ `
    <div class ="randomGameChoiceDiv">
        <div class ="randomGameInput">
            <label>Hvem consol skal spille være fra?</label>
            <select onchange="gameRandomConsoleInput = this.value; console.log(gameRandomConsoleInput)">
                <option ${gameRandomConsoleInput == '' ? 'selected' : ''} value="">Tilfeldig Console</option>
                <option ${gameRandomConsoleInput == 'Nintedo 64' ? 'selected' : ''}>Nintedo 64</option>
                <option ${gameRandomConsoleInput == 'Nintendo Entertainment System' ? 'selected' : ''}>Nintendo Entertainment System</option>
               <option ${gameRandomConsoleInput == 'Game Cube' ? 'selected' : ''}>Game Cube</option>
            </select>
        </div>
        <div class="buttonsDiv">
            <button onclick="addGameView()" class="buttons">Legg til spill</button>
            <button onclick="shuffle(games); mainView();" class="buttons">Shuffle spill</button>
            <button onclick="showRandomGame()" class="buttons"> Få ett random spill</button>
        </div>
    </div>    
        
        `;
    else return /*HTML*/ `
        <div class="buttonsDiv">
        <button onclick="addGameView()" class="buttons">Legg til spill</button>
        <button onclick="shuffle(games); mainView();" class="buttons">Shuffle spill</button>
        <button onclick="openRandomGameInput()" class="buttons">Random spill</button>
        </div>
    `;
}


// onerror="this.onerror=null; this.src='images/pikmin.jpg';" 
// kunne brukt ^^, hvis jeg hadde hatt lyst å ha byttet ugyldig gitt bilde, med ett eget satt bilde 
function createGameHtml() {
    let html = "";
    for (let i = 0; i < games.length; i++) {
        if (selectedConsole == games[i].console) {
            html += /*HTML*/ `
        <div onclick="openPreview(${i})">
        <img class="gameImg" src="${games[i].image}" alt="${games[i].image}"/>
        </div>
        `;
        }
        else if (selectedConsole == null) {
            html += /*HTML*/ `
        <div onclick="openPreview(${i})">
        <img class="gameImg" src="${games[i].image}" alt="${games[i].image}"/>
        </div>
        `;
        }
    }
    return html;
}

/* 
Old Code for createGameHtml()
<div>${games[i].title}</div>
<div>${games[i].console}</div >
<div>${games[i].releaseYear}</div>
 */

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
