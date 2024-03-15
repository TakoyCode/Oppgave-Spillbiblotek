//addGameView();
function addGameView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="addGameViewContainer">
        <div class="addGameViewBackground">
            <button class="addGameViewExitButton" onclick="mainView()">x</button> 

            <div class="addGameViewInputDiv">${createGameViewInputs()}</div>

            <button class="addGameViewAddGameButton" onclick="addNewGame()">Legg til Spill</button>
        </div>    
    </div>

    `;
    app.innerHTML = html;
}

function createGameViewInputs() {
    return /*HTML*/`
    <div class="addGameViewInputText">
    <div>Game Title:</div>
        <input type="text" oninput="gameTitleInput = this.value" value = "${gameTitleInput}"/>
    </div>
    <div class="addGameViewInputText">
        <div>Console:</div>
        <select onchange="gameConsoleInput = this.value;">
            <option>${gameConsoleInput}</option>
            <option>Nintedo 64</option>
            <option>Nintendo Entertainment System</option>
            <option>Game Cube</option>
        </select>
    </div>
    <div class="addGameViewInputText">
        <div>Release Year:</div>
        <input type="number" oninput="gameReleaseYearInput = this.value" value = "${gameReleaseYearInput}"/>
    </div>
    <div class="addGameViewInputText">
        <div>Game Cover Art Link:</div>
        <input type="text" oninput="gameImageInput = this.value" value = "${gameImageInput}"/>
    </div>
    `;


}