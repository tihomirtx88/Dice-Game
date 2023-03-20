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

const swithPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
}


btnRollDice.addEventListener('click', function(){
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore+= dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        }else{
            swithPlayer();
        }
    }
});

btnHoldPoints.addEventListener('click', function(){
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing= false;
            diceEl.classList.add('hidden');
            document
             .querySelector(`.player--${activePlayer}`)
             .classList.add('player--winner');
          document
             .querySelector(`.player--${activePlayer}`)
             .classList.remove('player--active');
        }
        else{
            swithPlayer();
        }
    }
})

