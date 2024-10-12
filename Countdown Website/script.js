const submit = document.getElementById("submit");
let input = document.getElementById("numberInput");
const timerDiv = document.querySelector(".timer");
let interval;
let visualTimer;

function retrieveInput() {
    return Math.floor(parseInt(input.value)) || 0;
};

function printNumber() {
    let seconds = retrieveInput();
    if (checkForNumber(seconds)) {
        startCountdown(seconds);
    }
};

function checkForNumber(seconds) {
    if(isNaN(seconds) || parseInt(input) <= 0) {
        const response = document.createElement("h1");
        response.innerHTML = "Error! Input a number greater than 0.";
        timerDiv.innerHTML = "";
        timerDiv.appendChild(response);
        return false;
    };
    return true;
};

function startCountdown(seconds) {
    timerDiv.innerHTML = ""; // Clear previous timer display
    visualTimer = document.createElement("h1");
    timerDiv.appendChild(visualTimer);

    interval = setInterval(() => {
        if (seconds <= 0) {
            visualTimer.innerText = "Time's up!";
            createRestartButton();
        } else {
            visualTimer.innerText = seconds;
            seconds--;
        };
    }, 1000);
};

function createRestartButton() {
    const existingButton = timerDiv.querySelector("button");
    if (existingButton) {
        existingButton.remove();
    };

    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Timer";
    timerDiv.appendChild(restartButton);
    restartButton.addEventListener("click", function() {
        clearInterval(interval);
        input.value = "";
        timerDiv.innerHTML = "";
    });
};

submit.addEventListener("click", printNumber);