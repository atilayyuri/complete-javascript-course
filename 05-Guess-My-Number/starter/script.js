'use strict';

// How to select element in the HTML using JS

//Easy way to select an element

// document.querySelector('.message');
// console.log(document.querySelector('.message'));

// How to reach a text content of an element

// console.log(document.querySelector('.message').textContent);

// How to change the text content of an element

// document.querySelector('.message').textContent = `Correct number!`;

// Select and assign the elements with the class of `number` and `score` and `guess` and `highscore`

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;  


// How to read and assign the value of an input element
// For input type elements, we use the value property instead of textContent
// document.querySelector('.guess').value = 23;

// Define a global random number
// Math.random() gives a random number between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20);


// Define a constant for the global score
let scoreNumber = document.querySelector('.score').textContent;
let scoreNumberInitial = scoreNumber

// Define a function to display a message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

// Get the highscore from the DOM
let highScore = document.querySelector('.highscore').textContent;

function checkGuess() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = `⛔ No valid number!`;

    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `🎉 Correct number!`;
        document.querySelector('body').style.backgroundColor = `#60b347`;

        document.querySelector('.number').style.width = `30rem`;
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.highscore').textContent = scoreNumber > highScore ? scoreNumber : highScore;

        highScore = scoreNumber > highScore ? scoreNumber : highScore;

    // When guess is wrong
    } else if (guess !== secretNumber) {

        if (scoreNumber > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            scoreNumber--;
            document.querySelector('.score').textContent = scoreNumber;
        }

        else {displayMessage('💥 You lost the game!');
    
        document.querySelector('.score').textContent = 0;}


    }
    }


function resetGame(){
    secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector('.score').textContent = scoreNumberInitial;
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = `15rem`;
}


// How to handle click events
document.querySelector('.check').addEventListener('click', checkGuess)
document.querySelector('.again').addEventListener('click', resetGame)