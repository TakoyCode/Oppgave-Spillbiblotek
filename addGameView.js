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
            <option></option>
            <option ${gameConsoleInput == 'Nintedo 64' ? 'selected' : ''}>Nintedo 64</option>
            <option ${gameConsoleInput == 'Nintendo Entertainment System' ? 'selected' : ''}>Nintendo Entertainment System</option>
            <option ${gameConsoleInput == 'Game Cube' ? 'selected' : ''}>Game Cube</option>
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