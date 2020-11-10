function newGame() {
    // Function to start a new game

    // Get game settings
    const gameSettings = getGameSettings();

    // Set up visual numbers for game
    setUpVisualNumbers(gameSettings["Goal"]);

    // Get area for players and opponents
    var playArea = document.getElementById("players");
    // Clear out current area
    playArea.innerHTML = "";

    // Create players visual aids for game
    var playerCard = createPlayerCard();

    // Add player card to play area
    playArea.appendChild(playerCard);

    // Create opponents visual aids for game
    var opponentCards = createOpponentCards(gameSettings["Opponents"]);
    // Iterate through list of opponent visual aids
    for(var index=0; index < opponentCards.length; index++) {
        playArea.appendChild(opponentCards[index]);
    }

    // Enable game buttons
    enableGameButtons()

    // Display game
    displayGame();
}

// ===========================
// Functions for Game Settings
// ===========================

function getGameSettings() {
    // Function to get settings for game

    // Get number of opponents
    var opponentsSelected = getOpponents();
    // Get goal
    var goalSelected = getGoal();

    // Store options selected
    const gameSettings = {"Opponents":opponentsSelected, "Goal":goalSelected};

    // Returns game settings
    return gameSettings;
}

function getOpponents(){
    // Function to get number of opponents

    // Get radio buttons group for opponents
    var opponents = document.getElementsByName("opponents-group");

    // Placeholder to store number of opponents selected
    var opponentsSelected;

    // Iterate through opponent buttons
    for(var index = 0; index < opponents.length; index++) {
        // If button is checked
        if(opponents[index].checked) {
            // Store value to opponentsSelected
            opponentsSelected = opponents[index].value;
        }
    }

    // Return value selected
    return opponentsSelected
}

function getGoal() {
    // Function to get goal set

    // Get radio buttons for goal
    var goals = document.getElementsByName("goal-group");

    // Placeholder to store goal selected
    var goalSelected;

    // Iterate through goal buttons
    for(var index=0; index < goals.length; index++) {
        // If button is checked
        if(goals[index].checked) {
            // Store value to goalsSelected
            goalSelected = goals[index].value;
        }
    }

    // Return value selected
    return goalSelected;
}

// ===========================
// Function for Visual Numbers
// ===========================

function setUpVisualNumbers(goal) {
    // Function to set up visual numbers for game

    // Set current number to 1
    document.getElementById("display-current-number").innerHTML = "1";
    // Set goal to selected goal
    document.getElementById("display-game-goal").innerHTML = goal;
    //Set correct score to 0
    document.getElementById("display-correct-score").innerHTML = "0";
    // Set total attempts to 0
    document.getElementById("display-total-attempts").innerHTML = "0";
}

// ======================================
// Functions for Player Visual Aids/Cards
// ======================================

function createPlayerCard() {
    // Function to create visual aid display for player

    // Create element for player card
    var playerCard = document.createElement("DIV");
    // Set class for player card
    playerCard.className = "card bg-light";

    // Create element for text of card
    var playerCardText = document.createElement("DIV");
    // Set class for text of card
    playerCardText.className = "card-body text-center";

    // ========== Start of Text ==========
    // Create label for player
    var playerLabel = document.createElement("H1");
    // Set text for label
    playerLabel.innerHTML = "P1";
    // Add label to text of card
    playerCardText.appendChild(playerLabel);

    // Create horizontal line
    var playerHorizontalLine = document.createElement("HR");
    // Add horizontal line to text of card
    playerCardText.appendChild(playerHorizontalLine);

    // Create visual aid for players last number
    var playerLastNumber = document.createElement("H1");
    // Set id for H1 tag created
    playerLastNumber.id = "p1-last-number";
    // Add visual aid to text of card
    playerCardText.appendChild(playerLastNumber);

    // Create visual aid for players input
    var playerInput = document.createElement("H2");
    // Set id for H2 tag created
    playerInput.id = "p1-input";
    // Add visual aid to text of card
    playerCardText.appendChild(playerInput);

    // Create visual for players result
    var playerResult = document.createElement("H2");
    // Set id for H2 tag created
    playerResult.id = "p1-result";
    // Add visual aid to text of card
    playerCardText.appendChild(playerResult);
    // ========== End of Text ==========

    // Add text to player card
    playerCard.appendChild(playerCardText);

    // Return player card created
    return playerCard;
}

function createOpponentCards(opponents) {
    // Function to create list of opponent cards

    // Placeholder to store cards
    var opponentCards = [];

    // Loop for each opponent
    for(var opponent=1; opponent <= opponents; opponent++){
        // Create card for opponent
        var opponentCard = createOpponentCard(opponent.toString());
        // Add opponent card to list
        opponentCards.push(opponentCard);
    }

    // Return list of opponent cards
    return opponentCards
}

function createOpponentCard(opponent) {
    // Function to create opponent card

    // Create element for opponent card
    var opponentCard = document.createElement("DIV");
    // Set class for player card
    opponentCard.className = "card bg-light";

    // Create element for text of card
    var opponentCardText = document.createElement("DIV");
    // Set class for text of card
    opponentCardText.className = "card-body text-center";

    // ========== Start of Text ==========
    // Create label for opponent
    var opponentLabel = document.createElement("H1");
    // Set text for label
    opponentLabel.innerHTML = "CPU" + opponent;
    // Add label to text of card
    opponentCardText.appendChild(opponentLabel);

    // Create horizontal line
    var opponentHorizontalLine = document.createElement("HR");
    // Add horizontal line to text of card
    opponentCardText.appendChild(opponentHorizontalLine);

    // Create visual aid for opponents last number
    var opponentLastNumber = document.createElement("H1");
    // Set id for H1 tag created
    opponentLastNumber.id = "cpu" + opponent + "-last-number";
    // Add visual aid to text of card
    opponentCardText.appendChild(opponentLastNumber);

    // Create visual aid for opponents input
    var opponentInput = document.createElement("H2");
    // Set id for H2 tag created
    opponentInput.id = "cpu" + opponent + "-input";
    // Add visual aid to text of card
    opponentCardText.appendChild(opponentInput);

    // Create visual for opponents result
    var opponentResult = document.createElement("H2");
    // Set id for H2 tag created
    opponentResult.id = "cpu" + opponent + "-result";
    // Add visual aid to text of card
    opponentCardText.appendChild(opponentResult);
    // ========== End of Text ==========

    // Add text to opponent card
    opponentCard.appendChild(opponentCardText);

    // Return opponent card created
    return opponentCard
}

// =============================
// Functions for Getting/Setting
// =============================

function getCurrentNumber() {
    // Function to get current number

    // Return current number
    return document.getElementById("display-current-number").textContent;
}

function getCorrectScore() {
    // Function to get correct score as an integer

    // Return correct score
    return parseInt(document.getElementById("display-correct-score").textContent);
}

function getTotalAttempts() {
    // Function to get total attempts as an integer

    // Return total attempts
    return parseInt(document.getElementById("display-total-attempts").textContent);
}

function setNextNumber() {
    // Function to set next number

    // Get current number and convert to an integer
    var currentNumber = parseInt(getCurrentNumber());
    // Add 1 to current number
    document.getElementById("display-current-number").textContent = currentNumber + 1;
}


function setLastNumber(player, lastNumber) {
    // Function to set last number player answered

    // Set players last number to lastNumber
    document.getElementById(player+"-last-number").textContent = lastNumber;
}

function setButtonInput(player, buttonSelected) {
    // Function to set players input

    // Set players input to buttonSelected
    document.getElementById(player+"-input").textContent = buttonSelected;
}

function setGreenCheckMark(player) {
    // Function to set green check mark for correct choice

    // Get player result display
    var playerResult = document.getElementById(player+"-result");
    // Set color to green
    playerResult.style.color = "green";
    // Set text to check mark
    playerResult.textContent = "\u2713";
}

function setRedX(player) {
    // Function to set red X for incorrect choice

    // Get player result display
    var playerResult = document.getElementById(player+"-result");
    // Set color to red
    playerResult.style.color = "red";
    // Set text to X
    playerResult.textContent = "X";
}

// =======================================
// Functions for Increasing Visual Numbers
// =======================================
function increaseCorrectScoreByOne() {
    // Function to increase players correct score by 1

    // Get correct score
    var correctScore = getCorrectScore();
    // Increase correct score by 1
    document.getElementById("display-correct-score").textContent = correctScore + 1;
}

function increaseTotalAttemptsByOne() {
    // Function to increase players total attempt by 1

    // Get total attempts
    var totalAttempts = getTotalAttempts();
    // Increase total attempts by 1
    document.getElementById("display-total-attempts").textContent = totalAttempts + 1;
}

// =====================
// Functions for Buttons
// =====================
function numberButton() {
    // Function to handle Number button operations

    // Get current number
    var currentNumber = getCurrentNumber();
    // Set players last number
    setLastNumber("p1", currentNumber);
    // Set players input
    setButtonInput("p1", currentNumber);

    // If current number is not divisible by 3 or 5
    if ( (currentNumber % 3 != 0) && (currentNumber % 5 != 0) ) {
        // Set player result to check mark
        setGreenCheckMark("p1");
        // Increase correct score by 1
        increaseCorrectScoreByOne();
    } else {
        // Else set red X
        setRedX("p1");
    }

    // Increase total attempts by 1
    increaseTotalAttemptsByOne();

    // If game is not over
    if (!gameOver()) {
        // Set next number
        setNextNumber();
        // Perform cpu actions
        cpuBehavior();
    } else {
        // Else game is over, disable game buttons
        disableGameButtons();
        // Display game over message
        gameOverMessage()
    }
}

function fizzButton() {
    // Function to handle Fizz Button operations

    // Get current number
    var currentNumber = getCurrentNumber();
    // Set players last number
    setLastNumber("p1", currentNumber);
    // Set players input
    setButtonInput("p1", "Fizz");

    // If current number is divisible by 3
    if (currentNumber % 3 == 0) {
        // Set player result to check mark
        setGreenCheckMark("p1");
        // Increase correct score by 1
        increaseCorrectScoreByOne();
    } else {
        // Else set red X
        setRedX("p1");
    }

    // Increase total attempts by 1
    increaseTotalAttemptsByOne();

    // If game is not over
    if (!gameOver()) {
        // Set next number
        setNextNumber();
        // Perform cpu actions
        cpuBehavior();
    } else {
        // Else game is over, disable game buttons
        disableGameButtons();
        // Display game over message
        gameOverMessage()
    }
}

function buzzButton() {
    // Function to handle Buzz Button operations

    // Get current number
    var currentNumber = getCurrentNumber();
    // Set players last number
    setLastNumber("p1", currentNumber);
    // Set players input
    setButtonInput("p1", "Buzz");

    // If current number is divisible by 5
    if (currentNumber % 5 == 0) {
        // Set player result to check mark
        setGreenCheckMark("p1");
        // Increase correct score by 1
        increaseCorrectScoreByOne();
    } else {
        // Else set red X
        setRedX("p1");
    }

    // Increase total attempts by 1
    increaseTotalAttemptsByOne();

    // If game is not over
    if (!gameOver()) {
        // Set next number
        setNextNumber();
        // Perform cpu actions
        cpuBehavior();
    } else {
        // Else game is over, disable game buttons
        disableGameButtons();
        // Display game over message
        gameOverMessage();
    }
}

function fizzBuzzButton() {
    // Function to handle FizzBuzz button operations

    // Get current number
    var currentNumber = getCurrentNumber();
    // Set players last number
    setLastNumber("p1", currentNumber);
    // Set players input
    setButtonInput("p1", "FizzBuzz");

    // If current number is divisible by 3 and 5
    if ( (currentNumber % 3 == 0) && (currentNumber % 5 == 0) ) {
        // Set player result to check mark
        setGreenCheckMark("p1");
        // Increase correct score by 1
        increaseCorrectScoreByOne();
    } else {
        // Else set red X
        setRedX("p1");
    }

    // Increase total attempts by 1
    increaseTotalAttemptsByOne();

    // If game is not over
    if (!gameOver()) {
        // Set next number
        setNextNumber();
        // Perform cpu actions
        cpuBehavior();
    } else {
        // Else game is over, disable game buttons
        disableGameButtons();
        // Display game over message
        gameOverMessage();
    }
}

// ====================
// Additional Functions
// ====================
function gameOver() {
    // Function to check if game is over

    // Get current number as an integer
    var currentNumber = parseInt(getCurrentNumber());
    // Placeholder to determine if game is over
    var endGame;
    // Get goal of game as an integer
    var goal = parseInt(document.getElementById("display-game-goal").textContent);
    // If current number is less than goal
    if (currentNumber < goal) {
        // Set end game to false
        endGame = false;
    } else {
        // Else set end game to true
        endGame = true;
    }
    // Return end game
    return endGame;
}

function disableGameButtons() {
    // Function to disable game buttons

    // Disable buttons
    document.getElementById("number-button").disabled = true;
    document.getElementById("fizz-button").disabled = true;
    document.getElementById("buzz-button").disabled = true;
    document.getElementById("fizzbuzz-button").disabled = true;
}

function enableGameButtons() {
    // Function to enable game buttons

    // Enable buttons
    document.getElementById("number-button").disabled = false;
    document.getElementById("fizz-button").disabled = false;
    document.getElementById("buzz-button").disabled = false;
    document.getElementById("fizzbuzz-button").disabled = false;
}

function cpuBehavior() {
    // Function to perform opponents turns

    // Get the amount of opponents
    var opponents = document.getElementById("players").childElementCount-1;

    // Loop for each opponent
    for(var counter=1; counter <= opponents; counter++) {
        // Get current number
        var currentNumber = getCurrentNumber();

        // Create cpu info
        var cpuInfo = "cpu" + counter.toString();
        // Set last number for cpu
        setLastNumber(cpuInfo, currentNumber);

        // Determine input for cpu
        cpuInput = fizzbuzz(currentNumber);
        // Set input for cpu
        setButtonInput(cpuInfo, cpuInput);

        // Set check mark for cpu
        setGreenCheckMark(cpuInfo);

        // If game is not over
        if (!gameOver()) {
            // Set next number
            setNextNumber();
        } else {
            // Else disable game buttons
            disableGameButtons();
            // Display game over message
            gameOverMessage();
            // Break loop for cpu behavior
            break;
        }
    }
}

function fizzbuzz(number) {
    // Function to perform fizzbuzz for cpus

    // Placeholder to store result
    var result;

    // If number is divisible by 3 and 5
    if ( (number % 3 == 0) && (number % 5 == 0) ) {
        // Set FizzBuzz to result
        result = "FizzBuzz";
    // Else if number is divisible by 3
    } else if (number % 3 == 0) {
        // Set Fizz to result
        result = "Fizz";
    // Else if number is divisible by 5
    } else if (number % 5 == 0) {
        // Set Buzz to result
        result = "Buzz";
    } else {
        // Else set Number to result
        result = number;
    }

    // Return result
    return result
}

function gameOverMessage() {
    // Function to display game over message

    // Get players score
    var correctScore = getCorrectScore();
    // Get total attempts
    var totalAttempts = getTotalAttempts();
    // Calculate percentage
    var correctPercentage = ((correctScore / totalAttempts) * 100).toFixed(2);

    // Create message to display
    var message = "Goal has been reached!\n";
    message += "You got " + correctScore.toString() + " out of " + totalAttempts.toString() + " ";
    message += "(" + correctPercentage + "%) correct!\n";
    message += "Thank you for playing!";

    // Wait to display message
    setTimeout(() => {alert(message);}, 10)
}