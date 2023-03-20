'use strict';

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score1El = document.querySelector('#score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current1El = document.getElementById('current--0');
const current2El = document.querySelector('current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldPoints = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player1El.textContent = 0;
    player2El.textContent =0;
    score1El.textContent = 0;
    score2El.textContent = 0;


    diceEl.classList.add('hidden');
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player1El.classList.add('player--active');
    player2El.classList.add('player--active');
}

init();


