// addGameView();
function addGameView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div>
        <div>    
            <div>Game Title:</div>
            <input type="text" oninput="gameTitleInput = this.value" value = "${gameTitleInput}"/>
        </div>
        <br/>
        
        <div>
            <div>Console:</div>
            <select onchange="gameConsoleInput = this.value;">
                <option>${gameConsoleInput}</option>
                <option>Nintedo 64</option>
                <option>Nintendo Entertainment System</option>
                <option>Game Cube</option>
            </select>
        </div>
        <br/>

        <div>
            <div>Release Year:</div>
            <input type="number" oninput="gameReleaseYearInput = this.value" value = "${gameReleaseYearInput}"/>
        </div>
        <br/>
        
        <div>
         <div>Game Cover Art Link:</div>
         <input type="text" oninput="gameImageInput = this.value" value = "${gameImageInput}"/>
        </div>
        <br/>
        
        <button onclick="addNewGame()">Legg til Spill</button>
        <button onclick="mainView()">Tilbake</button>
    </div>

    `;
    app.innerHTML = html;
}