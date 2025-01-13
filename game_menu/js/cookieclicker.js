var display = document.getElementById('display');
var click = document.getElementById('click');
var multiply = document.getElementById('multiply');
var autoclick = document.getElementById('autoclick');
var bonus = document.getElementById('bonus');
var reset = document.getElementById('reset');
var save = document.getElementById('save');
var load = document.getElementById('load');

var multiplierCost = 20;
var autoclickCost = 50;
var bonusCost = 500;

var autoclickOn = false;
var bonusOn = false;

var score = 0;
var clickValue = 1;
var multiplier = 1;
var bonusTime = 5;

// Display functions
function displayScore() {
  display.innerHTML = score;
}

function displayMultiplier() {
  multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

function displayAutoclick() {
  autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function displayBonus() {
  bonus.value = 'Bonus (cost ' + bonusCost + ')';
}

function displayBonusTime() {
  bonus.value = 'Bonus (time: ' + bonusTime + ' sec)';
}

// Button enabler functions
function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
  } else {
    multiply.disabled = true;
  }
}

function autoclickEnabler() {
  if (!autoclickOn && score >= autoclickCost) {
    autoclick.disabled = false;
  } else {
    autoclick.disabled = true;
  }
}

function bonusEnabler() {
  if (!bonusOn && score >= bonusCost) {
    bonus.disabled = false;
  } else {
    bonus.disabled = true;
  }
}

function buttonsEnabler() {
  multiplyEnabler();
  autoclickEnabler();
  bonusEnabler();
}

// Increase score
function increaseScore() {
  score += clickValue;
  buttonsEnabler();
  displayScore();
}

// Multiplier
function increaseMultiplier() {
  score -= multiplierCost;
  multiplier += 1;
  clickValue = multiplier;
  if (bonusOn) {
    clickValue *= 2;
  }
  multiplierCost *= multiplier;
  buttonsEnabler();
  displayScore();
  displayMultiplier();
}

// Autoclick
function enableAutoclick() {
  score -= autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
}

function autoclickF() {
  if (autoclickOn) {
    increaseScore();
  }
}

// Bonus
function enableBonus() {
  score -= bonusCost;
  bonusOn = true;
  clickValue *= 2;
  bonus.disabled = true;
  displayScore();
  displayBonusTime();
}

function disableBonus() {
  bonusOn = false;
  bonusTime = 30;
  clickValue = multiplier;
  displayBonus();
  buttonsEnabler();
}

function bonusF() {
  if (bonusOn) {
    --bonusTime;
    displayBonusTime();
    if (bonusTime === 0) {
      disableBonus();
    }
  }
}

// Reset game
function resetGame() {
  score = 0;
  multiplier = 1;
  clickValue = 1;
  autoclickOn = false;
  bonusOn = false;
  bonusTime = 5;
  multiplierCost = 20;
  autoclickCost = 50;
  bonusCost = 500;
  displayScore();
  displayMultiplier();
  displayAutoclick();
  displayBonus();
  multiply.disabled = true;
  autoclick.disabled = true;
  bonus.disabled = true;
}

// Save game to localStorage
function saveGame() {
  localStorage.setItem('score', score);
  localStorage.setItem('multiplier', multiplier);
  localStorage.setItem('multiplierCost', multiplierCost);
  localStorage.setItem('autoclickOn', autoclickOn);
  localStorage.setItem('autoclickCost', autoclickCost);
  localStorage.setItem('bonusOn', bonusOn);
  localStorage.setItem('bonusCost', bonusCost);
  localStorage.setItem('bonusTime', bonusTime);
  alert('Game saved!');
}

// Load game from localStorage
function loadGame() {
  score = parseInt(localStorage.getItem('score')) || 0;
  multiplier = parseInt(localStorage.getItem('multiplier')) || 1;
  multiplierCost = parseInt(localStorage.getItem('multiplierCost')) || 20;
  autoclickOn = localStorage.getItem('autoclickOn') === 'true';
  autoclickCost = parseInt(localStorage.getItem('autoclickCost')) || 50;
  bonusOn = localStorage.getItem('bonusOn') === 'true';
  bonusCost = parseInt(localStorage.getItem('bonusCost')) || 500;
  bonusTime = parseInt(localStorage.getItem('bonusTime')) || 5;
  
  displayScore();
  displayMultiplier();
  displayAutoclick();
  displayBonus();
  buttonsEnabler();
  alert('Game loaded!');
}

// Initial setup
displayScore();
displayMultiplier();
displayAutoclick();
displayBonus();
multiply.disabled = true;
autoclick.disabled = true;
bonus.disabled = true;

// Event listeners
click.addEventListener('click', increaseScore);
multiply.addEventListener('click', increaseMultiplier);
autoclick.addEventListener('click', enableAutoclick);
bonus.addEventListener('click', enableBonus);
reset.addEventListener('click', resetGame);
save.addEventListener('click', saveGame);
load.addEventListener('click', loadGame);

autoclickInterval = window.setInterval(autoclickF, 1000);
bonusInterval = window.setInterval(bonusF, 1000);