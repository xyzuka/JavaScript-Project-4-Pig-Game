'use strict';

// Caching elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // adding the hidden class to hide the dice in the beginning of the game

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let secondPlayer = 1;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Displaying dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if dice is 1: if true; switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(
        `current--${activePlayer}`
        ).textContent = currentScore;
    } else {
        // Lose all score and switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; // If activePlayer is 0, then switch to 1 
        currentScore = 0;
    }
})

