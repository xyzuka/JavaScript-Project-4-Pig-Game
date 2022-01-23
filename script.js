'use strict';

// Caching elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; // If activePlayer is 0, then switch to 1 
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        //classList.toggle will add a class if it is not there, and remove it if it is there - so during the switch, it effects both player elements
}

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // adding the hidden class to hide the dice in the beginning of the game

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let secondPlayer = 1;
let playing = true;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) { //playing is already a boolean value so its true already 
        // 1. Generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Displaying dice roll
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`; // Displays the specific image of the dice number rolled with template literals

        // 3. Check if dice is 1: if true; switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(
            `current--${activePlayer}`
            ).textContent = currentScore;
        } else {
            // Lose all score and switch to next player
            switchPlayer();
        }
    }
})

// Holding score functionality
btnHold.addEventListener('click', function () {
    if (playing) { // Once the player finally hits 100, the boolean will be switched to false and therefore the roll and hold buttons will not work since they need the playing boolean to be false
        // 1. Adding currentScore to active player's score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]; // dynamically updates the score using template literals
        // 2. Is the score over 100? 
        if (score[activePlayer] >= 20) {
            // if true: Finish Game
            playing = false;
            document.querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // else: Switch player
            switchPlayer();
        }
    }   
})

