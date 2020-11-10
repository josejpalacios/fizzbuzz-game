function displayRules() {
    // Function to display rules

    // Unhide rules
    document.getElementById("rules").hidden = false;
    // Hide main menu
    hideMainMenu();
}

function displaySettings() {
    // Function to display settings

    // Unhide settings
    document.getElementById("settings").hidden = false;
    // Hide main menu
    hideMainMenu();
}

function displayGame() {
    // Function to display game

    // Unhide game
    document.getElementById("game").hidden = false;
    // Hide main menu
    hideMainMenu();
}



function hideMainMenu() {
    // Function to hide main menu

    // Hide all buttons
    document.getElementById("game-button").hidden = true;
    document.getElementById("rules-button").hidden = true;
    document.getElementById("settings-button").hidden = true;
}

function backToMainMenu() {
    // Function to go back to main menu

    // Hide all views
    document.getElementById("game").hidden = true;
    document.getElementById("rules").hidden = true;
    document.getElementById("settings").hidden = true;

    // Undide all buttons
    document.getElementById("game-button").hidden = false;
    document.getElementById("rules-button").hidden = false;
    document.getElementById("settings-button").hidden = false;
}
